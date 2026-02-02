import { supabase } from './client';

const BUCKET = 'property-images';

function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.\-_]/g, '');
}

function buildObjectPath(propertyId: string, originalName: string): string {
  const safe = sanitizeFilename(originalName || 'image');
  const ts = Date.now();
  return `properties/${propertyId}/${ts}-${safe}`;
}

export function getStoragePathFromPublicUrl(url: string): string | null {
  // Esperado: {SUPABASE_URL}/storage/v1/object/public/{bucket}/{path}
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = url.indexOf(marker);
  if (idx === -1) return null;
  return url.slice(idx + marker.length);
}

export async function uploadImage(file: File, propertyId: string): Promise<{ url: string; path: string }> {
  const path = buildObjectPath(propertyId, file.name);

  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type || undefined,
  });
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  if (!data?.publicUrl) {
    throw new Error('No se pudo obtener la URL pública del archivo subido');
  }
  return { url: data.publicUrl, path };
}

export async function deleteImageByUrl(url: string): Promise<void> {
  const path = getStoragePathFromPublicUrl(url);
  if (!path) return;

  const { error } = await supabase.storage.from(BUCKET).remove([path]);
  if (error) throw error;
}

export async function getPropertyImages(propertyId: string): Promise<string[]> {
  const { data, error } = await supabase
    .from('property_images')
    .select('url, sort_order')
    .eq('property_id', propertyId)
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((r) => r.url).filter((u): u is string => typeof u === 'string');
}

export async function reorderImages(propertyId: string, urlsInOrder: string[]): Promise<void> {
  // Update en lote: simple y consistente (uno por uno).
  // Para listas grandes se puede optimizar con RPC/SQL.
  for (let i = 0; i < urlsInOrder.length; i += 1) {
    const url = urlsInOrder[i];
    const { error } = await supabase
      .from('property_images')
      .update({ sort_order: i })
      .eq('property_id', propertyId)
      .eq('url', url);
    if (error) throw error;
  }
}

