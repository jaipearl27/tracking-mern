import React from "react";
import "@/app/(auth)/signup/_lib/styles.scss";
import SignupForm from "./_lib/containers/LoginFrom";
import Image from "next/image";
import loginImg from "./_lib/media/loginImg.jpg"

const page = () => {
    return (
        <div className="login-wrapper">
            <div className="side-img">
                <Image src={loginImg} alt="Signup Image" fill loading="eager" />
            </div>
            <SignupForm />
        </div>
    );
};

export default page;
