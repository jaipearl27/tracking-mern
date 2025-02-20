"use server";

import { getAxiosInstance } from "@/lib/axios";
import { getPaths } from "@/utils/functions/getPaths";

export const getPartnerizeActiveCommissionAction = async ({
  campaignId,
}: {
  campaignId: string;
}) => {
  try {
    //
    const instance = await getAxiosInstance();

    //
    const {
      partnerize_v2: { activeCommission },
    } = await getPaths();

    //
    const { data } = await instance.partnerize_v2({
      method: "GET",
      url: activeCommission(campaignId),
    });

    return data;
  } catch (error: any) {
    console.log(error?.response?.data?.errors, "ERROR_____");
  }
};
