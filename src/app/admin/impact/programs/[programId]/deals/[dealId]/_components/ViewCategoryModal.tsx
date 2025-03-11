"use client";
import Modal from "@/components/common/Modal";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import React from "react";
import Anchor from "@/components/common/Anchor";

type Props = {
  data: string[];
};

const ViewCategoryModal = ({ data }: Props) => {
  const { handleChange, isOpen } = useToggleBoolean();

  return (
    <>
      <Modal
        title="Deal Categories"
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

      <Anchor text="View" onClick={() => handleChange(true)} />
    </>
  );
};

export default ViewCategoryModal;
