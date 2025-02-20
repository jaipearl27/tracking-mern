import React from "react";
import "./styles.scss";
import CatalogsSearch from "./CatalogsSearch";
import { TCatalog } from "@/types/Impact/catalogs";

function CatalogsHeader({
    setSearchedCatalog,
}: {
    setSearchedCatalog: React.Dispatch<
        React.SetStateAction<TCatalog | undefined>
    >;
}) {
    return (
        <div className="catalogs-header">
            <h2>Catalogs</h2>
            <CatalogsSearch setSearchedCatalog={setSearchedCatalog} />
        </div>
    );
}

export default CatalogsHeader;
