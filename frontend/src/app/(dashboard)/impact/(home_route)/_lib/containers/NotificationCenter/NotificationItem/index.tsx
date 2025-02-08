import React from "react";

// Styles
import "./styles.scss";

const NotificationItem = () => {
    return (
        <div className="content-item">
            <div className="top-wrapper">
                <p className="tag">Advertiser Promotion</p>
                <p className="text">28-02-2024 - 28-03-2024</p>
            </div>
            <div className="bottom-text">
                Swarovski: 40% off select styles !
            </div>
        </div>
    );
};

export default NotificationItem;
