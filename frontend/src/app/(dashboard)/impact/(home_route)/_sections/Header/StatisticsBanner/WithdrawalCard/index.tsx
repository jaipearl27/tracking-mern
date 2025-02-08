"use client";
import DropDownButton from "@/components/common/DropDownButton";
import React, { useState } from "react";
import LargeButton from "@/components/common/LargeButton";
import "./style.scss";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";

const WithDrawalCard = () => {
  const { handleChange, isOpen } = useToggleBoolean();

  return (
    <div className="withdrawal-card">
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

      <div className="mid">
        <small>Total Income</small>
        <div className="amount">
          <span className="dollar-sign">$</span>
          <span>520</span>
        </div>
      </div>
      <div className="bottom">
        <LargeButton buttonText="Withdraw Now" variant="PRIMARY" />
      </div>
    </div>
  );
};

export default WithDrawalCard;
