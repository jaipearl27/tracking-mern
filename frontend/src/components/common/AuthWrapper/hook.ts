import { useState, useEffect } from "react";

import { onAuthStateChanged as _onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

const formatAuthUser = (user: User) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false);

  const router = useRouter();

  const pushPage = async (path: string) => {
    try {
      await router.push("/login");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const handleRedirect = async () => {
    setRedirecting(true);
    await pushPage("/login");
    setRedirecting(false);
  };

  const authStateChanged = async (authState: User | null) => {
    if (!authState) {
      console.log("PUSH_BEFORE", "CHECK");
      await pushPage("/login");
      console.log("PUSH_AFTER", "CHECK");

      //   setLoading(false);
      return;
    }

    // if (!authState) {
    //   if (!redirecting) {
    //     await handleRedirect();
    //   }
    //   setAuthUser(null);
    //   setLoading(false);
    //   return;
    // }

    setLoading(true);

    var formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);
  };

  const onAuthStateChanged = (cb: any) => {
    return _onAuthStateChanged(auth, cb);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
  };
}
