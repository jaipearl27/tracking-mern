import React from "react";
import "./styles.scss";
import HamBurger from "@/components/icons/HamBurger";
import SearchBox from "../SearchBox";
import NotificationSecondary from "@/components/icons/NotificationSecondary";

function TopBar() {
  return (
    <div>
      <div className="topbar">
        <div className="logo">
          <HamBurger />
          <h2>Link Haitao</h2>
        </div>
        <SearchBox />
        <div className="right-icons">
          <NotificationSecondary />
          <div>Profile</div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
