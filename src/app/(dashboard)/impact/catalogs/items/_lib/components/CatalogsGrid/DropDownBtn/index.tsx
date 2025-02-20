"use client";
import React, { useState } from "react";
import "./index.scss";
import Link from "next/link";
import { CatalogItemPromotion } from "@/types/Impact/catalogItem";

type Props = {
    buttonText: string;
    items: CatalogItemPromotion[];
};

function InvoiceCampaignsDropDownBtn({ items, buttonText }: Props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="drop-down-btn" onClick={() => setOpen(!open)}>
            <button>{buttonText}</button>
            {open && (
                <div className="drop-items">
                    {items.length === 0 ? (
                        <div className="drop-item">No Promotions</div>
                    ) : (
                        items.map((item) => {
                            return (
                                <Link
                                    href={`/impact/promotions?id=${item.PromotionId}`}
                                    className="drop-item"
                                >
                                    {item.PromotionTitle}
                                </Link>
                            );
                        })
                    )}
                </div>
            )}
        </div>
    );
}

export default InvoiceCampaignsDropDownBtn;
