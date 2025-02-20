"use client";
import React, { useEffect } from "react";
import "./styles.scss";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../Portal";

type Props = {
  open: boolean;
  onClose: () => Promise<void> | void;
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
  title: string;
};

const Modal = ({
  onClose,
  open,
  height = 300,
  width = 500,
  children,
  title,
}: Props) => {
  // Lock body scroll
  useEffect(() => {
    if (open) {
      if (document?.body?.style.overflow != "hidden") {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (document?.body?.style.overflow == "hidden") {
        document.body.style.overflow = "auto";
      }
    }
  }, [open]);

  return (
    <Portal>
      <AnimatePresence mode="wait">
        {open && (
          <>
            <div className="backdrop" onClick={() => onClose?.()} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal"
              style={{ width, height }}>
              <div className="modal-header">
                <h6 style={{ fontSize: 18 }}>{title}</h6>
                <IoClose
                  onClick={() => onClose?.()}
                  style={{ cursor: "pointer" }}
                  size={24}
                />
              </div>
              <div className="modal-content hide-scroll">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;
