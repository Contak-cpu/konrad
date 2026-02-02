import type { User } from '@supabase/supabase-js';
import { supabase } from './client';

export type AdminLoginResult =
  | { ok: true; user: User }
  | { ok: false; error: string };

export async function bootstrapAdminIfEmpty(): Promise<void> {
  // Si es el primer usuario del sistema, lo promueve a admin.
  // Si ya existe algún admin, devuelve false o error y lo ignoramos.
  try {
    await supabase.rpc('bootstrap_admin');
  } catch {
    // Ignorar
  }
}

export async function isCurrentUserAdmin(): Promise<boolean> {
  const { data, error } = await supabase.rpc('is_admin');
  if (error) return false;
  return Boolean(data);
}

export async function signInAdmin(email: string, password: string): Promise<AdminLoginResult> {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) {
    return { ok: false, error: error?.message || 'No se pudo iniciar sesión' };
  }

  await bootstrapAdminIfEmpty();

  const admin = await isCurrentUserAdmin();
  if (!admin) {
    await supabase.auth.signOut();
    return { ok: false, error: 'No autorizado: este usuario no es admin' };
  }

  return { ok: true, user: data.user };
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

