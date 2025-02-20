"use client";
import Anchor from "@/components/common/Anchor";
import TableV2 from "@/components/common/TableV2";
import React from "react";

type Props = {
  data: any[];
};

const ReportListingTable = ({ data }: Props) => {
  return (
    <TableV2
      columns={[
        {
          dataIndex: "Name",
          id: "Name",
          title: "Name",
          render(arg: any) {
            return (
              <p className="truncate" style={{ width: 200 }}>
                {arg?.Name}
              </p>
            );
          },
        },
        {
          dataIndex: "Description",
          id: "Description",
          title: "Description",
          render(arg: any) {
            return (
              <p className="truncate" style={{ width: 500 }}>
                {arg?.Name}
              </p>
            );
          },
        },
        {
          dataIndex: "ApiAccessible",
          id: "ApiAccessible",
          title: "Accessible",
          render(arg: any) {
            return <i>{arg?.ApiAccessible ? "Yes" : "No"}</i>;
          },
        },
        {
          dataIndex: "Id",
          id: "Id",
          title: "View Report",
          render(p) {
            return <Anchor text="Visit" as="link" href={`/impact/report/${p?.Id}`} />;
          },
        },
      ]}
      data={data}
    />
  );
};

export default ReportListingTable;
