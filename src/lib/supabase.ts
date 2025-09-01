import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para TypeScript
export interface Publication {
  id: string;
  title: string;
  abstract: string;
  title_es: string;
  title_en: string;
  title_fr: string;
  title_pt: string;
  abstract_es: string;
  abstract_en: string;
  abstract_fr: string;
  abstract_pt: string;
  year: number;
  authors: string;
  journal?: string;
  doi?: string;
  pdf_url: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
  created_by: string;
}

export interface PublicationInsert {
  title: string;
  abstract: string;
  title_es: string;
  title_en: string;
  title_fr: string;
  title_pt: string;
  abstract_es: string;
  abstract_en: string;
  abstract_fr: string;
  abstract_pt: string;
  year: number;
  authors: string;
  journal?: string;
  doi?: string;
  pdf_url: string;
  image_url?: string;
}