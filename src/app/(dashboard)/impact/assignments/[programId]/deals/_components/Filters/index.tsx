import Anchor from "@/components/common/Anchor";
import Select from "@/components/common/Select";
import { dealScopeOption } from "@/utils/options/dealScopeOption";
import { dealStateOption } from "@/utils/options/dealStateOption";
import { dealTypeOption } from "@/utils/options/dealTypeOption";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  isLoading: boolean;
};

const DealListingFilters = ({ isLoading }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const Scope = searchParams?.get("Scope");
  const State = searchParams?.get("State");
  const Type = searchParams?.get("Type");

  const handleFilterChange = (key: string, val: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const targetParam = searchParams?.get(key);
    const pageParam = searchParams?.get("Page");

    if (targetParam) {
      current?.set(key, val!);
    } else {
      current?.append(key, val!);
    }

    // Apply page to 1
    if (pageParam) {
      current?.delete("Page");
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router?.push(`${pathname}${query}`);
  };

  const handleResetFilters = () => {
    router?.push(`${pathname}`);
  };

  return (
    <div
      style={{
        marginBottom: 15,
        display: "flex",
        gap: 10,
        alignItems: "flex-end",
      }}>
      <div style={{ flex: 1, display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Select
          onChange={(e) => handleFilterChange?.("Scope", e!)}
          id="Scope"
          label="Scope"
          defaultValue={searchParams?.get("Scope") as string}
          disabled={isLoading}
          options={dealScopeOption}
        />
        <Select
          onChange={(e) => handleFilterChange?.("DealState", e!)}
          id="DealState"
          label="DealState"
          defaultValue={searchParams?.get("DealState") as string}
          disabled={isLoading}
          options={dealStateOption}
        />
        <Select
          onChange={(e) => handleFilterChange?.("Type", e!)}
          id="Type"
          label="Deal Type"
          defaultValue={searchParams?.get("Type") as string}
          disabled={isLoading}
          options={dealTypeOption}
        />
      </div>
      {(Scope || State || Type) && (
        <Anchor text="Reset Filters" onClick={handleResetFilters} />
      )}
    </div>
  );
};

export default DealListingFilters;
