export type Compaign = {
  AdvertiserId: string;
  AdvertiserName: string;
  AdvertiserUrl: string;
  CampaignId: string;
  CampaignName: string;
  CampaignUrl: string;
  CampaignDescription: string;
  ShippingRegions: string[];
  CampaignLogoUri: string;
  PublicTermsUri: string;
  ContractStatus: string;
  ContractUri: string;
  TrackingLink: string;
  AllowsDeeplinking: string;
  DeeplinkDomains: string[];
  Uri: string;
  mediaProperties: any;
  users?: any;
};

export type CompaignListing = {
  "@page": string;
  "@numpages": string;
  "@pagesize": string;
  "@total": string;
  "@start": string;
  "@end": string;
  "@uri": string;
  "@firstpageuri": string;
  "@previouspageuri": string;
  "@nextpageuri": string;
  "@lastpageuri": string;
  Campaigns: Compaign[];
};
