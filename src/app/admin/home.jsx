"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AdminHome = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const checkAuth = () => {
            if (mounted) {
                try {
                    const token = window.localStorage.getItem("token");
                    if (!token) {
                        router.replace("/login");
                    }
                } catch (error) {
                    console.error("Error checking authentication:", error);
                    router.replace("/login");
                }
            }
        };

        checkAuth();
    }, [router, mounted]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to Admin Panel</h1>
            <p className="text-gray-600">Select an option from the sidebar.</p>
        </div>
    );
};

export default AdminHome;
