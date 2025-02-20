"use server";

import { getAxiosInstance } from "@/lib/axios";
import { getPaths } from "@/utils/functions/getPaths";

export const fetchPartnerCreativesAction = async () => {
  try {
    const instance = await getAxiosInstance();

    const {
      partnerize_v1: { fetchPartnerCreatives },
    } = await getPaths();

    const { data } = await instance?.partnerize_v1({
      url: fetchPartnerCreatives,
      method: "GET",
    });

    console.log("HERE____");

    const target = data?.campaign_creatives;

    const records = target?.map(async (item: any) => {
      const targetedItem = item?.campaign_creative;

      const {
        Banner = "0",
        ["Text Link"]: textLink = "0",
        Feed = "0",
        Email = "0",
        HTML = "0",
        ["HTML Form"]: htmlForm = "0",
      } = targetedItem?.creatives || {};

      // fetch campaign through campaign id

      return {
        feed: Feed,
        banner: Banner,
        textLink,
        html: HTML,
        htmlForm,
        email: Email,
        campaignId: targetedItem?.campaign_id,
      };
    });

    return await Promise.all(records);
  } catch (error: any) {
    console.log(error?.response?.data?.errors, "ERROR_____");
  }
};
