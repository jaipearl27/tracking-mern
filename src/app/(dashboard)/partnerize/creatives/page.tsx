"use client";
import Heading from "@/components/common/Heading";
import MaxWidth from "@/components/common/MaxWidth";
import TableV2 from "@/components/common/TableV2";
import { fetchPartnerCreativesAction } from "@/utils/Providers/Partnerize/Api/fetchPartnerCreatives";
import { useState } from "react";
import useSWR from "swr";
import { partnerCreativeColumns } from "./_lib/columns";
import CampaignCreativesListing from "./_lib/components/CampaignCreatives";

type Props = {};

const page = (props: Props) => {
  const [selectedCampaign, setSelectedCampaign] = useState<string>();

  //
  const { data: creativesOverviewData, isLoading } = useSWR(
    "creatives",
    async () => {
      return await fetchPartnerCreativesAction?.();
    }
  );

  console.log();

  return (
    <MaxWidth>
      {/* Partner Creative Block */}
      <section className="vertical-20">
        <Heading mb={0} text="Creatives Overview" />
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr" }}>
          <TableV2
            loading={isLoading}
            columns={partnerCreativeColumns}
            data={creativesOverviewData as any[]}
            onRowSelect={(record) => {
              setSelectedCampaign(record?.campaignId);
            }}
          />
        </div>
      </section>

      {/* Specific Campaign Creatives Block */}
      {selectedCampaign && (
        <CampaignCreativesListing selectedCampaign={selectedCampaign} />
      )}
    </MaxWidth>
  );
};

export default page;
