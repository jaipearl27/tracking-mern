import React from "react";
import { UserState } from "@/types/Impact/user";
import ReactSelect from "react-select";
import "./styles.scss";

type TProps = {
    state: UserState | "";
    setState: React.Dispatch<React.SetStateAction<"" | UserState>>;
};
const options = [
    { label: "ACTIVE" },
    { label: "INVITED" },
    { label: "PENDING" },
];
function StateFilter({ state, setState }: TProps) {
    return (
        <div className="state-filter">
            <ReactSelect
                value={options?.find((i) => i.label === state)}
                onChange={(p) => {
                    setState?.(p?.label as UserState);
                }}
                options={options}
            />
        </div>
    );
}

export default StateFilter;
