"use client";
import Anchor from "@/components/common/Anchor";
import React, { useTransition } from "react";
import { saveAs } from "file-saver";

type Props = {
  downloadURI: string;
  invoiceId: string;
};

const DownloadInvoice = ({ downloadURI, invoiceId }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleDownloadPDF = () => {
    startTransition(async () => {
      const token = Buffer.from(
        `${process?.env?.IMPACT_ACCOUNT_SID!}:${process?.env
          ?.IMPACT_AUTH_TOKEN!}`,
        "utf8",
      ).toString("base64");

      const data = await fetch?.("https://api.impact.com" + downloadURI, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      const blob = await data?.blob();
      saveAs(blob, `${invoiceId}.pdf`);
    });
  };

  return (
    <Anchor
      text={isPending ? "Downloading..." : "Download"}
      onClick={handleDownloadPDF}
    />
  );
};

export default DownloadInvoice;
