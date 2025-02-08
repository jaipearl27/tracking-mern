"use client";
import React from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  id?: string;
};

const Portal = ({ children, id }: Props) => {
  if (typeof window === "undefined") {
    return;
  }

  return createPortal(
    children,
    id ? document.getElementById(id)! : document.body,
  );
};

export default Portal;
