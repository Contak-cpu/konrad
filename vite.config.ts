import { defineConfig } from 'vite';
import path from 'path';

function deriveSupabaseUrlFromPostgresHost(postgresHost?: string): string | undefined {
  // Supabase suele exponer POSTGRES_HOST como: db.<project_ref>.supabase.co
  // El API URL es: https://<project_ref>.supabase.co
  if (!postgresHost) return undefined;
  const match = postgresHost.match(/db\.([a-z0-9]+)\.supabase\.co/i);
  if (!match) return undefined;
  return `https://${match[1]}.supabase.co`;
}

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),

    // Adaptación a variables existentes en Vercel (sin requerir VITE_*)
    // IMPORTANTE: nunca exponer SUPABASE_SECRET_KEY / SERVICE_ROLE.
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(
      process.env.VITE_SUPABASE_URL ||
        process.env.NEXT_PUBLIC_SUPABASE_URL ||
        process.env.SUPABASE_URL ||
        deriveSupabaseUrlFromPostgresHost(process.env.POSTGRES_HOST) ||
        ''
    ),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(
      process.env.VITE_SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        process.env.SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
        ''
    ),
  }
});