"use server";
import { ConversionsSummaryData } from "@/app/(dashboard)/partnerize/conversions-summary/_lib/types/ConversionSummary";
import { getAxiosInstance } from "@/lib/axios";
import { getPaths } from "@/utils/functions/getPaths";

export const fetchConversionsSummaryData = async ():Promise<ConversionsSummaryData | null> => {
    try {
        const instance = await getAxiosInstance();
        const {
            partnerize_v1: { conversionsSummary },
        } = await getPaths();


        const { data } = await instance.partnerize_v1({
            method: "GET",
            url: conversionsSummary,
        });
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
