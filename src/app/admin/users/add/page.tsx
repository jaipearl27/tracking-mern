"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import "../../users/styles.scss"; // Import styles

const AddUser = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userId = searchParams.get("id"); // Get user ID from query params (if editing)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "USER",
        password:"",
    });

    const [loading, setLoading] = useState(userId ? true : false);

    // Fetch user data when editing
    useEffect(() => {
        if (!userId) return;

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}`);
                
                if (response.data?.user) {
                    setFormData({
                        name: response.data.user.name || "",
                        email: response.data.user.email || "",
                        password:response.data.user.password||"",
                        role: response.data.user.role || "USER",
                    });
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                alert("Failed to fetch user data.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (userId) {
                await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}`, formData);
                alert("User updated successfully!");
            } else {
                await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, formData);
                alert("User added successfully!");
            }
            router.push("/admin/users"); // Redirect to users list after action
        } catch (error) {
            console.error("Error saving user:", error);
            alert("Something went wrong!");
        }
    };

    if (loading) {
        return <p>Loading user data...</p>; // Show loading message while fetching data
    }

    return (
        <div className="add-user-container">
            <div className="add-user-card">
                <h2 className="title">{userId ? "Edit User" : "Add New User"}</h2>

                <form onSubmit={handleSubmit} className="form">
                    {/* Name Field */}
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    {/* password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                        id="password"
                        name="password" value={formData.password} onChange={handleChange} placeholder="password" required />
                    </div>

                    {/* Role Field */}
                    <div className="form-group">
                        <label htmlFor="role">User Role</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="submit-button">
                        {userId ? "Update User" : "Add User"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
