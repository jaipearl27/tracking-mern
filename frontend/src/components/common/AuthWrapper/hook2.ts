// "use client";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, User,ActionCodeInfo, signOut } from "firebase/auth";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
    // Constants
    const loggedRoutes = ["/ads"];
    const publicRoutes = new Set<string>(["/"]);
    const authRoutes = new Set<string>(["/login", "/signup"]);

    // States
    const [redirected, setRedirected] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    // Hooks
    const router = useRouter();
    const pathname = usePathname();

    const isPrivateRoute=()=>{
        return loggedRoutes.some((route)=>route.startsWith(pathname))
    }

    // Functions
    const runRedirectionConditions = async (user: User | null) => {
        console.log("CHECK", "func", pathname,"--",user,"--");
        // (1). If user is on public route
        if (publicRoutes?.has(pathname)) {
            return;
        }

        if (user && authRoutes?.has(pathname)) {
            console.log("CHECK", "Innnn", pathname);
            // router.back()
            // return;
            return {
                redirectedTo: "/",
            };
        }

        // (2). Logout scenarios
        if (!user && isPrivateRoute()) {
            console.log("CHECK","User not found",isPrivateRoute())
            //   console.log("CHECK", "USER_IS_NULL");

            //   // if user is on auth route
            //   if (authRoutes?.has(pathname)) {
            //     console.log("CHECK", "on auth route");
            //     return;
            //   }

            //   console.log("CHECK", "BEFORE_REDIRECTION_TO_LOGIN");

            /**
             * @desc means user is trying to access protected route so we redirects to /login
             */
            return {
                redirectedTo: "/login",
            };
        }

        // if user is null and on auth page
        if (!user && authRoutes?.has(pathname)) {
            console.log("CHECK", "IDHER", redirected);
            return
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
        console.log("CHECK", "Redirecting", path);

        await router?.push(path);
        setTimeout(() => {
            setRedirected(true);
            setLoading(false);
            
        }, 500);
    };

    const checkRedirection = async (user:User | null) => {
        // Conditions
        const response = await runRedirectionConditions(user);

        // setRedirected(true);

        if (response?.redirectedTo) {
            return await handlePush(response?.redirectedTo);
        }
        await setRedirected(true);
        await setLoading(false);
    };

    //
    useEffect(() => {
        // signOut(auth)
        onAuthStateChanged(auth, async (u) => {
            console.log("CHECK", "++++++++++", u);
            setUser(u);
            // if (u) {
                console.log("CHECK", "GOT__THE___USER", user);
                checkRedirection?.(u);
            // }
        });
    }, [pathname]);

    return {
        redirected,
        loading,
    };
};
