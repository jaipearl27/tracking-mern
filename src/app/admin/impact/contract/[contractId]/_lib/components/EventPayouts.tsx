"use client";
import TableV2 from "@/components/common/TableV2";
import React from "react";

type Props = {
  data: any[];
};

const EventPayouts = ({ data }: Props) => {
  return (
    <div>
      <h6 style={{ marginBottom: 15 }} className="subheading">
        Event Payouts
      </h6>
      <div style={{ display: "grid" }}>
        <TableV2
          columns={[
            {
              dataIndex: "EventTypeName",
              id: "EventTypeName",
              title: "Name",
              styleConfig: {
                width: 120,
              },
            },
            {
              dataIndex: "EventCategory",
              id: "EventCategory",
              title: "Category",
              styleConfig: {
                width: 120,
              },
            },
            {
              dataIndex: "DefaultPayoutRate",
              id: "DefaultPayoutRate",
              title: "Default Payout Rate",
              styleConfig: {
                width: 150,
              },
            },
            {
              dataIndex: "PayoutLevel",
              id: "PayoutLevel",
              title: "Payout Level",
              styleConfig: {
                width: 120,
              },
            },
            {
              dataIndex: "Locking",
              id: "Locking",
              title: "Locking Basis",
              render(p: any) {
                return p?.Locking?.Basis;
              },
              styleConfig: {
                width: 120,
              },
            },
            {
              dataIndex: "Locking",
              id: "Locking",
              title: "Locking Period",
              render(p: any) {
                return p?.Locking?.Period;
              },
              styleConfig: {
                width: 120,
              },
            },
            {
              dataIndex: "Locking",
              id: "Locking",
              title: "Locking Month Offset",
              render(p: any) {
                return p?.Locking?.MonthOffset;
              },
              styleConfig: {
                width: 160,
              },
            },
            {
              dataIndex: "Locking",
              id: "Locking",
              title: "Locking Day Offset",
              render(p: any) {
                return p?.Locking?.DayOffset;
              },
              styleConfig: {
                width: 160,
              },
            },

            {
              dataIndex: "PayoutScheduling",
              id: "PayoutScheduling",
              title: "Payout Scheduling Basis",
              render(p: any) {
                return p?.Locking?.Basis;
              },
              styleConfig: {
                width: 160,
              },
            },
            {
              dataIndex: "PayoutScheduling",
              id: "PayoutScheduling",
              title: "PayoutScheduling Period",
              render(p: any) {
                return p?.PayoutScheduling?.Period;
              },
              styleConfig: {
                width: 200,
              },
            },
            {
              dataIndex: "PayoutScheduling",
              id: "PayoutScheduling",
              title: "PayoutScheduling Month Offset",
              render(p: any) {
                return p?.PayoutScheduling?.MonthOffset;
              },
              styleConfig: {
                width: 200,
              },
            },
            {
              dataIndex: "PayoutScheduling",
              id: "PayoutScheduling",
              title: "PayoutScheduling Day Offset",
              render(p: any) {
                return p?.PayoutScheduling?.DayOffset;
              },
              styleConfig: {
                width: 200,
              },
            },
          ]}
          data={data as any}
        />
      </div>
    </div>
  );
};

export default EventPayouts;
