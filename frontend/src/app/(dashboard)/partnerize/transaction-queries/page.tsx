"use client";
import Heading from "@/components/common/Heading";
import MaxWidth from "@/components/common/MaxWidth";
import TableV2 from "@/components/common/TableV2";
import { getPartnerizeTqAction } from "@/utils/Providers/Partnerize/Api/getTQ";
import React from "react";
import useSWR from "swr";
import { transactionQueriesMockData } from "./_lib/mockData";
import { transactionQueryColumns } from "./_lib/columns";

type Props = {};

const page = (props: Props) => {
  const { isLoading, data } = useSWR("asas", async () => {
    return await getPartnerizeTqAction();
  });

  return (
    <MaxWidth>
      <Heading text="Transaction Queries" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <TableV2
          columns={transactionQueryColumns}
          loading={isLoading}
          data={transactionQueriesMockData as any}
        />
      </div>
    </MaxWidth>
  );
};

export default page;
