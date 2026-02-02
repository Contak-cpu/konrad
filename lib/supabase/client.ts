import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  // Importante: no lanzamos error para permitir fallback a datos locales,
  // pero el panel admin no funcionará hasta configurar las variables.
  // eslint-disable-next-line no-console
  console.warn(
    'Supabase no está configurado. Definí VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY (ver .env.example).'
  );
}

function createUnconfiguredClient(): SupabaseClient<Database> {
  const err = () => {
    throw new Error('Supabase no está configurado. Definí VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.');
  };

  // Implementación mínima para evitar crash por imports; cualquier uso real lanza error.
  return {
    auth: {
      getSession: async () => err(),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } } as any),
      signInWithPassword: async () => err(),
      signOut: async () => err(),
    } as any,
    from: () => err(),
    rpc: async () => err(),
    storage: {
      from: () => ({
        upload: async () => err(),
        remove: async () => err(),
        getPublicUrl: () => err(),
      }),
    } as any,
  } as any;
}

export const supabase: SupabaseClient<Database> = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : createUnconfiguredClient();

