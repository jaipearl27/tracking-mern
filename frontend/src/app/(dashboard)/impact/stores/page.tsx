import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import StoresPagination from "./_lib/components/Pagination";
import StoreItem from "./_lib/components/StoreItem";

import { IMPACT_ACTION_STORES_GET_ALL } from "@/utils/Providers/Impact/API";
import "./_lib/styles.scss";
import { notFound } from "next/navigation";
import MaxWidth from "@/components/common/MaxWidth";

const StoresPage = async (props: any) => {
  const pageNum = Number(props?.searchParams?.Page);

  const data: any = await IMPACT_ACTION_STORES_GET_ALL({
    params: {
      page: pageNum || "1",
      pagesize: "15",
    },
  });

  if (!data) {
    notFound();
  }

  // const data = storeRequestListPayload;

  return (
    <MaxWidth width={1600}>
      <Heading text="Stores" mb={15} />
      <Divider mb={15} />
      <section className="stores-list-wrapper">
        {data?.Stores?.map((item: any) => {
          return <StoreItem key={item?.Id} {...item} />;
        })}
      </section>
      <StoresPagination nextBtnDisabled={false} />
    </MaxWidth>
  );
};

export default StoresPage;
