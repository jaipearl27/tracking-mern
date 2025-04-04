"use client";
import React, { useEffect, useState } from "react";
import ReactSelect, { SingleValue } from "react-select";
import { CampaignStatus } from "@/types/Partnerize/enums/CampaignStatus";
import { getCampaigns } from "@/utils/Providers/Partnerize/Api/Campaigns";
import { TCampaignPartnerize } from "../types/CampaignType";
import { scroller } from "react-scroll"; // Import scroller from react-scroll
import styles from "./CampaignsViewer.module.scss"; // SCSS styles
import Loader from "@/components/common/Loader";
import { useSearchParams } from "next/navigation";

const dropdownOptions = [
    { value: "PENDING", label: "Pending" },
    { value: "APPROVED", label: "Approved" },
    { value: "REJECTED", label: "Rejected" },
];

function CampaignsViewer() {
    const searchParams = useSearchParams();
    const searchedCampaign = searchParams.get("campaignId")?.trim();
    const [campaigns, setCampaigns] = useState<TCampaignPartnerize[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [campaignsStatus, setCampaignsStatus] =
        useState<SingleValue<{ value: string; label: string }>>(null);

    const fetchCampaigns = async (status: string) => {
        setIsLoading(true);
        try {
            const response = await getCampaigns({
                campaignStatus: status as CampaignStatus,
            });
            console.log(response, 'partnerize api')
            const fetchedCampaigns = response.campaigns as TCampaignPartnerize[];
            setCampaigns(fetchedCampaigns);

            if (searchedCampaign) {
                // Scroll to the searched campaign
                setTimeout(() => {
                    scroller.scrollTo(searchedCampaign, {
                        containerId: "main-container",
                        duration: 800,
                        delay: 0,
                        smooth: "easeInOutQuart",
                        offset: -100, // Adjust for any fixed headers
                    });
                }, 500); // Add a delay to ensure campaigns are rendered
            }
        } catch (error) {
            console.error("Error fetching campaigns:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleStatusChange = (
        selectedOption: SingleValue<{ value: string; label: string }>
    ) => {
        alert(selectedOption?.value)
        setCampaignsStatus(selectedOption);
        if (selectedOption) {
            fetchCampaigns(CampaignStatus[selectedOption?.value as keyof typeof CampaignStatus]);
        }
    };

    useEffect(() => {
        fetchCampaigns(CampaignStatus.APPROVED);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={styles.campaignsViewer}>
            <ReactSelect
                value={campaignsStatus}
                onChange={handleStatusChange}
                options={dropdownOptions}
                placeholder="Select Status"
                defaultValue={{ label: "Pending", value: "PENDING" }}
                className={styles.dropdown}
            />
            <div className={styles.campaignList}>
                {campaigns.length > 0 ? (
                    campaigns.map((campaign) => (
                        <div
                            key={campaign.campaign.campaign_id}
                            id={campaign.campaign.campaign_id} // Use campaign ID as the scroll target
                            className={styles.campaignCard}
                        >
                            {campaign.campaign.campaign_id}
                            <div className={styles.campaignHeader}>
                                <img
                                    src={campaign.campaign.campaign_logo}
                                    alt={`${campaign.campaign.title} Logo`}
                                    className={styles.campaignLogo}
                                />
                                <button
                                    className={styles.viewButton}
                                    onClick={() =>
                                        window.open(
                                            campaign.campaign.destination_url,
                                            "_blank"
                                        )
                                    }
                                >
                                    View Campaign
                                </button>
                            </div>
                            <div className={styles.campaignContent}>
                                <h2 className={styles.campaignTitle}>
                                    {campaign.campaign.title}
                                </h2>
                                <p
                                    className={styles.campaignDescription}
                                    dangerouslySetInnerHTML={{
                                        __html: campaign.campaign.description.en,
                                    }}
                                />
                                <p className={styles.campaignCurrency}>
                                    Currency:{" "}
                                    {campaign.campaign.default_currency}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.noCampaigns}>No campaigns found.</p>
                )}
            </div>
        </div>
    );
}

export default CampaignsViewer;
