"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./styles.scss";

type Props = {};

const DealsPagination = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePrev = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const targetParam = searchParams?.get("Page");

    // If no params return
    if (!targetParam) {
      return;
    }

    // Params are greater than 2
    if (Number(targetParam) > 2) {
      current?.set("Page", `${Number(targetParam) - 1}`);
    }

    // params are less than or equals to 2
    if (Number(targetParam) <= 2) {
      current?.delete("Page");
    }

    // if (targetParam || Number(searchParams?.get("Page")) !== 1) {
    //   current?.set("Page", `${Number(targetParam) - 1}`);
    // }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router?.push(`${pathname}${query}`);
    // revalidatePath("/programs");
  };

  const handleNext = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const targetParam = searchParams?.get("Page");

    if (targetParam) {
      current?.set("Page", `${Number(targetParam) + 1}`);
    } else {
      current?.set("Page", "2");
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router?.push(`${pathname}${query}`);
    // revalidatePath("/programs");
  };

  const PREV_DISABLED =
    !searchParams?.get("Page") || Number(searchParams?.get("Page")) === 1;

  return (
    <div className="pagination-wrapper">
      <button
        className="pagination-button"
        disabled={PREV_DISABLED}
        onClick={handlePrev}>
        Prev
      </button>
      <button onClick={handleNext} className="pagination-button">
        Next
      </button>
    </div>
  );
};

export default DealsPagination;
