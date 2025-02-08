import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import MaxWidth from "@/components/common/MaxWidth";
import PartnerizeCommissionFilters from "./_lib/components/Filter";
import useSWR from "swr";
import { PartnerizeCommissionTypes } from "./_lib/typings";
import PartnerCommissionListing from "./_lib/components/Content";
import { checkCommissionParams } from "./_lib/utils";
import { redirect } from "next/navigation";

type Props = {
  params: {
    campaignId: string;
  };
  searchParams: {
    commission_type: string;
  };
};

const { ACTIVE, CAMPAIGN, DEFAULT, PROMOTION, TIER, VOUCHER } =
  PartnerizeCommissionTypes;

const page = ({ params, searchParams }: Props) => {
  const { ok } = checkCommissionParams(searchParams?.commission_type as any);

  if (!ok) {
    redirect("/patnerize/campaign");
  }

  return (
    <MaxWidth>
      <Heading mb={15} text="Commissions" />
      <Divider mb={15} />
      <PartnerizeCommissionFilters />
      <PartnerCommissionListing />
    </MaxWidth>
  );
};

export default page;
