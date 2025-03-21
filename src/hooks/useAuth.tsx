import React, { createContext, useContext, } from "react";
import { useSupabase } from "../contexts/SupabaseContext.js";

// Define the AuthContext type
interface AuthContextType {
  user: { id: string; email: string } | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, userData: { name: string; role: string; }) => Promise<void>;
  logout: () => Promise<void>;
}

// ✅ Create Auth Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ✅ Hook to use authentication
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// ✅ AuthProvider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading, signIn, signUp, signOut } = useSupabase();

  const authContextValue: AuthContextType = {
    user,
    loading,
    isAuthenticated: !!user,
    login: signIn,
    register: signUp,
    logout: signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;