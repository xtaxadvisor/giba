import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../contexts/AuthContext";
export function ClientLayout({ children }) {
    const { user, loading: isLoading } = useAuth();
    const navigate = useNavigate();
    // Debugging: Check what `user` is returning
    useEffect(() => {
        console.log("Auth Status - User:", user);
        console.log("Auth Status - Loading:", isLoading);
    }, [user, isLoading]);
    // Redirect to login if no user is found
    useEffect(() => {
        if (!isLoading && !user) {
            console.log("No user found, redirecting to login...");
            navigate("/login");
        }
    }, [user, isLoading, navigate]);
    if (isLoading) {
        return _jsx("p", { children: "Loading authentication..." });
    }
    return _jsx(_Fragment, { children: children });
}
