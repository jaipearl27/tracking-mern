"use client";
import Anchor from "@/components/common/Anchor";
import Drawer from "@/components/common/Drawer";
import LargeButton from "@/components/common/LargeButton";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import React, { useTransition } from "react";
import "./styles.scss";
import { FormProvider, useForm } from "react-hook-form";
import RhfSelect from "@/components/rhf-fields/Select";
import { taxDocTypeOption } from "./options";
import RhfInput from "@/components/rhf-fields/Input";
import { createTaxDocumentFormSchema } from "./schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { IMPACT_ACTION_CREATE_TAX_DOCUMENT } from "@/utils/Providers/Impact/API";
import { filterUndefined } from "@/utils/functions/filterUndefined";
import { applyRevalidation } from "@/utils/functions/revalidatePath";

type Payload = z.infer<typeof createTaxDocumentFormSchema>;

const CreateTaxDocumentFormDrawer = () => {
  const { handleChange, isOpen } = useToggleBoolean();

  const [isPending, start] = useTransition();

  const form = useForm<Payload>({
    resolver: zodResolver(createTaxDocumentFormSchema),
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = form;

  const submitForm = (data: any) => {
    start(async () => {
      //
      console.log(data, "DATA");
      try {
        const filteredData = filterUndefined(data);

        const final = await IMPACT_ACTION_CREATE_TAX_DOCUMENT?.(filteredData);
        console.log(final, "DATA");
        await applyRevalidation("/tax-documents");
        toast.success("Successfully submitted the form");
        handleChange?.(false);
      } catch (e) {
        toast.error("Error Occured While Submitting the form");
      }
    });
  };

  const handleDrawerClose = () => {
    !isDirty && handleChange?.(false);
  };

  return (
    <>
      <LargeButton
        onClick={() => handleChange?.(true)}
        buttonText="Create"
        variant="PRIMARY"
      />
      <Drawer
        isOpen={isOpen}
        onClose={handleDrawerClose}
        title="Create Tax Document">
        <div className="content-wrapper">
          <FormProvider {...form}>
            <form
              id="update-withdrawal-settings-form"
              onSubmit={handleSubmit(submitForm)}
              className="form-wrapper hide-scroll">
              <RhfSelect
                id="DocType"
                label="Document Type"
                options={taxDocTypeOption}
                helperText="In order to create a new tax document, you need to specify the DocType. Below is a list of possible DocType parameters that you can pass:"
              />
              <RhfInput
                id="UserId"
                label="User Id"
                helperText="The ID of the account user. If left out, the ID of the first user on the account will be selected."
              />
              <RhfInput
                id="ReturnUrl"
                label="Return Url"
                helperText="The absolute URL that DocuSign will use as a callback when the document has been signed. Note that this is restricted to only a few domains currently."
              />
            </form>
          </FormProvider>

          <div className="form-footer">
            <LargeButton
              formId="update-withdrawal-settings-form"
              type="submit"
              buttonText={isPending ? "Submitting..." : "Submit"}
              variant="PRIMARY"
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CreateTaxDocumentFormDrawer;
