/**
 * Migración de propiedades locales -> Supabase.
 *
 * Requisitos:
 * - Definir variables de entorno:
 *   - VITE_SUPABASE_URL
 *   - SUPABASE_SERVICE_ROLE_KEY   (NO usar en frontend)
 *
 * Ejemplo (PowerShell):
 *   $env:VITE_SUPABASE_URL="https://XXXX.supabase.co"
 *   $env:SUPABASE_SERVICE_ROLE_KEY="..."
 *   npx tsx scripts/migrate-properties.ts
 */

import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../lib/supabase/types';
import { properties as localProperties } from '../data/properties';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL) throw new Error('Falta VITE_SUPABASE_URL');
if (!SERVICE_ROLE_KEY) throw new Error('Falta SUPABASE_SERVICE_ROLE_KEY');

const supabaseAdmin = createClient<Database>(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const BUCKET = 'property-images';

function isLocalImageUrl(url: string): boolean {
  return url.startsWith('/images/');
}

function localImageToFilePath(url: string): string {
  // /images/foo.png -> public/images/foo.png
  const filename = url.replace('/images/', '');
  return path.resolve(process.cwd(), 'public', 'images', filename);
}

async function uploadLocalImage(propertyLegacyId: string, imageUrl: string): Promise<string> {
  const filePath = localImageToFilePath(imageUrl);
  const fileName = path.basename(filePath);

  if (!fs.existsSync(filePath)) {
    throw new Error(`No existe el archivo: ${filePath}`);
  }

  const bytes = fs.readFileSync(filePath);
  const objectPath = `imports/legacy-${propertyLegacyId}/${Date.now()}-${fileName}`.toLowerCase();

  const { error: upErr } = await supabaseAdmin.storage.from(BUCKET).upload(objectPath, bytes, {
    upsert: false,
    cacheControl: '3600',
    contentType: undefined,
  });
  if (upErr) throw upErr;

  const { data } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(objectPath);
  if (!data?.publicUrl) throw new Error('No se pudo obtener URL pública');
  return data.publicUrl;
}

async function main() {
  console.log(`Migrando ${localProperties.length} propiedades...`);

  for (const p of localProperties) {
    // Insert property
    const { data: inserted, error: insErr } = await supabaseAdmin
      .from('properties')
      .insert({
        title: p.title,
        address: p.address,
        type: p.type,
        rooms: p.rooms,
        price: p.price,
        additional_costs: p.additionalCosts?.toString() ?? null,
        description: p.description,
        available: p.available,
        operation: p.operation,
        hidden: Boolean(p.hidden),
        features: p.features,
      })
      .select('id')
      .single();

    if (insErr) {
      console.error(`Error insertando propiedad (${p.address}):`, insErr.message);
      continue;
    }

    const propertyId = (inserted as { id: string }).id;

    // Images
    const sourceUrls = p.images && p.images.length ? p.images : (p.imageUrl ? [p.imageUrl] : []);
    const finalUrls: string[] = [];

    for (const url of sourceUrls) {
      try {
        if (typeof url === 'string' && isLocalImageUrl(url)) {
          const uploadedUrl = await uploadLocalImage(p.id, url);
          finalUrls.push(uploadedUrl);
        } else if (typeof url === 'string' && url.length) {
          finalUrls.push(url);
        }
      } catch (e) {
        console.error(`Error subiendo imagen (${p.address}):`, e);
      }
    }

    if (finalUrls.length) {
      const payload = finalUrls.map((url, idx) => ({ property_id: propertyId, url, sort_order: idx }));
      const { error: imgErr } = await supabaseAdmin.from('property_images').insert(payload);
      if (imgErr) {
        console.error(`Error insertando imágenes (${p.address}):`, imgErr.message);
      }
    }

    console.log(`OK: ${p.address} -> ${propertyId} (${finalUrls.length} imágenes)`);
  }

  console.log('Migración finalizada.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

