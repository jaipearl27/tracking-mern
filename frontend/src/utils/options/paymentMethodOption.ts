import { PaymentMethod } from "@/types/Impact/withdrawalSettings";

export const paymentMethodOption = [
  {
    label: "Bank Transfer",
    value: PaymentMethod.BANK_TRANSFER,
  },
  {
    label: "Pay Pal",
    value: PaymentMethod.PAYPAL,
  },
];
