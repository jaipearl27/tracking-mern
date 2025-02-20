"use server";

import axios, { AxiosInstance, AxiosResponse, ResponseType } from "axios";
import { Paths } from "./Paths";
import { ImpactAccountType } from "@/types/Impact/companyInformation";
import { TCatalog, TCatalogsData } from "@/types/Impact/catalogs";
import { TAd } from "@/types/Impact/ads";
import { Compaign } from "@/types/Impact/compaigns";
import { TAdClick } from "@/types/Impact/Click";
import {
  ExportClicksData,
  ExportClicksPartnersFilters,
} from "./DTOs/ExportClicksPartners";
import { CatalogItemsData } from "@/types/Impact/catalogItem";
import { CreateTrackingLinkPayload } from "@/types/Impact/trackingLink";
import { WithdrawalSettings } from "@/types/Impact/withdrawalSettings";
import { Deal, DealListing } from "@/types/Impact/deals";
import { TUser } from "@/types/Impact/user";
import { Job } from "@/types/Impact/job";
import {
  TMediaPropertiesDTO,
  TMediaPropertyMobile,
  TMediaPropertySocial,
  TMediaPropertyWebsite,
} from "@/types/Impact/mediaProperties";
import { TPromotionsDTO } from "@/types/Impact/promotion";
import { app, db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { TCampaigns } from "@/app/(dashboard)/impact/programs/_lib/types";
type ParamsT = { [key: string]: string };

const baseURL = "https://api.impact.com";
const auth_token = "4miX_DsXvxmrupVLnkC7.ZBkGLkzgekU";
const acc_sid = "IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1";
const {
  CAMPAIGNS,
  USERS,
  CLICKS,
  CATALOG,
  ACCOUNTS,
  JOB,
  AD,
  STORES,
  REPORTS,
  TRACKING_LINKS,
  WITHDRAWAL_SETTINGS,
  DEALS,
  MEDIA_PROPERTIES,
  PROMOTIONS,
  CONTRACTS,
  INVOICES,
  TAX_DOCUMENTS,
} = Paths.IMPACT;

const GetUserDoc = (uid: string) => doc(db, "Users", uid);
export const USER_INFO_ACTION_CREATE_USER = async (
  uid: string,
  customerId: string,
) => {
  try {
    await setDoc(GetUserDoc(uid), {
      customerId: customerId,
      tokens: 0,
    });
    return { message: "User created successfully" };
  } catch (error) {
    console.log(error);
    return null;
  }
};
function getAuthorizationHeader(auth_token: string, acc_sid: string): string {
  const token = Buffer.from(`${acc_sid}:${auth_token}`, "utf8").toString(
    "base64",
  );
  return `Basic ${token}`;
}
async function handleRequest<T>(
  request: Promise<AxiosResponse<T>>,
): Promise<T | null> {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.trace(error.response.data);
      console.log(error.response?.data);
      return null;
    }
    return null;
  }
  return null;
}

function createAxiosInstance({
  accept,
  contentLength,
  contentType,
  responseType = "json",
}: {
  accept: string;
  contentLength?: string;
  contentType?: string;
  responseType?: ResponseType;
}): AxiosInstance {
  return axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: getAuthorizationHeader(auth_token, acc_sid),
      "Content-Type": contentType ? contentType : "application/json",
      Accept: accept,
      "Content-length": contentLength,
    },
    responseType,
  });
}

// Accounts
export const IMPACT_ACTION_ACCOUNT_GET = async (
  params?: ParamsT,
): Promise<ImpactAccountType | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(ACCOUNTS.GET_ACCOUNT(acc_sid), { params }),
  );
};

// Mediapartners/Users
export const IMPACT_ACTION_MEDIAPARTNERS_GET = async ({
  params,
}: {
  params?: ParamsT;
}): Promise<{ Users: TUser[] } | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(axiosInstance.get(USERS.GET_USERS(acc_sid), { params }));
};
export async function IMPACT_ACTION_SINGLE_MEDIAPARTNERS_GET({
  id,
  params,
}: {
  id: string;
  params?: ParamsT;
}): Promise<any[] | null> {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(USERS.GET_SINGLE_USER(acc_sid, id), {
      params,
    }),
  );
}

