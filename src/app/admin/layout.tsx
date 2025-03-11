import DashboardLayout from "@/components/common/layout/DashboardLayout";
import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
    console.log("props",props); 

    return <DashboardLayout>{props?.children}</DashboardLayout>;
};

export default Layout;
