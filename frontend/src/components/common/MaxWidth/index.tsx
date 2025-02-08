import React from "react";

type Props = {
  children: React.ReactNode;
  width?: number;
  className?: string;
};

const MaxWidth = ({ children, width = 1440, className = "" }: Props) => {
  return (
    <div
      className={className}
      style={{ maxWidth: width, display: "block", margin: "auto" }}>
      {children}
    </div>
  );
};

export default MaxWidth;
