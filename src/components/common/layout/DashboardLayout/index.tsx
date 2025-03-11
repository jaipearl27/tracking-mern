"use client";
import React, { useEffect, useState } from "react";
import ImageWrapper from "../../ImageWrapper";
import { adminNavLinksData, navLinksData } from "./_data";
import Navlink from "../../Navlink";
import Container from "../../Container";
import "./styles.scss";
import { GoSidebarCollapse } from "react-icons/go";
import useCheckScreenSize from "@/hooks/useCheckScreenSize";
import Drawer from "../../Drawer";
import LargeButton from "../../LargeButton";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isDesktop = useCheckScreenSize(991);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user") || "null");
    if (user && user?.role === "ADMIN") {
      setIsAdmin(true)
    }
  }, []);

  console.log(isDesktop);

  const handleToggleCollapsed = () => {
    if (!isDesktop) {
      setIsCollapsed(!isCollapsed);
      return;
    }

    setIsDrawerOpen?.(true);
  };

  useEffect(() => {
    if (!isDesktop) {
      if (isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    }
  }, [isDesktop, isDrawerOpen]);

  return (
    <>
      <div className="layout-wrapper">
        <aside
          className={`sidebar-wrapper ${isCollapsed ? "sidebar-collapsed" : "sidebar-normal"
            }  `}>
          <ImageWrapper
            alt="#"
            src="/vercel.svg"
            wrapperClassName="logo-wrapper"
            height={35}
            width={35}
          />
          <nav className="navlinks-wrapper hide-scroll">

            {!isAdmin && navLinksData?.map((item, i) => (
              <Navlink
                isCollapsed={isDesktop && isCollapsed}
                {...item}
                key={i}
              />
            ))}

            {isAdmin && adminNavLinksData?.map((item, i) => (
              <Navlink
                isCollapsed={isDesktop && isCollapsed}
                {...item}
                key={i}
              />
            ))}
          </nav>
        </aside>
        <div className="content-wrapper">
          <header className="header">
            <GoSidebarCollapse
              onClick={handleToggleCollapsed}
              size={25}
              fill="grey"
            />
            <div style={{ display: "flex", gap: 10 }}>
              {auth?.currentUser && (
                <LargeButton
                  buttonText="Sign Out"
                  variant="PRIMARY"
                  onClick={async () => {
                    await signOut(auth);
                    router?.push("/login");
                  }}
                />
              )}
            </div>
          </header>
          <main id="main-container" className="main">{children}</main>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <nav className="navlinks-wrapper hide-scroll">
          {navLinksData?.map((item, i) => (
            <Navlink
              isCollapsed={isCollapsed}
              afterPushOperation={() => setIsDrawerOpen(false)}
              {...item}
              key={i}
            />
          ))}
        </nav>
      </Drawer>
    </>
  );
};

export default DashboardLayout;
