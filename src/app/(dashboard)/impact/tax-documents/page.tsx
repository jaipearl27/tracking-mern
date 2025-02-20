import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import MaxWidth from "@/components/common/MaxWidth";
import { IMPACT_ACTION_GET_TAX_DOCUMENTS } from "@/utils/Providers/Impact/API";
import { Toaster } from "react-hot-toast";
import CreateTaxDocumentFormDrawer from "./_lib/components/CreateTaxFormDrawer";
import TaxDocumentPagination from "./_lib/components/Pagination";
import RecentDocModal from "./_lib/components/RecentDocModal";
import TaxDocumentTable from "./_lib/components/TaxDocumentTable";

const TaxDocumentsPage = async (p: any) => {
  const data = await IMPACT_ACTION_GET_TAX_DOCUMENTS?.({
    page: p?.searchParams?.Page || "1",
    pagesize: "15",
  });

  return (
    <MaxWidth width={1200}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          marginBottom: 15,
        }}>
        <Heading mb={0} text="Tax Documents" />
        <CreateTaxDocumentFormDrawer />
      </div>
      <Divider mb={15} />
      <div
        style={{
          marginBottom: 15,
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <RecentDocModal />
      </div>

      <>
        <TaxDocumentTable data={data?.TaxDocuments} />
        <TaxDocumentPagination />
      </>

      <Toaster position="bottom-left" toastOptions={{ duration: 1500 }} />
    </MaxWidth>
  );
};

export default TaxDocumentsPage;
