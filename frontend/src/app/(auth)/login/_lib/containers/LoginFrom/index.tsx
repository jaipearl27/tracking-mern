"use client";
import React, { useState } from "react";
import "./styles.scss";
import Loader from "../../components/Loader";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router= useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const creds = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            localStorage.setItem("token", (creds.user as any).accessToken);
            toast.success("Login Successful.")
            router.push("/impact")


        } catch (error) {
            console.log(error);
            toast.error("Internal Server Error")
        }
    };

    return (
        <section className="login-sec">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className="welcome-text">
                    Welcome back! Please login to your account.
                </div>

                <div className="form-field">
                    <label htmlFor="email" />
                    <span className="field-name">Email</span>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-xl border-2 border-gray-400 placeholder:text-gray-400 placeholder:font-normal"
                        placeholder="example@domain.com"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password" />
                    <span className="field-name">Password</span>
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        // type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full rounded-xl border-2 border-gray-400 placeholder:text-gray-400 placeholder:font-normal"
                        placeholder="********"
                    />
                    <div
                        className="eye"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <FaRegEyeSlash className="close" />
                        ) : (
                            <FaRegEye className="open" />
                        )}
                    </div>
                </div>
                <div className="newuser">
                    <div>New User?</div>
                    <Link className="signup-link" href="/signup">
                        Signup
                    </Link>
                </div>
                <button
                    disabled={email === "" || password === ""}
                    type="submit"
                    className="submit-btn"
                >
                    {loading ? <Loader /> : "Login"}
                </button>
            </form>
        </section>
    );
};

export default LoginForm;
