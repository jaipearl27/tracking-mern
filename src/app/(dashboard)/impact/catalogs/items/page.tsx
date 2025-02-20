"use client";
import React, { useState } from "react";
import CatalogItemsGrid from "./_lib/components/CatalogsGrid";
import CatalogItemsPagination from "./_lib/components/CatalogItemsPagination";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { IMPACT_ACTION_LIST_CATALOG_ITEMS_GET } from "@/utils/Providers/Impact/API";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./_lib/styles.scss";
import { CatalogItem } from "@/types/Impact/catalogItem";
import CatalogItemsHeader from "./_lib/components/CatalogItemsHeader";

type TProps = {};
function CatalogItems({}: TProps) {
    const [pageNo, setPageNo] = useState(1);
    const searchParams = useSearchParams();
    const catalogId = searchParams?.get("catalogID") as string;
    const catalogName = searchParams?.get("catalogName") as string;
    const { data, isLoading, mutate } = useSWR(
        "/catalog-items" + pageNo,
        async () => {
            return await IMPACT_ACTION_LIST_CATALOG_ITEMS_GET({
                params: {
                    Page: `${pageNo}`,
                    PageSize: "12",
                },
                catalogId,
            });
        },
        {
            onSuccess(data) {
                if (!data) {
                    toast.error("Some Error Occured.");
                }
                console.log(data, "items-=-=-=-=-=-=-");
            },
            revalidateOnFocus: false,
        }
    );

    if (!data || isLoading) {
        return (
            <div className="catalog-items-container">
                <div className="loader">
                    <AiOutlineLoading3Quarters size={25} />
                </div>
            </div>
        );
    }
    return (
        <div className="catalog-items-container">
            <CatalogItemsHeader catalogName={catalogName} />
            <CatalogItemsGrid CatalogItems={data?.Items as CatalogItem[]} />
            <CatalogItemsPagination pageNo={pageNo} setPageNo={setPageNo} />
        </div>
    );
}

export default CatalogItems;
