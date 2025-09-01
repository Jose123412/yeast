import { supabase } from '../lib/supabase';
import { Publication } from '../lib/supabase';

export interface CreatePublicationData {
  title: string;
  abstract: string;
  year: number;
  authors: string;
  journal?: string;
  doi?: string;
  pdf_url: string;
  image_url?: string;
}

export class PublicationService {
  static async getPublications(): Promise<Publication[]> {
    const { data, error } = await supabase
      .from('publications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Error fetching publications: ${error.message}`);
    }

    return data || [];
  }

  static async createPublication(publicationData: CreatePublicationData): Promise<Publication> {
    const { data, error } = await supabase
      .from('publications')
      .insert([publicationData])
      .select()
      .single();

    if (error) {
      throw new Error(`Error creating publication: ${error.message}`);
    }

    return data;
  }

  static async deletePublication(id: string): Promise<void> {
    const { error } = await supabase
      .from('publications')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting publication: ${error.message}`);
    }
  }

  static async uploadPDF(file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `pdfs/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('publications-pdfs')
      .upload(filePath, file);

    if (uploadError) {
      throw new Error(`Error uploading PDF: ${uploadError.message}`);
    }

    const { data } = supabase.storage
      .from('publications-pdfs')
      .getPublicUrl(filePath);

    return data.publicUrl;
  }

  static async uploadImage(file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('publications-images')
      .upload(filePath, file);

    if (uploadError) {
      throw new Error(`Error uploading image: ${uploadError.message}`);
    }

    const { data } = supabase.storage
      .from('publications-images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  }
}