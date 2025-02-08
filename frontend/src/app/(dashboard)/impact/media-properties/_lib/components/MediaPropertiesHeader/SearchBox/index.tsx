"use client";
import React, { useState } from 'react'
import "./styles.scss"
import Loader from "@/components/common/Loader";
import { IoSearchOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';


function MediaPropertiesSearch() {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        router.push(`/impact/media-properties?id=${searchText}`);
        // router.push(`/media-properties?id=3223825`);
    };

  return (
    <div className="search-box-main">
            <div className="input-box">
                <input
                    placeholder="Search Media Property by ID"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                />
                {false ? (
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
  )
}

export default MediaPropertiesSearch
