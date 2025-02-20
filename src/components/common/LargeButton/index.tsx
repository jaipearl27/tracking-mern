"use client";
import React, { useState } from "react";
import "./styles.scss";

const LargeButton = ({
  buttonText,
  variant,
  onClick = () => {},
  formId,
  type = "button",
}: {
  buttonText: string;
  variant: "PRIMARY" | "SECONDARY";
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => Promise<any> | any;
  formId?: string;
  type?: "button" | "reset" | "submit";
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      form={formId}
      className={`large-btn ${
        variant === "PRIMARY" ? "primary-bg" : "secondary-bg"
      }`}>
      <div>{buttonText}</div>
    </button>
  );
};

export default LargeButton;
