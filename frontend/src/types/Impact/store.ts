export type StoreListing = {
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
  Stores: Store[];
};

export type Store = {
  Id: string;
  Name: string;
  NumberOfGroups: string;
  DateLastUpdated: string;
  StoreUri: string;
  StoreAvatar: string;
  StoreBanner: string;
  Uri: string;
  Groups: StoreGroup[];
};

export type StoreGroup = {
  Id: string;
  Name: string;
  NumberOfProducts: string;
  DateLastUpdated: string;
  StartDate: string;
  EndDate: string;
  Status: string;
  CatalogId: string;
  Uri: string;
  ItemsUri: string;
  GroupProductPreview: string;
};
