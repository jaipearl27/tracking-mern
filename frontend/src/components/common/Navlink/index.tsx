"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import "./styles.scss";
import { navLinksData } from "../layout/DashboardLayout/_data";

type Props = (typeof navLinksData)[number] & {
  isCollapsed: boolean;
  afterPushOperation?: () => void;
};

const Navlink = ({
  icon,
  text,
  to,

  isCollapsed,
  afterPushOperation,
}: Props) => {
  // Hooks
  const router = useRouter();
  const pathname = usePathname();

  //
  const isActive = pathname === to;

  const handleClick = () => {
    router?.push(to);
    afterPushOperation && afterPushOperation?.();
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`nav-link-wrapper ${
        isActive ? "navlink-active" : "navlink-normal"
      }`}
    >
      <i>{icon}</i>
      {!isCollapsed && (
        <AnimatePresence mode="wait">
          <motion.span
            initial={{ flex: 0 }}
            animate={{ flex: 1 }}
            exit={{ flex: 0 }}
          >
            {text}
          </motion.span>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Navlink;
