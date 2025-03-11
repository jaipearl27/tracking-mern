"use client";
import Anchor from "@/components/common/Anchor";
import Drawer from "@/components/common/Drawer";
import LargeButton from "@/components/common/LargeButton";
import React, { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./styles.scss";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import { z } from "zod";
import { createTrackingLinkFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RhfSelect from "@/components/rhf-fields/Select";
import {
  CreateTrackingLinkPayload,
  TrackingLinkType,
} from "@/types/Impact/trackingLink";
import RhfInput from "@/components/rhf-fields/Input";
import { filterUndefined } from "@/utils/functions/filterUndefined";
import { useParams } from "next/navigation";
import { IMPACT_ACTION_CREATE_TRACKING_LINK } from "@/utils/Providers/Impact/API";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";
import { applyRevalidation } from "@/utils/functions/revalidatePath";
import { createTrackingLinkReference } from "@/utils/firebase/trackingLink";

type Payload = z.infer<typeof createTrackingLinkFormSchema>;

const CreateTrackingLinkForm = () => {
  const { handleChange, isOpen } = useToggleBoolean();
  const [isPending, startTransition] = useTransition();

  const params = useParams();

  const form = useForm<Payload>({
    resolver: zodResolver(createTrackingLinkFormSchema),
  });
  const { handleSubmit } = form;

  const submitForm = async (data: Payload) => {
    startTransition(async () => {
      const filteredPayload: Payload = filterUndefined(data);

      const finalPayload: CreateTrackingLinkPayload = {
        ...filteredPayload,
        ProgramId: params?.programId as string,
      };

      console.log({ data, filteredPayload, finalPayload }, "PAYLOAD___");

      try {
        const trackingLink: any = await IMPACT_ACTION_CREATE_TRACKING_LINK({
          programId: finalPayload?.ProgramId,
          payload: finalPayload,
        });
        console.log("API___SUCCEEDED", trackingLink);

        await applyRevalidation("/programs/[programId]");

        await createTrackingLinkReference({
          campaignId: String(params?.programId || ""),
          trackingLinkUrl: trackingLink?.TrackingURL,
        });

        await navigator.clipboard.writeText(trackingLink?.TrackingURL);

        toast.success("Successfully Created and copied Tracking Link");

        handleChange?.(false);
      } catch (e) {
        console.log(e, "ERROR___");
        toast.error("Error Occured while creating the tracking link");
        handleChange?.(false);
      }
    });
  };

  return (
    <React.Fragment>
      <Anchor text="Create" onClick={() => handleChange?.(true)} />
      <Drawer
        isOpen={isOpen}
        onClose={() => handleChange?.(false)}
        title="Create Tracking Link">
        <div className="content-wrapper">
          <FormProvider {...form}>
            <form
              id="update-account-form"
              onSubmit={handleSubmit(submitForm)}
              className="form-wrapper hide-scroll">
              <RhfSelect
                id="Type"
                label="Link Type"
                options={[
                  {
                    label: TrackingLinkType.REGULAR,
                    value: TrackingLinkType.REGULAR,
                  },
                  {
                    label: TrackingLinkType.VANITY,
                    value: TrackingLinkType.VANITY,
                  },
                ]}
              />
              <RhfInput id="CustomPath" label="Custom Path" />
              <RhfInput
                id="AdId"
                label="Ad ID"
                placeholder="Enter Unique Ad Id."
              />
              <RhfInput
                id="DeepLink"
                label="Deep Link"
                placeholder="Enter Deep Link"
              />
              <RhfInput id="MediaPartnerPropertyId" label="Media Partner Id" />
              <RhfInput id="SubId1" label="Sub Id No 1" />
              <RhfInput id="SubId2" label="Sub Id No 2" />
              <RhfInput id="SubId3" label="Sub Id No 3" />
              <RhfInput id="sharedId" label="Shared Id" />
            </form>
          </FormProvider>
          <div className="form-footer">
            <LargeButton
              formId="update-account-form"
              type="submit"
              buttonText={isPending ? "Loading...." : "Submit"}
              variant="PRIMARY"
            />
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default CreateTrackingLinkForm;
