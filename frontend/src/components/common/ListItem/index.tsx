import React from "react";
import Divider from "../Divider";
import "./index.scss";

type Props = {
    title: string;
    values?: string[] | number[];
    includeDivider?: boolean;
    mb?: number;
    titleWidth?: number;
};

function ListItem({
    title,
    values,
    includeDivider = true,
    mb = 0,
    titleWidth = 300,
}: Props) {
    return (
        <>
            <div className="info-wrapper" style={{ marginBottom: mb }}>
                <p className="subheading" style={{ width: titleWidth }}>
                    {title}
                </p>
                <div className="content">
                    {values?.map((value) => {
                        return typeof value === "string" ? (
                            <p>{value}</p>
                        ) : (
                            <>{value}</>
                        );
                    })}
                </div>
            </div>
            {includeDivider && <Divider />}
        </>
    );
}

export default ListItem;
