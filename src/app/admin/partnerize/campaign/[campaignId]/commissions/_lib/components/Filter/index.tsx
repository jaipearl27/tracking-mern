"use client";
import Select from "@/components/common/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { PartnerizeCommissionTypes } from "../../typings";

type Props = {};

const { ACTIVE, CAMPAIGN, DEFAULT, PROMOTION, TIER, VOUCHER } =
  PartnerizeCommissionTypes;

const PartnerizeCommissionFilters = (props: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const commissionType = searchParams.get("commission_type");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 20,
      }}
    >
      <Select
        id="select"
        onChange={(s) => {
          const current = new URLSearchParams(
            Array.from(searchParams.entries())
          );

          current?.set("commission_type", String(s));
          const search = current.toString();
          const query = search ? `?${search}` : "";

          router?.push(pathname + query);
        }}
        defaultValue={commissionType!}
        options={[
          {
            label: "Default",
            value: DEFAULT,
          },
          {
            label: "Campaign / Partner",
            value: CAMPAIGN,
          },
          {
            label: "Active",
            value: ACTIVE,
          },

          {
            label: "Voucher",
            value: VOUCHER,
          },
          {
            label: "Promotion",
            value: PROMOTION,
          },
          {
            label: "Tier",
            value: TIER,
          },
        ]}
        placeholder="Commission Type..."
      />
    </div>
  );
};

export default PartnerizeCommissionFilters;
