import { supabase } from './client';

export type PropertyType = 'Monoambiente' | 'Departamento' | 'Casa' | 'Local comercial' | 'Lote' | 'Galpón';
export type PropertyOperation = 'Alquiler' | 'Venta';
export type PropertyAvailability = 'Inmediato' | 'Septiembre' | 'En construcción' | 'A terminar';

export type PropertyDTO = {
  id: string;
  title: string;
  address: string;
  type: PropertyType;
  rooms: number;
  price: number;
  additionalCosts?: string;
  description: string;
  available: PropertyAvailability;
  features: string[];
  imageUrl: string;
  images: string[];
  operation: PropertyOperation;
  hidden: boolean;
};

export type PropertiesCount = {
  total: number;
  forSale: number;
  forRent: number;
  sold: number;
  rented: number;
};

export type PropertyUpsertInput = Omit<PropertyDTO, 'id' | 'imageUrl'> & {
  id?: string;
};

type PropertyImagesRow = { url: string; sort_order: number | null } | null;
type PropertiesSelectRow = {
  id: string;
  title: string;
  address: string;
  type: string;
  rooms: number;
  price: number;
  additional_costs: string | null;
  description: string;
  available: string;
  operation: string;
  hidden: boolean;
  features: unknown;
  property_images?: PropertyImagesRow[] | null;
};

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === 'string');
}

function toDTO(row: PropertiesSelectRow): PropertyDTO {
  const images = (row.property_images ?? [])
    .filter((x): x is Exclude<PropertyImagesRow, null> => Boolean(x))
    .slice()
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
    .map((img) => img.url)
    .filter((u) => typeof u === 'string' && u.length > 0);

  const features = normalizeStringArray(row.features);

  return {
    id: row.id,
    title: row.title,
    address: row.address,
    type: row.type as PropertyType,
    rooms: row.rooms,
    price: row.price,
    additionalCosts: row.additional_costs ?? undefined,
    description: row.description,
    available: row.available as PropertyAvailability,
    features,
    images,
    imageUrl: images[0] ?? '',
    operation: row.operation as PropertyOperation,
    hidden: row.hidden,
  };
}

export async function getProperties(): Promise<PropertyDTO[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('*, property_images (url, sort_order)')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data as unknown as PropertiesSelectRow[]).map(toDTO);
}

export async function getPropertyById(id: string): Promise<PropertyDTO | null> {
  const { data, error } = await supabase
    .from('properties')
    .select('*, property_images (url, sort_order)')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return toDTO(data as unknown as PropertiesSelectRow);
}

async function replacePropertyImages(propertyId: string, urls: string[]): Promise<void> {
  // estrategia simple y consistente: reemplazo total
  const { error: delErr } = await supabase.from('property_images').delete().eq('property_id', propertyId);
  if (delErr) throw delErr;

  if (!urls.length) return;

  const payload = urls.map((url, idx) => ({ property_id: propertyId, url, sort_order: idx }));
  const { error: insErr } = await supabase.from('property_images').insert(payload);
  if (insErr) throw insErr;
}

export async function createProperty(input: PropertyUpsertInput): Promise<PropertyDTO> {
  const { images, ...property } = input;

  const { data, error } = await supabase
    .from('properties')
    .insert({
      title: property.title,
      address: property.address,
      type: property.type,
      rooms: property.rooms,
      price: property.price,
      additional_costs: property.additionalCosts ?? null,
      description: property.description,
      available: property.available,
      operation: property.operation,
      hidden: property.hidden ?? false,
      features: property.features ?? [],
    })
    .select('id')
    .single();

  if (error) throw error;

  const propertyId = (data as { id: string }).id;
  await replacePropertyImages(propertyId, images ?? []);

  const created = await getPropertyById(propertyId);
  if (!created) {
    throw new Error('No se pudo recuperar la propiedad creada');
  }
  return created;
}

export async function updateProperty(id: string, updates: Partial<PropertyUpsertInput>): Promise<PropertyDTO> {
  const { images, ...property } = updates;

  const payload: Record<string, unknown> = {};
  if (property.title !== undefined) payload.title = property.title;
  if (property.address !== undefined) payload.address = property.address;
  if (property.type !== undefined) payload.type = property.type;
  if (property.rooms !== undefined) payload.rooms = property.rooms;
  if (property.price !== undefined) payload.price = property.price;
  if (property.additionalCosts !== undefined) payload.additional_costs = property.additionalCosts ?? null;
  if (property.description !== undefined) payload.description = property.description;
  if (property.available !== undefined) payload.available = property.available;
  if (property.operation !== undefined) payload.operation = property.operation;
  if (property.hidden !== undefined) payload.hidden = property.hidden;
  if (property.features !== undefined) payload.features = property.features ?? [];

  if (Object.keys(payload).length) {
    const { error } = await supabase.from('properties').update(payload).eq('id', id);
    if (error) throw error;
  }

  if (images !== undefined) {
    await replacePropertyImages(id, images ?? []);
  }

  const updated = await getPropertyById(id);
  if (!updated) {
    throw new Error('No se pudo recuperar la propiedad actualizada');
  }
  return updated;
}

export async function deleteProperty(id: string): Promise<void> {
  const { error } = await supabase.from('properties').delete().eq('id', id);
  if (error) throw error;
}

export async function getPropertiesCount(): Promise<PropertiesCount> {
  const props = await getProperties();
  return {
    total: props.length,
    forSale: props.filter((p) => p.operation === 'Venta' && !p.hidden).length,
    forRent: props.filter((p) => p.operation === 'Alquiler' && !p.hidden).length,
    sold: props.filter((p) => p.operation === 'Venta' && p.hidden).length,
    rented: props.filter((p) => p.operation === 'Alquiler' && p.hidden).length,
  };
}

