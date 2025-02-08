import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./styles.scss";

function Loader() {
    return (
        <div className="loader">
            <AiOutlineLoading3Quarters size={25} />
        </div>
    );
}

export default Loader;