// Campaigns
export const IMPACT_ACTION_CAMPAIGNS_GET = async (
  params?: ParamsT,
): Promise<TCampaigns | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CAMPAIGNS.GET_CAMPAIGNS(acc_sid), { params }),
  );
};
export const IMPACT_ACTION_CAMPAIGN_GET_LOGO = async (params?: any) => {
  const axiosInstance = createAxiosInstance({ accept: "image/gif" });
  return handleRequest(
    axiosInstance.get(CAMPAIGNS.GET_CAMPAIGN_LOGO(params.campLogoUri), {
      params: params.config,
    }),
  );
};
export const IMPACT_ACTION_SINGLE_CAMPAIGNS_GET = async (
  id: string,
  params?: ParamsT,
): Promise<Compaign | null> => {
  console.log("--------------------------------", params?.programId);
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CAMPAIGNS.GET_SINGLE_CAMPAIGN(acc_sid, id), {
      params,
    }),
  );
};

// export const IMPACT_ACTION_SINGLE_CAMPAIGN_PUBLIC_TERM_DOWNLOAD =
//   async (): Promise<any | null> => {
//     const axiosInstance = createAxiosInstance({
//       accept: "application/pdf",
//       responseType: "blob",
//     });
//     return handleRequest(axiosInstance.get(CAMPAIGNS.PUBLIC_TERMS_DOWNLOAD()));
//   };

// Clicks
export const IMPACT_ACTION_RETRIEVE_CLICK_PARTNERS = async ({
  id,
  params,
}: {
  id: string;
  params?: ParamsT;
}): Promise<TAdClick | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CLICKS.GET_CLICK_PARTNERS(acc_sid, id), {
      params,
    }),
  );
};
export const IMPACT_ACTION_RETRIEVE_CLICK_BRANDS = async (
  { campaignId, clickId }: { campaignId: string; clickId: string },
  params?: ParamsT,
): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(
      CLICKS.GET_CLICK_BRANDS(acc_sid, { campaignId, clickId }),
      {
        params,
      },
    ),
  );
};
export const IMPACT_ACTION_EXPORT_CLICK_PARTNERS = async ({
  params,
  data,
}: {
  data: ExportClicksPartnersFilters;
  params?: ParamsT;
}): Promise<ExportClicksData | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CLICKS.EXPORT_CLICK_PARTNERS(acc_sid), {
      params,
      auth: {
        username: acc_sid,
        password: auth_token,
      },
      data,
    }),
  );
};
export const IMPACT_ACTION_EXPORT_CLICK_BRANDS = async (
  id: number,
  params?: ParamsT,
): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CLICKS.EXPORT_CLICK_BRANDS(acc_sid, id), {
      params,
    }),
  );
};
export const IMPACT_ACTION_CREATE_CLICK_POST = async (
  id: string,
  params?: ParamsT,
): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CLICKS.POST_CREATE_TRACKING_LINK(acc_sid, id), {
      params,
    }),
  );
};

// Catalogs
export const IMPACT_ACTION_LIST_CATALOG_GET = async (
  params?: ParamsT,
): Promise<TCatalogsData | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CATALOG.GET_LIST_CATALOGS(acc_sid), {
      params,
    }),
  );
};
export const IMPACT_ACTION_CATALOG_GET = async (
  id: string,
): Promise<TCatalog | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(axiosInstance.get(CATALOG.GET_CATALOG(acc_sid, id)));
};
export const IMPACT_ACTION_CATALOG_ITEM_GET = async (
  catalogId: string,
  itemId: string,
  params?: ParamsT,
): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CATALOG.GET_CATALOG_ITEM(acc_sid, catalogId, itemId), {
      params,
    }),
  );
};
export const IMPACT_ACTION_LIST_CATALOG_ITEMS_GET = async ({
  catalogId,
  params,
}: {
  catalogId: string;
  params?: ParamsT;
}): Promise<CatalogItemsData | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CATALOG.GET_LIST_CATALOG_ITEMS(acc_sid, catalogId), {
      params,
    }),
  );
};

