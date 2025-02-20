export type TPromotion = {
    AdvertiserId: string; //
    AdvertiserName: string; //
    AdvertiserLocation: string; //
    PromotionFileId: string; //
    PromotionIds: string; //
    PromotionTitle: string; //
    PromotionEffectiveDates: string; //
    GenericRedemptionCode: string; //
    PromotionItemsUri: string; //?
    Uri: string;
};
export type TPromotionsDTO = {
    Promotions: {
        AdvertiserId: string; //
        AdvertiserName: string; //
        AdvertiserLocation: string; //
        PromotionFileId: string; //
        PromotionIds: string; //
        PromotionTitle: string; //
        PromotionEffectiveDates: string; //
        GenericRedemptionCode: string; //
        PromotionItemsUri: string; //?
        Uri: string;
    }[];
};
