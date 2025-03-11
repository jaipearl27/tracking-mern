import React from "react";
import "@/app/(auth)/login/_lib/styles.scss";
import LoginForm from "./_lib/containers/LoginFrom";
import Image from "next/image";
// import loginImg from "./_lib/media/loginImg.jpg"

const page = () => {
    return (
        <div className="login-wrapper">
            <div className="side-img">
            <Image 
  src="/_next/static/media/loginImg.758d5f13.jpg" 
  alt="Login Image"
  fill 
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
            </div>
            <LoginForm />
        </div>
    );
};

export default page;
