import type { Property } from '@/types';
import { properties as localProperties } from '@/data/properties';
import type { PropertyDTO, PropertyUpsertInput, PropertiesCount } from '@/lib/supabase/properties';
import {
  createProperty as createPropertyDb,
  deleteProperty as deletePropertyDb,
  getProperties as getPropertiesDb,
  getPropertiesCount as getPropertiesCountDb,
  getPropertyById as getPropertyByIdDb,
  updateProperty as updatePropertyDb,
} from '@/lib/supabase/properties';

function dtoToProperty(dto: PropertyDTO): Property {
  return {
    id: dto.id,
    title: dto.title,
    address: dto.address,
    type: dto.type,
    rooms: dto.rooms,
    price: dto.price,
    additionalCosts: dto.additionalCosts,
    description: dto.description,
    available: dto.available,
    features: dto.features,
    imageUrl: dto.imageUrl,
    images: dto.images.length > 1 ? dto.images : undefined,
    operation: dto.operation,
    hidden: dto.hidden,
  };
}

function propertyToUpsertInput(property: Property): PropertyUpsertInput {
  const urls = property.images && property.images.length ? property.images : (property.imageUrl ? [property.imageUrl] : []);
  return {
    id: property.id || undefined,
    title: property.title,
    address: property.address,
    type: property.type,
    rooms: property.rooms,
    price: property.price,
    additionalCosts: property.additionalCosts?.toString(),
    description: property.description,
    available: property.available,
    features: property.features,
    images: urls,
    operation: property.operation,
    hidden: Boolean(property.hidden),
  };
}

export async function getProperties(): Promise<Property[]> {
  try {
    const rows = await getPropertiesDb();
    return rows.map(dtoToProperty);
  } catch {
    // Fallback: datos locales (solo lectura)
    return [...localProperties];
  }
}

export async function getPropertyById(id: string): Promise<Property | null> {
  try {
    const row = await getPropertyByIdDb(id);
    return row ? dtoToProperty(row) : null;
  } catch {
    return localProperties.find((p) => p.id === id) ?? null;
  }
}

export async function addProperty(property: Property): Promise<Property> {
  const created = await createPropertyDb(propertyToUpsertInput(property));
  return dtoToProperty(created);
}

export async function updateProperty(id: string, updates: Partial<Property>): Promise<Property> {
  const input: Partial<PropertyUpsertInput> = {};
  if (updates.title !== undefined) input.title = updates.title;
  if (updates.address !== undefined) input.address = updates.address;
  if (updates.type !== undefined) input.type = updates.type;
  if (updates.rooms !== undefined) input.rooms = updates.rooms;
  if (updates.price !== undefined) input.price = updates.price;
  if (updates.additionalCosts !== undefined) input.additionalCosts = updates.additionalCosts?.toString();
  if (updates.description !== undefined) input.description = updates.description;
  if (updates.available !== undefined) input.available = updates.available;
  if (updates.operation !== undefined) input.operation = updates.operation;
  if (updates.features !== undefined) input.features = updates.features;
  if (updates.hidden !== undefined) input.hidden = Boolean(updates.hidden);
  if (updates.images !== undefined || updates.imageUrl !== undefined) {
    const urls = updates.images && updates.images.length ? updates.images : (updates.imageUrl ? [updates.imageUrl] : []);
    input.images = urls;
  }

  const updated = await updatePropertyDb(id, input);
  return dtoToProperty(updated);
}

export async function deleteProperty(id: string): Promise<boolean> {
  try {
    await deletePropertyDb(id);
    return true;
  } catch {
    return false;
  }
}

export async function markAsSold(id: string): Promise<boolean> {
  try {
    await updatePropertyDb(id, { hidden: true });
    return true;
  } catch {
    return false;
  }
}

export async function markAsRented(id: string): Promise<boolean> {
  try {
    await updatePropertyDb(id, { hidden: true });
    return true;
  } catch {
    return false;
  }
}

export const resetToOriginal = (): void => {
  // Ya no aplica: la fuente de verdad es la base de datos.
};

export async function getPropertiesCount(): Promise<PropertiesCount> {
  try {
    return await getPropertiesCountDb();
  } catch {
    const props = [...localProperties];
    return {
      total: props.length,
      forSale: props.filter((p) => p.operation === 'Venta' && !p.hidden).length,
      forRent: props.filter((p) => p.operation === 'Alquiler' && !p.hidden).length,
      sold: props.filter((p) => p.operation === 'Venta' && p.hidden).length,
      rented: props.filter((p) => p.operation === 'Alquiler' && p.hidden).length,
    };
  }
}

