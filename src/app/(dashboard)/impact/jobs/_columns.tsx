import Anchor from "@/components/common/Anchor";
import { Columns } from "@/components/common/TableV2";
import { Job } from "@/types/Impact/job";

export const jobColumns: Columns<Job> = [
  {
    dataIndex: "Type",
    id: "Type",
    title: "Job Type",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "ProgramId",
    id: "ProgramId",
    title: "Campaign Details",
    styleConfig: {
      width: 120,
    },
    render(p: any) {
      return p?.ProgramId !== "" ? (
        <Anchor text="View" as="link" href={`/impact/programs/${p?.ProgramId}`} />
      ) : (
        "-"
      );
    },
  },
  /**
   * Account sid
   */
  //
  //   {
  //     dataIndex: "CreatedBy",
  //     id: "CreatedBy",
  //     title: "Created By",
  //     render(o: any) {
  //       return o?.CreatedBy && new Date(o?.CreatedBy).toLocaleDateString();
  //     },
  //     styleConfig: {
  //       width: 120,
  //     },
  //   },
  {
    dataIndex: "CreatedDate",
    id: "CreatedDate",
    title: "Created Date",
    render(p: any) {
      return p?.CreatedDate !== ""
        ? new Date(p?.CreatedDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "StartedDate",
    id: "StartedDate",
    title: "Started Date",
    render(p: any) {
      return p?.StartedDate !== ""
        ? new Date(p?.StartedDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "AbandonedDate",
    id: "AbandonedDate",
    title: "Abandoned Date",
    render(p: any) {
      return p?.AbandonedDate !== ""
        ? new Date(p?.AbandonedDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "CompletedDate",
    id: "CompletedDate",
    title: "Completed Date",
    render(p: any) {
      return p?.CompletedDate !== ""
        ? new Date(p?.CompletedDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "CancelledDate",
    id: "CancelledDate",
    title: "Cancelled Date",
    render(p: any) {
      return p?.CancelledDate !== ""
        ? new Date(p?.CancelledDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "FailedDate",
    id: "FailedDate",
    title: "Failed Date",
    render(p: any) {
      return p?.FailedDate !== ""
        ? new Date(p?.FailedDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "LastProgressUpdateDate",
    id: "LastProgressUpdateDate",
    title: "Last Progress Update Date",
    render(p: any) {
      return p?.LastProgressUpdateDate !== ""
        ? new Date(p?.LastProgressUpdateDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 200,
    },
  },
  {
    dataIndex: "Status",
    id: "Status",
    title: "Status",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "StatusMessage",
    id: "StatusMessage",
    title: "Status Message",
    render(o: any) {
      return (
        <p className="truncate" style={{ width: 300 }}>
          {o?.StatusMessage || "-"}
        </p>
      );
    },
  },
  {
    dataIndex: "RecordsProcessed",
    id: "RecordsProcessed",
    title: "Records Processed",
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "PercentageComplete",
    id: "PercentageComplete",
    title: "Percentage Complete",
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "Replayable",
    id: "Replayable",
    title: "Replayable",
    render(o: any) {
      return o?.Replayable ? "Yes" : "No";
    },
    styleConfig: {
      width: 100,
    },
  },
  {
    dataIndex: "Id",
    id: "Id",
    title: "View Job Details",
    render(p: any) {
      return <Anchor text="View" as="link" href={`/impact/jobs/${p?.Id}`} />;
    },
    styleConfig: {
      width: 120,
    },
  },
];
