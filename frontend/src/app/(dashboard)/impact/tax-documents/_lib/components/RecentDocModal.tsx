"use client";
import Anchor from "@/components/common/Anchor";
import Divider from "@/components/common/Divider";
import InfoItem from "@/components/common/InfoItem";
import Modal from "@/components/common/Modal";
import Spinner from "@/components/common/Spinner";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import { IMPACT_ACTION_GET_RECENT_TAX_DOCUMENT } from "@/utils/Providers/Impact/API";
import React from "react";
import useSWR from "swr";

const RecentDocModal = () => {
  const { handleChange, isOpen } = useToggleBoolean();

  const { data, isLoading } = useSWR("/recent-tax-doc", async () => {
    return await IMPACT_ACTION_GET_RECENT_TAX_DOCUMENT?.();
  });

  return (
    <>
      <Anchor text="Last Saved Doc" onClick={() => handleChange?.(true)} />
      <Modal
        title="Last Saved Tax Document"
        open={isOpen}
        height={400}
        width={600}
        onClose={() => handleChange?.(false)}>
        <Divider />

        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Spinner />
          </div>
        ) : (
          <>
            <InfoItem titleWidth={150} title="Id" value={data.Id} />
            <InfoItem titleWidth={150} title="User Id" value={data.UserId} />
            <InfoItem titleWidth={150} title="Email" value={data.Email} />
            <InfoItem
              titleWidth={150}
              title="Envelope Id"
              value={data.EnvelopeId}
            />
            <InfoItem titleWidth={150} title="Status" value={data.Status} />
            <InfoItem titleWidth={150} title="Type" value={data.Type} />
            <InfoItem
              titleWidth={150}
              title="Submit Date"
              value={
                data.SubmitDate
                  ? new Date(data.SubmitDate)?.toLocaleDateString()
                  : "-"
              }
            />
            <InfoItem
              titleWidth={150}
              title="Update Date"
              value={
                data.UpdateDate
                  ? new Date(data.UpdateDate)?.toLocaleDateString()
                  : "-"
              }
              includeDivider={false}
            />
          </>
        )}
      </Modal>
    </>
  );
};

export default RecentDocModal;
