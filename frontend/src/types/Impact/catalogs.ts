export type TCatalogsData = {
    Catalogs: TCatalog[];
};

export type TCatalog = {
    Id: string;
    Name: string;
    AdvertiserId: string;
    AdvertiserName: string;
    AdvertiserLocation: string;
    CampaignId: string;
    CampaignName: string;
    NumberOfItems: string;
    DateLastUpdated: string;
    Locations: string[];
    FTPLocations: string[];
    ItemsUri: string;
    Uri: string;
};
