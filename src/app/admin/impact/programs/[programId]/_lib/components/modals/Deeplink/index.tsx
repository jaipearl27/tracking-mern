"use client";
import Anchor from "@/components/common/Anchor";
import Modal from "@/components/common/Modal";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import React from "react";

type Props = { data: string[] };

const DeeplinkDomainModal = ({ data }: Props) => {
  const { handleChange, isOpen } = useToggleBoolean();

  return (
    <>
      <Anchor text="View" onClick={() => handleChange(true)} />
      <Modal
        onClose={() => handleChange(false)}
        open={isOpen}
        title="DeepLink Domain">
        <div style={{ display: "flex", gap: 5, flexDirection: "column" }}>
          {data?.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </Modal>
    </>
  );
};

export default DeeplinkDomainModal;
