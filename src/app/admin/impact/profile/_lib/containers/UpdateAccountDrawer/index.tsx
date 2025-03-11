"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { z } from "zod";

// Components
import Drawer from "@/components/common/Drawer";
import LargeButton from "@/components/common/LargeButton";
import RhfInput from "@/components/rhf-fields/Input";
import RhfSelect from "@/components/rhf-fields/Select";

// Hooks
import { useToggleBoolean } from "@/hooks/useToggleBoolean";

// Utils
import { isoCountryvalueOption } from "@/utils/options/isoCountryCodeOption";
import { organizationTypeOptions } from "@/utils/options/organizationTypeOption";
import { promotionalMethodOptions } from "@/utils/options/promotionalMethodOption";
// import { IMPACT_ACTION_ACCOUNT_UPDATE } from "@/utils/Providers/Impact/API";
import { updateAccountFormSchema } from "./schema";

// Styles
import "./styles.scss";
import { filterUndefined } from "@/utils/functions/filterUndefined";

type Payload = z.infer<typeof updateAccountFormSchema>;

const UpdateAccountDrawer = () => {
  // Hooks
  const { handleChange, isOpen } = useToggleBoolean();
  const [pending, start] = useTransition();

  const form = useForm<Payload>({
    resolver: zodResolver(updateAccountFormSchema),
  });

  //
  const { handleSubmit } = form;

  //
  const submitForm = async (data: Payload) => {
    start(async () => {
      const filteredValues = filterUndefined(data || {});
      // const pp = await IMPACT_ACTION_ACCOUNT_UPDATE(filteredValues);

      // console.log(pp, "RESPONSE_______");
    });
  };

  return (
    <>
      <div className="icon-wrapper" onClick={() => handleChange(true)}>
        <AiOutlineEdit size={15} />
      </div>
      <Drawer
        title="Update Account Info"
        isOpen={isOpen}
        onClose={() => handleChange(false)}>
        <div className="content-wrapper">
          <FormProvider {...form}>
            <form
              id="update-account-form"
              onSubmit={handleSubmit(submitForm)}
              className="form-wrapper hide-scroll">
              <RhfInput id="CompanyName" label="Company Name" />
              <RhfSelect
                id="PrimaryPromotionalMethod"
                label="Primary Promotional Method"
                options={promotionalMethodOptions}
              />
              <RhfSelect
                id="PromotionalMethod"
                label="Promotional Method"
                options={promotionalMethodOptions}
              />
              <RhfInput id="Website" label="Website" />
              <RhfInput id="PrimaryPhoneNumber" label="Primary Phone No" />
              <RhfSelect
                id="PrimaryPhoneNumberCountry"
                label="Primary Phone No Country"
                options={isoCountryvalueOption}
              />
              <RhfInput id="SecondaryPhoneNumber" label="Secondary Phone No" />
              <RhfSelect
                id="SecondaryPhoneNumberCountry"
                label="Secondary Phone No Country"
                options={isoCountryvalueOption}
              />
              <RhfInput
                id="MinimumContactRating"
                inputType="number"
                label="Minimum Contact Rating"
              />
              <RhfSelect
                id="OrganizationType"
                label="Organization Type"
                options={organizationTypeOptions}
              />
              <RhfInput
                id="EinSsnForeginTaxId"
                label="Ein SSN Foreign Tax Id"
              />
            </form>
          </FormProvider>

          <div className="form-footer">
            {/* <button type="submit" form="update-account-form">
              Submit
            </button> */}
            <LargeButton
              formId="update-account-form"
              type="submit"
              buttonText="Submit"
              variant="PRIMARY"
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default UpdateAccountDrawer;
