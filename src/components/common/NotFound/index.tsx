"use client";
import React from "react";
import "./styles.scss";
import LargeButton from "../LargeButton";
import { useRouter } from "next/navigation";

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/impact");
  };

  return (
    <>
      <main style={{ padding: 20 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h1>404</h1>
              <h2>UH OH! You're lost.</h2>
              <p style={{ marginBottom: 20 }}>
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <LargeButton
                onClick={handleNavigate}
                variant="PRIMARY"
                buttonText="Goto Home Page"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
