"use client";
import {
    IMPACT_ACTION_GET_PROMOTION,
    IMPACT_ACTION_LIST_PROMOTIONS,
} from "@/utils/Providers/Impact/API";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import { GoCopy } from "react-icons/go";
import "./styles.scss";
import { useSearchParams } from "next/navigation";
import { TPromotion } from "@/types/Impact/promotion";
import Loader from "@/components/common/Loader";
import PromotionsPagination from "./PromotionPagination";

function   PromotionListing() {
    const searchParams = useSearchParams();
    const [searchedPromotion, setSearchedPromotion] = useState("");
    const [promotions, setPromotions] = useState<TPromotion[]>();
    const [pageNo, setPageNo]=useState(1);
    const [totalPages, setTotalPages]=useState(0);

    const { data, isLoading } = useSWR(
        "/get promotions" + pageNo,
        async () => {
            return await IMPACT_ACTION_LIST_PROMOTIONS({PageSize:"15",Page:`${pageNo}`});
        },
        {
            onSuccess(data) {
                console.log(data);
                if (!data) {
                    toast.error("No Promotions Found");
                    setPromotions([]);
                    return;
                }
                setPromotions(data?.Promotions);
                setTotalPages((data as any)["@numpages"])
            },
            // revalidateOnMount: false,
            // revalidateOnFocus: false,
        }
    );

    const {
        isLoading: fetchingSearchedPromotion,
        mutate: fetchSearchedPromotion,
    } = useSWR(
        "/get promotion" + searchedPromotion,
        async () => {
            return await IMPACT_ACTION_GET_PROMOTION(searchedPromotion);
        },
        {
            onSuccess(data) {
                console.log(data, "pppppppp");
                if (!data) {
                    toast.error("Promotion Not Found");
                    setPromotions([]);
                    return;
                }
                setPromotions([data as any]);
                // console.log(data?.MediaProperties);
            },
            revalidateOnMount: false,
            revalidateOnFocus: false,
        }
    );

    const promotionsTemp = [
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
        {
            AdvertiserId: "12345",
            AdvertiserName: "ACME Inc",
            AdvertiserLocation: "United States",
            PromotionFileId: "37",
            PromotionIds: "123456789",
            PromotionTitle: "Save 40% on Anvils with ACME Christmas",
            PromotionEffectiveDates: "2022-12-13/2023-01-01",
            GenericRedemptionCode: "ANVIL40",
            PromotionItemsUri:
                "/Mediapartners/<AccountSID>/Catalogs/ItemSearch?Query=PromotionIds='123456789'",
            Uri: "/Mediapartners/<AccountSID>/Promotions/123456789",
        },
    ];
    const handleCopyButtonClick = async (textToCopy: string) => {
        await navigator.clipboard.writeText(textToCopy);
        toast.success("Redemption Code Copied...");
    };

    useEffect(() => {
        const promotionId = searchParams?.get("id") as string;

        if (promotionId) {
            setSearchedPromotion(promotionId as string);
            console.log(promotionId, "=-=-=-=-=-=");
            fetchSearchedPromotion();
        }
    }, [searchParams?.get("id") as string]);
    return isLoading || fetchingSearchedPromotion ? (
        <Loader />
    ) : (
        <>
            {promotions && promotions?.length === 0 && (
                <div className="empty">No Active Promotions</div>
            )}
            <div className="promotion-grid">
                {promotions?.map((promotion, id) => {
                    return (
                        <div key={id} className="grid-item">
                            <h4>{promotion.PromotionTitle}</h4>
                            <div className="additional-data">
                                <div>
                                    Advertiser Name: {promotion.AdvertiserName}
                                </div>
                                <div>
                                    Advertiser Location:{" "}
                                    {promotion.AdvertiserLocation}
                                </div>
                                <div>
                                    Effective Dates:{" "}
                                    {promotion.PromotionEffectiveDates}
                                </div>
                                <div
                                    className="redemption-code"
                                    onClick={() =>
                                        handleCopyButtonClick(
                                            promotion.GenericRedemptionCode
                                        )
                                    }
                                >
                                    Generic Redemption Code:{" "}
                                    {promotion.GenericRedemptionCode}
                                    <GoCopy size={15} color="black" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {
                (promotions as any).length>0 &&
            <PromotionsPagination pageNo={pageNo} setPageNo={setPageNo} totalPages={totalPages} />
            }
        </>
    );
}

export default PromotionListing;
