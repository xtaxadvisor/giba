import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Debugging: Check what `user` is returning
  useEffect(() => {
    console.log("Auth Status - User:", user);
    console.log("Auth Status - Loading:", loading);
  }, [user, loading]);

  // Redirect to login if no user is found
  useEffect(() => {
    if (!loading && !user) {
      console.log("No user found, redirecting to login...");
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <p>Loading authentication...</p>;
  }

  return <>{children}</>;
}