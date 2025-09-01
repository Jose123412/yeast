import { supabase, Publication, PublicationInsert } from '../lib/supabase';

export class PublicationService {
  // Obtener todas las publicaciones
  static async getPublications(): Promise<Publication[]> {
    const { data, error } = await supabase
      .from('publications')
      .select('*')
      .order('year', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching publications:', error);
      throw error;
    }

    return data || [];
  }

  // Crear nueva publicación
  static async createPublication(publication: PublicationInsert): Promise<Publication> {
    const { data, error } = await supabase
      .from('publications')
      .insert([publication])
      .select()
      .single();

    if (error) {
      console.error('Error creating publication:', error);
      throw error;
    }

    return data;
  }

  // Subir archivo PDF
  static async uploadPDF(file: File, fileName: string): Promise<string> {
    const { data, error } = await supabase.storage
      .from('publications-pdfs')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('Error uploading PDF:', error);
      throw error;
    }

    // Obtener URL pública
    const { data: urlData } = supabase.storage
      .from('publications-pdfs')
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  }

  // Subir imagen
  static async uploadImage(file: File, fileName: string): Promise<string> {
    const { data, error } = await supabase.storage
      .from('publications-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('Error uploading image:', error);
      throw error;
    }

    // Obtener URL pública
    const { data: urlData } = supabase.storage
      .from('publications-images')
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  }

  // Eliminar publicación
  static async deletePublication(id: string): Promise<void> {
    const { error } = await supabase
      .from('publications')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting publication:', error);
      throw error;
    }
  }
}