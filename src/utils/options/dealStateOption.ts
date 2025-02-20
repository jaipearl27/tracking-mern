import { DealState } from "@/types/Impact/deals";

export const dealStateOption = [
  {
    label: "Active",
    value: DealState.ACTIVE,
  },
  {
    label: "Expired",
    value: DealState.EXPIRED,
  },
  {
    label: "Pending",
    value: DealState.PENDING,
  },
];
