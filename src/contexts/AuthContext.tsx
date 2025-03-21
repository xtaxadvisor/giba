import React, { createContext, useContext } from "react";
import { useSupabase } from "../contexts/SupabaseContext.js";

interface AuthContextType {
  user: {
    role: string; id: string; email: string 
} | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, userData: { name: string; role: string; }) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  const { user, loading, signIn, signUp, signOut } = useSupabase();

  const authContextValue: AuthContextType = {
    user,
    loading,
    isAuthenticated: !!user,
    login: signIn,
    register: signUp,
    logout: signOut,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};