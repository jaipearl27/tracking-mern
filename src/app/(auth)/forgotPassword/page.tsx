"use client";
import React, { useState } from "react";
import axios from "axios";
import { FORGOT_PASSWORD } from "@/utils/Providers/API_V1/API";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await FORGOT_PASSWORD({ email });
      setMessage(response?.data.message);
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "grif",
        placeItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          height: "fit-content",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          Forgot Password
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Enter your email address to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          {error && (
            <p
              style={{ paddingBottom: "10px", color: "red", fontSize: "14px" }}
            >
              {error}
            </p>
          )}
          {message && (
            <p
              style={{
                paddingBottom: "10px",
                color: "green",
                fontSize: "14px",
              }}
            >
              {message}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#E16449",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <a
          href="/login"
          style={{
            display: "block",
            marginTop: "15px",
            color: "#E16449",
            textDecoration: "none",
          }}
        >
          Back to Login
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
