import React from "react";
import { TbClick } from "react-icons/tb";
import "./styles.scss";

function ClicksSectionHeading() {
    return (
        <div className="click-sec-heading">
            <div className="logo-wrapper">
                <TbClick size={20} />
            </div>
            <h3>Clicks</h3>
        </div>
    );
}

export default ClicksSectionHeading;
