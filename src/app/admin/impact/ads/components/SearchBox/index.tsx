"use client";
import React, { useState } from "react";
import useSWR from "swr";
import { RETRIEVE_AD_BY_ID } from "@/utils/Providers/Impact/API";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import "./styles.scss";
import { TAd } from "@/types/Impact/ads";
import toast from "react-hot-toast";

type TProps = {
    placeholder: string;
    setSearchedAd: React.Dispatch<React.SetStateAction<TAd | undefined>>;
};
function SearchBox({ placeholder, setSearchedAd }: TProps) {
    const [searchText, setSearchText] = useState("");

    let adId = "";

    const { data, isLoading, mutate } = useSWR(
        "/search-ad" + adId,
        async () => {
            const res = await RETRIEVE_AD_BY_ID({
                id: adId,
            });
            if (res === null) {
                toast.error("Invalid Ad ID...");
            }
            setSearchedAd(res);
            return res;
        },
        {
            revalidateOnMount: false,
            revalidateOnFocus:false
        }
    );

    const handleSearch = () => {
        adId = searchText;
        mutate();
    };
    const handleClose = () => {
        setSearchedAd(undefined);
    };

    return (
        <div className="search-box-main">
            <div className="input-box">
                <input
                    placeholder={placeholder}
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                {data ? (
                    <button onClick={handleClose}>
                        <IoCloseOutline size={20} />
                    </button>
                ) : (
                    <button onClick={handleSearch}>
                        <IoSearchOutline size={20} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default SearchBox;
