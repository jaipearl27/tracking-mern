export interface ImpactAccountType {
  CompanyName: string;
  PrimaryPromotionalMethod: PromotionalMethod;
  PromotionalMethods: PromotionalMethod;
  Website: string;
  PrimaryPhoneNumber: string;
  PrimaryPhoneNumberCountry: string;
  SecondaryPhoneNumber: string;
  SecondaryPhoneNumberCountry: string;
  MinimumContactRating: number;
  Timezone: string;
  Currency: string;
  RegisteredForIndirectTax: boolean;
  IndirectTaxNumber: string;
  OrganizationType: OrganizationType;
  EinSsnForeignTaxId: string;
  CorporateAddress: Address;
  BillingAddress: Address;
  FinancialContact: Contact;
  TechnicalContact: Contact;
  SecurityContact: Contact;
  CommercialContact: Contact;
  Uri: string;
}

export type Address = {
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  State: string;
  PostalCode: string;
  Country: string;
};

type Contact = {
  UserId: string;
  Name: string;
  Email: string;
  WorkPhoneNumber: string;
  WorkPhoneNumberCountry: string;
  CellPhoneNumber: string;
  CellPhoneNumberCountry: string;
};

export enum PromotionalMethod {
  EMAIL = "EMAIL",
  SEARCH = "SEARCH",
  LOYALTY = "LOYALTY",
  COUPON = "COUPON",
  SYNDICATION_BLOG_NETWORKS = "SYNDICATION_BLOG_NETWORKS",
  CPA_NETWORK = "CPA_NETWORK",
  MOBILE = "MOBILE",
  CONTENT = "CONTENT",
  SHOPPING = "SHOPPING",
  SOCIAL_MEDIA_INFLUENCER = "SOCIAL_MEDIA_INFLUENCER",
  SERVICE_PROVIDER = "SERVICE_PROVIDER",
  CONSUMER_SOFTWARE = "CONSUMER_SOFTWARE",
  INCENTIVIZED = "INCENTIVIZED",
  OFFLINE = "OFFLINE",
  OTHER = "OTHER",
  CASHBACK = "CASHBACK",
}

export enum OrganizationType {
  NONP_GOV = "NONP_GOV",
  CORP = "CORP",
  SOLE_IND = "SOLE_IND",
  LLC_LLP_LLS = "LLC_LLP_LLS",
  TRUST = "TRUST",
  SOLE_TRD = "SOLE_TRD",
  PARTNERS = "PARTNERS",
  LLC = "LLC",
  LLP = "LLP",
  COMPANY = "COMPANY",
  GOVERNMENT = "GOVERNMENT",
  OTHER = "OTHER",
}
