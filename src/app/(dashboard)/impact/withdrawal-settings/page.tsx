import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import InfoItem from "@/components/common/InfoItem";
import { IMPACT_ACTION_GET_WITHDRAWAL_SETTINGS } from "@/utils/Providers/Impact/API";
import React from "react";
import UpdateWithdrawalSettingDrawer from "./_components/UpdateDrawer";
import { Toaster } from "react-hot-toast";
import MaxWidth from "@/components/common/MaxWidth";

type Props = {};

const WithdrawalSettingPage = async (props: Props) => {
  const data = await IMPACT_ACTION_GET_WITHDRAWAL_SETTINGS?.();

  console.log(data, "WITHDRAWAL___SETTINGS_____DATA");

  const { Uri, ...formValues } = data || {};

  return (
    <>
      <MaxWidth width={1400}>
        <Heading text="With Drawal Settings" mb={15} />
        <InfoItem title="Payment Method" value={data?.PaymentMethod} />
        <InfoItem
          title="Paypal Email Address"
          value={data?.PaypalEmailAddress}
        />
        <InfoItem title="Bank Country" value={data?.BankCountry} />
        <InfoItem
          title="Beneficiary Account Name"
          value={data?.BeneficiaryAccountName}
        />
        <InfoItem
          title="Beneficiary Classification"
          value={data?.BeneficiaryClassification}
        />
        <InfoItem
          title="Beneficiary Alternative Name"
          value={data?.BeneficiaryAlternativeName}
        />
        <InfoItem
          title="Beneficiary Tax Payer Id"
          value={data?.BeneficiaryTaxPayerId}
        />
        <InfoItem title="Bank Account Type" value={data?.BankAccountType} />
        <InfoItem title="Bank Account Number" value={data?.BankAccountNumber} />
        <InfoItem title="Swift Code" value={data?.SwiftCode} />
        <InfoItem title="Routing Code" value={data?.RoutingCode} />
        <InfoItem title="Vo Code" value={data?.VoCode} />
        <InfoItem title="Agency Code" value={data?.AgencyCode} />
        <InfoItem title="Bank Address" value={data?.BankAddress} />
        <InfoItem title="Bank Postal Code" value={data?.BankPostalCode} />
        <InfoItem title="Bank City" value={data?.BankCity} />
        <InfoItem title="Bank State" value={data?.BankState} />
        <InfoItem title="Branch Code" value={data?.BranchCode} />
        <InfoItem title="Bank Name" value={data?.BankName} />
        <InfoItem
          title="Payment Scheduling Type"
          value={data?.PaymentSchedulingType}
        />
        <InfoItem title="Payment Threshold" value={data?.PaymentThreshold} />
        <InfoItem title="Payment Day" value={data?.PaymentDay} />
        <InfoItem
          title="Update Withdrawal Settings"
          value={<UpdateWithdrawalSettingDrawer {...(formValues as any)} />}
        />
      </MaxWidth>
      <Toaster position="bottom-left" toastOptions={{ duration: 1500 }} />
    </>
  );
};

export default WithdrawalSettingPage;
