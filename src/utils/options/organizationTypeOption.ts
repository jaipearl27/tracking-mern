import { OrganizationType } from "@/types/Impact/companyInformation";

const {
  COMPANY,
  CORP,
  GOVERNMENT,
  LLC,
  LLC_LLP_LLS,
  LLP,
  NONP_GOV,
  OTHER,
  PARTNERS,
  SOLE_IND,
  SOLE_TRD,
  TRUST,
} = OrganizationType;

export const organizationTypeOptions = [
  {
    label: COMPANY,
    value: COMPANY,
  },
  {
    label: CORP,
    value: CORP,
  },
  {
    label: GOVERNMENT,
    value: GOVERNMENT,
  },
  {
    label: LLC,
    value: LLC,
  },
  {
    label: LLC_LLP_LLS,
    value: LLC_LLP_LLS,
  },
  {
    label: LLP,
    value: LLP,
  },
  {
    label: NONP_GOV,
    value: NONP_GOV,
  },
  {
    label: OTHER,
    value: OTHER,
  },
  {
    label: PARTNERS,
    value: PARTNERS,
  },
  {
    label: SOLE_IND,
    value: SOLE_IND,
  },
  {
    label: SOLE_TRD,
    value: SOLE_TRD,
  },
  {
    label: TRUST,
    value: TRUST,
  },
];
