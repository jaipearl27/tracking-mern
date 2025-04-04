"use client"

import Heading from "@/components/common/Heading";
import InfoItem from "@/components/common/InfoItem";
import MaxWidth from "@/components/common/MaxWidth";
import { getPartnerizeClicksCountAction } from "@/utils/Providers/Partnerize/Api/getClicksCount";
import { getPartnerizeConversionsCountAction } from "@/utils/Providers/Partnerize/Api/getConversionsCount";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const {
    data: { total_clicks },
  }: any = await getPartnerizeClicksCountAction();
  const {
    data: { total_conversions, total_order_value, total_partner_commission },
  }: any = await getPartnerizeConversionsCountAction();


  return (
    <MaxWidth>
      <Heading text="Performance" />
      <InfoItem title="Total Clicks" value={String(total_clicks)} />
      <InfoItem title="Total Conversions" value={String(total_conversions)} />
      <InfoItem
        title="Total Partner Commissions"
        value={String(total_partner_commission)}
      />
      <InfoItem
        includeDivider={false}
        title="Total Order Value"
        value={String(total_order_value)}
      />
    </MaxWidth>
  );
};

export default page;
