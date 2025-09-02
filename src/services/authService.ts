import { supabase } from '../lib/supabase';

export class AuthService {
  static async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return data;
  }

  static async signUpAuthorizedUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: undefined,
      },
    });

    if (error) {
      throw error;
    }

    return data;
  }

  static async getCurrentUser() {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Error getting session:', error);
      return null;
    }

    return session?.user || null;
  }

  static async isAuthorizedUser(): Promise<boolean> {
    try {
      const user = await this.getCurrentUser();
      return user?.email === 'admin@moleculargeneticslab.cl';
    } catch (error) {
      console.error('Error checking authorization:', error);
      return false;
    }
  }

  static async signOut() {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      throw error;
    }
  }
}