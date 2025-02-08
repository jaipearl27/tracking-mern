"use client";
import Anchor from "@/components/common/Anchor";
import TableV2 from "@/components/common/TableV2";
import React from "react";
import TermsContentModal from "./TermsContentModal";

type Props = {
  data: any[];
};

const SpecialTerms = ({ data }: Props) => {
  return (
    <div style={{ marginTop: 15 }}>
      <h6 style={{ marginBottom: 15 }} className="subheading">
        Special Terms
      </h6>
      <div style={{ display: "grid" }}>
        <TableV2
          columns={[
            {
              dataIndex: "TermsName",
              id: "TermsName",
              title: "Name",
            },
            {
              dataIndex: "TermsType",
              id: "TermsType",
              title: "Type",
            },
            {
              dataIndex: "TermsContent",
              id: "TermsContent",
              title: "Content",
              render(p) {
                return <TermsContentModal content={p?.TermsContent} />;
              },
            },
          ]}
          data={data}
        />
      </div>
    </div>
  );
};

export default SpecialTerms;
