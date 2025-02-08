"use client";
import React from "react";
import { SWRConfig } from "swr";

type Props<K> = {
  children: React.ReactNode;
  initialData: K | Record<string, any>;
};

const SWRConsumer = <T extends Record<string, any> = {}>({
  children,
  initialData,
}: Props<T>) => {
  //   console.log(initialData, "INITIAL___DATA");
  return <SWRConfig value={{ fallback: initialData }}>{children}</SWRConfig>;
};

export default SWRConsumer;
