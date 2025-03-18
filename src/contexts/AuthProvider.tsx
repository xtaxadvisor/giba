import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase/client";

export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

interface AuthContextValue {
  loading: boolean;
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session ? { ...session.user, name: '', email: session.user.email ?? '' } : null);
      setIsLoading(false);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session ? { ...session.user, name: '', email: session.user.email ?? '' } : null);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const value: AuthContextValue = {
    loading: isLoading,
    user,
    isAuthenticated: !!user,
    login: async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setUser(data.user ? { ...data.user, name: '', email: data.user.email ?? '' } : null);
    },
    logout: async () => {
      await supabase.auth.signOut();
      setUser(null);
    }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};