import { PaymentSchedulingType } from "@/types/Impact/withdrawalSettings";

export const PaymentSchedulingTypeOption = [
  {
    label: "Fix Day",
    value: PaymentSchedulingType.FIXED_DAY,
  },
  {
    label: "Balance Threshold",
    value: PaymentSchedulingType.BALANCE_THRESHOLD,
  },
];
