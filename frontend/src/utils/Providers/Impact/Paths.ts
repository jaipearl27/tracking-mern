export class Paths {
  static APP_URL = process?.env?.APP_URL || "";
  static IMPACT_URL = process?.env?.IMPACT_URL || "https://api.impact.com";

  static IMPACT = {
    ACCOUNTS: {
      GET_ACCOUNT: (acc_sid: string) =>
        `/Mediapartners/${acc_sid}/CompanyInformation`,
      UPDATE_ACCOUNT: (acc_sid: string) =>
        `/Mediapartners/${acc_sid}/CompanyInformation`,
    },
    USERS: {
      GET_USERS: (acc_sid: string) => `/Mediapartners/${acc_sid}/Users`,
      GET_SINGLE_USER: (acc_sid: string, id: string) =>
        `/Mediapartners/${acc_sid}/Users/${id}`,
    },
    CAMPAIGNS: {
      GET_SINGLE_CAMPAIGN: (acc_sid: string, id: string) =>
        `/Mediapartners/${acc_sid}/Campaigns/${id}`,
      GET_CAMPAIGNS: (acc_sid: string) => `/Mediapartners/${acc_sid}/Campaigns`,
      GET_CAMPAIGN_LOGO: (campLogoUri: string) => campLogoUri,
      PUBLIC_TERMS_DOWNLOAD: (campaignId: string) =>
        `/Mediapartners/${process?.env?.IMPACT_ACCOUNT_SID}/Campaigns/${campaignId}/PublicTerms/Download`,
    },
    CLICKS: {
      GET_CLICK_PARTNERS: (acc_sid: string, id: string) =>
        `/Mediapartners/${acc_sid}/Clicks/${id}`,
      GET_CLICK_BRANDS: (
        acc_sid: string,
        { campaignId, clickId }: { campaignId: string; clickId: string },
      ) => `/Advertisers/${acc_sid}/Campaigns/${campaignId}/Clicks/${clickId}`,
      EXPORT_CLICK_PARTNERS: (acc_sid: string) =>
        `/Mediapartners/${acc_sid}/ClickExport`,
      EXPORT_CLICK_BRANDS: (acc_sid: string, id: number) =>
        `/Advertisers/${acc_sid}/Programs/${id}/ClickExport`,
      POST_CREATE_TRACKING_LINK: (acc_sid: string, programId: string) =>
        `/Mediapartners/${acc_sid}/Programs/${programId}/TrackingLinks?MediaPartnerPropertyId=1892978&DeepLink=https%3A%2F%2Fexample.com%2Fmysite%2F&Type=vanity&subId1=test&sharedId=test2`,
    },
    CATALOG: {
      GET_LIST_CATALOGS: (acc_sid: string) =>
        `/Mediapartners/${acc_sid}/Catalogs`,
      GET_CATALOG: (acc_sid: string, id: string) =>
        `/Mediapartners/${acc_sid}/Catalogs/${id}`,
      GET_CATALOG_ITEM: (acc_sid: string, catalogId: string, itemId: string) =>
        `/Mediapartners/${acc_sid}/Catalogs/${catalogId}/Items/${itemId}`,
      GET_LIST_CATALOG_ITEMS: (acc_sid: string, catalogId: string) =>
        `Mediapartners/${acc_sid}/Catalogs/${catalogId}/Items`,
      GET_SEARCH_CATALOG_ITEMS: (acc_sid: string) =>
        `Mediapartners/${acc_sid}/Catalogs/ItemSearch`,
    },
    JOB: {
      FETCH_JOB_GET: (downloadUri: string) =>
        `https://api.impact.com${downloadUri}`,
      DOWNLOAD_JOB: (downloadUri: string) =>
        `https://api.impact.com${downloadUri}`,
      REPLAY_JOB_PUT: (replayUri: string) =>
        `https://api.impact.com${replayUri}`,
      GET_ALL: (acc_sid: string) => `/Mediapartners/${acc_sid}/Jobs`,
      GET_SINGLE: (acc_sid: string, jobId: string) =>
        `/Mediapartners/${acc_sid}/Jobs/${jobId}`,
      REPLAY_JOB: (acc_sid: string, jobId: string) =>
        `/Mediapartners/${acc_sid}/Jobs/${jobId}/Replay`,
    },
    AD: {
      // Brand
      CREATE_AD_POST: (acc_sid: string) => `/Advertisers/${acc_sid}/Ads`,
      LIST_ALL_ADS_FOR_BRANDS: (acc_sid: string) =>
        `/Advertisers/${acc_sid}/Ads`,
      LIST_ALL_ADS_FOR_PARTNERS: (acc_sid: string) =>
        `/Mediapartners/${acc_sid}/Ads`,
      RETRIEVE_AD_BY_ID: (acc_sid: string, id: string) =>
        `/Mediapartners/${acc_sid}/Ads/${id}`,
    },
    // AD: {
    //   // Brand
    //   CREATE_AD_POST: (acc_sid: string) =>
    //     `https://api.impact.com/Advertisers/${acc_sid}/Ads`,
    //   DOWNLOAD_JOB: (downloadUri: string) =>
    //     `https://api.impact.com${downloadUri}`,
    //   REPLAY_JOB_PUT: (replayUri: string) =>
    //     `https://api.impact.com${replayUri}`,
    // },
    STORES: {
      GET_ALL: (acc_sid: string) => `/Mediapartners/${acc_sid}/Stores/`,
      GET_SPECIFIC: (acc_sid: string, storeId: string) =>
        `/Mediapartners/${acc_sid}/Stores/${storeId}`,
      GET_STORE_ITEMS: (acc_sid: string, storeId: string, groupId: string) =>
        `/Mediapartners/${acc_sid}/Stores/${storeId}/Group/${groupId}/Items/`,
    },
    REPORTS: {
      GET_REPORTS: (acc_sid: string) => `/Mediapartners/${acc_sid}/Reports`,
      GET_SPECIFIC_REPORT: (acc_sid: string, reportId: string) =>
        `/Mediapartners/${acc_sid}/Reports/${reportId}`,
      GET_METADATA: (acc_sid: string, reportId: string) =>
        `/Mediapartners/${acc_sid}/Reports/${reportId}/MetaData`,
      EXPORT_REPORT: (acc_sid: string, reportId: string) =>
        `/Mediapartners/${acc_sid}/ReportExport/${reportId}`,
    },
    TRACKING_LINKS: {
      CREATE: (acc_sid: string, programId: string) =>
        `/Mediapartners/${acc_sid}/Programs/${programId}/TrackingLinks`,
    },
    WITHDRAWAL_SETTINGS: {
      GET: (acc_sid: string) => `/Mediapartners/${acc_sid}/WithdrawalSettings`,
      UPDATE: (acc_sid: string) =>
        `/Mediapartners/${acc_sid}/WithdrawalSettings`,
    },
    MEDIA_PROPERTIES: {
      CREATE: (acc_sid: string) => `/Mediapartners/${acc_sid}/MediaProperties`,
      FIND_MANY: (acc_sid: string) =>
        `/Mediapartners/${acc_sid}/MediaProperties`,
      GET_BY_ID: (acc_sid: string, id: string) =>
        `/Mediapartners/${acc_sid}/MediaProperties/${id}`,
    },
    DEALS: {
      GET_ALL: (acc_sid: string, campaignId: string) =>
        `/Mediapartners/${acc_sid}/Campaigns/${campaignId}/Deals`,
      GET_SPECIFIC: (acc_sid: string, campaignId: string, dealId: string) =>
        `/Mediapartners/${acc_sid}/Campaigns/${campaignId}/Deals/${dealId}`,
    },
    CONTRACTS: {
      GET_ALL: (acc_sid: string) => `/Mediapartners/${acc_sid}/Contracts`,
      GET_SPECIFIC: (acc_sid: string, contractId: string) =>
        `/Mediapartners/${acc_sid}/Contracts/${contractId}`,
      GET_ACTIVE_CONTRACT: (acc_sid: string, campaignId: string) =>
        `/Mediapartners/${acc_sid}/Campaigns/${campaignId}/Contracts/Active`,
      GET_PUBLIC_TERMS: (acc_sid: string, campaignId: string) =>
        `/Mediapartners/${acc_sid}/Campaigns/${campaignId}/PublicTerms`,
    },
    PROMOTIONS: {
      FIND_MANY: (acc_sid: string) => `/Mediapartners/${acc_sid}/Promotions`,
      GET_BY_ID: (acc_sid: string, promotionId: string) =>
        `/Mediapartners/${acc_sid}/Promotions/${promotionId}`,
      GET_PROMOTION_ITEMS: (uri: string) => uri,
    },
    INVOICES: {
      GET_ALL: (acc_sid: string) => `/Mediapartners/${acc_sid}/Invoices`,
    },
    TAX_DOCUMENTS: {
      GET_ALL: (acc_sid: string) => `/Mediapartners/${acc_sid}/TaxDocuments`,
      GET_RECENT: (acc_sid: string) => `/Mediapartners/${acc_sid}/TaxDocument`,
      CREATE_DOC: (acc_sid: string) => `/Mediapartners/${acc_sid}/TaxDocument`,
    },
  };
}
