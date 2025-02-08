import { AdType } from "./enums/AdType";
import { Browser } from "./enums/Browser";
import { DealScope } from "./enums/DealScope";
import { DealType } from "./enums/DealType";
import { DeviceFamilies } from "./enums/DeviceFamily";
import { Devices } from "./enums/DeviceType";
import { OperatingSystem } from "./enums/OS";

export type TAdClick = {
    AdId: string;
    AdName: string;
    AdType: AdType
    Browser: Browser;
    CampaignId: string;
    CampaignName: string;
    CpcBid: string;
    CustomerArea: string;
    CustomerCity: string;
    CustomerCountry: string;
    CustomerRegion: string;
    DealName: string;
    DealScope: DealScope;
    DealType: DealType;
    DeviceFamily: DeviceFamilies;
    DeviceType: Devices;
    EventDate: string;
    Id: string;
    IpAddress: string;
    LandingPageUrl: string;
    MediaId: string;
    MediaName: string;
    Os: OperatingSystem;
    ProfileId: string;
    ReferringDomain: string;
    UniqueClick: boolean;
};


// Sample data

// {
//     Id: 'xHS1A6RfXxyNWt9QNFU012YBUkCxfFUVqSmPWQ0',
//     CpcBid: '0.0',
//     UniqueClick: true
//     EventDate: '2024-07-17T02:36:03-07:00',

//     CampaignId: '19799',
//     CampaignName: 'TeckWrapCraft Affiliate Program',
//     ProfileId: 'fc0bc7a8-441f-11ef-854a-239cf45f3e17',
//     MediaId: '3293666',
//     MediaName: 'ShopyTips3',


//     AdId: '2096543',
//     AdName: 'TeckWrapCraft Prime Day Sale - 1 DAY LEFT',
//     AdType: 'BANNER',
//     DealName: 'TeckWrapCraft Prime Day Deal',
//     DealType: 'GIFT_WITH_PURCHASE',
//     DealScope: 'ENTIRE_STORE',

//     IpAddress: 'AAAADMU81+QNzIv6ioRmVbkdTMEW3B2JGSGc0DpIXwpStUIEOGgvMx7xEvLnlZo=',
//     CustomerArea: 'N/A',
//     CustomerCity: 'Karachi',
//     CustomerRegion: 'Sindh',
//     CustomerCountry: 'PK',
//     DeviceType: 'DESKTOP',
//     DeviceFamily: 'Windows Machine',
//     Browser: 'Chrome',
//     Os: 'Windows 10',

//     ReferringDomain: 'NA',
//     LandingPageUrl: 'https://teckwrapcraft.com?irclickid=xHS1A6RfXxyNWt9QNFU012YBUkCxfFUVqSmPWQ0&irgwc=1',
//   }