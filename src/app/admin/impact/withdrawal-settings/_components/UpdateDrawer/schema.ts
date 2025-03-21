import {
  BankAccountType,
  BeneficiaryClassification,
  PaymentMethod,
  PaymentSchedulingType,
} from "@/types/Impact/withdrawalSettings";
import { z } from "zod";

export const updateWithdrawalSettingFormSchema = z.object({
  PaymentMethod: z.nativeEnum(PaymentMethod).optional(),
  PaypalEmailAddress: z.string().optional(),
  BeneficiaryAccountName: z.string().optional(),
  BankCountry: z.string().optional(),
  BeneficiaryClassification: z.nativeEnum(BeneficiaryClassification).optional(),
  BeneficiaryAlternativeName: z.string().optional(),
  BeneficiaryTaxPayerId: z.string().optional(),
  BankAccountType: z.nativeEnum(BankAccountType).optional(),
  BankAccountNumber: z.string().optional() || z.number().optional(),
  SwiftCode: z.string().optional(),
  RoutingCode: z.optional(z.string().max(9)),
  VoCode: z.string().max(5).optional(),
  AgencyCode: z.string().optional(),
  BankAddress: z.string().optional(),
  BankPostalCode: z.string().optional(),
  BankCity: z.string().optional(),
  BankState: z.string().optional(),
  BranchCode: z.string().optional(),
  BankName: z.string().optional(),
  PaymentSchedulingType: z.nativeEnum(PaymentSchedulingType).optional(),
  PaymentThreshold: z.string().optional(),
  PaymentDay: z.string().optional(),
});
