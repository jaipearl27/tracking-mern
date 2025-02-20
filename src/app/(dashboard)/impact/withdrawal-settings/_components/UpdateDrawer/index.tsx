"use client";
import Anchor from "@/components/common/Anchor";
import Drawer from "@/components/common/Drawer";
import RhfSelect from "@/components/rhf-fields/Select";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import { paymentMethodOption } from "@/utils/options/paymentMethodOption";
import React, { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { updateWithdrawalSettingFormSchema } from "./schema";
import LargeButton from "@/components/common/LargeButton";
import "./styles.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import RhfInput from "@/components/rhf-fields/Input";
import { beneficiaryClassificationOption } from "@/utils/options/beneficiaryClassificationOption";
import { bankAccountTypeOption } from "@/utils/options/bankAccountTypeOption";
import { PaymentSchedulingTypeOption } from "@/utils/options/paymentSchedulingTypeOption";
import { filterUndefined } from "@/utils/functions/filterUndefined";
import { IMPACT_ACTION_UPDATE_WITHDRAWAL_SETTINGS } from "@/utils/Providers/Impact/API";
import toast from "react-hot-toast";
import { applyRevalidation } from "@/utils/functions/revalidatePath";

type Payload = z.infer<typeof updateWithdrawalSettingFormSchema>;

type Props = Payload & {};

const UpdateWithdrawalSettingDrawer: React.FC<Props> = ({ ...formValues }) => {
  const { handleChange, isOpen } = useToggleBoolean();
  const [isPending, startTransition] = useTransition();

  const form = useForm<Payload>({
    resolver: zodResolver(updateWithdrawalSettingFormSchema),
    defaultValues: filterUndefined({ ...formValues }),
  });

  const { handleSubmit, getValues, watch } = form;

  console.log(watch(), "FORM_____VALUES____");

  const submitForm = async (data: Payload) => {
    startTransition(async () => {
      try {
        const filteredData = filterUndefined(data);

        console.log(filteredData, "FILTERED____DATA");

        const res = await IMPACT_ACTION_UPDATE_WITHDRAWAL_SETTINGS(
          filteredData,
        );

        if (!res) {
          // Throws error toast
          toast.error("Error Occured while updating.");
        }

        // Success toast
        toast?.success("Successfully Updated Withdrawal Settings");
        await applyRevalidation?.("/withdrawal-settings");

        handleChange?.(false);
      } catch (e) {
        // throws error toast
        toast.error("Error Occured while updating.");
      }
    });
  };

  return (
    <>
      <Anchor text="Update" onClick={() => handleChange?.(true)} />
      <Drawer
        isOpen={isOpen}
        onClose={() => handleChange?.(false)}
        title="Update Withdrawal Settings">
        <div className="content-wrapper">
          <FormProvider {...form}>
            <form
              id="update-withdrawal-settings-form"
              onSubmit={handleSubmit(submitForm)}
              className="form-wrapper hide-scroll">
              <RhfSelect
                id="PaymentMethod"
                label="Select Payment Method"
                options={paymentMethodOption}
              />
              <RhfInput id="PaypalEmailAddress" label="Paypal Email Address" />
              <RhfInput
                id="BeneficiaryAccountName"
                label="Beneficiary Account Name"
              />
              <RhfInput id="BankCountry" label="Bank Country" />
              <RhfSelect
                id="BeneficiaryClassification"
                label="Select Beneficiary Classification"
                options={beneficiaryClassificationOption}
              />
              <RhfInput
                id="BeneficiaryAlternativeName"
                label="Beneficiary Alternative Name"
              />
              <RhfInput
                id="BeneficiaryTaxPayerId"
                label="Beneficiary Tax Payer Id"
              />
              <RhfSelect
                id="BankAccountType"
                label="Bank Account Type"
                options={bankAccountTypeOption}
              />
              <RhfInput id="BankAccountNumber" label="Bank Account Number" />
              <RhfInput id="SwiftCode" label="Swift Code" />
              <RhfInput id="RoutingCode" label="Routing Code" />
              <RhfInput id="VoCode" label="Vo Code" />
              <RhfInput id="AgencyCode" label="Agency Code" />
              <RhfInput id="BankAddress" label="Bank Address" />
              <RhfInput id="BankPostalCode" label="Bank Postal Code" />
              <RhfInput id="BankCity" label="Bank City" />
              <RhfInput id="BankState" label="Bank State" />
              <RhfInput id="BranchCode" label="Branch Code" />
              <RhfInput id="BankName" label="Bank Name" />
              <RhfSelect
                id="PaymentSchedulingType"
                label="Payment Scheduling Type"
                options={PaymentSchedulingTypeOption}
              />
              <RhfInput id="PaymentThreshold" label="Payment Threshold" />
              <RhfInput id="PaymentDay" label="Payment Day" />
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

export default UpdateWithdrawalSettingDrawer;
