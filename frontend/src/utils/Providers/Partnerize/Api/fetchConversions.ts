"use server";
import { ConversionsData } from "@/app/(dashboard)/partnerize/conversions/_lib/types/ConversionDetails";
import { getAxiosInstance } from "@/lib/axios";
import { CampaignStatus } from "@/types/Partnerize/enums/CampaignStatus";
import { getPaths } from "@/utils/functions/getPaths";

export const fetchConversions = async ({status}:{status?:"approved" | "rejected" | "pending"}):Promise<ConversionsData | null> => {
    try {
        const instance = await getAxiosInstance();
        const {
            partnerize_v1: { conversionsDetails },
        } = await getPaths();


        const { data } = await instance.partnerize_v1({
            method: "GET",
            url: `${conversionsDetails}${status?`?statuses[]=${status}`:""}`,
        });
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
