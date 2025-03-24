"use client";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import Spinner from "@/components/common/Spinner";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import CompaignListing from "./CompaignListing";
import CompaignListingFilter from "./Filter";
import CampaignPagination from "./Pagination";
import "./styles.scss";
// import { fetchCampaigns } from "@/app/(dashboard)/programs/page";
import { IMPACT_ACTION_CAMPAIGNS_GET, IMPACT_ACTION_LIST_MEDIA_PROPERTIES } from "@/utils/Providers/Impact/API";
import MaxWidth from "@/components/common/MaxWidth";
import Loader from "@/components/common/Loader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getallUser, getAssignmentsByUserID } from "@/utils/Providers/API_V1/API";

type Props = {};

const CompaignContainer = (props: Props) => {
  const searchParams = useSearchParams();
  // const targetedParam = searchParams?.get("InsertionOrderStatus");
  const targetedParam = "ACTIVE"
  const Page = searchParams?.get("Page");

  const [assignments, setAssignments] = useState<any>(null)
  const [filteredCampaignsData, setFilteredCampaignsData] = useState<any>([])

  const key = "/programs" + Page + targetedParam;

  const { data, isLoading } = useSWR(key, async () => {
    // return await fetchCampaigns({
    //   ...(targetedParam ? { InsertionOrderStatus: targetedParam } : null),
    //   Page: Page || "1",
    //   PageSize: 6,
    // });

    const res = await IMPACT_ACTION_CAMPAIGNS_GET({
      ...(targetedParam ? { InsertionOrderStatus: targetedParam } : {InsertionOrderStatus: "ACTIVE"}),
      Page: Page || "1",
      PageSize: "6",
    });

    // console.log('programs data', res);
    return res;
  });

  // if (isLoading) {
  //   return (
  //     <div style={{ width: "100%", height: "50vh" }}>
  //       <Spinner />
  //     </div>
  //   );
  // }

  // console.log(JSON.stringify(data), "DATA", isLoading, "IS__LOADING");




  const [mediaProperties, setMediaProperties] = useState<any>(null)

  const { data: mediaPropertiesData, isLoading: mediaPropertiesLoading } = useSWR(
    "/get media properties",
    async () => await IMPACT_ACTION_LIST_MEDIA_PROPERTIES(),
    {
      onSuccess(mediaPropertiesData) {
        // console.log("Media Properties Data:", mediaPropertiesData); // Debugging
        if (!mediaPropertiesData) {
          toast.error("No Media Properties Found");
        } else {
          setMediaProperties(mediaPropertiesData);
        }
      }
    }
  );

  // const { data: usersData, isLoading: usersLoading } = useSWR(
  //   "/get users",
  //   async () => await getallUser(),
  //   {
  //     onSuccess(usersData) {
  //       if (!usersData) {
  //         toast.error("No Users Found");
  //       } else {
  //         setUsers(usersData.users);
  //       }
  //     }
  //   }
  // );


  
  const { data: assignmentsData, isLoading: assignmentsLoading } = useSWR(
    "/get assignments",
    async () => await getAssignmentsByUserID(),
    {
      onSuccess(assignmentsData) {
        if (!assignmentsData) {
          toast.error("No Users Found");
        } else {
          // console.log('assignments data', assignmentsData?.data)
          setAssignments(assignmentsData?.data);
        }
      }
    }
  );



  // useEffect(() => {
  //   console.log('mediaProperties', mediaProperties)
  // }, [mediaProperties])

useEffect(() => {
 if(data?.Campaigns && assignments){

  console.log(data?.Campaigns, assignments)


  const campaigns: any = data?.Campaigns 
  const filteredCampaigns: any = campaigns.filter((campaign: any) =>
    assignments.some((assignment: any) => campaign.CampaignId === assignment?.trackingLinkId?.ProgramId)
  );
  setFilteredCampaignsData(filteredCampaigns)
 }


}, [assignments, data])

  


  return (
    <MaxWidth width={2000}>
      <Heading mb={30} text="Assigned Programs" />
      {/* <CompaignListingFilter disabled={isLoading} /> */}

      <Divider mb={15} />
      {isLoading && !data ? (
        <div style={{ width: "100%", height: "50vh" }}>
          <Loader />
        </div>
      ) : (
        <>
          {/* <h6>datatttt</h6> */}
          <CompaignListing data={(filteredCampaignsData) as any} mediaProperties={mediaProperties} />
          <CampaignPagination />
        </>
      )}
    </MaxWidth>
  );
};

export default CompaignContainer;
