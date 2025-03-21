import React from "react";
import ReactSelect, { CSSObjectWithLabel } from "react-select";
import "./styles.scss";
import { MediaPropertyType } from "@/types/Impact/enums/MediaPropertiesEnums";

type TProps = {
    mediaTypeFilter: MediaPropertyType;
    setMediaTypeFilter: React.Dispatch<React.SetStateAction<MediaPropertyType>>;
};

const customStyles = {
    option(styles: CSSObjectWithLabel) {
        return {
            ...styles,
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            ":hover": { backgroundColor: "#D3D3D3" },
        };
    },
};
const options = [
    { label: MediaPropertyType.WEBSITE },
    { label: MediaPropertyType.MOBILE },
    { label: MediaPropertyType.SOCIAL },
];
function FilterMediaProperties({
    mediaTypeFilter,
    setMediaTypeFilter,
}: TProps) {
    return (
        <div className="media-prop-type-filter">
            <ReactSelect
                value={options?.find((i) => i.label === mediaTypeFilter)}
                onChange={(p) => {
                    setMediaTypeFilter?.(p?.label as MediaPropertyType);
                }}
                options={options}
                styles={customStyles}
            />
        </div>
    );
}

export default FilterMediaProperties;
