"use client"

import Heading from "@/components/common/Heading";
import InfoGroup from "@/components/common/InfoGroup";
import InfoItem from "@/components/common/InfoItem";
import MaxWidth from "@/components/common/MaxWidth";
import { getUserData } from "@/utils/Providers/API_V1/API";
import useSWR from "swr"
import UpdateAccountDrawer from "../impact/account/_lib/containers/UpdateAccountDrawer";
import { useEffect } from "react";


export default function page() {

  const { data, isLoading } = useSWR(
    "userData",
    async () => {
      return await getUserData();
    },
    // {
    //   isPaused: () => {
    //     return !!!selectedCampaign;
    //   },
    // }
  );

  // useEffect(() => {
  //   console.log(data)
  // }, data)

  return (
    <>

      <MaxWidth width={1200}>
        <div className="page-heading">
          <Heading text="Account Info" />
          {/* <UpdateAccountDrawer /> */}
        </div>
        {/* BASIC INFO */}
        <InfoGroup heading="Basic Info">
          <InfoItem title="Full Name" value={data?.data?.name} />
          <InfoItem
            title="E-Mail"
            value={data?.data?.email}
          />
          <InfoItem
            title="Role"
            value={data?.data?.role}
          />
          <InfoItem
            title="Phone Number"
            value={data?.data?.phone}
          />

          {/* <InfoItem title="Website" value={data?.data?.Website} /> */}

          {/* <InfoItem
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
          /> */}
          {/* <InfoItem title="URI" value={data?.Uri} includeDivider={false} /> */}
        </InfoGroup>

      </MaxWidth>
    </>
  )
}