"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "../Loader";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState<any>(undefined); // Initially undefined to prevent premature redirects

  const loggedRoutes = new Set<string>([]);
  const publicRoutes = new Set<string>(["/link-redirector"]);
  const authRoutes = new Set<string>(["/login", "/signup"]);

  const router = useRouter();
  const pathname = usePathname();

  // Load user from localStorage only on the client side
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedUser = localStorage.getItem("user");
  //     setUser(storedUser ? JSON.parse(storedUser) : null);
  //   }
  // }, []);

  // Function to determine redirection based on authentication
  const checkRedirection = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    console.log("CHECKING REDIRECTION:", { user, pathname });
    if (user === undefined) return null; // Prevent redirect until user state is updated

    if (publicRoutes.has(pathname)) {
      console.log("Public route, no redirection needed");
      return null;
    }

    if (user && authRoutes.has(pathname)) {
      return { to: "/impact" };
    }

    if (!user && !authRoutes.has(pathname)) {
      return { to: "/login" };
    }

    return null;
  };

  const handlePush = async (path: string) => {
    if (pathname !== path) {
      await router.push(path);
    }
    setLoading(false);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user !== undefined) {
      const res = checkRedirection();
      if (res?.to) {
        handlePush(res.to);
      } else {
        setLoading(false);
      }
    }
  }, [pathname]);

  return loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Loader />
    </div>
  ) : (
    children
  );
};

export default AuthWrapper;
