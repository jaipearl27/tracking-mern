"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Portal from "../Portal";
import "./styles.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Drawer = ({ isOpen, onClose, title, children }: Props) => {
  useEffect(() => {
    if (isOpen) {
      if (document?.body?.style.overflow != "hidden") {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (document?.body?.style.overflow == "hidden") {
        document.body.style.overflow = "auto";
      }
    }
  }, [isOpen]);

  return (
    <Portal>
      <AnimatePresence mode="wait">
        {isOpen && (
          <div>
            {/* OVERLAY */}
            <div onClick={onClose} className="overlay" />
            {/* CONTENT */}
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="drawer">
              <div className="drawer-header">
                <h5 className="title">{title}</h5>
                <IoClose className="icon" size={24} onClick={onClose} />
              </div>
              <div className="content">{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Drawer;
