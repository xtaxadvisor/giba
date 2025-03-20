import react from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
// Create AuthContext
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Auth State Updated:", user);
    }, [user]); // ✅ Logs when `user` state changes
    const login = async (email, _password) => {
        try {
            console.log("Attempting login...");
            const authenticatedUser = { email }; // ✅ Simulated authentication
            setUser(authenticatedUser);
            console.log("Login Successful, User Set:", authenticatedUser);
            navigate("/dashboard"); // Navigate to dashboard after login
            return authenticatedUser;
        }
        catch (error) {
            console.error("Login failed:", error);
            return null;
        }
    };
    const logout = () => {
        console.log("Logging out...");
        setUser(null);
        navigate("/login"); // Navigate to login page after logout
    };
    return (_jsx(AuthContext.Provider, { value: { user, login, logout }, children: children }));
}
export function useAuth() {
    return useContext(AuthContext);
}
