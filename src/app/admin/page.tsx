"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminHome = () => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            console.log("token",token)
            if (!token) {
                router.replace("/login");
            }
        }
    }, [router]);

    return (
        <div>
            <h1 className="text-2xl font-bold">Welcome to Admin Panel</h1>
            <p>Select an option from the sidebar.</p>

            {/* Add User Button */}
            {/* <button 
                onClick={() => router.push("/admin/users/add")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add User
            </button> */}
        </div>
    );
};

export default AdminHome;
