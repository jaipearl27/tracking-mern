export type DealListing = {
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
  Deals: Deal[];
};

export type Deal = {
  Id: number;
  Name: string;
  Description: string;
  CampaignId: string;
  State: DealState;
  Type: DealType;
  Scope: DealScope;
  Public: IsDealPublic;
  StartDate: Date | string;
  EndDate: Date | string;
  DateCreated: Date | string;
  DateLastUpdated: Date | string;
  Products: Product[];
  Uri: string;

  //
  Categories: string[];
  DiscountType: string;
  DiscountAmount: string;
  DiscountCurrency: string;
  DiscountPercent: string;
  DiscountMaximumPercent: string;
  DiscountPercentRangeStart: string;
  DiscountPercentRangeEnd: string;
  Gift: string;
  RebateAmount: string;
  RebateCurrency: string;
  DefaultPromoCode: string;
  MinimumPurchaseAmount: string;
  MinimumPurchaseAmountCurrency: string;
  MaximumSavingsAmount: string;
  MaximumSavingsCurrency: string;
  BogoBuyQuantity: string;
  BogoBuyScope: string;
  BogoBuyName: string;
  BogoBuyImageUrl: string;
  BogoGetQuantity: string;
  BogoGetScope: string;
  BogoGetDiscountType: string;
  BogoGetName: string;
  BogoGetImageUrl: string;
  BogoGetDiscountAmount: string;
  BogoGetDiscountCurrency: string;
  BogoGetDiscountPercent: string;
  PurchaseLimitQuantity: string;
};

type Product = {
  ProductName: string;
  ProductImageUrl: string;
  ProductBeforePriceAmount: string;
  ProductBeforePriceCurrency: string;
  ProductAfterPriceAmount: string;
  ProductAfterPriceCurrency: string;
};

export enum DealState {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
}

export enum DealType {
  GENERAL_SALE = "GENERAL_SALE",
  FREE_SHIPPING = "FREE_SHIPPING",
  GIFT_WITH_PURCHASE = "GIFT_WITH_PURCHASE",
  REBATE = "REBATE",
  BOGO = "BOGO",
}

export enum DealScope {
  CATEGORY = "CATEGORY",
  ENTIRE_STORE = "ENTIRE_STORE",
  PRODUCT = "PRODUCT",
}

export enum IsDealPublic {
  TRUE = "TRUE",
  FALSE = "FALSE",
}

export enum CreativeType {
  // Online Ad Creative
  BANNER = "BANNER",
  THUMBNAIL = "THUMBNAIL",
  BANNER_THUMBNAIL = "BANNER_THUMBNAIL",
  AD_REQUEST = "AD_REQUEST",
  IMAGE = "IMAGE",
  EMAIL = "EMAIL",
  TEXT = "TEXT",
  TEXT_LINK = "TEXT_LINK",
  LONG_SPONSORED_TEXT = "LONG_SPONSORED_TEXT",
  CONTENT = "CONTENT",
  COUPON = "COUPON",
  VIDEO_CLICK_TO_PLAY_IMAGE = "VIDEO_CLICK_TO_PLAY_IMAGE",
  VIDEO_THUMBNAIL = "VIDEO_THUMBNAIL",
  VIDEO = "VIDEO",
  FLASH_BACKUP = "FLASH_BACKUP",
  FLASH_THUMBNAIL = "FLASH_THUMBNAIL",
  FLASH = "FLASH",
  CUSTOM = "CUSTOM",

  // Offline Ad Creative
  PRINT = "PRINT",
  PRINT_THUMBNAIL = "PRINT_THUMBNAIL",
  CALL = "CALL",
  RADIO = "RADIO",
  TV = "TV",
  TV_THUMBNAIL = "TV_THUMBNAIL",
  TV_CLICK_TO_PLAY_IMAGE = "TV_CLICK_TO_PLAY_IMAGE",
}
