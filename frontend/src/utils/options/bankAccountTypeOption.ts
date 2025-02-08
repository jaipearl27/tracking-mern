import { BankAccountType } from "@/types/Impact/withdrawalSettings";

export const bankAccountTypeOption = [
  {
    label: "Checking",
    value: BankAccountType.CHECKING,
  },
  {
    label: "Savings",
    value: BankAccountType.SAVINGS,
  },
  {
    label: "Not Set",
    value: BankAccountType.NOT_SET,
  },
];
