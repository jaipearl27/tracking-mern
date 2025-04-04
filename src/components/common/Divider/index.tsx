import React from "react";
import "./styles.scss";

type Props = {
  orientation?: "vertical" | "horizontal";
  mb?: number;
  mt?: number;
  pt?: number;
  pb?: number;
};

const Divider = ({
  orientation = "horizontal",
  mb = 5,
  mt = 0,
  pb = 0,
  pt = 0,
}: Props) => {
  return (
    <div
      className={`divider ${orientation}-divider`}
      style={{ marginBottom: mb, marginTop: mt, paddingTop: pt, paddingBottom: pb }}
    />
  );
};

export default Divider;
