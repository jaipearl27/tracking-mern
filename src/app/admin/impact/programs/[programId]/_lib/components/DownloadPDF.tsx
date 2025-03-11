"use client";
import { useState } from "react";
import { saveAs } from "file-saver";
import { useParams } from "next/navigation";
import { Paths } from "@/utils/Providers/Impact/Paths";
import Anchor from "@/components/common/Anchor";

const DownloadPDF = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const params = useParams();

  const programId = params?.programId;

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const token = Buffer.from(
        `${process?.env?.IMPACT_ACCOUNT_SID}:${process?.env?.IMPACT_AUTH_TOKEN}`,
        "utf8",
      ).toString("base64");

      const path =
        Paths.IMPACT_URL +
        Paths.IMPACT.CAMPAIGNS.PUBLIC_TERMS_DOWNLOAD(programId as string);

      const data = await fetch(path, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      const res = await data?.blob();

      // Use file-saver to download the PDF with a filename
      saveAs(res, "my-downloaded-pdf.pdf");
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Anchor
      onClick={handleDownload}
      text={isDownloading ? "Downloading..." : "Download PDF"}
    />
  );
};

export default DownloadPDF;
