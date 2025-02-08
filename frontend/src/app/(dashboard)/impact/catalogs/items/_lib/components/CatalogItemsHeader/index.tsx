import React from "react";
import { GrCatalogOption } from "react-icons/gr";
import "./styles.scss";
type TProps = {
    catalogName: string;
};
function CatalogItemsHeader({ catalogName }: TProps) {
    return (
        <div className="catalog-items-header">
            <div className="logo">
                <GrCatalogOption size={35} />
            </div>
            <h1>{catalogName}</h1>
        </div>
    );
}

export default CatalogItemsHeader;
