import React from "react";
import SearchClicks from "./SearchClicks";
import "./styles.scss";
import ExportClicks from "./ExportClicks";
import ClicksSectionHeading from "./Heading";

function ClicksSection() {
    return (
        <>
            <div className="placeholder-sec"></div>
            <div className="clicks-sec">
                <ClicksSectionHeading />
                <SearchClicks />
                <ExportClicks />
            </div>
        </>
    );
}

export default ClicksSection;
