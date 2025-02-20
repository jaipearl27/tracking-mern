import { BeneficiaryClassification } from "@/types/Impact/withdrawalSettings";

export const beneficiaryClassificationOption = [
  {
    label: "Business",
    value: BeneficiaryClassification.BUSINESS,
  },
  {
    label: "Cnpj",
    value: BeneficiaryClassification.CNPJ,
  },
  {
    label: "Individual",
    value: BeneficiaryClassification.INDIVIDUAL,
  },
  {
    label: "Cpf",
    value: BeneficiaryClassification.CPF,
  },
];
