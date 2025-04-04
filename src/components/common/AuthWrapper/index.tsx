"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "../Loader";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const loggedRoutes = new Set<string>([]);
  const publicRoutes = new Set<string>(["/link-redirector"]);
  const authRoutes = new Set<string>(["/login", "/signup"]);

  const router = useRouter();
  const pathname = usePathname();

  // Function to safely access localStorage
  const getUser = () => {
    try {
      if (typeof window !== 'undefined') {
        const userData = window.localStorage.getItem("user");
        return userData ? JSON.parse(userData) : null;
      }
      return null;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return null;
    }
  };

  const checkRedirection = () => {
    if (!mounted) return null;
    
    const user = getUser();
    console.log("User Role:", user?.role, "Pathname:", pathname);

    if (user === undefined) return null;

    if (!user && !authRoutes.has(pathname)) {
      return { to: "/login" };
    }

    if (user && user?.role !== "ADMIN" && authRoutes.has(pathname)) {
      return { to: authRoutes.has(pathname) ? pathname : "/impact" };
    }

    if (user && user?.role === "ADMIN") {
      if (!pathname.startsWith("/admin")) {
        return { to: "/admin" };
      }
    }

    return null;
  };

  const handlePush = async (path: string) => {
    if (pathname !== path) {
      router.push(path);
    }
    setLoading(false);
  };

  // Set mounted state
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle auth check after mount
  useEffect(() => {
    if (mounted) {
      const res = checkRedirection();
      if (res?.to) {
        handlePush(res.to);
      } else {
        setLoading(false);
      }
    }
  }, [pathname, mounted]);

  if (!mounted || loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return children;
};

export default AuthWrapper;
