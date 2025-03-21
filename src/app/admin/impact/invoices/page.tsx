"use client";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import MaxWidth from "@/components/common/MaxWidth";
import Spinner from "@/components/common/Spinner";
import TableV2 from "@/components/common/TableV2";
import { IMPACT_ACTION_GET_INVOICES } from "@/utils/Providers/Impact/API";
import useSWR from "swr";
import DownloadInvoice from "./_lib/components/DownloadInvoice";
import InvoicePayoutModal from "./_lib/components/InvoicePayoutModal";
import InvoicePagination from "./_lib/components/Pagination";
import Loader from "@/components/common/Loader";

const InvoiceListingPage = (props: any) => {
  const page = props?.searchParams?.Page;

  const key = "/invoices" + page;

  const { isLoading, data } = useSWR(key, async () => {
    return await IMPACT_ACTION_GET_INVOICES?.({
      Page: page || "1",
      PageSize: "10",
    });
  });
  return (
    <MaxWidth width={1200}>
      <Heading mb={15} text="Invoices" />
      <Divider mb={15} />
      {isLoading ? (
        <div style={{ width: "100%", height: "50vh" }}>
          <Loader />
        </div>
      ) : (
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr" }}>
          <TableV2
            columns={[
              {
                id: "Id",
                dataIndex: "Id",
                title: "Invoice Id",
                styleConfig: {
                  width: 120,
                },
              },
              {
                id: "CreatedDate",
                dataIndex: "CreatedDate",
                title: "Issued At",
                render(p) {
                  return p?.CreatedDate?.trim() !== ""
                    ? new Date(p?.CreatedDate).toLocaleDateString()
                    : "-";
                },
                styleConfig: {
                  width: 120,
                },
              },
              {
                id: "RecipientName",
                dataIndex: "RecipientName",
                title: "Recipient Name",
                styleConfig: {
                  width: 120,
                },
              },
              {
                id: "RecipientId",
                dataIndex: "RecipientId",
                title: "Recipient Id",
                styleConfig: {
                  width: 120,
                },
              },
              {
                id: "Currency",
                dataIndex: "Currency",
                title: "Currency",
                styleConfig: {
                  width: 120,
                },
              },
              {
                id: "TotalAmount",
                dataIndex: "TotalAmount",
                title: "Total Amount",
                styleConfig: {
                  width: 120,
                },
              },
              {
                id: "TotalVatAmount",
                dataIndex: "TotalVatAmount",
                title: "Tax Amount",
                styleConfig: {
                  width: 120,
                },
              },
              {
                dataIndex: "LineItems",
                id: "LineItems",
                title: "Payouts / Entries",
                render(p) {
                  return <InvoicePayoutModal data={p?.LineItems} />;
                },
                styleConfig: {
                  width: 120,
                },
              },
              {
                id: "PDF",
                dataIndex: "PDF",
                title: "Download",
                styleConfig: {
                  width: 120,
                },
                render(p) {
                  return (
                    <DownloadInvoice downloadURI={p?.PDF} invoiceId={p?.Id} />
                  );
                },
              },
            ]}
            data={data?.Invoices as any}
          />
          <InvoicePagination />
        </div>
      )}
    </MaxWidth>
  );
};

export default InvoiceListingPage;
