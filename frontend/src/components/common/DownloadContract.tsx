"use client";
import Anchor from "@/components/common/Anchor";
import { saveAs } from "file-saver";
import { useTransition } from "react";

type Props = {
  pdfDownloadURI: string;
};

const DownloadContract = ({ pdfDownloadURI }: Props) => {
  const [pending, start] = useTransition();

  //
  const handleDownload = async () => {
    const token = Buffer.from(
      `${process?.env?.IMPACT_ACCOUNT_SID!}:${process?.env
        ?.IMPACT_AUTH_TOKEN!}`,
      "utf8",
    ).toString("base64");

    const data = await fetch?.("https://api.impact.com" + pdfDownloadURI, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    const blob = await data?.blob();
    saveAs(blob, "sample.pdf");
  };

  return (
    <Anchor
      text={pending ? "Downloading..." : "Download"}
      onClick={() => start(handleDownload)}
    />
  );
};

export default DownloadContract;
