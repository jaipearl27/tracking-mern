"use client";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import Spinner from "@/components/common/Spinner";
import TableV2 from "@/components/common/TableV2";
import { IMPACT_ACTION_GET_CONTRACTS } from "@/utils/Providers/Impact/API";
import useSWR from "swr";
import { contractListingTableColumns } from "./_lib/_columns";
import MaxWidth from "@/components/common/MaxWidth";
import Loader from "@/components/common/Loader";

const ContractListingPage = (p: any) => {
  const { data, isLoading } = useSWR("asmas", async () => {
    return await IMPACT_ACTION_GET_CONTRACTS?.();
  });

  return (
    <MaxWidth width={1200}>
      <Heading text="Contracts" mb={15} />
      <Divider mb={15} />
      {isLoading ? (
        <div style={{ width: "100%", height: "50vh" }}>
          {/* <Spinner /> */}
          <Loader />
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
          <TableV2
            columns={contractListingTableColumns}
            data={(data?.Contracts! || []) as any}
          />
        </div>
      )}
    </MaxWidth>
  );
};

export default ContractListingPage;
