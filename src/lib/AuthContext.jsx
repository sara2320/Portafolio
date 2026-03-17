import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { appParams } from "../lib/app-params";

const AuthContext = createContext();

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "X-App-Id": appParams.appId,
  },
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);

      const res = await api.get(
        `/apps/public/prod/public-settings/by-id/${appParams.appId}`,
      );

      setAppPublicSettings(res.data);

      if (token) {
        await checkUserAuth();
      } else {
        setIsAuthenticated(false);
        setIsLoadingAuth(false);
      }

      setIsLoadingPublicSettings(false);
    } catch (error) {
      console.error("App state check failed:", error);

      setAuthError({
        type: "unknown",
        message: error.message || "Failed to load app",
      });

      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
    }
  };

  const checkUserAuth = async () => {
    try {
      setIsLoadingAuth(true);

      const res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data);
      setIsAuthenticated(true);
      setIsLoadingAuth(false);
    } catch (error) {
      console.error("User auth check failed:", error);

      setIsAuthenticated(false);
      setIsLoadingAuth(false);

      if (error.response?.status === 401) {
        setAuthError({
          type: "auth_required",
          message: "Authentication required",
        });
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  const navigateToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        appPublicSettings,
        logout,
        navigateToLogin,
        checkAppState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
