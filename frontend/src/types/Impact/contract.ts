// export enum ContractStatus {
//   ACTIVE = "ACTIVE",
//   PENDING = "PENDING",
//   UPCOMING = "UPCOMING",
//   DECLINED = "DECLINED",
//   EXPIRED = "EXPIRED",
// }

// export type EventPayout = {
//   EventTypeId: number;
//   EventTypeName: string;
//   EventCategory: PayoutType;
//   DefaultPayout: string | number;
//   DefaultPayoutRate: string | number;
//   PayoutLevel: string;
// };

// enum PayoutType {
//   LEAD = "LEAD",
//   SALE = "SALE",
//   DOWNLOAD = "DOWNLOAD",
//   PAGE_VISIT = "PAGE_VISIT",
//   CALL_PER_RING = "CALL_PER_RING",
//   CALL_PER_DURATION = "CALL_PER_DURATION",
//   CALL_PER_CONVERSATION = "CALL_PER_CONVERSATION",
//   PARTNER_REFERRAL = "PARTNER_REFERRAL",
//   DATA_POST = "DATA_POST",
//   OFFLINE = "OFFLINE",
//   CLICK = "CLICK",
//   MOBILE_APP = "MOBILE_APP",
// }

// enum PayoutLevel {
//   ITEM = "ITEM",
//   ORDER = "ORDER",
//   CLICK = "CLICK",
//   CALL = "CALL",
// }

// type Contract = {
//   Id: string;
//   CampaignId: string;
//   Status: ContractStatus;
//   StartDate: string;
//   EndDate: string;
//   BrandSignatory: string;
//   BrandSignatoryDate: string;
//   PartnerSignatory: string;
//   PartnerSignatoryDate: string;
//   DateCreated: string;
//   DateLastUpdated: string;
//   Terms: {
//     Currency: string;
//     EventPayouts: {
//       EventTypeId: string;
//       EventTypeName: string;
//       EventCategory: PayoutType;
//       DefaultPayoutRate: string;
//       PayoutLevel: PayoutLevel;
//       PayoutGroups: {
//         Id: string;
//         Rank: string;
//         Rules: {
//           Variable: string;
//           Operator: string;
//           Values: string[];
//         }[];
//         PayoutRate: string;
//       }[];
//       PayoutAdjustments: {
//         Id: string;
//         Rules: {
//           Variable: string;
//           Operator: string;
//           Values: string[];
//         }[];
//         Direction: string;
//         Rate: string;
//       }[];
//       PerformanceBonus: {
//         Type: string;
//         Basis: string;
//         Period: string;
//         Tiers: {
//           ActionThreshold: string;
//           PayoutRate: string;
//         }[];
//       };
//       PayoutRestrictions: {
//         Id: string;
//         Rules: {
//           Variable: string;
//           Operator: string;
//           Values: string[];
//         }[];
//       }[];
//       Limits: {
//         Type: string;
//         SubType: string;
//         Value: string;
//         LimitBy: string;
//         Period: string;
//         WeekendOverrideValue: string;
//       }[];
//       Locking: {
//         Basis: string;
//         Period: string;
//         DayOffset: string;
//       };
//       PayoutScheduling: {
//         Basis: string;
//         Period: string;
//         DayOffset: string;
//       };
//       CreditPolicy: string;
//       ValidReferrals: {
//         Type: string;
//         Window: string;
//         WindowUnit: string;
//       }[];
//     }[];
//     SpecialTermsList: {
//       TermsName: string;
//       TermsType: string;
//       TermsPdfUri: string;
//     }[];
//     ChangeNotificationPeriod: string;
//     ReturnPolicy: string;
//     MaxReturnPercentage: string;
//     ActionLimit: string;
//     ActionLimitPeriod: string;
//     CustomCreativePayer: string;
//   };
//   PdfUri: string;
//   Uri: string;
// };
