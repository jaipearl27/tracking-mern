"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import "./styles.scss"

function CopyToClipBoardButton({
    buttonText,
    textToCopy,
}: {
    buttonText: string;
    textToCopy: string;
}) {
    const handleCopyButtonClick = async () => {
        await navigator.clipboard.writeText(textToCopy);
        toast.success("Successfully Copied...");
    };
    return (
        <>
            <button className="copy-clipboard-btn" onClick={handleCopyButtonClick}>{buttonText} <MdContentCopy/></button>
            <Toaster
                position="bottom-right"
                toastOptions={{ duration: 1500 }}
            />
        </>
    );
}

export default CopyToClipBoardButton;
