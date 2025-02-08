"use client";
import React, { useState } from "react";
import { TCampaigns } from "../../types";
import ImageWrapper from "@/components/common/ImageWrapper";
import Link from "next/link";
import Divider from "@/components/common/Divider";
import { Compaign } from "@/types/Impact/compaigns";
import useSWR from "swr";
import { IMPACT_ACTION_CAMPAIGN_GET_LOGO } from "@/utils/Providers/Impact/API";
import Modal from "@/components/common/Modal";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import "./styles.scss";
import CompaignShortInfo from "./ShortInfo";
import Anchor from "@/components/common/Anchor";
import DeepLinks from "./modals/DeepLinks";
import ShippingRegions from "./modals/ShippingRegions";
import { useRouter } from "next/navigation";

type Props = Compaign & {};

// function blobToBase64(blob: Blob) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       resolve(reader?.result); // Extract the Base64 string from the data URL
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(blob);
//   });
// }

const CompaignItem = ({
  AdvertiserId,
  AdvertiserName,
  AdvertiserUrl,
  AllowsDeeplinking,
  CampaignDescription,
  CampaignId,
  CampaignLogoUri,
  CampaignName,
  CampaignUrl,
  ContractStatus,
  ContractUri,
  DeeplinkDomains,
  PublicTermsUri,
  ShippingRegions: shipRegions,
  TrackingLink,
  Uri,
}: Props) => {
  const router = useRouter();

  // const fetcher = async () => {
  //   const res = await IMPACT_ACTION_CAMPAIGN_GET_LOGO({
  //     campLogoUri: CampaignLogoUri,
  //   });

  //   const blob = new Blob([res], { type: "image/png" });

  //   const decoded = URL.createObjectURL(blob);

  //   const base64 = await blobToBase64(blob);
  //   console.log({ blob, decoded, base64 }, "LOGO__RES");
  // };

  // const { data, isLoading, error } = useSWR(
  //   "/programs" + CampaignId + CampaignLogoUri,
  //   fetcher,
  // );

  const handleCLick = () => {
    router?.push(`/programs/${CampaignId}`);
  };

  return (
    <div
      key={CampaignId}
      onClick={handleCLick}
      className="compaign-item-wrapper">
      {/* IMAGE AND INFO */}
      <div className="header">
        <ImageWrapper
          src="programs.svg"
          alt="Programs"
          height={128}
          width={128}
          wrapperClassName="compaign-logo-image"
        />
        {/* COMPAIGN INFO */}
        <div className="info-wrapper">
          {/* COMPAIGN NAME */}
          <Link href={CampaignUrl} style={{ textDecoration: "none" }}>
            <h4 className="subheading" style={{ fontSize: 16 }}>
              {CampaignName}
            </h4>
          </Link>
          <p className="description">{CampaignDescription}</p>
          <span className="info-tag">{ContractStatus}</span>
        </div>
      </div>

      <Divider />

      {/* ANOTHER */}
      <div className="row">
        <CompaignShortInfo content="Raheem" title="Advertiser Name" />
        <CompaignShortInfo content="Allowed" title="DeepLink Domian" />
      </div>

      {/* SHIPPING AND DEEP LINK DOMAINS
       */}
      <div className="row">
        <ShippingRegions data={shipRegions} />
        <DeepLinks data={DeeplinkDomains} />
      </div>
    </div>
  );
};

export default CompaignItem;
