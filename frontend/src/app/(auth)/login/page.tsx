import React from "react";
import "@/app/(auth)/login/_lib/styles.scss";
import LoginForm from "./_lib/containers/LoginFrom";
import Image from "next/image";
import loginImg from "./_lib/media/loginImg.jpg"

const page = () => {
    return (
        <div className="login-wrapper">
            <div className="side-img">
                <Image src={loginImg} alt="Login Image" fill loading="eager" />
            </div>
            <LoginForm />
        </div>
    );
};

export default page;
