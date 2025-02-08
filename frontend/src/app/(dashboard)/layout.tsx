import DashboardLayout from "@/components/common/layout/DashboardLayout";
import MaxWidth from "@/components/common/MaxWidth";
import React from "react";

type Props = { children: React.ReactNode };

const layout = (props: Props) => {
  return <DashboardLayout>{props?.children}</DashboardLayout>;
};

export default layout;
