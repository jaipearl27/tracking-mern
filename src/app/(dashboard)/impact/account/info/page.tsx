import { IMPACT_ACTION_ACCOUNT_GET } from "@/utils/Providers/Impact/API";
import React from "react";
import toast from "react-hot-toast";

async function InfoPage() {
  const data: any = await IMPACT_ACTION_ACCOUNT_GET();
  if (data===null) {
    toast.error("Oops! Some Error Occured.")
  }
  console.log(data, "DATA_________");
  return (
    <div>
      <h2>General</h2>

      <div>
        <h4>Company Name</h4>
        <div>{data.CompanyName}</div>
        <h4>Primary Promotional Method</h4>
        <div>{data.PrimaryPromotionalMethod}</div>
        <h4>Website URL</h4>
        <div>{data.Website}</div>
        <h4>Phone</h4>
        <div>{data.PrimaryPhoneNumber}</div>
        <h4>Primary Phone Number Country</h4>
        <div>{data.PrimaryPhoneNumberCountry}</div>
        <h4>Timezone</h4>
        <div>{data.Timezone}</div>
        <h4>Currency</h4>
        <div>{data.Currency}</div>
      </div>

      <h2>Address</h2>

      <div>
        <h4>Corporate Address</h4>
        <div className="flex-row">
          <div className="flex-row">
            {data.CorporateAddress.AddressLine1},{" "}
            {data.CorporateAddress.AddressLine2}
          </div>
          <div>City</div>
          <div>{data.CorporateAddress.City}</div>
          <div>State/Province</div>
          <div>{data.CorporateAddress.State}</div>
          <div>PostalCode</div>
          <div>{data.CorporateAddress.PostalCode}</div>
          <div>Country</div>
          <div>{data.CorporateAddress.Country}</div>
        </div>
        <h4>Billing Address</h4>
        <div className="flex-row">
          <div className="flex-row">
            {data.CorporateAddress.AddressLine1},{" "}
            {data.CorporateAddress.AddressLine2}
          </div>
          <div>City</div>
          <div>{data.CorporateAddress.City}</div>
          <div>State/Province</div>
          <div>{data.CorporateAddress.State}</div>
          <div>PostalCode</div>
          <div>{data.CorporateAddress.PostalCode}</div>
          <div>Country</div>
          <div>{data.CorporateAddress.Country}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
