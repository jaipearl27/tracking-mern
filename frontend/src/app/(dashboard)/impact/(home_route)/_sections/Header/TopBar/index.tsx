"use client";
import React, { useState } from "react";
import SearchBox from "@/components/common/SearchBox";
import HamBurger from "@/components/icons/HamBurger";
import NotificationSecondary from "@/components/icons/NotificationSecondary";
import "./style.scss";
import CrossButton from "@/components/icons/CrossButton";
import { motion } from "framer-motion";
import { topHamMenuItems } from "@/data/TopBarHamMenu";
import ProgramIcon from "./icons/ProgramIcon";

function TopBar() {
  const [openHamMenu, setOpenHamMenu] = useState(false);
  const list = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  };
  return (
    <div>
      <div className="topbar">
        <div className="logo">
          <div onClick={() => setOpenHamMenu(true)}>
            <HamBurger />
          </div>
          <h2>Link Haitao</h2>
        </div>
        <SearchBox />
        <div className="right-icons">
          <NotificationSecondary />
          <div>Profile</div>
        </div>
      </div>
      <div className="mobile-topbar">
        <SearchBox />
      </div>
      <motion.div
        initial="hidden"
        animate={openHamMenu ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, scale: 1, y: -55 },
          hidden: { opacity: 0, scale: 0.5, y: -200 },
        }}>
        <div className="ham-menu-wrapper">
          <div className="ham-menu">
            <div className="cross-btn" onClick={() => setOpenHamMenu(false)}>
              <CrossButton />
            </div>
            {topHamMenuItems.map((menu, key: number) => {
              return (
                <div key={key} className="menu-item">
                  <div>{menu.icon}</div>
                  <div>{menu.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TopBar;
