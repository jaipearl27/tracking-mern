import Anchor from "@/components/common/Anchor";

export const storeGroupTableColumns = [
  {
    dataIndex: "Id",
    id: "Id",
    title: "Id",
    render(p: any) {
      return <small>{p?.Id || "-"}</small>;
    },
  },
  {
    dataIndex: "Name",
    id: "Name",
    title: "Name",
    render(p: any) {
      return <small>{p?.Name || "-"}</small>;
    },
  },
  {
    dataIndex: "NumberOfProducts",
    id: "NumberOfProducts",
    title: "No Of Products",
    render(p: any) {
      return <small>{p?.NumberOfProducts || "-"}</small>;
    },
  },
  {
    dataIndex: "DateLastUpdated",
    id: "DateLastUpdated",
    title: "Last Updated",
    render(p: any) {
      return (
        <small suppressHydrationWarning>
          {p?.DateLastUpdated
            ? new Date(p?.DateLastUpdated)?.toLocaleDateString()
            : "-"}
        </small>
      );
    },
  },
  {
    dataIndex: "StartDate",
    id: "StartDate",
    title: "Start Date",
    render(p: any) {
      return (
        <small>
          {p?.StartDate ? new Date(p?.StartDate)?.toLocaleDateString() : "-"}
        </small>
      );
    },
  },
  {
    dataIndex: "EndDate",
    id: "EndDate",
    title: "End Date",
    render(p: any) {
      return (
        <small>
          {p?.EndDate ? new Date(p?.EndDate)?.toLocaleDateString() : "-"}
        </small>
      );
    },
  },
  {
    dataIndex: "Status",
    id: "Status",
    title: "Status",
    render(p: any) {
      return <small>{p?.Status || "-"}</small>;
    },
  },
  {
    dataIndex: "Uri",
    id: "Uri",
    title: "Uri",
    render(p: any) {
      return (
        <Anchor
          href={p?.Uri}
          text="Visit"
          as="link"
          fontSize={14}
          target="_blank"
        />
      );
    },
  },
];
