import React from "react";
import "./styles.scss";

const StatisticalBox = () => {
  return (
    <div className="stats-box">
      <div className="tag">Earnings</div>
      <div className="amount">
        <span className="dollar-sign">$</span> 6.00
      </div>
      <div className="percentage">0.00%</div>
    </div>
  );
};

export default StatisticalBox;
