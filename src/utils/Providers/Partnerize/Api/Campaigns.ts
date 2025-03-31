"use server";
import { getAxiosInstance } from "@/lib/axios";
import { CampaignStatus } from "@/types/Partnerize/enums/CampaignStatus";
import { getPaths } from "@/utils/functions/getPaths";

export const getCampaigns = async ({
    campaignStatus,
}: {
    campaignStatus: CampaignStatus;
}) => {
    try {
        const instance = await getAxiosInstance();
        const {
            partnerize_v1: { listCampaigns },
        } = await getPaths();

        const { data } = await instance.partnerize_v1({
            method: "GET",
            url: `${listCampaigns}/${campaignStatus}`,
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
