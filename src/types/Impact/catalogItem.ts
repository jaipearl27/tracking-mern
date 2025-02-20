export type CatalogItemsData = {
    Items: CatalogItem[];
};
export type CatalogItem = {
    Id: string;
    CatalogId: string;
    CampaignId: string; //maybe this
    CampaignName: string; //this
    CatalogItemId: string;
    Name: string;
    Description: string; // this
    MultiPack: string;
    Bullets: string[];
    Labels: string[];
    Manufacturer: string;
    Url: string;
    MobileUrl: string;
    ImageUrl: string; //this
    ProductBid: string;
    AdditionalImageUrls: string[];
    CurrentPrice: string; // this
    OriginalPrice: string;
    DiscountPercentage: string;
    Currency: string; //this
    StockAvailability: string;
    EstimatedShipDate: string;
    LaunchDate: string;
    ExpirationDate: string;
    Gtin: string;
    GtinType: string;
    Asin: string;
    Mpn: string;
    ShippingRate: string;
    ShippingWeight: string;
    ShippingWeightUnit: string;
    ShippingLength: string;
    ShippingWidth: string;
    ShippingHeight: string;
    ShippingLengthUnit: string;
    ShippingLabel: string;
    Category: string;
    SubCategory: string;
    AdvertiserFormatCategories: string;
    OriginalFormatCategory: string;
    OriginalFormatCategoryId: string;
    ParentName: string;
    ParentSku: string;
    IsParent: boolean;
    ItemGroupId: string;
    Colors: string[];
    Material: string;
    Pattern: string;
    Size: string;
    SizeUnit: string;
    Weight: string;
    WeightUnit: string;
    Condition: string;
    AgeGroup: string;
    AgeRangeMin: string;
    AgeRangeMax: string;
    AgeRangeUnit: string;
    Gender: string;
    Adult: boolean;
    Text1: string;
    Text2: string;
    Text3: string;
    Numeric1: string;
    Numeric2: string;
    Numeric3: string;
    Money1: string;
    Money2: string;
    Money3: string;
    Uri: string; //this
    Promotions: CatalogItemPromotion[];
};

export type CatalogItemPromotion = {
    PromotionId: string;
    PromotionTitle: string;
    PromotionEffectiveDates: string;
    GenericRedemptionCode: string;
};
