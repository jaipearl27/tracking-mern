import React from "react";
import "./styles.scss";

type Props = {
  icon: React.ReactNode;
  text: string;
  headingStyles?: React.CSSProperties;
};

const SectionCardHeading = ({ icon, text, headingStyles = {} }: Props) => {
  return (
    <div className="heading-wrapper">
      {icon}
      <h3 style={headingStyles}>{text}</h3>
    </div>
  );
};

export default SectionCardHeading;
