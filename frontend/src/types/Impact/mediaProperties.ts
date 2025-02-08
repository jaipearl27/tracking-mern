import {
    Followers,
    Installs,
    MediaPropertyType,
    MobilePlatform,
    RevenueModel,
    SocialPlatform,
} from "./enums/MediaPropertiesEnums";

export type TMediaPropertiesDTO={
    MediaProperties: TMediaPropertyWebsite[] | TMediaPropertyMobile[] | TMediaPropertySocial[]
}

export type TMediaPropertyWebsite = {
    Id: string;     //
    Name: string;       //
    Thumbnail: string;
    Description: string;        //
    Tags: string;
    RevenueModel: RevenueModel[]; //
    Url: string;
    Type: MediaPropertyType.WEBSITE;    //
    MonthlyUniqueVisitors: string;      //
    AlexaRating: string;        //
    QuantcastRating: string;
    OwnershipVerified: string;  // 
    MobilePlatform: MobilePlatform;
    AppStoreRating: string;
    Installs: Installs;
    Price: string;
    SocialPlatform: SocialPlatform;
    Followers: Followers;
    Handle: string;
    Uri: string;
};

export type TMediaPropertyMobile = {
    Id: string; //
    Name: string;   //
    Thumbnail: string;  //
    Description: string;    //
    Tags: string;
    RevenueModel: RevenueModel[];   //
    Url: string;
    Type: MediaPropertyType.MOBILE; //
    MonthlyUniqueVisitors: string;
    AlexaRating: string;
    QuantcastRating: string;
    OwnershipVerified: string;
    MobilePlatform: MobilePlatform;     //
    AppStoreRating: string;     //
    Installs: Installs;     //
    Price: string;
    SocialPlatform: SocialPlatform;
    Followers: Followers;
    Handle: string;
    Uri: string;
};

export type TMediaPropertySocial = {
    Id: string; //
    Name: string;   //
    Thumbnail: string;  //
    Description: string;    //
    Tags: string;
    RevenueModel: RevenueModel[];   //
    Url: string;
    Type: MediaPropertyType.SOCIAL; //
    MonthlyUniqueVisitors: string;
    AlexaRating: string;
    QuantcastRating: string;
    OwnershipVerified: string;
    MobilePlatform: MobilePlatform;
    AppStoreRating: string;
    Installs: Installs;
    Price: string;
    SocialPlatform: SocialPlatform; //
    Followers: Followers;   //
    Handle: string;     //
    Uri: string;
};
