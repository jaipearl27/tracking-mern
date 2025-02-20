"use server";

import { getAxiosInstance } from "@/lib/axios";
import { getPaths } from "@/utils/functions/getPaths";

export const getPartnerizeTqAction = async () => {
  try {
    const instance = await getAxiosInstance();

    //
    const {
      partnerize_v1: { listTransactionQueries },
    } = await getPaths();

    //
    const { data } = await instance.partnerize_v1({
      method: "GET",
      url: listTransactionQueries,
    });

    return data?.transaction_queries?.map(
      (item: any) => item?.transaction_query
    );
  } catch (e: any) {
    console.log(e?.response?.data?.errors, "ERROR_____");
  }
};
