import Anchor from "@/components/common/Anchor";
import Modal from "@/components/common/Modal";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import React from "react";

type Props = {
  content: string;
};

const TermsContentModal = ({ content }: Props) => {
  const { handleChange, isOpen } = useToggleBoolean();

  return (
    <>
      <Anchor text="View" onClick={() => handleChange?.(true)} />
      <Modal
        title="Terms Content Modal"
        open={isOpen}
        onClose={() => handleChange?.(false)}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Modal>
    </>
  );
};

export default TermsContentModal;
