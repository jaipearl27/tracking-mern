import Anchor from "@/components/common/Anchor";
import Divider from "@/components/common/Divider";
import DownloadContract from "@/components/common/DownloadContract";
import Heading from "@/components/common/Heading";
import InfoItem from "@/components/common/InfoItem";
import MaxWidth from "@/components/common/MaxWidth";
import { IMPACT_ACTION_GET_SINGLE_CONTRACT } from "@/utils/Providers/Impact/API";
import EventPayouts from "./_lib/components/EventPayouts";
import SpecialTerms from "./_lib/components/SpecialTerms";
import toast from "react-hot-toast";

const SpecificContractPage = async (p: any) => {
  const data = await IMPACT_ACTION_GET_SINGLE_CONTRACT?.({
    contractId: p?.params?.contractId!,
  });
  if (data===null) {
    toast.error("Oops! Some Error Occured.")
  }

  // const data = specificContractData;

  console.log(data?.Terms?.SpecialTermsList, "DATA______TERMS____");

  return (
    <MaxWidth width={1200}>
      <Heading text="Contract Details" mb={15} />
      <Divider mb={15} />
      <InfoItem
        title="Campaign"
        value={
          <Anchor
            text="View"
            as="link"
            href={`/impact/programs/${data?.CampaignId}`}
          />
        }
      />
      <InfoItem title="Status" value={data?.Status} />
      <InfoItem
        title="Start Date"
        value={
          data?.StartDate !== "" &&
          new Date(data?.StartDate)?.toLocaleDateString()
        }
      />
      <InfoItem
        title="End Date"
        value={data?.EndDate && new Date(data?.EndDate)?.toLocaleDateString()}
      />
      <InfoItem title="Brand Signatory" value={data?.BrandSignatory} />
      <InfoItem
        title="Brand Signatory Date"
        value={
          data?.BrandSignatoryDate &&
          new Date(data?.BrandSignatoryDate)?.toLocaleDateString()
        }
      />
      <InfoItem title="Partner Signatory" value={data?.PartnerSignatory} />
      <InfoItem
        title="Partner Signatory Date"
        value={
          data?.PartnerSignatoryDate &&
          new Date(data?.PartnerSignatoryDate)?.toLocaleDateString()
        }
      />
      <InfoItem
        title="Date Created"
        value={
          data?.DateCreated && new Date(data?.DateCreated)?.toLocaleDateString()
        }
      />
      <InfoItem
        title="Date Last Updated"
        value={
          data?.DateLastUpdated &&
          new Date(data?.DateLastUpdated)?.toLocaleDateString()
        }
      />
      <InfoItem title="Currency" value={data?.Terms?.Currency} />
      <InfoItem
        title="Change Notification Period"
        value={data?.Terms?.ChangeNotificationPeriod}
      />
      <InfoItem title="Return Policy" value={data?.Terms?.ReturnPolicy} />
      <InfoItem
        title="Max Return Percentage"
        value={
          data?.Terms?.MaxReturnPercentage !== "" &&
          `${data?.Terms?.MaxReturnPercentage}%`
        }
      />
      <InfoItem
        title="Custom Creative Payer"
        value={data?.Terms?.CustomCreativePayer}
      />
      <InfoItem
        includeDivider={false}
        mb={30}
        title="Download PDF"
        value={<DownloadContract pdfDownloadURI={data?.PdfUri} />}
      />
      <EventPayouts data={data?.Terms?.EventPayouts} />
      <SpecialTerms data={data?.Terms?.SpecialTermsList} />
    </MaxWidth>
  );
};

export default SpecificContractPage;
