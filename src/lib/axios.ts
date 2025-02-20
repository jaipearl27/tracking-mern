"use server";

import { getPaths } from "@/utils/functions/getPaths";
import _axios from "axios";

type AxiosInstanceArgs = {
  baseUrl: string;
  Authorization?: string;
};

const generateAxiosInstance = async ({
  baseUrl,
  Authorization,
}: AxiosInstanceArgs) => {
  return _axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization,
    },
  });
};

export const getAxiosInstance = async () => {
  const { partnerize_v1, partnerize_v3, partnerize_v2 } = await getPaths();

  return {
    partnerize_v1: await generateAxiosInstance({
      baseUrl: partnerize_v1.baseUrl,
      Authorization: "Basic cDN0ZXcxNDV5M3RhZzQxbjpOWnRCMTFrMg",
    }),
    partnerize_v3: await generateAxiosInstance({
      baseUrl: partnerize_v3.baseUrl,
      Authorization: "Basic cDN0ZXcxNDV5M3RhZzQxbjpOWnRCMTFrMg",
    }),
    partnerize_v2: await generateAxiosInstance({
      baseUrl: partnerize_v2.baseUrl,
      Authorization: "Basic cDN0ZXcxNDV5M3RhZzQxbjpOWnRCMTFrMg",
    }),

    // base: await generateAxiosInstance({
    //   baseUrl: `${BASE_URL}/`,
    // }),
  };
};
