"use client";
import React, { useState } from "react";
import DropIcn from "./DropIcn";
import "./style.scss";

type Props = {
  buttonText: string;
  items: {
    text: string;
    // Further we add more
  }[];

  isOpen: boolean;
  isOpenChange: (val?: boolean) => void;
};

const DropDownButton: React.FC<Props> = ({
  buttonText,
  isOpenChange,
  isOpen,
  items,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="drop-btn" onClick={() => isOpenChange()}>
      <button>{buttonText}</button>
      <DropIcn />
      {isOpen && (
        <div className="drop-menu">
          {items?.map((item, i) => (
            <div key={i} className="menu-item">
              {item?.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
