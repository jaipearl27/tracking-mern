"use client";
import { saveAs } from "file-saver";
import { useParams } from "next/navigation";
import { downloadReport } from "../downloadReport";
import toast from "react-hot-toast";
import { useTransition } from "react";
import Anchor from "@/components/common/Anchor";

type Props = {};

const ExportReportBtn = (props: Props) => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();

  //
  const reportId = params?.reportId as string;

  const handleExport = async () => {
    startTransition(async () => {
      const data = await downloadReport(reportId);

      if (!data) {
        toast?.error("Error while Requesting the report");
      }

      if (data) {
        const textBlob = new Blob([data!], { type: "text/csv" });
        saveAs(textBlob, "Report.csv");
        toast.success("Report Exported Successfully");
      }
    });
  };

  return (
    <Anchor
      text={isPending ? "Exporting..." : "Export"}
      onClick={handleExport}
    />
  );
};

export default ExportReportBtn;
