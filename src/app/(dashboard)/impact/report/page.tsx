import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import { IMPACT_ACTION_GET_REPORTS } from "@/utils/Providers/Impact/API";
import ReportPagination from "./_lib/components/Pagination";
import ReportListingTable from "./_lib/components/ReportListingTable";

const ReportsPage = async (p: any) => {
  const result = await IMPACT_ACTION_GET_REPORTS({
    params: {
      Page: p?.searchParams?.Page || "1",
      PageSize: "15",
    },
  });

  return (
    <Container size="sm">
      <Heading text="Reports" mb={15} />
      <Divider mb={15} />
      <ReportListingTable data={result?.Reports} />
      <ReportPagination />
    </Container>
  );
};

export default ReportsPage;
