"use client"

import { getUserById } from "@/utils/Providers/API_V1/API";
import useSWR from "swr"


export default function page() {

    const { data, isLoading } = useSWR(
        "userData",
        async () => {
          return await getUserData();
        },
        {
          isPaused: () => {
            return !!!selectedCampaign;
          },
        }
      );

    return (
        <>
            Account Info:
        </>
    )
}