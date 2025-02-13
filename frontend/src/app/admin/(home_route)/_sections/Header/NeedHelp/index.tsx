import React from "react";
import "./index.scss"

const NeedHelp = () => {
    return (
        <div className="help-container">
            <div className="help-headings">
                <div className="heading-bold">Hey Need Help?</div>
                <div className="heading-slim">Just ask anything!</div>
            </div>
            <div>
                <div className="ask-btn">
                    Ask
                </div>
            </div>
        </div>
    );
};

export default NeedHelp;
