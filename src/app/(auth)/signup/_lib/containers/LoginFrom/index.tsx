"use client";
import React, { useState } from "react";
import "./styles.scss";
import Loader from "../../components/Loader";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SIGN_UP } from "@/utils/Providers/API_V1/API";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const creds = await SIGN_UP({ name: userName, email, password });
      setLoading(false);
      //   localStorage.setItem("token", creds?.token);
      toast.success("Signup Successful.");
      router.push("/login");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);

      toast.error("Internal Server Error");
    }
  };
  return (
    <section className="signup-sec">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>

        <div className="welcome-text">
          Your first time here? Lets get started.
        </div>

        <div className="form-field">
          <label htmlFor="username" />
          <span className="field-name">Username</span>
          <input
            name="username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full rounded-xl border-2 border-gray-400 placeholder:text-gray-400 placeholder:font-normal"
            placeholder="your full name"
          />
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
            placeholder="********"
          />
          <div className="eye" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FaRegEyeSlash className="close" />
            ) : (
              <FaRegEye className="open" />
            )}
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="c-password" />
          <span className="field-name">Confirm Password</span>
          <input
            name="c-password"
            type={showCPassword ? "text" : "password"}
            // type="text"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            required
            placeholder="********"
          />
          <div className="eye" onClick={() => setShowCPassword(!showPassword)}>
            {showCPassword ? (
              <FaRegEyeSlash className="close" />
            ) : (
              <FaRegEye className="open" />
            )}
          </div>
        </div>
        <div className="newuser">
          <div>Already have an account?</div>
          <Link className="signup-link" href="/login">
            Login
          </Link>
        </div>
        <button
          disabled={email === "" || password === ""}
          type="submit"
          className="submit-btn"
        >
          {loading ? <Loader /> : "Signup"}
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
