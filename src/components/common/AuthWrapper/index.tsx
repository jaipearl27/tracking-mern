"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "./hook1";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import Loader from "../Loader";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const loggedRoutes = new Set<string>([]);
  const publicRoutes = new Set<string>(["/link-redirector"]);
  const authRoutes = new Set<string>(["/login", "/signup"]);

  const router = useRouter();
  const pathname = usePathname();

  const checkRedirection = (user: any | null) => {
    if (publicRoutes?.has(pathname)) {
      console.log("HERE", "CHECK");
      return;
    }

    if (user && authRoutes?.has(pathname)) {
      return {
        to: "/impact",
      };
    }

    if (!user && !authRoutes?.has(pathname)) {
      return {
        to: "/login",
      };
    }
  };

  const handlePush = async (path: string) => {
    await router?.push(path);
    setTimeout(() => setLoading(false), 150);
  };

  useEffect(() => {
    // onAuthStateChanged(auth, async (user) => {
    //   // if (user) {

    //   // } else {
    //   //   console.log(user, "CHECK", "USER__NOT___LOGEGED___IN");
    //   //   if (publicRoutes?.has(pathname)) {
    //   //     setLoading(false);
    //   //     // return;
    //   //   }
    //   //   if (!authRoutes?.has(pathname)) {
    //   //     await handlePush?.("/login");
    //   //   }
    //   // }
    // });
    console.log("CHECK", "USER_IS_LOGGED_IN", user);
    const res = checkRedirection(user);
    (async () => {
      if (res?.to) {
        await handlePush(res?.to);
        return;
      }
    })();

    setLoading(false);
  }, []);

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