"use client";
import { TAd } from "@/types/Impact/ads";
import { LIST_ALL_ADS_FOR_PARTNERS } from "@/utils/Providers/Impact/API";
import React, { useState } from "react";
import useSWR from "swr";
import SearchBox from "./components/SearchBox";
import "./styles/index.scss";
import AdsContainer from "./components/AdsContainer/AdsContainer";

function AdsPage() {
  const [pageNo, setPageNo] = useState(1);
  const [searchedAd, setSearchedAd] = useState<TAd>();
  // const res = await IMPACT_ACTION_AD_CREATE({
  //     body: {
  //         name: "The New Ad",
  //         campaignId: "2322",
  //         // textLink: "Shoebacca Ad",
  //         adType:"TEXT_LINK",
  //         androidFallbacks: "",
  //         iosFallbacks: "",
  //         language: "ENGLISH",
  //         linkText: "https://www.shipfacet.com/consoles",
  //     },
  //     params:{
  //         username:"IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1",
  //         password:"4miX_DsXvxmrupVLnkC7.ZBkGLkzgekU"
  //     }
  // });
  // const res = await IMPACT_ACTION_AD_LIST_ALL();
  const { data, isLoading } = useSWR("/list-ads" + pageNo, async (data) => {
    console.log(data, "+++++++");
    const res = await LIST_ALL_ADS_FOR_PARTNERS({
      params: {
        Page: `${pageNo}`,
        PageSize: "10",
      },
    });
    console.log(res);
    return res;
  });
  // const data: TAds = res.Ads;
  // console.log(res, "____Res____");
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="ads-wrapper">
      <SearchBox placeholder="Search Ad by ID" setSearchedAd={setSearchedAd} />
      <AdsContainer
        Ads={data.Ads}
        searchedAd={searchedAd}
        pageNo={pageNo}
        setPageNo={setPageNo}
      />
    </div>
  );
}

export default AdsPage;
