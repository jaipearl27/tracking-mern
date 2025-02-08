import React from "react";
import "./styles.scss";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div className="loader-spinner" />
    </div>
  );
};

export default Spinner;
