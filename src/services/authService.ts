import { supabase } from '../lib/supabase';

export class AuthService {
  // Iniciar sesión con email y contraseña
  static async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error signing in:', error);
      throw error;
    }

    return data;
  }

  // Cerrar sesión
  static async signOut() {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

  // Obtener usuario actual
  static async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error('Error getting current user:', error);
      throw error;
    }

    return user;
  }

  // Verificar si el usuario está autorizado
  static async isAuthorizedUser(): Promise<boolean> {
    const user = await this.getCurrentUser();
    return user?.email === 'admin@moleculargeneticslab.cl';
  }

  // Registrar usuario autorizado (solo para configuración inicial)
  static async signUpAuthorizedUser(email: string, password: string) {
    if (email !== 'admin@moleculargeneticslab.cl') {
      throw new Error('Email no autorizado');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: undefined // Deshabilitar confirmación por email
      }
    });

    if (error) {
      console.error('Error signing up:', error);
      throw error;
    }

    return data;
  }
}