import React from "react";
import "./styles.scss";

type PropTypes = {
    pageNo: number;
    totalPages: number;
    setPageNo: React.Dispatch<React.SetStateAction<number>>;
};
function PromotionsPagination({ pageNo, totalPages, setPageNo }: PropTypes) {
    const handleNextClick = () => {
        if (pageNo >= totalPages) {
            return;
        }
        setPageNo((prev: number) => prev + 1);
    };
    const handlePrevClick = () => {
        if (pageNo === 1) {
            return;
        }
        setPageNo((prev: number) => prev - 1);
    };
    return (
        <div className="pagination-btns">
            <button
                disabled={pageNo === 1}
                className="page-btn"
                onClick={handlePrevClick}
            >
                Previous
            </button>
            <button
                disabled={pageNo >= totalPages}
                className="page-btn"
                onClick={handleNextClick}
            >
                Next
            </button>
        </div>
    );
}

export default PromotionsPagination;
