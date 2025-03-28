"use client";
import Heading from "@/components/common/Heading";
import TableV2 from "@/components/common/TableV2";
import { fetchPartnerCampaignCreativesAction } from "@/utils/Providers/Partnerize/Api/fetchCampaignCreatives";
import React, { useState } from "react";
import useSWR from "swr";
import { partnerCampaignCreativeColumns } from "../../columns";

type Props = {
  selectedCampaign: string | null | undefined;
};

const CampaignCreativesListing = ({ selectedCampaign }: Props) => {
  const [isAtInitialPause, setIsAtInitialPause] = useState(true);

  const { data, isLoading } = useSWR(
    "creatives" + "campaign_creative" + String(selectedCampaign || ""),
    async () => {
      return await fetchPartnerCampaignCreativesAction?.(selectedCampaign!);
    },
    {
      isPaused: () => {
        return !!!selectedCampaign;
      },
    }
  );

  console.log(data, "DATA_____");

  return (
    <section className="vertical-20" style={{ marginTop: 20 }}>
      <Heading mb={0} text="Creatives" />
      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr" }}>
        <TableV2
          columns={partnerCampaignCreativeColumns}
          data={data as any[]}
          loading={isLoading}
        />
      </div>
    </section>
  );
};

export default CampaignCreativesListing;
