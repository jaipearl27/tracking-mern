import React from "react";
import "./styles.scss";

type Props = {
  title: string;
  content: string | React.ReactNode;
};

const StoreShortInfo = ({ content, title }: Props) => {
  return (
    <div className="short-info">
      {/* Heading */}
      <h6 className="subheading">{title}</h6>
      {typeof content === "string" ? (
        <p className="para">{content}</p>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
};

export default StoreShortInfo;
