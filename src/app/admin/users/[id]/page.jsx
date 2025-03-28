"use client"

import Heading from "@/components/common/Heading";
import InfoGroup from "@/components/common/InfoGroup";
import InfoItem from "@/components/common/InfoItem";
import MaxWidth from "@/components/common/MaxWidth";
import { getAssignmentsByUserID, getUser } from "@/utils/Providers/API_V1/API";
import useSWR from "swr"
// import UpdateAccountDrawer from "../impact/account/_lib/containers/UpdateAccountDrawer";
import { useEffect } from "react";
import Link from "next/link";
import "../styles.scss"
import "@/app/styles.scss"
import { formatDateTime } from "@/utils/DateUtils";


export default function page({ params }) {
    const { id } = params

    const { data, isLoading } = useSWR(
        "userData",
        async () => {
            if (id) {
                return await getUser(id);
            } else return []
        },
        // {
        //   isPaused: () => {
        //     return !!!selectedCampaign;
        //   },
        // }
    );


    const { data: assignmentsData, isLoading: isAssignmentsLoading } = useSWR(
        "user assignments",
        async () => {
            if (id) {
                return await getAssignmentsByUserID(id);
            } else return []
        },
        // {
        //   isPaused: () => {
        //     return !!!selectedCampaign;
        //   },
        // }
    );


    useEffect(() => {
        console.log(assignmentsData, 'assignments')
        console.log(formatDateTime("2025-03-21T09:56:26.417Z"));
    }, [assignmentsData])

    return (
        <>

            <MaxWidth width={1200}>
                <div className="page-heading">
                    <Heading text="User's Info:" />
                    {/* <UpdateAccountDrawer /> */}
                </div>
                {/* BASIC INFO */}
                <InfoGroup heading="">
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

                <div className="page-heading">
                    <Heading text="Assignments History:" />
                    {/* <UpdateAccountDrawer /> */}
                </div>

                {assignmentsData?.data && assignmentsData?.data?.length > 0 && (
                    <>
                        <table className="tracking-table" style={{ width: "100%", textAlign: "left" }}>
                            <thead>
                                <tr>
                                    <th style={{maxWidth: '300px', textOverflow: "ellipsis"}}>Tracking Link</th>
                                    <th>Assigned To</th>
                                    <th>Status</th>
                                    <th>Assigned on</th>
                                    <th>Assigned Till</th>
                                    <th>Total Clicks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assignmentsData?.data?.map((item) => (
                                    <tr key={item?._id} >
                                        <td style={{maxWidth: '300px', textOverflow: "ellipsis"}}><Link style={{maxWidth: '300px', textOverflow: "ellipsis"}} href={item?.trackingLinkId?.TrackingLink} target="_blank">{item?.trackingLinkId?.TrackingLink}</Link></td>
                                        <td >{item?.userId?.email}</td>
                                        <td >{item?.status.toUpperCase()}</td>
                                        <td >{formatDateTime(item?.createdAt)}</td>
                                        <td >{item?.inactiveDate ? formatDateTime(item?.inactiveDate) : "-"}</td>
                                        <td >{item?.totalClicks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </MaxWidth>
        </>
    )
}