export const IMPACT_ACTION_SEARCH_CATALOG_ITEMS_GET = async (
  params?: ParamsT,
): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(CATALOG.GET_SEARCH_CATALOG_ITEMS(acc_sid), {
      params,
    }),
  );
};
export const IMPACT_ACTION_JOB_DOWNLOAD = async (
  downloadUri: string,
  params?: ParamsT,
): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/octet-stream",
  });
  return handleRequest(
    axiosInstance.get(JOB.DOWNLOAD_JOB(downloadUri), {
      params,
    }),
  );
};
export const IMPACT_ACTION_JOB_REPLAY = async (
  jobId: string,
  params?: ParamsT,
): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/octet-stream",
    contentLength: "0",
  });
  return handleRequest(
    axiosInstance.put(JOB.REPLAY_JOB(acc_sid, jobId), {
      params,
    }),
  );
};

export const IMPACT_ACTION_JOB_GET_SINGLE = async (
  jobId: string,
  params?: ParamsT,
): Promise<Job | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(JOB.GET_SINGLE(acc_sid, jobId), {
      params,
    }),
  );
};

export const IMPACT_ACTION_JOB_GET_ALL = async (
  params: Record<string, string> = {},
) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.get(JOB?.GET_ALL(acc_sid), { params }),
  );
};

// ===================== Advertisements ========================== //
// Brands
export const IMPACT_ACTION_AD_CREATE = async ({
  params,
  body,
}: {
  body: { [key: string]: string | number };
  params?: ParamsT;
}): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/json",
    contentType: "application/json",
  });
  return handleRequest(
    axiosInstance.post(
      AD.CREATE_AD_POST(acc_sid),
      {
        Name: body.name,
        CampaignId: body.campaignId,
        AdType: body.adType,
        Language: body.language,
        LinkText: body.linkText,
      },
      // `Name=${body.name}&CampaignId=${body.campaignId}&AdType=${body.adType}&MobileFallbacks.ANDROID=${body.androidFallbacks}&MobileFallbacks.IOS=${body.iosFallbacks}&Language=${body.language}&LinkText=${body.linkText}`,
      {
        ...params,
      },
    ),
  );
};
export const IMPACT_ACTION_AD_LIST_ALL = async (
  params?: ParamsT,
): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/json",
    contentType: "application/json",
  });
  return handleRequest(
    axiosInstance.get(AD.LIST_ALL_ADS_FOR_BRANDS(acc_sid), {
      ...params,
    }),
  );
};
export const LIST_ALL_ADS_FOR_PARTNERS = async ({
  params,
}: {
  params?: ParamsT;
}): Promise<any | null> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/json",
  });
  console.log(params, "P");
  return handleRequest(
    axiosInstance.get(AD.LIST_ALL_ADS_FOR_PARTNERS(acc_sid), {
      params,
    }),
  );
};
export const RETRIEVE_AD_BY_ID = async ({
  params,
  id,
}: {
  params?: ParamsT;
  id: string;
}): Promise<any | null> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/json",
  });
  return handleRequest(
    axiosInstance.get(AD.RETRIEVE_AD_BY_ID(acc_sid, id), {
      params,
    }),
  );
};

// testing
export const IMPACT_ACTION_VIEW_STORE = async (
  uri: string,
): Promise<any | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(axiosInstance.get(uri));
}; //
export const IMPACT_ACTION_STORES_GET_ALL = async ({
  params,
}: any): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(axiosInstance.get(STORES.GET_ALL(acc_sid), { params }));
};

export const IMPACT_ACTION_STORES_GET_SPECIFIC = async ({
  storeId,
  params = {},
}: {
  params?: Record<string, any>;
  storeId: string;
}): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(STORES.GET_SPECIFIC(acc_sid, storeId), { params }),
  );
};

