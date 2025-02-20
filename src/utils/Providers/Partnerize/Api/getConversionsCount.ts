"use server";

import { getAxiosInstance } from "@/lib/axios";
import { getPaths } from "@/utils/functions/getPaths";

export const getPartnerizeConversionsCountAction = async () => {
  try {
    const instance = await getAxiosInstance();
    const {
      partnerize_v3: { getConversionsCount },
    } = await getPaths();

    const { data } = await instance.partnerize_v3({
      method: "POST",
      url: getConversionsCount,
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
        metrics: [
          //   "average_order_size",
          //   "average_order_value",
          //   "average_partner_commission",
          //   "conversion_rejection_rate",
          //   "percentage_average_partner_commission",
          //   "percentage_order_value",
          //   "percentage_partner_commission",
          //   "total_conversion_items",
          "total_conversions",
          "total_order_value",
          "total_partner_commission",
        ],
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
