"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { TUser, UserState, UserType } from "@/types/Impact/user";
import Image from "next/image";
import { getFormattedDate } from "@/utils/DateUtils";
import StatusBadge from "../StatusBadge";
import useSWR from "swr";
import { IMPACT_ACTION_MEDIAPARTNERS_GET } from "@/utils/Providers/Impact/API";
import toast from "react-hot-toast";
import Loader from "@/components/common/Loader";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import StateFilter from "./StateFilter";

function UsersList() {
    const searchParams = useSearchParams();
    const [showSearchedUser, setShowSearchedUser] = useState(false);
    const [searchedUser, setSearchedUser] = useState<TUser>();
    const [pageNo, setPageNo] = useState(1);
    const [state, setState] = useState<UserState | "">("");

    const { data, isLoading, mutate } = useSWR(
        "/get users" + pageNo + state,
        async () => {
            return await IMPACT_ACTION_MEDIAPARTNERS_GET({
                params: {
                    Page: `${pageNo}`,
                    PageSize: "10",
                    State: state,
                },
            });
        },
        {
            onSuccess(data) {
                if (!data) {
                    toast.error("Users Not Found");
                }
                console.log(data, "THis is data");
            },
        }
    );

    useEffect(() => {
        const userData = searchParams?.get("user") as string;

        if (userData) {
            setShowSearchedUser(true);
            setSearchedUser(JSON.parse(userData));
        }
    }, [searchParams?.get("user") as string]);

    // I-3404598
    if (showSearchedUser) {
        return (
            <div className="users-list-container">
                <div className="user-item" key={searchedUser?.Id}>
                    <div className="user-logo">
                        <Image
                            src={
                                searchedUser?.Type === UserType.MANAGER_ACCOUNT
                                    ? "/ManagerUser.png"
                                    : "/MemberUser.png"
                            }
                            alt="user logo"
                            fill
                        />
                    </div>
                    <div className="content-sec">
                        <div className="username">{searchedUser?.Username}</div>
                        <div>
                            {searchedUser?.FirstName} {searchedUser?.LastName}
                        </div>
                        <div>
                            Role:{" "}
                            {searchedUser?.Type === UserType.MANAGER_ACCOUNT
                                ? "Manager"
                                : "Member"}
                        </div>
                        <div>
                            Joined:{" "}
                            {getFormattedDate(
                                searchedUser?.JoinedDate as string
                            )}
                        </div>
                        <div>Created By: {searchedUser?.CreatedBy}</div>
                        <StatusBadge variant={searchedUser?.State as any} />
                    </div>
                </div>
            </div>
        );
    }

    const handleNext = () => {
        const lastPage = (data as any)["@numpages"];
        if (pageNo >= +lastPage) {
            return;
        }
        setPageNo(pageNo + 1);
    };
    const handlePrev = () => {
        if (pageNo === 1) {
            return;
        }
        setPageNo(pageNo - 1);
    };

    return isLoading ? (
        <Loader />
    ) : (
        <div className="users-list-container">
            <div className="tools">
                <StateFilter setState={setState} state={state} />
            </div>
            {data?.Users.map((user) => {
                return (
                    <div className="user-item" key={user.Id}>
                        <div className="user-logo">
                            <Image
                                src={
                                    user.Type === UserType.MANAGER_ACCOUNT
                                        ? "/ManagerUser.png"
                                        : "/MemberUser.png"
                                }
                                alt="user logo"
                                fill
                            />
                        </div>
                        <div className="content-sec">
                            <div className="username">{user.Username}</div>
                            <div>
                                {user.FirstName} {user.LastName}
                            </div>
                            <div>
                                Role:{" "}
                                {user.Type === UserType.MANAGER_ACCOUNT
                                    ? "Manager"
                                    : "Member"}
                            </div>
                            <div>
                                Joined: {getFormattedDate(user.JoinedDate)}
                            </div>
                            <div>Created By: {user.CreatedBy}</div>
                            <StatusBadge variant={user.State} />
                        </div>
                    </div>
                );
            })}
            <div className="pagination">
                <button disabled={pageNo === 1} onClick={handlePrev}>
                    <MdOutlineNavigateBefore size={25} />
                </button>
                <button
                    disabled={pageNo >= +(data as any)["@numpages"]}
                    onClick={handleNext}
                >
                    <MdOutlineNavigateNext size={25} />
                </button>
            </div>
        </div>
    );
}

export default UsersList;
