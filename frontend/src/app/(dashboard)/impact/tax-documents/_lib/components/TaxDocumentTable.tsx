"use client";
import TableV2 from "@/components/common/TableV2";
import React from "react";

type Props = {
  data: any[];
};

const TaxDocumentTable = ({ data }: Props) => {
  return (
    <div style={{ display: "grid" }}>
      <TableV2
        columns={[
          {
            dataIndex: "Id",
            id: "Id",
            title: "Id",
            styleConfig: {
              width: 150,
            },
          },
          {
            dataIndex: "UserId",
            id: "UserId",
            title: "User Id",
            styleConfig: {
              width: 150,
            },
          },
          {
            dataIndex: "Email",
            id: "Email",
            title: "Email",
            styleConfig: {
              width: 150,
            },
          },
          {
            dataIndex: "Status",
            id: "Status",
            title: "Status",
            styleConfig: {
              width: 150,
            },
          },
          {
            dataIndex: "EnvelopeId",
            id: "EnvelopeId",
            title: "Envelope Id",
            styleConfig: {
              width: 200,
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
            dataIndex: "SubmitDate",
            id: "SubmitDate",
            title: "Submit Date",
            render(p) {
              return p?.SubmitDate.trim() !== ""
                ? new Date(p?.SubmitDate)?.toLocaleDateString()
                : "-";
            },
            styleConfig: {
              width: 150,
            },
          },
          {
            dataIndex: "UpdateDate",
            id: "UpdateDate",
            title: "Update Date",
            render(p) {
              return p?.UpdateDate.trim() !== ""
                ? new Date(p?.UpdateDate)?.toLocaleDateString()
                : "-";
            },
            styleConfig: {
              width: 150,
            },
          },
        ]}
        data={data as any}
      />
    </div>
  );
};

export default TaxDocumentTable;
