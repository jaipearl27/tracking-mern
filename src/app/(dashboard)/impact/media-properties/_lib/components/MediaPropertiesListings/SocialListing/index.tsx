import React from "react";
import Image from "next/image";
import {
    Followers,
    SocialPlatform,
} from "@/types/Impact/enums/MediaPropertiesEnums";
import { TMediaPropertySocial } from "@/types/Impact/mediaProperties";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

type PropsType = {
    mediaProperty: TMediaPropertySocial;
};

function SocialListing({ mediaProperty }: PropsType) {
    const getFollowers = (installs: Followers) => {
        switch (installs) {
            case Followers.HUNDRED_PLUS:
                return "100+";
            case Followers.THOUSAND_PLUS:
                return "1K+";
            case Followers.TEN_THOUSAND_PLUS:
                return "10K+";
            case Followers.HUNDRED_THOUSAND_PLUS:
                return "100K+";
            case Followers.MILLION_PLUS:
                return "1M+";
            case Followers.TEN_MILLION_PLUS:
                return "10M+";
            case Followers.HUNDRED_MILLION_PLUS:
                return "100M+";
        }
    };
    const getSocialPlatformLogo = (socialPlatform: SocialPlatform) => {
        switch (socialPlatform) {
            case SocialPlatform.FACEBOOK:
                return <FaFacebook />;
            case SocialPlatform.INSTAGRAM:
                return <FaInstagram />;
            case SocialPlatform.PINTEREST:
                return <FaPinterest />;
            case SocialPlatform.TWITTER:
                return <FaTwitter />;
        }
    };
    return (
        <div key={mediaProperty.Id} className={`listing-item SOCIAL`}>
            <div className="tags-and-stats">
                <div className="visitors-count">
                    Followers: {getFollowers(mediaProperty.Followers)}
                </div>
                {getSocialPlatformLogo(mediaProperty.SocialPlatform)}
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
            </div>
            <div className="content-sec">
                <h4>
                    {mediaProperty.Name} ({mediaProperty.Handle})
                </h4>
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

export default SocialListing;
