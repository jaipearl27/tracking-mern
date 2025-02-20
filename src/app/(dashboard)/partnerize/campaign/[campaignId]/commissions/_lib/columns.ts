import { Columns } from "@/components/common/TableV2";

export const activeCommissionColumns: Columns<any> = [
  {
    dataIndex: "description",
    id: "description",
    title: "Decription",
  },
  {
    dataIndex: "start_date",
    id: "start_date",
    title: "Date Started",
  },
  {
    dataIndex: "status",
    id: "status",
    title: "Status",
  },
  {
    dataIndex: "type",
    id: "type",
    title: "Type",
  },
  {
    dataIndex: "rates",
    id: "rates",
    title: "Rates",
    render: () => {
      return "";
    },
  },
];

export const tierColumns: Columns<any> = [
  {
    dataIndex: "id",
    id: "id",
    title: "Tier ID",
  },
  {
    dataIndex: "name",
    id: "name",
    title: "Tier Name",
  },
  {
    dataIndex: "start_date",
    id: "start_date",
    title: "Start Date",
  },
  {
    dataIndex: "end_date",
    id: "end_date",
    title: "End Date",
  },
  {
    dataIndex: "evaluation_period",
    id: "evaluation_period",
    title: "Evaluation Period",
  },
  {
    dataIndex: "reward_pending",
    id: "reward_pending",
    title: "Reward Pending",
    render: (value: boolean) => (value ? "Yes" : "No"),
  },
  {
    dataIndex: "reward_model",
    id: "reward_model",
    title: "Reward Model",
  },
  {
    dataIndex: "performance_measurement",
    id: "performance_measurement",
    title: "Performance Measurement",
  },
  {
    dataIndex: "meta_fields",
    id: "meta_fields",
    title: "Meta Fields",
    render: (meta_fields: any[]) =>
      meta_fields
        .map((field) => `${field.name}: ${field.value ?? "N/A"}`)
        .join(", "),
  },
  {
    dataIndex: "levels",
    id: "levels",
    title: "Levels",
    render: (levels: any[]) =>
      levels
        .map(
          (level) =>
            `Threshold: ${level.threshold}, Bonus: ${level.bonus_value}`,
        )
        .join("; "),
  },
  {
    dataIndex: "publishers",
    id: "publishers",
    title: "Publishers",
    render: (publishers: any[]) =>
      publishers.map((publisher) => publisher.name).join(", "),
  },
  {
    dataIndex: "groups",
    id: "groups",
    title: "Groups",
    render: (groups: any[]) => groups.map((group) => group.name).join(", "),
  },
  {
    dataIndex: "status",
    id: "status",
    title: "Status",
  },
];

export const promotionColumns: Columns<any> = [
  {
    dataIndex: "id",
    id: "id",
    title: "Promotion ID",
  },
  {
    dataIndex: "description",
    id: "description",
    title: "Description",
  },
  {
    dataIndex: "performance_value",
    id: "performance_value",
    title: "Performance Value",
  },
  {
    dataIndex: "performance_model",
    id: "performance_model",
    title: "Performance Model",
  },
  {
    dataIndex: "start_date",
    id: "start_date",
    title: "Start Date",
  },
  {
    dataIndex: "end_date",
    id: "end_date",
    title: "End Date",
  },
  {
    dataIndex: "cookie_period",
    id: "cookie_period",
    title: "Cookie Period (days)",
  },
  {
    dataIndex: "commission_based_on_field",
    id: "commission_based_on_field",
    title: "Commission Basis",
  },
  {
    dataIndex: "status",
    id: "status",
    title: "Status",
  },
  {
    dataIndex: "meta_fields",
    id: "meta_fields",
    title: "Meta Fields",
    render: (meta_fields: any[]) =>
      meta_fields
        .map((field) => `${field.name}: ${field.values.join(", ")}`)
        .join("; "),
  },
  {
    dataIndex: "publishers",
    id: "publishers",
    title: "Publishers",
    render: (publishers: any[]) =>
      publishers.map((publisher) => publisher.name).join(", "),
  },
  {
    dataIndex: "groups",
    id: "groups",
    title: "Groups",
    render: (groups: any[]) => groups.map((group) => group.name).join(", "),
  },
  {
    dataIndex: "last_modified",
    id: "last_modified",
    title: "Last Modified Date",
  },
  {
    dataIndex: "last_modified_by",
    id: "last_modified_by",
    title: "Last Modified By",
  },
];

export const campaignCommissionColumns: Columns<any> = [
  {
    dataIndex: "description",
    id: "description",
    title: "Decription",
  },
  {
    dataIndex: "last_modified",
    id: "last_modified",
    title: "Last Modified",
  },
  {
    dataIndex: "last_modified_by_name",
    id: "last_modified_by_name",
    title: "Last Modified By",
  },
  {
    dataIndex: "performance_model",
    id: "performance_model",
    title: "Performance Type",
  },
  {
    dataIndex: "performance_value",
    id: "performance_value",
    title: "Value",
  },
  {
    dataIndex: "start_date",
    id: "start_date",
    title: "Date Started",
  },
  {
    dataIndex: "status",
    id: "status",
    title: "Status",
  },
];
