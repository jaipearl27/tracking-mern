import React from "react";
import "./styles/index.scss";
import UsersList from "./components/UsersList";
import UsersSearchBox from "./components/UsersSearchBox";
import "./styles/index.scss";

function UserPage() {
    return (
        <div className="users-container">
            <div className="header-wrapper">
                <div className="users-header">
                    <h2>Users</h2>
                    <UsersSearchBox />
                </div>
            </div>
            <UsersList />
        </div>
    );
}

export default UserPage;