export const IMPACT_ACTION_STORES_GET_ITEMS = async ({
  storeId,
  params = {},
  groupId,
}: {
  params?: Record<string, any>;
  storeId: string;
  groupId: string;
}): Promise<any[] | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(STORES.GET_STORE_ITEMS(acc_sid, storeId, groupId), {
      params,
    }),
  );
};

export const IMPACT_ACTION_GET_REPORTS = async ({
  params = {},
}: {
  params?: Record<string, any>;
}): Promise<any | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(REPORTS.GET_REPORTS(acc_sid), {
      params,
    }),
  );
};

export const IMPACT_ACTION_GET_REPORT_RECORDS = async ({
  reportId,
  params = {},
}: {
  reportId: string;
  params?: Record<string, any>;
}): Promise<any | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(REPORTS.GET_SPECIFIC_REPORT(acc_sid, reportId), {
      params,
    }),
  );
};

export const IMPACT_ACTION_GET_REPORT_METADATA = async ({
  reportId,
  params = {},
}: {
  reportId: string;
  params?: Record<string, any>;
}): Promise<any | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return handleRequest(
    axiosInstance.get(REPORTS.GET_METADATA(acc_sid, reportId), {
      params,
    }),
  );
};

export const IMPACT_ACTION_EXPORT_REPORT = async ({
  reportId,
  params = {},
}: {
  reportId: string;
  params?: Record<string, any>;
}): Promise<any | null> => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  const result = await handleRequest(
    axiosInstance.get(REPORTS.EXPORT_REPORT(acc_sid, reportId), {
      params,
    }),
  );

  return result;

  // console.log(result, "RESULT____");

  // if (!result) {
  //   return null;
  // }

  // console.log(`${baseURL}${result?.ResultUri}`, "URL____");

  // const res = await fetch(
  //   "https://api.impact.com/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Jobs/00b8d489-d4b9-45fc-b886-679cc1ca6cc8/Download?ResultFormat=CSV",
  //   {
  //     headers: {
  //       Authorization: getAuthorizationHeader(auth_token, acc_sid),
  //     },
  //   },
  // );

  // console.log(res, "RES___");

  // return await res?.blob();
  // const blob = await handleRequest(
  //   axiosInstance.get(result?.ResultUri + "?ResultFormat=CSV"),
  // );
  // console.log(blob, "BLOB____");
};

export const IMPACT_ACTION_CREATE_TRACKING_LINK = async ({
  payload,
  programId,
}: {
  programId: string;
  payload: CreateTrackingLinkPayload;
}) => {
  const { ProgramId, ...params } = payload;

  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance.post(
      TRACKING_LINKS.CREATE(acc_sid, programId),
      {},
      { params },
    ),
  );
};

export const IMPACT_ACTION_GET_WITHDRAWAL_SETTINGS = async () => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return (await handleRequest(
    axiosInstance.get(WITHDRAWAL_SETTINGS.GET(acc_sid)),
  )) as WithdrawalSettings | null;
};

export const IMPACT_ACTION_UPDATE_WITHDRAWAL_SETTINGS = async (data?: any) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.put(WITHDRAWAL_SETTINGS?.UPDATE(acc_sid), data),
  );
};

export const IMPACT_ACTION_CREATE_MEDIA_PROPERTIES = async (
  data: any,
): Promise<TMediaPropertiesDTO | null> => {
  const formData = new FormData();
  formData.append("Name", "Some Siteees");
  formData.append("Type", "WEBSITE");
  formData.append("Url", "https://www.w3.org/Provider/Style/dummy.html");
  formData.append("Description", "The official website for Wile E. Coyote.");
  const axiosInstance = createAxiosInstance({
    accept: "application/json",
    contentType: "multipart/form-data",
  });
  return await handleRequest(
    axiosInstance.post(MEDIA_PROPERTIES.CREATE(acc_sid), formData),
  );
};
export const IMPACT_ACTION_LIST_MEDIA_PROPERTIES =
  async (): Promise<TMediaPropertiesDTO | null> => {
    const axiosInstance = createAxiosInstance({
      accept: "application/json",
    });
    return await handleRequest(
      axiosInstance.get(MEDIA_PROPERTIES.FIND_MANY(acc_sid)),
    );
  };
