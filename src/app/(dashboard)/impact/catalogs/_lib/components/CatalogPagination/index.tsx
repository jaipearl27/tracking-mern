"use client";
import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./styles.scss";
import { TCatalog } from "@/types/Impact/catalogs";

type TProps = {
    pageNo: number;
    isLoading: boolean;
    searchedCatalog: TCatalog | undefined;
    setPageNo: React.Dispatch<React.SetStateAction<number>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
function CatalogPagination({ pageNo, isLoading,searchedCatalog, setPageNo, setIsLoading }: TProps) {
    const handelInfiniteScroll = async () => {
        // console.log("scrollHeight" + document.documentElement.scrollHeight);
        // console.log("innerHeight" + window.innerHeight);
        // console.log("scrollTop" + document.documentElement.scrollTop);
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                console.log("gettingg-=-=-=--==-=");
                setIsLoading(true);
                setPageNo((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        if (searchedCatalog) {
            window.removeEventListener("scroll", handelInfiniteScroll);
        }
        else{
            window.addEventListener("scroll", handelInfiniteScroll);
        }
    },[searchedCatalog])

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);

    return isLoading? (
        <div className="loader">
            <AiOutlineLoading3Quarters size={25} />
        </div>
    ):null;
}

export default CatalogPagination;
