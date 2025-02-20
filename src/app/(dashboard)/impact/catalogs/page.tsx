"use client";
import { IMPACT_ACTION_LIST_CATALOG_GET } from "@/utils/Providers/Impact/API";
import React, { useEffect, useState } from "react";
import CatalogsViewer from "./_lib/components/CatalogsViewer";
import { TCatalog, TCatalogsData } from "@/types/Impact/catalogs";
import CatalogPagination from "./_lib/components/CatalogPagination";
import CatalogsHeader from "./_lib/components/CatalogsHeader";

function CatalogsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [pageNo, setPageNo] = useState(1);
    const [programs, setPrograms] = useState<TCatalogsData>();
    const [searchedCatalog, setSearchedCatalog] = useState<
        TCatalog | undefined
    >();

    const fetchCampaigns = async () => {
        try {
            const res: TCatalogsData | null =
                await IMPACT_ACTION_LIST_CATALOG_GET({
                    PageSize: "20",
                    Page: `${pageNo}`,
                });
            if (res === null) {
                throw new Error("Unable to fetch catalogs");
            }
            console.log(res);
            if (pageNo > 1) {
                setPrograms((prev) => {
                    if (!prev) {
                        return;
                    }
                    const tempCats = prev.Catalogs;
                    return { ...prev, Catalogs: tempCats.concat(res.Catalogs) };
                });
            } else {
                setPrograms(res);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchCampaigns();
    }, [pageNo]);

    useEffect(() => {
        console.log("object", searchedCatalog);
    }, [searchedCatalog]);

    return (
        <div>
            {programs && (
                <>
                    <CatalogsHeader setSearchedCatalog={setSearchedCatalog} />
                    <CatalogsViewer
                        programs={programs}
                        searchedCatalog={searchedCatalog}
                    />
                </>
            )}
            <CatalogPagination
                pageNo={pageNo}
                setPageNo={setPageNo}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                searchedCatalog={searchedCatalog}
            />
        </div>
    );
}

export default CatalogsPage;