export const IMPACT_ACTION_GET_MEDIA_PROPERTY = async (
  id: string,
): Promise<
  TMediaPropertyWebsite | TMediaPropertyMobile | TMediaPropertySocial | null
> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/json",
  });
  return await handleRequest(
    axiosInstance.get(MEDIA_PROPERTIES.GET_BY_ID(acc_sid, id)),
  );
};
export const IMPACT_ACTION_LIST_PROMOTIONS = async (
  params?: ParamsT,
): Promise<TPromotionsDTO | null> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/json",
  });
  return await handleRequest(
    axiosInstance.get(PROMOTIONS.FIND_MANY(acc_sid), { params }),
  );
};
export const IMPACT_ACTION_GET_PROMOTION = async (
  id: string,
): Promise<
  TMediaPropertyWebsite | TMediaPropertyMobile | TMediaPropertySocial | null
> => {
  const axiosInstance = createAxiosInstance({
    accept: "application/json",
  });
  return await handleRequest(
    axiosInstance.get(PROMOTIONS.GET_BY_ID(acc_sid, id)),
  );
};

export const IMPACT_ACTION_GET_DEALS = async ({
  campaignId,
  params,
}: {
  campaignId: string;
  params: Record<string, any>;
}) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return (await handleRequest(
    axiosInstance?.get(DEALS?.GET_ALL(acc_sid, campaignId), { params }),
  )) as DealListing;
};

export const IMPACT_ACTION_GET_SPECIFIC_DEAL = async ({
  campaignId,
  dealId,
}: {
  campaignId: string;
  dealId: string;
}) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return (await handleRequest(
    axiosInstance?.get(DEALS?.GET_SPECIFIC(acc_sid, campaignId, dealId)),
  )) as Deal;
};

export const IMPACT_ACTION_GET_CONTRACTS = async () => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.get(CONTRACTS?.GET_ALL(acc_sid), {
      params: {
        PageSize: "5",
      },
    }),
  );
};

export const IMPACT_ACTION_GET_SINGLE_CONTRACT = async ({
  contractId,
}: {
  contractId: string;
}) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.get(CONTRACTS?.GET_SPECIFIC(acc_sid, contractId)),
  );
};

export const IMPACT_ACTION_GET_ACTIVE_CONTRACT = async ({
  campaignId,
}: {
  campaignId: string;
}) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.get(CONTRACTS?.GET_ACTIVE_CONTRACT(acc_sid, campaignId)),
  );
};

export const IMPACT_ACTION_GET_PUBLIC_TERMS = async ({
  campaignId,
}: {
  campaignId: string;
}) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.get(CONTRACTS?.GET_PUBLIC_TERMS(acc_sid, campaignId)),
  );
};

export const IMPACT_ACTION_GET_INVOICES = async (
  params: Record<string, any> = {},
) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.get(INVOICES?.GET_ALL(acc_sid), {
      params,
    }),
  );
};

export const IMPACT_ACTION_GET_TAX_DOCUMENTS = async (
  params: Record<string, any> = {},
) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.get(TAX_DOCUMENTS.GET_ALL(acc_sid), {
      params,
    }),
  );
};

export const IMPACT_ACTION_GET_RECENT_TAX_DOCUMENT = async () => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.get(TAX_DOCUMENTS.GET_RECENT(acc_sid)),
  );
};

export const IMPACT_ACTION_CREATE_TAX_DOCUMENT = async (
  data: Record<string, any>,
) => {
  const axiosInstance = createAxiosInstance({ accept: "application/json" });
  return await handleRequest(
    axiosInstance?.post(TAX_DOCUMENTS.CREATE_DOC(acc_sid), data),
  );
};
