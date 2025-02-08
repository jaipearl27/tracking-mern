export enum TrackingLinkType {
  REGULAR = "Regular",
  VANITY = "Vanity",
}

export type TrackingLink = {
  CustomPath: string;
  AdId: number;
  MediaPartnerPropertyId: number;
  DeepLink: string;
  Type: TrackingLinkType;
};

export type CreateTrackingLinkPayload = {
  ProgramId: string;
  Type?: TrackingLinkType;
  CustomPath?: string;
  AdId?: string;
  DeepLink?: string;
  MediaPartnerPropertyId?: string | number;
  subId1?: string;
  subId2?: string;
  subId3?: string;
  sharedId?: string;
};
