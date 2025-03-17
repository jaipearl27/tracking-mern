"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import "../users/styles.scss";
import { getallUser } from "@/utils/Providers/API_V1/API";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getallUser();
                console.log(response, "response")
                setUsers(response.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="users-container">
            {/* Header */}
            <div className="header">
                <h2>Users</h2>
                <Link href="/admin/users/add">
                    <button className="add-user-btn">+ Add User</button>
                </Link>
            </div>

            {/* Users Table */}
            <div className="users-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user: any, index: number) => (
                            <tr key={user._id} className={index % 2 === 0 ? "even" : "odd"}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`role-badge ${user.role.toLowerCase()}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td>
                                    <Link href={`/admin/users/add?id=${user._id}`}>
                                        <button className="edit-btn">Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
