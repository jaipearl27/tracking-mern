"use client";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { TbClick } from "react-icons/tb";
import "./_lib/styles.scss";
import { TAdClick } from "@/types/Impact/Click";
import { getFormattedDate } from "@/utils/DateUtils";
import Link from "next/link";

function ClickDetails() {
    const searchParams = useSearchParams();
    if (!searchParams?.get("data")) {
        return notFound();
    }
    const clickDetailString = (searchParams?.get("data") as string)?.replace(
        "___",
        "&"
    );
    console.log(searchParams, "-=-=-=-=-=-");
    const clickData: TAdClick = JSON.parse(clickDetailString ?? "{}");
    console.log(JSON.parse(clickDetailString));

    return (
        <div className="click-details-grid">
            <div className="grid-item">
                <div className="logo">
                    <TbClick size={250} />
                </div>
            </div>
            <div className="grid-item">
                <h3>Click Details</h3>
                <div className="details">
                    <div className="field">
                        <div className="key">Click Id:</div>
                        <div className="value ellipsis">{clickData.Id}</div>
                    </div>
                    <div className="field">
                        <div className="key">CPC Bid:</div>
                        <div className="value">{clickData.CpcBid}</div>
                    </div>
                    <div className="field">
                        <div className="key">Unique Click:</div>
                        <div className="value">
                            {clickData.UniqueClick ? "True" : "False"}
                        </div>
                    </div>
                    <div className="field">
                        <div className="key">Event Date:</div>
                        <div className="value">{clickData.EventDate}</div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <h3>Customer Details</h3>
                <div className="details">
                    <div className="field">
                        <div className="key">IP Address:</div>
                        <div className="value ellipsis">
                            {clickData.IpAddress}
                        </div>
                    </div>
                    <div className="field">
                        <div className="key">Customer Area:</div>
                        <div className="value">{clickData.CustomerArea}</div>
                    </div>
                    <div className="field">
                        <div className="key">Customer City:</div>
                        <div className="value">{clickData.CustomerCity}</div>
                    </div>
                    <div className="field">
                        <div className="key">CustomerRegion:</div>
                        <div className="value">{clickData.CustomerRegion}</div>
                    </div>
                    <div className="field">
                        <div className="key">Customer Country:</div>
                        <div className="value">{clickData.CustomerCountry}</div>
                    </div>
                    <div className="field">
                        <div className="key">Device Type:</div>
                        <div className="value">{clickData.DeviceType}</div>
                    </div>
                    <div className="field">
                        <div className="key">DeviceFamily:</div>
                        <div className="value">{clickData.DeviceFamily}</div>
                    </div>
                    <div className="field">
                        <div className="key">Browser:</div>
                        <div className="value">{clickData.Browser}</div>
                    </div>
                    <div className="field">
                        <div className="key">Operating System:</div>
                        <div className="value">{clickData.Os}</div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <h3>Program Details</h3>
                <div className="details">
                    <div className="field">
                        <div className="key">Campaign ID:</div>
                        <Link
                            href={`/impact/programs/${clickData.CampaignId}`}
                            className="value"
                        >
                            {clickData.CampaignId}
                        </Link>
                    </div>
                    <div className="field">
                        <div className="key">Campaign Name:</div>
                        <div className="value">{clickData.CampaignName}</div>
                    </div>
                    <div className="field">
                        <div className="key">Partner Profile ID:</div>
                        <div className="value ellipsis">
                            {clickData.ProfileId}
                        </div>
                    </div>
                    <div className="field">
                        <div className="key">Media Id:</div>
                        <div className="value">{clickData.MediaId}</div>
                    </div>
                    <div className="field">
                        <div className="key">Media Name:</div>
                        <div className="value">{clickData.MediaName}</div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <h3>Advertisement Details</h3>
                <div className="details">
                    <div className="field">
                        <div className="key">Ad ID:</div>
                        <div className="value">{clickData.AdId}</div>
                    </div>
                    <div className="field">
                        <div className="key">Ad Name:</div>
                        <div className="value">{clickData.AdName}</div>
                    </div>
                    <div className="field">
                        <div className="key">Ad Type:</div>
                        <div className="value ellipsis">{clickData.AdType}</div>
                    </div>
                    <div className="field">
                        <div className="key">Deal Name:</div>
                        <div className="value">{clickData.DealName}</div>
                    </div>
                    <div className="field">
                        <div className="key">Deal Type:</div>
                        <div className="value">{clickData.DealType}</div>
                    </div>
                    <div className="field">
                        <div className="key">Deal Scope:</div>
                        <div className="value">{clickData.DealScope}</div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <h3>More Details</h3>
                <div className="details">
                    <div className="field">
                        <div className="key">Referring Domain:</div>
                        <div className="value">{clickData.ReferringDomain}</div>
                    </div>
                    <div className="field">
                        <div className="key">Landing Page URL:</div>
                        <Link
                            href={clickData.LandingPageUrl}
                            className="value ellipsis"
                        >
                            {clickData.LandingPageUrl}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClickDetails;
