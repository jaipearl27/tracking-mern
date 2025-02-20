import React from "react";
import "./styles.scss";

type Props = {
  paddingX?: "sm" | "md";
  paddingY?: "sm" | "md";
  size?: "lg" | "md" | "sm";
  children: React.ReactNode;
};

const Container = ({
  paddingX = "md",
  paddingY = "md",
  size = "md",
  children,
}: Props) => {
  return (
    // <div className={`container-wrapper padding-y-${paddingY}`}>
    //   <div className={`container-${size}`}>{children}</div>
    // </div>
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          display: "block",
          margin: "auto",
          maxWidth: "1200px",
          width: "100%",
        }}>
        {children}
      </div>
    </div>
  );
};

export default Container;
