import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import { IMPACT_ACTION_GET_ACTIVE_CONTRACT } from "@/utils/Providers/Impact/API";
import React from "react";
import { activeContractData } from "./_data";
import Divider from "@/components/common/Divider";
import InfoItem from "@/components/common/InfoItem";
import TableV2 from "@/components/common/TableV2";
import DownloadContract from "@/components/common/DownloadContract";
import MaxWidth from "@/components/common/MaxWidth";

const ActiveContractPage = async (p: any) => {
  const data = await IMPACT_ACTION_GET_ACTIVE_CONTRACT?.({
    campaignId: p?.params?.programId,
  });

  return (
    <MaxWidth width={1200}>
      <Heading text="Active Contracts" mb={15} />
      <Divider mb={15} />
      <InfoItem title="Name" value={data?.Name} />
      <InfoItem
        title="Download Contract"
        value={<DownloadContract pdfDownloadURI={data?.PdfUri} />}
      />
      <InfoItem
        title="Campaign Name"
        value={data?.CampaignName}
        mb={30}
        includeDivider={false}
      />

      <div>
        <h6 style={{ marginBottom: 15 }} className="subheading">
          Payout Terms
        </h6>
        <div style={{ display: "grid" }}>
          <TableV2
            columns={[
              {
                dataIndex: "TrackerName",
                id: "TrackerName",
                title: "Tracker Name",
                styleConfig: {
                  width: 150,
                },
              },
              {
                dataIndex: "TrackerType",
                id: "TrackerType",
                title: "Tracker Type",
                styleConfig: {
                  width: 150,
                },
              },
              {
                dataIndex: "PayoutPercentage",
                id: "PayoutPercentage",
                title: "Payout Percentage",
                styleConfig: {
                  width: 150,
                },
              },
              {
                dataIndex: "PayoutAmount",
                id: "PayoutAmount",
                title: "Payout Amount",
                styleConfig: {
                  width: 150,
                },
              },
              {
                dataIndex: "PayoutCurrency",
                id: "PayoutCurrency",
                title: "Payout Currency",
                styleConfig: {
                  width: 150,
                },
              },
              {
                dataIndex: "ReferralPeriod",
                id: "ReferralPeriod",
                title: "Referral Period",
                styleConfig: {
                  width: 150,
                },
              },
              {
                dataIndex: "ReferralPeriodUnit",
                id: "ReferralPeriodUnit",
                title: "Referral Period Unit",
                styleConfig: {
                  width: 150,
                },
              },
              {
                dataIndex: "PayoutAmountLowerLimit",
                id: "PayoutAmountLowerLimit",
                title: "Payout Amount Lower Limit",
                styleConfig: {
                  width: 200,
                },
              },
              {
                dataIndex: "PayoutAmountUpperLimit",
                id: "PayoutAmountUpperLimit",
                title: "Payout Amount Upper Limit",
                styleConfig: {
                  width: 200,
                },
              },
              {
                dataIndex: "PayoutPercentageLowerLimit",
                id: "PayoutPercentageLowerLimit",
                title: "Payout Percentage Lower Limit",
                styleConfig: {
                  width: 200,
                },
              },
              {
                dataIndex: "PayoutPercentageUpperLimit",
                id: "PayoutPercentageUpperLimit",
                title: "Payout Percentage Upper Limit",
                styleConfig: {
                  width: 200,
                },
              },
            ]}
            data={data?.PayoutTermsList as any}
          />
        </div>
      </div>
    </MaxWidth>
  );
};

export default ActiveContractPage;
