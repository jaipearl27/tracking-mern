import React from "react";
import "./styles.scss";
import Link from "next/link";

type Props = {
  text: string;
  onClick?: () => any;
  as?: "link" | "button";
  href?: string;
  fontSize?: number;
  target?: string;
};

const Anchor = ({
  text,
  onClick,
  as = "button",
  href = "#",
  fontSize,
  target,
}: Props) => {
  return as === "button" ? (
    <button
      style={{ ...(fontSize ? { fontSize } : {}) }}
      className="anchor"
      onClick={onClick}>
      {text}
    </button>
  ) : (
    <Link
      href={href}
      target={target}
      className="anchor"
      style={{ ...(fontSize ? { fontSize } : {}) }}>
      {text}
    </Link>
  );
};

export default Anchor;
