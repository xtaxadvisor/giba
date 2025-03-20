import supabase from '../../lib/supabase/client.js';
import { useNotificationStore } from '../../lib/store.js';
import type { User } from '../../types/authTypes.ts';

export const authService = {
  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase().trim(),
        password
      });

      if (error) throw error;

      // Get user profile
      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('auth_id', data.user.id)
        .single();

      return profile;
    } catch (error) {
      console.error('Sign in error:', error);
      useNotificationStore.getState().addNotification(
        'Invalid email or password',
        'error'
      );
      throw error;
    }
  },

  async signUp(email: string, password: string, userData: {
    name: string;
    role: string;
  }) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.toLowerCase().trim(),
        password,
        options: {
          data: {
            name: userData.name,
            role: userData.role
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        // Create user profile
        const { error: profileError } = await supabase
          .from('users')
          .insert({
            auth_id: data.user.id,
            name: userData.name,
            email: data.user.email!,
            role: userData.role
          });

        if (profileError) throw profileError;
      }

      useNotificationStore.getState().addNotification(
        'Account created successfully! Please check your email.',
        'success'
      );
    } catch (error) {
      console.error('Sign up error:', error);
      useNotificationStore.getState().addNotification(
        'Failed to create account',
        'error'
      );
      throw error;
    }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser(): Promise<User | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', user.id)
      .single();

    return profile;
  }
};