import { User } from "lucide-react";
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


// Define types for our context
interface User {
  email: string;
}
// Removed duplicate implementation of useAuth

const LoginPage = () => { // This is the login page component code    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setUser } = useAuth()!; // ✅ Removed unused 'user' from destructuring
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // Removed unused 'user' state
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const authenticatedUser = await login(email, password);
    if (authenticatedUser) {
      setUser(authenticatedUser); // ✅ Set the authenticated user
      setError("Invalid email or password");
    }
    setLoading(false);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  };
// component code

export default LoginPage;
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // Added setUser
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Auth State Updated:", user);
  }, [user]); // ✅ Logs when `user` state changes

  const login = async (email: string) => {
    try {
      console.log("Attempting login...");
      const authenticatedUser = { email }; // ✅ Simulated authentication
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
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
    return context; // ✅ Use AuthContext for authentication state management
  }