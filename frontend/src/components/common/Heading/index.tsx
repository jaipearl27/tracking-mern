import React from "react";

type Props = {
  text: string;
  mb?: number;
};

const Heading = ({ text, mb = 30 }: Props) => {
  return (
    <h1 style={{ fontWeight: 700, fontSize: "24px", marginBottom: mb }}>
      {text}
    </h1>
  );
};

export default Heading;
