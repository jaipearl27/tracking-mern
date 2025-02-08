"use client";
import React from "react";
import Divider from "../Divider";
import "./styles.scss";

type Props = {
  title: string;
  value?: string | number | React.ReactNode;
  includeDivider?: boolean;
  mb?: number;
  titleWidth?: number;
};

const InfoItem = ({
  title,
  value,
  includeDivider = true,
  mb = 0,
  titleWidth = 300,
}: Props) => {
  if (!value || (typeof value === "string" && !String(value)?.trim())) {
    value = " - ";
  }

  return (
    <>
      <div className="info-wrapper" style={{ marginBottom: mb }}>
        <p className="subheading" style={{ width: titleWidth }}>
          {title}
        </p>
        <div className="content">
          {typeof value === "string" ? <p>{value}</p> : <>{value}</>}
        </div>
      </div>
      {includeDivider && <Divider />}
    </>
  );
};

export default InfoItem;
