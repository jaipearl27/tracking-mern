"use client";
import Anchor from "@/components/common/Anchor";
import React, { useTransition } from "react";
import { downloadJobAction } from "./action";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

type Props = {
  downloadURI: string;
};

const DownloadJob = ({ downloadURI }: Props) => {
  const [isPending, startTransition] = useTransition();
  const params = useParams();

  const jobId = params?.jobId;

  const handleDownloadJob = async () => {
    startTransition(async () => {
      const data = await downloadJobAction?.(downloadURI);

      if (data) {
        const textBlob = new Blob([data!], { type: "text/csv" });
        saveAs(textBlob, `${jobId}-job.csv`);
        toast.success("Report Exported Successfully");
      }
    });
  };

  return (
    <Anchor
      text={isPending ? "Downloading..." : "Download"}
      onClick={handleDownloadJob}
    />
  );
};

export default DownloadJob;
