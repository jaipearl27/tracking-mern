import React from "react";

function HamBurger() {
  return (
    <svg
      width={42}
      height={43}
      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={"pointer"}>
      <rect y="0.5" width={42} height={42} rx={21} fill="#E16449" />
      <path d="M10 18.5H32" stroke="white" strokeWidth={2} />
      <path d="M10 24.5H23" stroke="white" strokeWidth={2} />
    </svg>
  );
}

export default HamBurger;
