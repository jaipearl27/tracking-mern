import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import InfoGroup from "@/components/common/InfoGroup";
import InfoItem from "@/components/common/InfoItem";
import TableV2 from "@/components/common/TableV2";
import { IMPACT_ACTION_GET_REPORT_RECORDS } from "@/utils/Providers/Impact/API";
import { IMPACT_ACTION_GET_REPORT_METADATA } from "@/utils/Providers/Impact/API";
import ExportReportBtn from "./_components/ExportReportBtn";
import toast from "react-hot-toast";

const SpecificReportPage = async (props: any) => {
  const dataPromise = IMPACT_ACTION_GET_REPORT_RECORDS({
    reportId: props?.params?.reportId,
    params: {
      page: 1,
      pagesize: 3,
    },
  });

  const metaDataPromise = IMPACT_ACTION_GET_REPORT_METADATA({
    reportId: props?.params?.reportId,
    params: {
      page: 1,
      pagesize: 3,
    },
  });

  const [data, metaData] = await Promise.all([dataPromise, metaDataPromise]);

  if (data===null) {
    toast.error("Oops! Some Error Occured.")
  }

  console.log(data, "DATA______");

  return (
    <Container size="sm">
      <Heading mb={30} text="Report Info" />
      <InfoGroup heading="Basic Info">
        <InfoItem title="Id" value={metaData?.Id} />
        <InfoItem title="Name" value={metaData?.Name} />
        <InfoItem title="Description" value={metaData?.Description} />
        <InfoItem title="Export Report" value={<ExportReportBtn />} />
      </InfoGroup>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 15,
        }}>
        <h4 className="subheading">Meta Data Filters</h4>
        <TableV2
          columns={[
            {
              dataIndex: "Name",
              id: "Name",
              title: "Name",
            },
            {
              dataIndex: "DataType",
              id: "DataType",
              title: "Data Type",
            },
            {
              dataIndex: "Format",
              id: "Format",
              title: "Format",
            },
          ]}
          data={metaData?.Filters}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h4 className="subheading">Records</h4>
        <TableV2
          columns={[
            {
              dataIndex: "campaign_id",
              id: "campaign_id",
              title: "Id",
            },
            {
              dataIndex: "Campaign",
              id: "Campaign",
              title: "Campaign",
            },
            {
              dataIndex: "Imps",
              id: "Imps",
              title: "Imps",
            },
            {
              dataIndex: "Clicks",
              id: "Clicks",
              title: "Clicks",
            },
            {
              dataIndex: "Actions",
              id: "Actions",
              title: "Actions",
            },
            {
              dataIndex: "Sale_Amount",
              id: "Sale_Amount",
              title: "Sale_Amount",
            },
            {
              dataIndex: "Action_Cost",
              id: "Action_Cost",
              title: "Action_Cost",
            },
            {
              dataIndex: "CPS_Cost",
              id: "CPS_Cost",
              title: "CPS_Cost",
            },
            {
              dataIndex: "Click_Cost",
              id: "Click_Cost",
              title: "Click_Cost",
            },
            {
              dataIndex: "Other_Cost",
              id: "Other_Cost",
              title: "Other_Cost",
            },
            {
              dataIndex: "Total_Cost",
              id: "Total_Cost",
              title: "Total_Cost",
            },
            {
              dataIndex: "EPA",
              id: "EPA",
              title: "EPA",
            },
            {
              dataIndex: "CR",
              id: "CR",
              title: "CR",
            },
            {
              dataIndex: "AOV",
              id: "AOV",
              title: "AOV",
            },
          ]}
          data={data?.Records}
        />
      </div>
    </Container>
  );
};

export default SpecificReportPage;
