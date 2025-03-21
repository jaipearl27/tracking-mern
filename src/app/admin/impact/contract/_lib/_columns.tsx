"use client";
import { Columns } from "@/components/common/TableV2";
import { contractListingData } from "./_data";
import Anchor from "@/components/common/Anchor";
import EventPayoutModal from "./components/EventPayoutModal";

export const contractListingTableColumns: Columns<
  (typeof contractListingData)["Contracts"][0]
> = [
  {
    id: "CampaignId",
    dataIndex: "CampaignId",
    title: "Campaign",
    render(p: any) {
      return (
        <Anchor as="link" text="Visit" href={`/impact/programs/${p?.CampaignId}`} />
      );
    },
    styleConfig: {
      width: 120,
    },
  },
  {
    id: "Id",
    dataIndex: "Id",
    title: "Contract Details",
    render(p: any) {
      return <Anchor as="link" text="View" href={`/impact/contract/${p?.Id}`} />;
    },
    styleConfig: {
      width: 120,
    },
  },
  {
    id: "Status",
    dataIndex: "Status",
    title: "Status",
    styleConfig: {
      width: 120,
    },
  },
  {
    id: "StartDate",
    dataIndex: "StartDate",
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
    id: "EndDate",
    dataIndex: "EndDate",
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
    id: "BrandSignatory",
    dataIndex: "BrandSignatory",
    title: "Brand Signatory",
    styleConfig: {
      width: 120,
    },
  },
  {
    id: "BrandSignatoryDate",
    dataIndex: "BrandSignatoryDate",
    title: "Brand Signatory Date",
    render(p) {
      return p?.BrandSignatoryDate !== ""
        ? new Date(p?.BrandSignatoryDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    id: "PartnerSignatory",
    dataIndex: "PartnerSignatory",
    title: "Partner Signatory",
    styleConfig: {
      width: 120,
    },
  },
  {
    id: "PartnerSignatoryDate",
    dataIndex: "PartnerSignatoryDate",
    title: "Partner Signatory Date",
    render(p) {
      return p?.PartnerSignatoryDate !== ""
        ? new Date(p?.PartnerSignatoryDate)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    id: "DateCreated",
    dataIndex: "DateCreated",
    title: "Date Created",
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
    id: "DateLastUpdated",
    dataIndex: "DateLastUpdated",
    title: "Date Last Updated",
    render(p) {
      return p?.DateLastUpdated !== ""
        ? new Date(p?.DateLastUpdated)?.toLocaleDateString()
        : "-";
    },
    styleConfig: {
      width: 150,
    },
  },
  {
    dataIndex: "Terms",
    id: "Terms",
    title: "Currency",
    render(p: any) {
      return p?.Terms?.Currency;
    },
  },
  {
    dataIndex: "Terms",
    id: "Terms",
    title: "Change Notification Period",
    render(p: any) {
      return p?.Terms?.ChangeNotificationPeriod;
    },
    styleConfig: {
      width: 180,
    },
  },
  {
    dataIndex: "Terms",
    id: "Terms",
    title: "Return Policy",
    render(p: any) {
      return p?.Terms?.ReturnPolicy;
    },
    styleConfig: {
      width: 120,
    },
  },
  {
    dataIndex: "Terms",
    id: "Terms",
    title: "Max Return Percentage",
    render(p: any) {
      return p?.Terms?.MaxReturnPercentage;
    },
    styleConfig: {
      width: 160,
    },
  },
  {
    dataIndex: "Terms",
    id: "Terms",
    title: "Custom Creative Payer",
    render(p: any) {
      return p?.Terms?.CustomCreativePayer;
    },
    styleConfig: {
      width: 160,
    },
  },
  {
    dataIndex: "Terms",
    id: "Terms",
    title: "View Payouts",
    render(p: any) {
      return <EventPayoutModal data={p?.Terms?.EventPayouts} />;
    },
    styleConfig: {
      width: 120,
    },
  },
];
