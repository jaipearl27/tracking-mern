"use client";
import { IMPACT_ACTION_EXPORT_CLICK_PARTNERS } from "@/utils/Providers/Impact/API";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import { FaFilter } from "react-icons/fa";
import "./styles.scss";

function ExportClicks() {
    const [showFilters, setShowFilters] = useState(false);
    const [date, setDate] = useState("");
    const [programId, setProgramId] = useState("");
    const [adId, setAdId] = useState("");

    const constructFilters=()=>{
        const data:any={}
        if (!date.trim() && !programId.trim() && !adId.trim()) {
            return undefined
        }
        if (date.trim()) {
            data.Date=date
        }
        if (programId.trim()) {
            data.ProgramId=+programId
        }
        if (adId.trim()) {
            data.AdId=adId
        }
        return data
    }
    const { mutate } = useSWR(
        "/export-clicks",
        async () => {
            return await IMPACT_ACTION_EXPORT_CLICK_PARTNERS({
                data: constructFilters(),
            });
        },
        {
            onSuccess(data) {
                if (!data) {
                    toast.error("Click Not Found");
                    return
                }
                console.log(data, "THis is data");
                window.location.href = ("https://api.impact.com" +
                    data?.ResultUri) as string;
            },
            revalidateOnMount: false,
            revalidateOnFocus: false,
        }
    );

    const handleExport = () => {
        mutate();
    };
    return (
        <div className="export-clicks">
            <div className="top-sec">
                <button onClick={handleExport}>Export Clicks</button>
                <FaFilter
                    color="#e16449"
                    cursor={"pointer"}
                    onClick={() => setShowFilters(!showFilters)}
                />
            </div>
            {showFilters && (
                <div className="filters-sec">
                    <div className="filter">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="filter">
                        <label htmlFor="ProgramId">Program ID:</label>
                        <input
                            type="text"
                            name="ProgramId"
                            value={programId}
                            onChange={(e) => setProgramId(e.target.value)}
                        />
                    </div>
                    <div className="filter">
                        <label htmlFor="AdId">Ad ID:</label>
                        <input
                            type="text"
                            name="AdId"
                            value={adId}
                            onChange={(e) => setAdId(e.target.value)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExportClicks;
