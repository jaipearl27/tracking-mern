import Anchor from "@/components/common/Anchor";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import InfoItem from "@/components/common/InfoItem";
import { IMPACT_ACTION_SINGLE_CAMPAIGNS_GET } from "@/utils/Providers/Impact/API";
import { notFound } from "next/navigation";
import DownloadPDF from "./_lib/components/DownloadPDF";
import DeeplinkDomainModal from "./_lib/components/modals/Deeplink";
import ShippingRegionsModal from "./_lib/components/modals/ShippingRegions";
import CreateTrackingLinkForm from "./_lib/components/CreateTrackingLink";
import { specificCampaignData } from "./_lib/data";
import MaxWidth from "@/components/common/MaxWidth";
import ListItem from "@/components/common/ListItem";

type Props = {
  params: {
    programId: string;
  };
};

const SpecificCampaign = async ({ params }: Props) => {
  console.log(params);
  let data;
  if (params) {
    data = await IMPACT_ACTION_SINGLE_CAMPAIGNS_GET(params?.programId);
    console.log(data, "DATA_________");
  }

  if (!data) {
    notFound();
  }

    // const data = specificCampaignData;
    // https://shoebacca.ojrq.net/c/3293666/10222/394?u=https%3A%2F%2Fwww.shoebacca.com%2Fcollections%2Fwomens-shoes

  return (
    <MaxWidth width={1200}>
      <Heading mb={30} text="Specific Program" />
      <InfoItem title="Campaign Name" value={data?.CampaignName} />
      <InfoItem
        title="Campaign Description"
        value={data?.CampaignDescription}
      />
      <ListItem title="Shipping Regions" values={data?.ShippingRegions} />
      <InfoItem
        title="Campaign Url"
        value={
          <Anchor
            as="link"
            target="_blank"
            href={data?.CampaignUrl}
            text={data?.CampaignUrl!}
          />
        }
      />
      <InfoItem title="Advertiser Name" value={data?.AdvertiserName} />
      <InfoItem
        title="Advertiser Url"
        value={
          <Anchor
            as="link"
            target="_blank"
            href={data?.CampaignUrl}
            text={data?.AdvertiserUrl!}
          />
        }
      />
      <InfoItem title="Contract Status" value={data?.ContractStatus} />
      {/* <InfoItem title="Contact Details" value="Visit" /> */}
      <InfoItem
        title="Tracking Link"
        value={
          <Anchor
            as="link"
            target="_blank"
            href={`/link-redirector?campaignId=${params?.programId}`}
            text="View"
          />
        }
      />
      <InfoItem
        title="Deep Linking"
        value={data?.AllowsDeeplinking ? "Allowed" : "Not Allowed"}
      />
      <InfoItem
        title="Deep Links"
        value={<DeeplinkDomainModal data={data?.DeeplinkDomains!} />}
      />
      {/* <InfoItem title="Public Terms" value="Visit" /> */}
      <InfoItem
        title="Shipping Regions"
        value={<ShippingRegionsModal data={data?.ShippingRegions!} />}
      />
      <InfoItem
        title="Create Tracking Link"
        value={<CreateTrackingLinkForm />}
      />
      <InfoItem
        title="View Deals"
        value={
          <Anchor
            text="View"
            as="link"
            href={`/impact/programs/${params?.programId}/deals`}
          />
        }
      />
      <InfoItem
        title="View Contract"
        value={
          <Anchor
            text="View"
            as="link"
            href={`/impact/programs/${params?.programId}/active-contracts`}
          />
        }
      />
      <InfoItem
        title="Download Public Terms"
        value={<DownloadPDF />}
        includeDivider={false}
      />
    </MaxWidth>
  );
};

export default SpecificCampaign;
