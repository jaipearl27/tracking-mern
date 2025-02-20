"use server";

import { getAxiosInstance } from "@/lib/axios";
import { getPaths } from "@/utils/functions/getPaths";

export const fetchPartnerCampaignCreativesAction = async (
  campaignId: string
) => {
  try {
    const instance = await getAxiosInstance();

    const {
      partnerize_v1: { fetchPartnerCampaignCreatives },
    } = await getPaths();

    const { data } = await instance?.partnerize_v1({
      url: fetchPartnerCampaignCreatives?.(campaignId),
      method: "GET",
    });

    console.log(data?.creatives?.[0]?.creative, "CREATIVES_______");

    return data?.creatives?.map((item: any) => {
      const target = item?.creative;

      return { ...target };
    });
  } catch (error: any) {
    console.log(error?.response?.data?.errors, "ERROR_____");
  }
};
