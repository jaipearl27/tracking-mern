import React from "react";
import "./styles.scss";
import Divider from "@/components/common/Divider";

type Props = {
  heading: string;
  children: React.ReactNode;
  renderDivider?: boolean;
};

/**
 * @info --> Component for group down specific info
 * @param props
 * @returns
 */
const InfoGroup = ({ heading, children, renderDivider = true }: Props) => {
  return (
    <section className="wrapper">
      <h3 className="heading">{heading}</h3>
      <div>{children}</div>
      {/* {renderDivider && <Divider />} */}
    </section>
  );
};

export default InfoGroup;
