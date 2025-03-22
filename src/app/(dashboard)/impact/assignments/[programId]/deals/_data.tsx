import Anchor from "@/components/common/Anchor";
import { Columns } from "@/components/common/TableV2";
import { Deal } from "@/types/Impact/deals";

export const dealListingTableColumns: Columns<Deal> = [
  {
    dataIndex: "Name",
    id: "Name",
    title: "Name",
    render(o) {
      return (
        <p className="truncate" style={{ width: 200 }}>
          {o?.Name}
        </p>
      );
    },
  },
  {
    dataIndex: "Description",
    id: "Description",
    title: "Description",
    render(o) {
      return (
        <p className="truncate" style={{ width: 300 }}>
          {o?.Description || "-"}
        </p>
      );
    },
  },
  {
    dataIndex: "Type",
    id: "Type",
    title: "Type",
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "State",
    id: "State",
    title: "State",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "Scope",
    id: "Scope",
    title: "Scope",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "StartDate",
    id: "StartDate",
    title: "Start Date",
    render(p) {
      return p?.StartDate !== ""
        ? new Date(p?.StartDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "EndDate",
    id: "EndDate",
    title: "End Date",
    render(p) {
      return p?.EndDate !== ""
        ? new Date(p?.EndDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "DateCreated",
    id: "DateCreated",
    title: "Last Created",
    render(p) {
      return p?.DateCreated !== ""
        ? new Date(p?.DateCreated)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "DateLastUpdated",
    id: "DateLastUpdated",
    title: "Last Updated",
    render(p) {
      return p?.DateLastUpdated !== ""
        ? new Date(p?.DateLastUpdated)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "PurchaseLimitQuantity",
    id: "PurchaseLimitQuantity",
    title: "Purchase Limit Quantity",
    styleConfig: {
      width: 170,
    },
  },
  {
    dataIndex: "RebateAmount",
    id: "RebateAmount",
    title: "Rebate Amount",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "RebateCurrency",
    id: "RebateCurrency",
    title: "Rebate Currency",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "MinimumPurchaseAmountCurrency",
    id: "MinimumPurchaseAmountCurrency",
    title: "Purchase Currency",
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "MinimumPurchaseAmount",
    id: "MinimumPurchaseAmount",
    title: "Purchase Amount",
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "MaximumSavingsCurrency",
    id: "MaximumSavingsCurrency",
    title: "Max Saving Currency",
    styleConfig: {
      width: 170,
    },
  },
  {
    dataIndex: "MaximumSavingsAmount",
    id: "MaximumSavingsAmount",
    title: "Max Saving Amount",
    styleConfig: {
      width: 170,
    },
  },
  {
    dataIndex: "Gift",
    id: "Gift",
    title: "Gift",
    styleConfig: {
      width: 100,
    },
  },
  {
    dataIndex: "DiscountType",
    id: "DiscountType",
    title: "Discount Type",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "DiscountPercent",
    id: "DiscountPercent",
    title: "Discount %",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "DiscountCurrency",
    id: "DiscountCurrency",
    title: "Discount Currency",
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "DiscountAmount",
    id: "DiscountAmount",
    title: "Discount Amount",
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "DiscountPercentRangeEnd",
    id: "DiscountPercentRangeEnd",
    title: "Discount Range",
    render(p) {
      return p?.DiscountPercentRangeEnd === "" ||
        p?.DiscountPercentRangeStart === ""
        ? "-"
        : `${p?.DiscountPercentRangeStart} - ${p?.DiscountPercentRangeEnd}`;
    },
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "Public",
    id: "Public",
    title: "Public",
    render(o) {
      return o?.Public ? "Yes" : "No";
    },
    styleConfig: {
      width: 70,
    },
  },
  {
    dataIndex: "BogoGetName",
    id: "BogoGetName",
    title: "Details",
    render(p) {
      return (
        <Anchor
          text="Visit"
          as="link"
          href={`/impact/programs/${p?.CampaignId}/deals/${p?.Id}`}
        />
      );
    },
  },
];
