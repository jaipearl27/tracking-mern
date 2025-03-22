"use client";
import Modal from "@/components/common/Modal";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import React from "react";
import CompaignShortInfo from "../../ShortInfo";
import Anchor from "@/components/common/Anchor";

type Props = {
  data: string[];
};

const DeepLinks = ({ data }: Props) => {
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
        title="Deep Links"
      />
    </>
  );
};

export default DeepLinks;
