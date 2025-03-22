"use client";
import Anchor from "@/components/common/Anchor";
import Modal from "@/components/common/Modal";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";

type Props = {
  data: string[];
};

const ShippingRegionsModal = ({ data }: Props) => {
  const { handleChange, isOpen } = useToggleBoolean();

  return (
    <>
      <Anchor text="View" onClick={() => handleChange(true)} />
      <Modal
        title="Shipping Regions"
        open={isOpen}
        onClose={() => handleChange(false)}>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {data?.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ShippingRegionsModal;
