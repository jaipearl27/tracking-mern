import { getTrackingLink } from "@/utils/firebase/trackingLink";
import { notFound, redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    campaignId?: string | number;
  };
};

const page = async ({ searchParams }: Props) => {
  if (!searchParams) {
    return notFound();
  }

  const data: any[] | undefined = await getTrackingLink({
    campaignId: searchParams?.campaignId!,
  });

  console.log(data, "DATA");

  if (!data?.length) {
    notFound();
  }

  redirect(data?.[0]?.["trackingLinkUrl"]);
};

export default page;
