// Components
import Container from "@/components/common/Container";
import UpdateAccountDrawer from "./_lib/containers/UpdateAccountDrawer";

// Styles
import "./_lib/styles.scss";

// Api
import { IMPACT_ACTION_ACCOUNT_GET } from "@/utils/Providers/Impact/API";
import InfoGroup from "@/components/common/InfoGroup";
import MaxWidth from "@/components/common/MaxWidth";
import Heading from "@/components/common/Heading";
import InfoItem from "@/components/common/InfoItem";
import {
  createTrackingLinkReference,
  getTrackingLink,
} from "@/utils/firebase/trackingLink";

async function AccountPage() {
  const data = await IMPACT_ACTION_ACCOUNT_GET();

  console.log(data, "IMPACT___ACCOUNT____DATA___");
  // const s = await createTrackingLinkReference({
  //   campaignId: String(394),
  //   trackingLinkUrl: "https://youtube.com/",
  // });
  // console.log(s, "CREATED___TRACKING_LINK_DATA");

  return (
    <MaxWidth width={1200}>
      <div className="page-heading">
        <Heading text="Accounts Info" />
        <UpdateAccountDrawer />
      </div>
      {/* BASIC INFO */}
      <InfoGroup heading="Basic Info">
        <InfoItem title="Company Name" value={data?.CompanyName} />
        <InfoItem
          title="Primary Promotional Method"
          value={data?.PrimaryPromotionalMethod}
        />
        <InfoItem
          title="Promotional Methods"
          value={data?.PromotionalMethods}
        />
        <InfoItem title="Website" value={data?.Website} />
        <InfoItem
          title="Primary Phone Number"
          value={data?.PrimaryPhoneNumber}
        />
        <InfoItem
          title="Primary Phone Number Country"
          value={data?.PrimaryPhoneNumberCountry}
        />
        <InfoItem
          title="Secondary Phone Number"
          value={data?.SecondaryPhoneNumber}
        />
        <InfoItem
          title="Secondary Phone Number Country"
          value={data?.SecondaryPhoneNumberCountry}
        />
        <InfoItem
          title="Minimum Contact Rating"
          value={data?.MinimumContactRating}
        />
        <InfoItem title="Timezone" value={data?.Timezone} />
        <InfoItem title="Currency" value={data?.Currency} />
        <InfoItem
          title="Registered For Indirect Tax"
          value={data?.RegisteredForIndirectTax ? "Yes" : "No"}
        />

        <InfoItem title="Organization Type" value={data?.OrganizationType} />
        <InfoItem
          title="Ein SSN Foreign Tax ID"
          value={data?.EinSsnForeignTaxId}
        />
        {/* <InfoItem title="URI" value={data?.Uri} includeDivider={false} /> */}
      </InfoGroup>
      {/* COORPORATE ADDRESS */}
      <InfoGroup heading="Corporate Address">
        <InfoItem
          title="Address 1"
          value={data?.CorporateAddress?.AddressLine1}
        />
        <InfoItem
          title="Address 2"
          value={data?.CorporateAddress?.AddressLine2}
        />
        <InfoItem title="City" value={data?.CorporateAddress?.City} />
        <InfoItem title="Country" value={data?.CorporateAddress?.Country} />
        <InfoItem title="State" value={data?.CorporateAddress?.State} />
        <InfoItem
          title="Postal Code"
          value={data?.CorporateAddress?.PostalCode}
          includeDivider={false}
        />
      </InfoGroup>
      {/* BILLING ADDRESS */}
      <InfoGroup heading="Billing Address">
        <InfoItem
          title="Address 1"
          value={data?.BillingAddress?.AddressLine1}
        />
        <InfoItem
          title="Address 2"
          value={data?.BillingAddress?.AddressLine2}
        />
        <InfoItem title="City" value={data?.BillingAddress?.City} />
        <InfoItem title="Country" value={data?.BillingAddress?.Country} />
        <InfoItem title="State" value={data?.BillingAddress?.State} />
        <InfoItem
          title="Postal Code"
          value={data?.BillingAddress?.PostalCode}
          includeDivider={false}
        />
      </InfoGroup>
      {/* Financial Contact */}
      <InfoGroup heading="Financial Contact">
        <InfoItem title="Name" value={data?.FinancialContact?.Name} />
        <InfoItem title="Email" value={data?.FinancialContact?.Email} />
        <InfoItem
          title="Work Phone Number"
          value={data?.FinancialContact?.WorkPhoneNumber}
        />
        <InfoItem
          title="Work Phone Number Country"
          value={data?.FinancialContact?.WorkPhoneNumberCountry}
        />
        <InfoItem
          title="Cell Phone Number"
          value={data?.FinancialContact?.CellPhoneNumber}
        />
        <InfoItem
          title="Cell Phone Number Country"
          value={data?.FinancialContact?.CellPhoneNumberCountry}
          includeDivider={false}
        />
      </InfoGroup>
      {/* Technical Contact */}
      <InfoGroup heading="Techincal Contact">
        <InfoItem title="Name" value={data?.TechnicalContact?.Name} />
        <InfoItem title="Email" value={data?.TechnicalContact?.Email} />
        <InfoItem
          title="Work Phone Number"
          value={data?.TechnicalContact?.WorkPhoneNumber}
        />
        <InfoItem
          title="Work Phone Number Country"
          value={data?.TechnicalContact?.WorkPhoneNumberCountry}
        />
        <InfoItem
          title="Cell Phone Number"
          value={data?.TechnicalContact?.CellPhoneNumber}
        />
        <InfoItem
          title="Cell Phone Number Country"
          value={data?.TechnicalContact?.CellPhoneNumberCountry}
          includeDivider={false}
        />
      </InfoGroup>
      {/* Security Contact */}
      <InfoGroup heading="Security Contact">
        <InfoItem title="Name" value={data?.SecurityContact?.Name} />
        <InfoItem title="Email" value={data?.SecurityContact?.Email} />
        <InfoItem
          title="Work Phone Number"
          value={data?.SecurityContact?.WorkPhoneNumber}
        />
        <InfoItem
          title="Work Phone Number Country"
          value={data?.SecurityContact?.WorkPhoneNumberCountry}
        />
        <InfoItem
          title="Cell Phone Number"
          value={data?.SecurityContact?.CellPhoneNumber}
        />
        <InfoItem
          title="Cell Phone Number Country"
          value={data?.SecurityContact?.CellPhoneNumberCountry}
          includeDivider={false}
        />
      </InfoGroup>
      {/* Commercial Contact */}
      <InfoGroup heading="Commercial Contact">
        <InfoItem title="Name" value={data?.CommercialContact?.Name} />
        <InfoItem title="Email" value={data?.CommercialContact?.Email} />
        <InfoItem
          title="Work Phone Number"
          value={data?.CommercialContact?.WorkPhoneNumber}
        />
        <InfoItem
          title="Work Phone Number Country"
          value={data?.CommercialContact?.WorkPhoneNumberCountry}
        />
        <InfoItem
          title="Cell Phone Number"
          value={data?.CommercialContact?.CellPhoneNumber}
        />
        <InfoItem
          title="Cell Phone Number Country"
          value={data?.CommercialContact?.CellPhoneNumberCountry}
          includeDivider={false}
        />
      </InfoGroup>
    </MaxWidth>
  );
}

export default AccountPage;
