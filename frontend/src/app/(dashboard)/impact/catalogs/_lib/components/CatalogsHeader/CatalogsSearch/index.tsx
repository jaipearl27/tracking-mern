"use client";
import React, { useEffect, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import "./styles.scss";
import useSWR from "swr";
import { TCatalog, TCatalogsData } from "@/types/Impact/catalogs";
import toast from "react-hot-toast";
import { IMPACT_ACTION_CATALOG_GET } from "@/utils/Providers/Impact/API";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type TProps = {
    setSearchedCatalog: React.Dispatch<
        React.SetStateAction<TCatalog | undefined>
    >;
};

function CatalogsSearch({ setSearchedCatalog }: TProps) {
    const [searchText, setSearchText] = useState("");
    const [isFetched, setIsFetched] = useState(false);

    let catalogId = "";

    let { data, isLoading, mutate } = useSWR(
        "/search-catalog" + catalogId,
        async () => {
            const res = await IMPACT_ACTION_CATALOG_GET(catalogId);
            if (res === null) {
                toast.error("Invalid Catalog ID...");
                return;
            }
            setSearchedCatalog(res);
            return res;
        },
        {
            revalidateOnMount: false,
            revalidateOnFocus: false,
            onSuccess(data, key, config) {
                setIsFetched(true)
                setSearchedCatalog(data)
            },
        }
    );

    const handleSearch = () => {
        catalogId = searchText;
        console.log("mutating");
        mutate();
    };
    const handleClose = () => {
        setSearchText("");
        setIsFetched(false)
        setSearchedCatalog(undefined);
    };

    return (
        <div className="catalogs-search">
            <input
                placeholder="Search Catalogs By ID"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {isFetched ? (
                <button onClick={handleClose}>
                    <IoCloseOutline size={20} />
                </button>
            ) : isLoading ? (
                <div className="loader">
                    <AiOutlineLoading3Quarters size={20} />
                </div>
            ) : (
                <button onClick={handleSearch}>
                    <IoSearchOutline size={20} />
                </button>
            )}
        </div>
    );
}

export default CatalogsSearch;
