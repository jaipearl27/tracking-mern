import Anchor from "@/components/common/Anchor";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import InfoItem from "@/components/common/InfoItem";
import { IMPACT_ACTION_STORES_GET_SPECIFIC, IMPACT_ACTION_VIEW_STORE } from "@/utils/Providers/Impact/API";
import { notFound } from "next/navigation";
import GroupTable from "./_lib/components/GroupTable";
import "./_lib/styles.scss";
import { getFormattedDate } from "@/utils/DateUtils";

const getCampaignId = (uri: string) => {
  const campaignIdIndex = uri?.indexOf("campaignId=");
  const campaignId = uri?.substring(
    campaignIdIndex + "campaignId=".length,
    uri?.indexOf("&", campaignIdIndex),
  );
  return campaignId;
};

const SpecificStorePage = async (props: any) => {
  const storeId = props?.params?.storeId;

  const data: any = await IMPACT_ACTION_STORES_GET_SPECIFIC({ storeId });

  const campaignId = getCampaignId(data?.Groups?.[0]?.Uri);
  const catalogId = data?.Groups?.[0]?.CatalogId;

  console.log(data)

  if (!data) {
    notFound();
  }

  // console.log(data?.Groups, "DATA___GROUPS");

//   const abc=async()=>{
//     return await IMPACT_ACTION_VIEW_STORE(data?.StoreUri)
//   }
//   console.log("-+++++",await abc(), "-=-=-=-=-=-=-=-=-")
  
  // const data = specificStore;

  const tableData = (data?.Groups || [])?.map((item: any) => ({
    ...item,
    key: Math.random(),
  }));

  return (
    <Container size="sm">
      <Heading mb={15} text="Store Details" />
      <div style={{ marginBottom: 30 }}>
        <InfoItem title="Name" value={data?.Name} />
        <InfoItem title="No Of Groups" value={data?.NumberOfGroups} />
        <InfoItem title="Store Banner" value={data?.StoreBanner} />
        <InfoItem
          title="Last Updated"
          value={getFormattedDate(data?.DateLastUpdated)}
        />
        <InfoItem
          title="Store URI"
          value={
            <Anchor
              as="link"
              href={data?.StoreUri}
              target="_blank"
              text="Visit Store"
            />
          }
          includeDivider={false}
        />
        <InfoItem
          title="Campaign"
          value={
            <Anchor text="View" as="link" href={`/impact/programs/${campaignId}`} />
          }
        />
        <InfoItem
          title="Catalog"
          value={
            <Anchor
              text="View"
              as="link"
              href={`/impact/catalogs/items?catalogID=${catalogId}&catalogName=TicketNetwork`}
            />
          }
        />
      </div>

      <div className="group-section-wrapper">
        <h3 className="heading">Groups</h3>
        <GroupTable data={tableData} />
      </div>
    </Container>
  );
};

export default SpecificStorePage;
