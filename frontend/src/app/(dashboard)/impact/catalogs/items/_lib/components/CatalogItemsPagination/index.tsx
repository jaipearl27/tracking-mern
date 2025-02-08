"use client";
import React, { useState } from "react";
import "./styles.scss";

type TProps = {
    pageNo: number;
    setPageNo: React.Dispatch<React.SetStateAction<number>>;
};
function CatalogItemsPagination({pageNo,setPageNo}: TProps) {
    const handleNext = () => {
        setPageNo((prev) => prev + 1);
    };
    const handlePrev = () => {
        if (pageNo === 1) {
            return;
        }
        setPageNo((prev) => prev - 1);
    };
    return (
        <div className="pagination-wrapper">
            <button
                className="pagination-button"
                disabled={pageNo === 1}
                onClick={handlePrev}
            >
                Previous
            </button>
            <button onClick={handleNext} className="pagination-button">
                Next
            </button>
        </div>
    );
}

export default CatalogItemsPagination;
