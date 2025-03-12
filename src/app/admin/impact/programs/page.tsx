// import { IMPACT_ACTION_CAMPAIGNS_GET } from "@/utils/Providers/Impact/API";
import { redirect } from "next/navigation";
import CompaignContainer from "./_lib/containers/MainContainer";

// export const fetchCampaigns = async (params?: Record<string, any>) => {
//   try {
//     const res = await IMPACT_ACTION_CAMPAIGNS_GET(params);
//     // console.log(res, "RESPONSE___");

//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const revalidate = 3600;

async function ProgramsPage(p: any) {
  const possibilities = ["ACTIVE", "EXPIRED"];
  const targetedParams = p?.searchParams?.InsertionOrderStatus;

  if (targetedParams) {
    if (!possibilities?.includes(targetedParams)) {
      redirect("/programs");
    }
  }

  return <CompaignContainer />;
}

export default ProgramsPage;
