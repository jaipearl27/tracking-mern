"use client";
import Anchor from "@/components/common/Anchor";
import TableV2 from "@/components/common/TableV2";
import React from "react";

type Props = {
  data: any[];
};

const StoreItemsTable = ({ data }: Props) => {
  return (
    <div style={{ display: "grid" }}>
      <TableV2
        columns={[
          {
            dataIndex: "CampaignName",
            title: "Campaign Name",
            id: "CampaignName",
          },
          {
            dataIndex: "Name",
            title: "Name",
            id: "Name",
            render(props: any) {
              return (
                <p className="truncate" style={{ width: 120 }}>
                  {props?.Name}
                </p>
              );
            },
          },
          {
            dataIndex: "Description",
            title: "Description",
            id: "Description",
            render(props: any) {
              return (
                <p className="truncate" style={{ width: 200 }}>
                  {props?.Description}
                </p>
              );
            },
          },
          {
            dataIndex: "MultiPack",
            title: "MultiPack",
            id: "MultiPack",
          },
          {
            dataIndex: "Manufacturer",
            title: "Manufacturer",
            id: "Manufacturer",
          },
          {
            dataIndex: "CurrentPrice",
            title: "Current Price",
            id: "CurrentPrice",
          },
          {
            dataIndex: "OriginalPrice",
            title: "Original Price",
            id: "OriginalPrice",
          },
          {
            dataIndex: "DiscountPercentage",
            title: "Discount Percentage",
            id: "DiscountPercentage",
          },
          {
            dataIndex: "Currency",
            title: "Currency",
            id: "Currency",
          },
          {
            dataIndex: "StockAvailability",
            title: "Stock Availability",
            id: "StockAvailability",
          },
          {
            dataIndex: "EstimatedShipDate",
            title: "Estimated Ship Date",
            id: "EstimatedShipDate",
            render(p) {
              return p?.EstimatedShipDate
                ? new Date(p?.EstimatedShipDate).toLocaleDateString()
                : "-";
            },
          },
          {
            dataIndex: "LaunchDate",
            title: "Launch Date",
            id: "LaunchDate",
            render(p) {
              return p?.LaunchDate
                ? new Date(p?.LaunchDate).toLocaleDateString()
                : "-";
            },
          },
          {
            dataIndex: "ExpirationDate",
            title: "Expiration Date",
            id: "ExpirationDate",
            render(p) {
              return p?.ExpirationDate
                ? new Date(p?.ExpirationDate).toLocaleDateString()
                : "-";
            },
          },
          {
            dataIndex: "Gtin",
            title: "Gtin",
            id: "Gtin",
          },
          {
            dataIndex: "GtinType",
            title: "GtinType",
            id: "GtinType",
          },
          {
            dataIndex: "Asin",
            title: "Asin",
            id: "Asin",
          },
          {
            dataIndex: "Mpn",
            title: "Mpn",
            id: "Mpn",
            render(props: any) {
              return (
                <p className="truncate" style={{ width: 100 }}>
                  {props?.Mpn}
                </p>
              );
            },
          },
          {
            dataIndex: "ShippingRate",
            title: "Shipping Rate",
            id: "ShippingRate",
          },
          {
            dataIndex: "ShippingWeight",
            title: "Shipping Weight",
            id: "ShippingWeight",
          },
          {
            dataIndex: "ShippingWeightUnit",
            title: "Shipping Weight Unit",
            id: "ShippingWeightUnit",
          },
          {
            dataIndex: "ShippingLength",
            title: "Shipping Length",
            id: "ShippingLength",
          },
          {
            dataIndex: "ShippingWidth",
            title: "Shipping Width",
            id: "ShippingWidth",
          },
          {
            dataIndex: "ShippingHeight",
            title: "Shipping Height",
            id: "ShippingHeight",
          },
          {
            dataIndex: "ShippingLengthUnit",
            title: "Shipping Length Unit",
            id: "ShippingLengthUnit",
          },
          {
            dataIndex: "ShippingLabel",
            title: "Shipping Label",
            id: "ShippingLabel",
          },
          {
            dataIndex: "Category",
            title: "Category",
            id: "Category",
          },
          {
            dataIndex: "SubCategory",
            title: "Sub Category",
            id: "SubCategory",
          },
          {
            dataIndex: "AdvertiserFormatCategories",
            title: "Advertiser Format Categories",
            id: "AdvertiserFormatCategories",
          },
          {
            dataIndex: "OriginalFormatCategory",
            title: "Original Format Category",
            id: "OriginalFormatCategory",
          },
          {
            dataIndex: "ParentName",
            title: "Parent Name",
            id: "ParentName",
            render(props: any) {
              return (
                <p className="truncate" style={{ width: 100 }}>
                  {props?.ParentName}
                </p>
              );
            },
          },
          {
            dataIndex: "ParentSku",
            title: "Parent Sku",
            id: "ParentSku",
          },
          {
            dataIndex: "Material",
            title: "Material",
            id: "Material",
          },
          {
            dataIndex: "Pattern",
            title: "Pattern",
            id: "Pattern",
          },
          {
            dataIndex: "Size",
            title: "Size",
            id: "Size",
          },
          {
            dataIndex: "SizeUnit",
            title: "Size Unit",
            id: "SizeUnit",
          },
          {
            dataIndex: "Weight",
            title: "Weight",
            id: "Weight",
          },
          {
            dataIndex: "WeightUnit",
            title: "Weight Unit",
            id: "WeightUnit",
          },
          {
            dataIndex: "Condition",
            title: "Condition",
            id: "Condition",
          },
          {
            dataIndex: "AgeGroup",
            title: "Age Group",
            id: "AgeGroup",
          },
          {
            dataIndex: "AgeRangeMin",
            title: "Age Range",
            id: "AgeRangeMin",
          },
          {
            dataIndex: "Gender",
            title: "Gender",
            id: "Gender",
          },
        ]}
        data={data || []}
      />
    </div>
  );
};

export default StoreItemsTable;
