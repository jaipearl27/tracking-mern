import { Columns } from "@/components/common/TableV2";

export const transactionQueryColumns: Columns<any> = [
  {
    dataIndex: "campaign.title",
    id: "campaign_title",
    title: "Campaign Title",
    styleConfig: {
      width: 150,
    },
    render(p) {
      return p?.campaign?.title || "-";
    },
  },
  {
    dataIndex: "transaction_query_type",
    id: "transaction_query_type",
    title: "Type",
  },
  {
    dataIndex: "publisher_reference",
    id: "publisher_reference",
    title: "Publisher Reference",
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "conversion_reference",
    id: "conversion_reference",
    title: "Conversion Reference",
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "conversion_value",
    id: "conversion_value",
    title: "Conversion Value",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "expected_commission",
    id: "expected_commission",
    title: "Commission",
    styleConfig: {
      width: 100,
    },
  },
  {
    dataIndex: "current_state",
    id: "current_state",
    title: "Status",
    styleConfig: {
      width: 100,
    },
  },
  {
    dataIndex: "notes",
    id: "notes",
    title: "Reason",
    styleConfig: {
      width: 200,
    },
  },
  {
    dataIndex: "conversion_date_time",
    id: "conversion_date_time",
    title: "Conversion Date",
    render(p: any) {
      return p?.conversion_date_time
        ? new Date(p.conversion_date_time).toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 120,
    },
  },
];
