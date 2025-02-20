import { CatalogItem } from "@/types/Impact/catalogItem";
import React from "react";
import "./styles.scss";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
import PromotionsDropDownBtn from "./DropDownBtn";

type TProps = {
    CatalogItems: CatalogItem[];
};
function CatalogItemsGrid({ CatalogItems }: TProps) {
    console.log(CatalogItems[0])
    return (
        <div className="catalog-items-grid">
            {CatalogItems.map((item) => {
                return (
                    <div key={item.Id} className="grid-item">
                        <div className="item-preview">
                            <Image
                                src={item.ImageUrl}
                                alt="Product Preview"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <h4>{item.Name}</h4>
                        <div>Program {item.CampaignName}</div>
                        <div>Program ID: {item.CampaignId}</div>
                        <div>Description: {item.Description}</div>
                        <div className="item-btns">
                            <button onClick={()=>window.location.href=item.Url}>
                                View <GoLinkExternal />
                            </button>
                            <PromotionsDropDownBtn buttonText="Promotions" items={item.Promotions} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CatalogItemsGrid;
