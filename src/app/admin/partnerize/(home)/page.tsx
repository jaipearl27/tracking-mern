import Heading from "@/components/common/Heading";
import MaxWidth from "@/components/common/MaxWidth";
import React from "react";
import StatsCard from "./_components/StatsCard";
import { getPartnerizeClicksCountAction } from "@/utils/Providers/Partnerize/Api/getClicksCount";
import { getPartnerizeConversionsCountAction } from "@/utils/Providers/Partnerize/Api/getConversionsCount";

type Props = {};

const statsCardMockData = [
  {
    title: "Clicks",
    value: "0",
  },
  {
    title: "Conversions",
    value: "0",
  },
  {
    title: "Click / conversion ratio",
    value: "0",
  },
  {
    title: "Order Value",
    value: "0",
  },
];

const arg = {
  date_time_ranges: [
    { start: "2024-10-20T00:00:00", end: "2024-10-26T23:59:59" },
  ],
  scope: { partner: "1100l286361" },
  metrics: ["total_clicks"],
  timezone: "GMT",
};

const page = async (props: Props) => {
  const {
    data: { total_clicks },
  }: any = await getPartnerizeClicksCountAction();
  const {
    data: { total_order_value, total_conversions },
  }: any = await getPartnerizeConversionsCountAction();

  return (
    <MaxWidth>
      <Heading mb={20} text="Overview" />
      <section style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <h4 className="section-heading-base">Performance</h4>
        <div
          style={{
            display: "grid",
            gap: 10,
            gridTemplateColumns: "repeat(3,1fr)",
          }}>
          {/* {statsCardMockData?.map((item, i) => {
            return <StatsCard title={item.title} value={item.value} />;
          })} */}
          <StatsCard title="Clicks" value={total_clicks} />
          <StatsCard title="Order Value" value={total_order_value} />
          <StatsCard title="Conversions" value={total_conversions} />
        </div>
      </section>
    </MaxWidth>
  );
};

export default page;
