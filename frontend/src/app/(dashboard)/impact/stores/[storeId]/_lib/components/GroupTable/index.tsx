"use client";
import TableV2 from "@/components/common/TableV2";
import React from "react";
import { storeGroupTableColumns } from "../../columns";
import Anchor from "@/components/common/Anchor";
import { useParams, useSearchParams } from "next/navigation";

type Props = {
  data: any[];
};

const GroupTable = ({ data }: Props) => {
  const storeId = useParams()?.storeId;

  const lastCol = {
    dataIndex: "Id",
    id: "Id",
    title: "View Products",
    render(p: any) {
      return (
        <Anchor
          as="link"
          text="View Items"
          href={`/impact/stores/${storeId}/group/${p?.Id}/items`}
        />
      );
    },
  };

  return (
    <TableV2 columns={[...storeGroupTableColumns, lastCol]} data={data || []} />
  );
};

export default GroupTable;
