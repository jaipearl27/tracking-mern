import React from "react";
import "./index.scss"
import BalanceCard from "./BalanceCard";
import WithDrawalCard from "./WithdrawalCard";

const StatisticsBanner = () => {
    return (
        <div className="stats-banner">
            <div className="balances">
                <BalanceCard />
                <BalanceCard />
            </div>
            <WithDrawalCard />
        </div>
    );
};

export default StatisticsBanner;
