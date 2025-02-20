"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import {
    TMediaPropertyMobile,
    TMediaPropertySocial,
    TMediaPropertyWebsite,
} from "@/types/Impact/mediaProperties";
import useSWR from "swr";
import toast from "react-hot-toast";
import { MediaPropertyType } from "@/types/Impact/enums/MediaPropertiesEnums";
import WebsiteListing from "./WebsiteListing";
import MobileListing from "./MobileListing";
import SocialListing from "./SocialListing";
import Loader from "@/components/common/Loader";
import { IMPACT_ACTION_GET_MEDIA_PROPERTY, IMPACT_ACTION_LIST_MEDIA_PROPERTIES } from "@/utils/Providers/Impact/API";

function MediaPropertiesListings() {
    const searchParams = useSearchParams();
    const [searchedMedia, setSearchedMedia] = useState("");
    const [mediaTypeFilter, setMediaTypeFilter] = useState<MediaPropertyType>(
        MediaPropertyType.WEBSITE
    );
    const [mediaProperties, setMediaProperties] = useState<
        | TMediaPropertyWebsite[]
        | TMediaPropertyMobile[]
        | TMediaPropertySocial[]
    >();
    const [pageNo, setPageNo] = useState(1);

    const { data, isLoading } = useSWR(
        "/get media properties",
        async () => {
            return await IMPACT_ACTION_LIST_MEDIA_PROPERTIES();
        },
        {
            onSuccess(data) {
                if (!data) {
                    toast.error("No Media Properties Found");
                }
                setMediaProperties(data?.MediaProperties)
                // console.log(data?.MediaProperties);
            },
            // revalidateOnMount: false,
            // revalidateOnFocus: false,
        }
    );

    const { isLoading:isFetchingSearch,mutate } = useSWR(
        "/get media property" + searchedMedia,
        async () => {
            return await IMPACT_ACTION_GET_MEDIA_PROPERTY(searchedMedia);
        },
        {
            onSuccess(data) {
                if (!data) {
                    toast.error("Media Property Not Found");
                    setMediaProperties([])
                    return;
                }
                setMediaProperties([data as any])
            },
            revalidateOnMount: false,
            revalidateOnFocus: false,
        }
    );

    useEffect(() => {
        const mediaPropertyId = searchParams?.get("id") as string;

        if (mediaPropertyId) {
            setSearchedMedia(mediaPropertyId as string);
            console.log(mediaPropertyId, "=-=-=-=-=-=");
            mutate();
        }
    }, [searchParams?.get("id") as string]);

    return (isLoading || isFetchingSearch) ? (
        <Loader />
    ) : (
        <div className="listings-container">
            {/* <div className="tools-area">
                <FilterMediaProperties
                    mediaTypeFilter={mediaTypeFilter}
                    setMediaTypeFilter={setMediaTypeFilter}
                />
            </div> */}
            <div className="listings">
                {mediaTypeFilter === MediaPropertyType.WEBSITE &&
                    mediaProperties?.map(
                        (
                            mediaProperty:
                                | TMediaPropertyWebsite
                                | TMediaPropertySocial
                                | TMediaPropertyMobile
                        ) => {
                            if (
                                mediaProperty.Type === MediaPropertyType.WEBSITE
                            ) {
                                return (
                                    <WebsiteListing
                                        mediaProperty={mediaProperty}
                                    />
                                );
                            } else if (
                                mediaProperty.Type === MediaPropertyType.MOBILE
                            ) {
                                <MobileListing mediaProperty={mediaProperty} />;
                            } else if (
                                mediaProperty.Type === MediaPropertyType.SOCIAL
                            ) {
                                <SocialListing mediaProperty={mediaProperty} />;
                            }
                        }
                    )}
            </div>
        </div>
    );
}

export default MediaPropertiesListings;
