"use client";
import Anchor from "@/components/common/Anchor";
import { applyRevalidation } from "@/utils/functions/revalidatePath";
import { IMPACT_ACTION_JOB_REPLAY } from "@/utils/Providers/Impact/API";
import { useParams } from "next/navigation";
import React, { useTransition } from "react";
import toast from "react-hot-toast";

const ReplayJob = () => {
  const [pending, startTransition] = useTransition();

  const params = useParams();

  const jobId = params?.jobId as string;

  const handleReplayJob = async () => {
    startTransition(async () => {
      try {
        await IMPACT_ACTION_JOB_REPLAY(jobId);
        toast?.success("Job Successfully Replayed");
        await applyRevalidation(`/jobs/${jobId}`);
      } catch (e) {
        toast?.error("Error Occured while replaying the job");
      }
    });
  };

  return (
    <Anchor
      text={pending ? "Loading..." : "Replay"}
      onClick={handleReplayJob}
    />
  );
};

export default ReplayJob;
