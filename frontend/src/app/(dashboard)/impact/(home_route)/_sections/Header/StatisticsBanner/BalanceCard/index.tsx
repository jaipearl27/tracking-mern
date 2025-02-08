"use client";
import React, { useState } from "react";
import "./index.scss";
import DropDownButton from "@/components/common/DropDownButton";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";

const BalanceCard = () => {
  const { handleChange, isOpen } = useToggleBoolean();

  return (
    <div className="balance-card">
      <div className="top">
        <div className="title">title</div>
        <DropDownButton
          isOpen={isOpen}
          isOpenChange={handleChange}
          items={[
            {
              text: "Monthly",
            },
            {
              text: "Weekly",
            },
          ]}
          buttonText="Weekly"
        />
      </div>
      <div className="bottom">
        <small>Total Income</small>
        <div className="amount">
          <span className="dollar-sign">$</span>
          <span>520</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
