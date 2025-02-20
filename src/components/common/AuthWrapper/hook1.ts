// "use client";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  // Constants
  const loggedRoutes = new Set<string>([]);
  const publicRoutes = new Set<string>(["/link-redirector"]);
  const authRoutes = new Set<string>(["/login", "/signup"]);

  // States
  const [redirected, setRedirected] = useState(false);
  // const [user, setUser] = useState<User | null>(null);

  // Hooks
  const router = useRouter();
  const pathname = usePathname();

  // Functions
  const runRedirectionConditions = async (user: User | null) => {
    // (1). If user is on public route
    if (publicRoutes?.has(pathname)) return;

    // (2). Logout scenarios
    if (!user) {
      console.log("CHECK", "USER_IS_NULL");

      // if user is on auth route
      if (authRoutes?.has(pathname)) {
        console.log("CHECK", "on auth route");
        return;
      }

      console.log("CHECK", "BEFORE_REDIRECTION_TO_LOGIN");

      /**
       * @desc means user is trying to access protected route so we redirects to /login
       */
      return {
        redirectedTo: "/login",
      };
    }

    // (2). Login Scenarios

    // if user is on auth route
    if (!authRoutes?.has(pathname)) {
      console.log("CHECK", "Here", redirected);
      return;
    }

    console.log("CHECK", "BEFORE_REDIRECTION_TO_HOME", redirected);

    // means user is on auth route so redirect to /
    return {
      redirectedTo: "/",
    };
  };

  const handlePush = async (path: string) => {
    await router?.push(path);
    setTimeout(() => setRedirected(true), 100);
  };

  const checkRedirection = async () => {
    // Conditions
    const response = await runRedirectionConditions(auth?.currentUser);

    // setRedirected(true);

    if (response?.redirectedTo) {
      return await handlePush(response?.redirectedTo);
    }

    setRedirected(true);
    // await setLoading(false);
  };

  //
  // useEffect(() => {
  //   onAuthStateChanged(auth, async (u) => {
  //     setUser(u);
  //   });
  // }, []);

  //
  useEffect(() => {
    console.log("CHECK", "GOT__THE___USER", auth?.currentUser);
    checkRedirection?.();
  }, [auth?.currentUser]);

  return {
    redirected,
    // loading,
  };
};
