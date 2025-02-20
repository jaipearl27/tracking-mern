"use client";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import MaxWidth from "@/components/common/MaxWidth";
import Spinner from "@/components/common/Spinner";
import TableV2 from "@/components/common/TableV2";
import { IMPACT_ACTION_JOB_GET_ALL } from "@/utils/Providers/Impact/API";
import useSWR from "swr";
import { jobColumns } from "./_columns";
import JobPagination from "./_components/Pagination";
import Loader from "@/components/common/Loader";

const JobListingPage = (p: any) => {
  const page = p?.searchParams?.Page;

  const { data, isLoading } = useSWR("/jobs-listing" + page, async () => {
    return await IMPACT_ACTION_JOB_GET_ALL({
      Page: page || "1",
      PageSize: "15",
    });
  });

  return (
    <MaxWidth width={1200}>
      <Heading text="Jobs" mb={15} />
      <Divider mb={15} />
      {isLoading ? (
        <div style={{ width: "100%", height: "50vh" }}>
          <Loader />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 10,
          }}>
          <TableV2 columns={jobColumns} data={(data?.Jobs! || []) as any} />
          <JobPagination />
        </div>
      )}
    </MaxWidth>
  );
};

export default JobListingPage;
