"use client";
import { useParams, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { PartnerizeCommissionTypes } from "../../typings";
import { getPartnerizeDefaultCommissionAction } from "@/utils/Providers/Partnerize/Api/getDefaultCommission";
import { getPartnerizePartnerCommissionAction } from "@/utils/Providers/Partnerize/Api/getPartnerCommission";
import { getPartnerizeActiveCommissionAction } from "@/utils/Providers/Partnerize/Api/getActiveCommission";
import { getPartnerizePromotionCommissionAction } from "@/utils/Providers/Partnerize/Api/promotionCommission";
import { getPartnerizeTierCommissionAction } from "@/utils/Providers/Partnerize/Api/getTierCommission";
import { getPartnerizeVoucherCommissionAction } from "@/utils/Providers/Partnerize/Api/getVoucherCommission";
import TableV2 from "@/components/common/TableV2";
import {
  activeCommissionColumns,
  campaignCommissionColumns,
  tierColumns,
} from "../../columns";
import InfoItem from "@/components/common/InfoItem";
import InfoGroup from "@/components/common/InfoGroup";
import { useMemo } from "react";
import Loader from "@/components/common/Loader";

type Props = {
  loading?: boolean;
};

const { ACTIVE, CAMPAIGN, DEFAULT, PROMOTION, TIER, VOUCHER } =
  PartnerizeCommissionTypes;

const PartnerCommissionListing = ({ loading }: Props) => {
  const params = useParams();
  const searchParams = useSearchParams();
  const _ = params?.campaignId;
  const campaignId = "1011l5709";

  console.log(params, searchParams, "PARAMS____INFO____");

  const commissionType = searchParams?.get(
    "commission_type",
  ) as PartnerizeCommissionTypes;

  const key = "campaign" + commissionType;

  const { isLoading, data } = useSWR(key, async () => {
    let data: any;

    switch (commissionType) {
      case ACTIVE:
        data = await getPartnerizeActiveCommissionAction({ campaignId });
        break;

      case CAMPAIGN:
        data = await getPartnerizePartnerCommissionAction({ campaignId });
        break;

      case PROMOTION:
        data = await getPartnerizePromotionCommissionAction({ campaignId });
        break;

      case TIER:
        data = await getPartnerizeTierCommissionAction({ campaignId });
        break;

      case VOUCHER:
        data = await getPartnerizeVoucherCommissionAction({ campaignId });
        break;

      default:
        data = await getPartnerizeDefaultCommissionAction({ campaignId });
        break;
    }

    return data;
  });

  const columns = useMemo(() => {
    switch (commissionType) {
      case CAMPAIGN:
        return campaignCommissionColumns;

      case ACTIVE:
        return activeCommissionColumns;

      case TIER:
        return tierColumns;

      default:
        return [];
    }
  }, [data]);

  const dataSource = useMemo(() => {
    switch (commissionType) {
      case CAMPAIGN:
        return data?.commissions;

      case ACTIVE:
        return data?.active_commissions;

      case TIER:
        return data?.tiers;

      case PROMOTION:
        return data?.promotions;

      default:
        return [];
    }
  }, [data]);

  console.log(data, "data________________");

  if (isLoading) {
    return <Loader  />
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 5 }}>
      {commissionType === DEFAULT || !commissionType ? (
        // <InfoGroup heading="">
        <>
          {" "}
          <InfoItem
            title="Description"
            value={data?.default_commission?.description}
          />
          <InfoItem
            title="Last Modified"
            value={data?.default_commission?.last_modified}
          />
          <InfoItem
            title="Last Modified By"
            value={data?.default_commission?.last_modified_by_name}
          />
          <InfoItem
            title="Performance Type"
            value={data?.default_commission?.performance_model}
          />
          <InfoItem
            title="Value"
            value={data?.default_commission?.performance_value}
          />
        </>
      ) : (
        // </InfoGroup>
        <TableV2 columns={columns} data={dataSource || []} />
      )}
    </div>
  );
};

export default PartnerCommissionListing;
