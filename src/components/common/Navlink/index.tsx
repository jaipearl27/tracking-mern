"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import "./styles.scss";
import { navLinksData } from "../layout/DashboardLayout/_data";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

type Props = ({
  icon: any,
  text: string,
  isCollapsed: boolean;
  afterPushOperation?: () => void;
  subLinks?: any;
  to?: string;
})

const Navlink = ({ icon, text, to, isCollapsed, afterPushOperation, subLinks }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = pathname === to || subLinks?.some((link: any) => pathname === link.to);

  const handleClick = () => {
    if (subLinks) {
      setIsOpen((prev) => !prev);
    } else {
      router?.push(to as string);
      afterPushOperation && afterPushOperation?.();
    }
  };

  return (
    <div className="nav-item">
      {/* Main Link */}
      <motion.div
        onClick={handleClick}
        className={`nav-link-wrapper ${isActive ? "navlink-active" : "navlink-normal"}`}
      >
        <i>{icon}</i>
        {!isCollapsed && (
          <AnimatePresence mode="wait">
            <motion.span initial={{ flex: 0 }} animate={{ flex: 1 }} exit={{ flex: 0 }}>
              {text}
            </motion.span>
          </AnimatePresence>
        )}
        {subLinks && !isCollapsed && (
          <i className="nav-arrow">{isOpen ? <FaChevronDown /> : <FaChevronRight />}</i>
        )}
      </motion.div>

      {/* Sub-links */}
      {isOpen && subLinks && (
        <motion.div
          className="sub-links"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          {subLinks.map((subLink: any, index: any) => (
            <motion.div
              key={index}
              className={`nav-sublink ${pathname === subLink.to ? "nav-sublink-active" : ""}`}
              onClick={() => router.push(subLink.to)}
            >
              {subLink.text}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navlink;
