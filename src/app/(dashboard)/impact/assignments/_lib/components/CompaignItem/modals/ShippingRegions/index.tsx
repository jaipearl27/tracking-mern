"use client";
import React from "react";
import CompaignShortInfo from "../../ShortInfo";
import Anchor from "@/components/common/Anchor";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import Modal from "@/components/common/Modal";

type Props = {
  data: string[];
};

const ShippingRegions = ({ data }: Props) => {
  const { handleChange, isOpen } = useToggleBoolean();

  return (
    <>
      <Modal
        title="Shipping Regions"
        open={isOpen}
        onClose={() => handleChange(false)}>
        <ul style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {data?.map((i, c) => (
            <li key={c} className="no-decoration">
              {i}
            </li>
          ))}
        </ul>
      </Modal>
      <CompaignShortInfo
        content={
          <Anchor
            text="View"
            target="_blank"
            onClick={() => handleChange(true)}
          />
        }
        title="Shipping Regions"
      />
    </>
  );
};

export default ShippingRegions;
