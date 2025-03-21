import Anchor from "@/components/common/Anchor";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import InfoItem from "@/components/common/InfoItem";
import { IMPACT_ACTION_JOB_GET_SINGLE } from "@/utils/Providers/Impact/API";
import React from "react";
import DownloadJob from "./_components/DownloadJob";
import { JobStatus } from "@/types/Impact/job";
import ReplayJob from "./_components/ReplayJob";
import MaxWidth from "@/components/common/MaxWidth";

const SpecificJobPage = async (props: any) => {
  const data = await IMPACT_ACTION_JOB_GET_SINGLE(props?.params?.jobId);

  const isReplayEnabled =
    data?.Status ===
    (JobStatus?.COMPLETED || JobStatus?.FAILED || JobStatus?.CANCELLED);

  return (
    <MaxWidth width={1200}>
      <Heading text="Job Details" mb={15} />
      <Divider mb={15} />
      <InfoItem title="Job Type" value={data?.Type} />
      {typeof data?.ProgramId === "string" && data?.ProgramId !== "" && (
        <InfoItem
          title="View Campaign"
          value={
            <Anchor
              text="View"
              as="link"
              href={`/impact/programs/${data?.ProgramId}`}
            />
          }
        />
      )}
      <InfoItem
        title="Created Date"
        value={
          data?.CreatedDate
            ? new Date(data?.CreatedDate)?.toLocaleDateString()
            : "-"
        }
      />
      <InfoItem
        title="Started Date"
        value={
          data?.StartedDate
            ? new Date(data?.StartedDate)?.toLocaleDateString()
            : "-"
        }
      />
      <InfoItem
        title="Abandoned Date"
        value={
          data?.AbandonedDate
            ? new Date(data?.AbandonedDate)?.toLocaleDateString()
            : "-"
        }
      />
      <InfoItem
        title="Completed Date"
        value={
          data?.CompletedDate
            ? new Date(data?.CompletedDate)?.toLocaleDateString()
            : "-"
        }
      />
      <InfoItem
        title="Cancelled Date"
        value={
          data?.CancelledDate
            ? new Date(data?.CancelledDate)?.toLocaleDateString()
            : "-"
        }
      />
      <InfoItem
        title="Failed Date"
        value={
          data?.FailedDate
            ? new Date(data?.FailedDate)?.toLocaleDateString()
            : "-"
        }
      />
      <InfoItem
        title="Last Progress Update Date"
        value={
          data?.LastProgressUpdateDate
            ? new Date(data?.LastProgressUpdateDate)?.toLocaleDateString()
            : "-"
        }
      />
      <InfoItem title="Status" value={data?.Status} />
      <InfoItem title="Status Message" value={data?.StatusMessage} />
      <InfoItem title="Records Processed" value={data?.RecordsProcessed} />
      <InfoItem title="Percentage Complete" value={data?.PercentageComplete} />
      <InfoItem title="Replayable" value={data?.Replayable ? "Yes" : "No"} />
      {isReplayEnabled && <InfoItem title="Replay Job" value={<ReplayJob />} />}
      <InfoItem
        includeDivider={false}
        title="Download Results"
        value={<DownloadJob downloadURI={data?.ResultUri || ""} />}
      />
    </MaxWidth>
  );
};

export default SpecificJobPage;
