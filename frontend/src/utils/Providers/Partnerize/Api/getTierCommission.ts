"use server";

import { getAxiosInstance } from "@/lib/axios";
import { getPaths } from "@/utils/functions/getPaths";

export const getPartnerizeTierCommissionAction = async ({
  campaignId,
}: {
  campaignId: string;
}) => {
  try {
    //
    const instance = await getAxiosInstance();

    //
    const {
      partnerize_v2: { tierCommission },
    } = await getPaths();

    //
    const { data } = await instance.partnerize_v2({
      method: "GET",
      url: tierCommission(campaignId),
    });

    return data;
  } catch (error: any) {
    console.log(error?.response?.data?.errors, "ERROR_____");
  }
};
