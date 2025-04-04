"use client";

import Heading from "@/components/common/Heading";
import InfoGroup from "@/components/common/InfoGroup";
import InfoItem from "@/components/common/InfoItem";
import MaxWidth from "@/components/common/MaxWidth";
import { getUserData } from "@/utils/Providers/API_V1/API";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

const AccountPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const { data, isLoading, error } = useSWR(
    mounted ? ["userData", mounted] : null,
    async () => {
      try {
        const response = await getUserData();
        return response;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false
    }
  );

  if (!mounted || isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Error loading account information
      </div>
    );
  }

  return (
    <MaxWidth width={1200}>
      <div className="page-heading">
        <Heading text="Account Info" />
      </div>
      <InfoGroup heading="Basic Info">
        <InfoItem title="Full Name" value={data?.data?.name || "N/A"} />
        <InfoItem title="E-Mail" value={data?.data?.email || "N/A"} />
        <InfoItem title="Role" value={data?.data?.role || "N/A"} />
        <InfoItem title="Phone Number" value={data?.data?.phone || "N/A"} />
      </InfoGroup>
    </MaxWidth>
  );
};

export default AccountPage;