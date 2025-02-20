"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./styles.scss";
import toast from "react-hot-toast";
import useSWR from "swr";
import { IMPACT_ACTION_RETRIEVE_CLICK_PARTNERS } from "@/utils/Providers/Impact/API";
import { useRouter } from "next/navigation";

function SearchClicks() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    const { mutate } = useSWR(
        "/search-clicks",
        async () => {
            return await IMPACT_ACTION_RETRIEVE_CLICK_PARTNERS({
                id: searchText,
                // id: "xHS1A6RfXxyNWt9QNFU012YBUkCxfFUVqSmPWQ0",
            });
        },
        {
            onSuccess(data, key, config) {
                if (!data) {
                    toast.error("Click Not Found");
                }
                console.log(data, "THis is data");
                router.push(`/impact/click-details?data=${JSON.stringify({...data,LandingPageUrl:data?.LandingPageUrl.replace("&","___")})}`,{
                    
                });

            },
            revalidateOnMount: false,
            revalidateOnFocus: false,
        }
    );

    const handleSearch = () => {
        if (!searchText.trim()) {
            return;
        }
        mutate();
    };
    return (
        <div className="search-box-main">
            <div className="input-box">
                <input
                    placeholder="Search Clicks by ID"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                />
                <button onClick={handleSearch}>
                    <IoSearchOutline size={20} />
                </button>
            </div>
        </div>
    );
}

export default SearchClicks;
