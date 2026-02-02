/**
 * Tipos de Supabase.
 *
 * Nota: en cuanto existan las tablas, estos tipos se pueden regenerar con el MCP
 * (`generate_typescript_types`) y reemplazar este archivo por el generado.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      properties: {
        Row: {
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
          features: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          address: string;
          type: string;
          rooms: number;
          price: number;
          additional_costs?: string | null;
          description: string;
          available: string;
          operation: string;
          hidden?: boolean;
          features?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['properties']['Insert']>;
      };
      property_images: {
        Row: {
          id: string;
          property_id: string;
          url: string;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          property_id: string;
          url: string;
          sort_order?: number;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['property_images']['Insert']>;
      };
      user_roles: {
        Row: {
          user_id: string;
          role: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          role: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['user_roles']['Insert']>;
      };
    };
    Views: Record<string, never>;
    Functions: {
      bootstrap_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
      grant_admin: {
        Args: { target_user_id: string };
        Returns: boolean;
      };
      revoke_admin: {
        Args: { target_user_id: string };
        Returns: boolean;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

