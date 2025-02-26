import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define types for our context
interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Auth State Updated:", user);
  }, [user]); // ✅ Logs when `user` state changes

  const login = async (email: string, _password: string) => {
    try {
      console.log("Attempting login...");
      const authenticatedUser = { email }; // ✅ Simulated authentication
      setUser(authenticatedUser);
      console.log("Login Successful, User Set:", authenticatedUser);
      navigate("/dashboard"); // Navigate to dashboard after login
      return authenticatedUser;
    } catch (error) {
      console.error("Login failed:", error);
      return null;
    }
  };

const logout = () => {
  console.log("Logging out...");
  setUser(null);
  navigate("/login"); // Navigate to login page after logout
};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}