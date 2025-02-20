"use server";

import { getAxiosInstance } from "@/lib/axios";
import { getPaths } from "@/utils/functions/getPaths";

export const getPartnerizeClicksCountAction = async () => {
  try {
    const instance = await getAxiosInstance();
    const {
      partnerize_v3: { getClicksCount },
    } = await getPaths();

    const { data } = await instance.partnerize_v3({
      method: "POST",
      url: getClicksCount,
      data: {
        date_time_ranges: [
          {
            start: "2019-10-01T00:00:00+00:00",
            end: "2019-10-03T00:00:00+00:00",
          },
        ],
        scope: {
          partner: "1100l286361",
        },
        metrics: ["total_clicks"],
        filter_by: [
          {
            field: "country",
            value: "US",
            operator: "EQUALS",
          },
          {
            field: "device_id",
            value: 5,
            operator: "EQUALS",
            not: true,
          },
        ],
        timezone: "GMT",
      },
    });

    return data;
  } catch (error: any) {
    console.log(error?.response?.data?.errors, "ERROR_____");
  }
};
