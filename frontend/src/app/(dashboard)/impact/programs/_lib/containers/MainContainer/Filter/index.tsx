"use client";
import Select from "@/components/common/Select";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  disabled?: boolean;
};

const CompaignListingFilter = ({ disabled }: Props) => {
  const [insertionOrderStatus, setInsertionOrderStatus] = useState<string>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const possibilities = ["ACTIVE", "EXPIRED"];

  useEffect(() => {
    const searchParam = searchParams.get("InsertionOrderStatus");

    if (!searchParam) {
      return;
    }

    if (possibilities?.includes(searchParam)) {
      setInsertionOrderStatus(searchParam);
    } else {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      current?.set("InsertionOrderStatus", possibilities[0]);

      const search = current.toString();
      const query = search ? `?${search}` : "";

      router?.push(`${pathname}${query}`);
      setInsertionOrderStatus(possibilities[0]);
    }
  }, [searchParams, router]);

  const onChange = async (val?: string) => {
    if (!possibilities.includes(val!)) {
      return;
    }

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const targetParam = searchParams?.get("InsertionOrderStatus");

    if (targetParam) {
      current?.set("InsertionOrderStatus", val!);
    } else {
      current?.append("InsertionOrderStatus", val!);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router?.push(`${pathname}${query}`);
    setInsertionOrderStatus(val);
  };

  return (
    <div style={{ marginBottom: 15 }}>
      <Select
        options={[
          {
            label: "ACTIVE",
            value: "ACTIVE",
          },
          {
            label: "EXPIRED",
            value: "EXPIRED",
          },
        ]}
        disabled={disabled}
        id="InsertionOrderStatus"
        label="Insertion Order Status"
        setValue={onChange}
        value={insertionOrderStatus}
      />
    </div>
  );
};

export default CompaignListingFilter;
