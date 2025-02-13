import React from "react";
import TopBar from "./TopBar";
import "./index.scss"
import StatisticsBanner from "./StatisticsBanner";
import NeedHelp from "./NeedHelp";

const Header = () => {
    return (
        <div className="header">
            <TopBar />
            <div className="section-2">
            <StatisticsBanner />
            <NeedHelp />
            </div>

        </div>
    );
};

export default Header;
