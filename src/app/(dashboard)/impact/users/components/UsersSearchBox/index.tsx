"use client";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./styles.scss";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import toast from "react-hot-toast";
import { IMPACT_ACTION_SINGLE_MEDIAPARTNERS_GET } from "@/utils/Providers/Impact/API";
import Loader from "@/components/common/Loader";

function UsersSearchBox() {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");

    const { data, isLoading, mutate } = useSWR(
        "/get single user",
        async () => {
            return await IMPACT_ACTION_SINGLE_MEDIAPARTNERS_GET({
                id: searchText,
            });
        },
        {
            onSuccess(data) {
                if (!data) {
                    toast.error("User Not Found");
                }
                router.push(`/impact/users?user=${JSON.stringify(data)}`);
            },
            revalidateOnMount: false,
            revalidateOnFocus: false,
        }
    );

    const handleSearch = () => {
        mutate();
        // if (!searchText.trim()) {
        //     return;
        // }
        // mutate();
    };

    return (
        <div className="search-box-main">
            <div className="input-box">
                <input
                    placeholder="Search User by ID"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                />
                {isLoading ? (
                    <div className="loading">
                        <Loader />
                    </div>
                ) : (
                    <button onClick={handleSearch}>
                        <IoSearchOutline size={25} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default UsersSearchBox;
