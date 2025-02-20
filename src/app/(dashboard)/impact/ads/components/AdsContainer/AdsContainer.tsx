import { TAd } from "@/types/Impact/ads";
import "./styles.scss";
import Image from "next/image";
import { RxExternalLink } from "react-icons/rx";
import CopyToClipBoardButton from "@/components/common/CopyToClipBoardButton";
import { getFormattedDate } from "@/utils/DateUtils";
import { KeyedMutator } from "swr";

type Props = {
    Ads: TAd[];
    searchedAd?: TAd;
    pageNo: number;
    // mutate: KeyedMutator<any>;
    setPageNo: React.Dispatch<React.SetStateAction<number>>;
};
function AdsContainer({ Ads, searchedAd, pageNo, setPageNo }: Props) {
    const handleNextClick = () => {
        setPageNo((prev: number) => prev + 1);
        // mutate();
    };
    const handlePrevClick = () => {
        if (pageNo === 1) {
            return;
        }
        setPageNo((prev: number) => prev - 1);
        // mutate();
    };

    if (searchedAd) {
        const adSrc = searchedAd?.IFrameCode.match(/src="([^"]*)"/);
        return (
            <div className="ads-container">
                <div key={searchedAd.Id} className="item">
                    <div className="icon-banner-type">
                        <Image
                            src={`/${searchedAd.Type}.png`}
                            alt="AD Type"
                            fill={true}
                        />
                        <div className="ad-type">{searchedAd.Type}</div>
                    </div>
                    <div className="content">
                        <div>
                            <div className="title-area">
                                <h4 className="title">{searchedAd.Name}</h4>
                                {searchedAd.TopSeller === "true" && (
                                    <div className="top-seller-icon">
                                        <Image
                                            src={`/best-seller.png`}
                                            alt="Top Seller Icon"
                                            fill={true}
                                        />
                                    </div>
                                )}
                            </div>
                            {searchedAd.Description.trim() && (
                                <div>{searchedAd.Description}</div>
                            )}
                            <div className="date">
                                {getFormattedDate(searchedAd.StartDate)}
                            </div>
                        </div>
                        <div className="actions">
                            <div className="labels">
                                <div>
                                    Labels:{" "}
                                    {searchedAd.Labels.replace(",", ", ")}
                                </div>
                            </div>
                            <div className="buttons">
                                <CopyToClipBoardButton
                                    buttonText="Copy Tracking Link"
                                    textToCopy={searchedAd.TrackingLink}
                                />
                                <div className="view-ad-btn">
                                    <a href={adSrc ? adSrc[1] : "none"}>
                                        View Ad
                                    </a>
                                    <RxExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="ads-container">
            {Ads && Ads.map((ad) => {
                const adSrc = ad.IFrameCode.match(/src="([^"]*)"/);

                return (
                    <div key={ad.Id} className="item">
                        <div className="icon-banner-type">
                            <Image
                                src={`/${ad.Type}.png`}
                                alt="AD Type"
                                fill={true}
                            />
                            <div className="ad-type">{ad.Type}</div>
                        </div>
                        <div className="content">
                            {/* <div dangerouslySetInnerHTML={{__html:ad.Code}}></div> */}
                            <div>
                                <div className="title-area">
                                    <h4 className="title">{ad.Name}</h4>
                                    {ad.TopSeller === "true" && (
                                        <div className="top-seller-icon">
                                            <Image
                                                src={`/best-seller.png`}
                                                alt="Top Seller Icon"
                                                fill={true}
                                            />
                                        </div>
                                    )}
                                </div>
                                {ad.Description.trim() && (
                                    <div>{ad.Description}</div>
                                )}
                                <div className="date">
                                    {getFormattedDate(ad.StartDate)}
                                </div>
                            </div>
                            <div className="actions">
                                <div className="labels">
                                    <div>
                                        Labels: {ad.Labels.replace(",", ", ")}
                                    </div>
                                </div>
                                <div className="buttons">
                                    <CopyToClipBoardButton
                                        buttonText="Copy Tracking Link"
                                        textToCopy={ad.TrackingLink}
                                    />
                                    <div className="view-ad-btn">
                                        <a href={adSrc ? adSrc[1] : "none"}>
                                            View Ad
                                        </a>
                                        <RxExternalLink />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="pagination-btns">
                <button
                    disabled={pageNo === 1}
                    className="page-btn"
                    onClick={handlePrevClick}
                >
                    Previous
                </button>
                <button className="page-btn" onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default AdsContainer;
