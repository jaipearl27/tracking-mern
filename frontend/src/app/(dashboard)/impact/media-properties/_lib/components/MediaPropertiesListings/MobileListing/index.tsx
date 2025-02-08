import { TMediaPropertyMobile } from "@/types/Impact/mediaProperties";
import Image from "next/image";
import React from "react";
import { GoLinkExternal } from "react-icons/go";
import {
    Installs,
    MobilePlatform,
} from "@/types/Impact/enums/MediaPropertiesEnums";
import { FaApple } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { MdOutlineAndroid } from "react-icons/md";

type PropsType = {
    mediaProperty: TMediaPropertyMobile;
};
function MobileListing({ mediaProperty }: PropsType) {
    const getInstalls = (installs: Installs) => {
        switch (installs) {
            case Installs.HUNDRED_PLUS:
                return "100+";
            case Installs.THOUSAND_PLUS:
                return "1K+";
            case Installs.TEN_THOUSAND_PLUS:
                return "10K+";
            case Installs.HUNDRED_THOUSAND_PLUS:
                return "100K+";
            case Installs.MILLION_PLUS:
                return "1M+";
            case Installs.TEN_MILLION_PLUS:
                return "10M+";
            case Installs.HUNDRED_MILLION_PLUS:
                return "100M+";
        }
    };
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<IoMdStar key={i} color="orange" size={20} />);
        }
        if (stars.length === 5) {
            return stars;
        }
        while (stars.length !== 5) {
            stars.push(
                <IoMdStar
                    key={`placeholder ${Math.random()}`}
                    color="grey"
                    size={20}
                />
            );
        }
        return stars;
    };
    return (
        <div key={mediaProperty.Id} className={`listing-item MOBILE`}>
            <div className="tags-and-stats">
                <div className="visitors-count">
                    Installs: {getInstalls(mediaProperty.Installs)}
                </div>
                {mediaProperty.MobilePlatform === MobilePlatform.IOS && (
                    <FaApple size={20} />
                )}
                {mediaProperty.MobilePlatform === MobilePlatform.ANDROID && (
                    <MdOutlineAndroid size={22} />
                )}
            </div>
            <div className="thumbnail-sec">
                <div className="thumbnail">
                    <Image
                        src={mediaProperty.Thumbnail}
                        // src="/ManagerUser.png"
                        fill
                        alt={"Website logo"}
                    />
                </div>
                <div className="app-store-rating">
                    App Store Rating
                    <div className="stars">
                        {/* {renderStars(+mediaProperty.AppStoreRating)} */}
                        {renderStars(3)}
                    </div>
                </div>
            </div>
            <div className="content-sec">
                <h4>{mediaProperty.Name}</h4>
                <div className="desc">{mediaProperty.Description}</div>
                <div className="type">Type: {mediaProperty.Type}</div>
                <div className="lower-sec">
                    <div className="revenue-model">
                        Revenue Models:{" "}
                        {mediaProperty.RevenueModel.map(
                            (model) => `${model}, `
                        )}
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                (window.location.href = mediaProperty.Url)
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

export default MobileListing;
