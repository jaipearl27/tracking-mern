import {
  OrganizationType,
  PromotionalMethod,
} from "@/types/Impact/companyInformation";
import { z } from "zod";

export const updateAccountFormSchema = z.object({
  CompanyName: z.string().optional(),
  PrimaryPromotionalMethod: z.nativeEnum(PromotionalMethod).optional(),
  PromotionalMethod: z.nativeEnum(PromotionalMethod).optional(),
  Website: z.string().optional(),
  // PrimaryPhoneNumber: z.number().optional(),
  PrimaryPhoneNumberCountry: z.string().optional(),
  // SecondaryPhoneNumber: z.number().optional(),
  SecondaryPhoneNumberCountry: z.string().optional(),
  // MinimumContactRating: z.number().optional(),
  OrganizationType: z.nativeEnum(OrganizationType).optional(),
  EinSsnForeginTaxId: z.string().optional(),
  CorporateAddress: z
    .object({
      CorporateAddressLine1: z.string().optional(),
      CorporateAddressLine2: z.string().optional(),
      CorporateAddressCity: z.string().optional(),
      CorporateAddressState: z.string().optional(),
      CorporateAddressPostalCode: z.string().optional(),
      CorporateAddressCountry: z.any().optional(),
    })
    .optional(),
  BillingAddress: z
    .object({
      BillingAddressLine1: z.string().optional(),
      BillingAddressLine2: z.string().optional(),
      BillingAddressCity: z.string().optional(),
      BillingAddressState: z.string().optional(),
      BillingAddressPostalCode: z.string().optional(),
      BillingAddressCountry: z.any().optional(),
    })
    .optional(),
  FinancialContact: z
    .object({
      Name: z.string().optional(),
      Email: z.string().email().optional(),
      WorkPhoneNumber: z.string().optional(),
      WorkPhoneNumberCountry: z.string().optional(),
      CellPhoneNumber: z.string().optional(),
      CellPhoneNumberCountry: z.string().optional(),
    })
    .optional(),
  TechnicalContact: z
    .object({
      Name: z.string().optional(),
      Email: z.string().email().optional(),
      WorkPhoneNumber: z.string().optional(),
      WorkPhoneNumberCountry: z.string().optional(),
      CellPhoneNumber: z.string().optional(),
      CellPhoneNumberCountry: z.string().optional(),
    })
    .optional(),
  CommercialContact: z
    .object({
      Name: z.string().optional(),
      Email: z.string().email().optional(),
      WorkPhoneNumber: z.string().optional(),
      WorkPhoneNumberCountry: z.string().optional(),
      CellPhoneNumber: z.string().optional(),
      CellPhoneNumberCountry: z.string().optional(),
    })
    .optional(),
});
