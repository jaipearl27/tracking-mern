"use client";
import { IMPACT_ACTION_CAMPAIGN_GET_LOGO } from "@/utils/Providers/Impact/API";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function CampaignLogo({
    CampaignLogoUri,
    showLogo,
}: {
    CampaignLogoUri: string;
    showLogo?: boolean;
}) {
    const [logo, setLogo] = useState<string>();
    const getCampaignLogo = async (campLogoUri: string) => {
        const res = await IMPACT_ACTION_CAMPAIGN_GET_LOGO({
            campLogoUri: CampaignLogoUri,
        });
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log((event.target as any).result, "this is result"); // Access the result from the event object
            setLogo((event.target as any).result);
        };
        const blob = new Blob([res], { type: "image/gif" }); // Specify GIF type
        reader.readAsDataURL(blob)

        return res;
    };
    useEffect(() => {
        showLogo && getCampaignLogo(CampaignLogoUri);
    }, []);
    return logo ? (
        <div className="logo">
            Logo
            <Image alt="Campaign Logo" src={logo} width={100} height={100} />
        </div>
    ) : (
        <div>Loading</div>
    );
}

export default CampaignLogo;
