"use client";
import Anchor from "@/components/common/Anchor";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import Spinner from "@/components/common/Spinner";
import { IMPACT_ACTION_GET_DEALS } from "@/utils/Providers/Impact/API";
import {
  notFound,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import useSWR from "swr";
import DealListingFilters from "../Filters";
import { dealListingTableColumns } from "../../_data";
import DealsPagination from "../Pagination";
import toast from "react-hot-toast";
import MaxWidth from "@/components/common/MaxWidth";
import TableV2 from "@/components/common/TableV2";
import Loader from "@/components/common/Loader";

type Props = {};

const DealListingContainer = (props: Props) => {
  const searchParams = useSearchParams();
  const params = useParams();

  const programId = params?.programId;
  const Scope = searchParams?.get("Scope");
  const State = searchParams?.get("State");
  const Type = searchParams?.get("Type");
  const Page = searchParams?.get("Page");
  const identifier = "/deals-listing" + Scope + State + Type + programId + Page;

  const { data, isLoading } = useSWR(identifier, async () => {
    const res = await IMPACT_ACTION_GET_DEALS({
      campaignId: programId as string,
      params: {
        Page: Page || "1",
        PageSize: "15",
        ...(Scope ? { Scope } : null),
        ...(Type ? { Type } : null),
        ...(State ? { State } : null),
      },
    });
    return res;
  });

  console.log(data, "DATA_____");
  if (data === null) {
    toast.error("Oops! Some Error Occured.");
  }

  return (
    <MaxWidth width={1200}>
      <Heading mb={30} text="Campaign/Program Deals" />

      <DealListingFilters isLoading={isLoading} />

      <Divider mb={15} />

      {isLoading ? (
        <div style={{ width: "100%", height: "50vh" }}>
          <Loader />
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
          <TableV2
            columns={dealListingTableColumns}
            data={(data?.Deals as any) || []}
          />
          <DealsPagination />
        </div>
      )}
    </MaxWidth>
  );
};

export default DealListingContainer;
