import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import { IMPACT_ACTION_STORES_GET_ITEMS } from "@/utils/Providers/Impact/API";
import { notFound } from "next/navigation";
import StoreItemsPagination from "./_lib/components/Pagination";
import StoreItemsTable from "./_lib/components/Table";
import MaxWidth from "@/components/common/MaxWidth";

const StoreItemsPage = async (props: any) => {
  const storeId = props?.params?.storeId;
  const groupId = props?.params?.groupId;
  const Page = props?.searchParams?.Page;

  const data: any = await IMPACT_ACTION_STORES_GET_ITEMS({
    groupId,
    storeId,
    params: {
      Page,
      PageSize: "10",
    },
  });

  if (!data) {
    notFound();
  }

  return (
    <MaxWidth width={1200}>
      <Heading mb={15} text="Store Items" />
      <Divider mb={15} />
      <StoreItemsTable data={data?.Items} />
      <StoreItemsPagination />
    </MaxWidth>
  );
};

export default StoreItemsPage;
