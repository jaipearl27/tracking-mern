import React from "react";
import "./styles.scss";
import { TCatalog, TCatalogsData } from "@/types/Impact/catalogs";
import { getFormattedDate } from "@/utils/DateUtils";
import Link from "next/link";

function CatalogsViewer({
    programs,
    searchedCatalog,
}: {
    programs: TCatalogsData;
    searchedCatalog: TCatalog | undefined;
}) {
    if (searchedCatalog) {
        return (
            <div className="catalog-wrapper">
                <div className="catalog">
                    <div className="item">
                        <div className="title">{searchedCatalog.Name}</div>
                        {/* <div className="campaign-name">{catalog.CampaignName}</div> */}
                        <div className="advertizer-name">
                            By: {searchedCatalog.AdvertiserName}
                        </div>
                    </div>
                    <div className="additional-info">
                        <div className="grid-item">
                            <div className="heading">Advertiser Location</div>
                            <div className="info">
                                {searchedCatalog.AdvertiserLocation}
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="heading">Campaign Name</div>
                            <div className="info">
                                {searchedCatalog.CampaignName}
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="heading">Date Last Updated</div>
                            <div className="info">
                                {getFormattedDate(
                                    searchedCatalog.DateLastUpdated
                                )}
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="heading">Number Of Items</div>
                            <div className="info">
                                {searchedCatalog.NumberOfItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="catalog-wrapper">
            {programs.Catalogs.map((catalog, key) => {
                return (
                    <div key={key} className="catalog">
                        <div className="item">
                            <div className="title">{catalog.Name}</div>
                            {/* <div className="campaign-name">{catalog.CampaignName}</div> */}
                            <div className="advertizer-name">
                                By: {catalog.AdvertiserName}
                            </div>
                        </div>
                        <div className="additional-info">
                            <div className="grid-item">
                                <div className="heading">
                                    Advertiser Location
                                </div>
                                <div className="info">
                                    {catalog.AdvertiserLocation}
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="heading">Campaign Name</div>
                                <div className="info">
                                    {catalog.CampaignName}
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="heading">Date Last Updated</div>
                                <div className="info">
                                    {getFormattedDate(catalog.DateLastUpdated)}
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="heading">Number Of Items</div>
                                <div className="info">
                                    {catalog.NumberOfItems}
                                </div>
                            </div>
                            <button>
                                <Link
                                    href={`/impact/catalogs/items?catalogID=${catalog.Id}&catalogName=${catalog.Name}`}
                                >
                                    View Catalog
                                </Link>
                            </button>
                            <button>
                                <Link href={`/impact/programs/${catalog.CampaignId}`}>
                                    View Program
                                </Link>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CatalogsViewer;
