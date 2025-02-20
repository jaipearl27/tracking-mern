import { TMediaPropertyWebsite } from "@/types/Impact/mediaProperties";
import Image from "next/image";
import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { MdVerified } from "react-icons/md";

type PropsType = {
    mediaProperty: TMediaPropertyWebsite;
};
function WebsiteListing({ mediaProperty }: PropsType) {
    return (
        
                    <div
                        key={mediaProperty.Id}
                        className={`listing-item WEBSITE`}
                    >
                        <div className="tags-and-stats">
                            <div className="visitors-count">
                                Unique Visitors Monthly:{" "}
                                {mediaProperty.MonthlyUniqueVisitors?mediaProperty.MonthlyUniqueVisitors:"No Data"}
                            </div>
                            {mediaProperty.OwnershipVerified==="true" && (
                                <MdVerified color="#5271eb" size={20} />
                            )}
                        </div>
                        <div className="thumbnail-sec">
                            <div className="thumbnail">
                                <Image
                                    src="/WebsiteLogo.png"
                                    fill
                                    alt={"Website logo"}
                                />
                            </div>
                            <div className="rating">
                                Rating:{" "}
                                {mediaProperty?.AlexaRating
                                    ? mediaProperty?.AlexaRating
                                    : 0}
                            </div>
                        </div>
                        <div className="content-sec">
                            <h4>{mediaProperty.Name}</h4>
                            <div className="desc">
                                {mediaProperty.Description}
                            </div>
                            <div className="type">
                                Type: {mediaProperty.Type}
                            </div>
                            <div className="lower-sec">
                                <div className="revenue-model">
                                    Revenue Models:{" "}
                                    {mediaProperty.RevenueModel.length > 0
                                        ? mediaProperty.RevenueModel.map(
                                              (model) => `${model}, `
                                          )
                                        : "No Revenue Models"}
                                </div>
                                <div>
                                    <button
                                        onClick={() =>
                                            (window.location.href =
                                                mediaProperty.Url)
                                        }
                                    >
                                        View <GoLinkExternal />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default WebsiteListing;
