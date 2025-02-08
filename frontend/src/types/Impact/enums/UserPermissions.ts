export enum UserPermissions {
    MANAGE_DIRECTORY_INFO = "MANAGE_DIRECTORY_INFO", // Legacy permission setting that permitted a user to manage directory information. Part of the Account Administration role.
    RUN_USAGE_REPORTS = "RUN_USAGE_REPORTS", // Permits a user to run the _Admin_ reports found in Reports → All Reports. Part of the Account Administration role.
    MANAGE_ACCOUNT_INFO = "MANAGE_ACCOUNT_INFO", // Permits the user to manage information about the account found in the General section in ⋮ → Settings. Part of the Account Administration role.
    NEGOTIATE_AGREEMENTS = "NEGOTIATE_AGREEMENTS", // Permits a user to negotiate contract agreements with a brand—managing proposed contracts, countering a proposed contract (if permitted by the brand), accepting contracts, and declining contracts. Part of the Advertiser Management role.
    REQUEST_CAP_EXTENSIONS_AND_AGREEMENT_EXCEPTIONS = "REQUEST_CAP_EXTENSIONS_AND_AGREEMENT_EXCEPTIONS", // Permits a user to request that a brand extend action cap limits and exceptions to limitations stipulated in a contract. Part of the Advertiser Management role.
    SEND_MARKETING_MSG_TO_BRAND = "SEND_MARKETING_MSG_TO_BRAND", // Permits a user to send marketing messages to brands found on the My Brands screen. Part of the Advertiser Management role.
    VIEW_BRAND_INFO = "VIEW_BRAND_INFO", // Permits a user to view brand info found on the My Brands screen. Part of the Advertiser Management role.
    APPLY_TO_CAMPAIGN = "APPLY_TO_CAMPAIGN", // Permits a user to apply to programs (campaigns) found in the Brands Marketplace. Part of the Advertiser Management role.
    RUN_ACTION_AND_PERFORMANCE_REPORTS = "RUN_ACTION_AND_PERFORMANCE_REPORTS", // Permits a user to run the Action Listing and Performance reports found in [Top Nav Bar] → Reports → All Reports. Part of the Advertiser Management role.
    REQUEST_CUSTOM_ADS = "REQUEST_CUSTOM_ADS", // Permits a user to request custom ads from brands that allow partners to do so. Part of the Creative Management role.
    APPROVE_CREATIVE_AND_DUB_HOUSE_EXPENSES = "APPROVE_CREATIVE_AND_DUB_HOUSE_EXPENSES", // Legacy setting that permits a user to approve dubbing house and/or creative expenses for TV & Radio ads.
    MANAGE_CREATIVES = "MANAGE_CREATIVES", // Legacy setting that permits a user to manage creative for TV & Radio ads.
    RUN_CREATIVE_REPORTS = "RUN_CREATIVE_REPORTS", // Legacy setting that permits a user to run reports related to creative and dub house expenses.
    GET_AD_HTML = "GET_AD_HTML", // Permits a user to retrieve the HTML, iframe, and tracking link code for available ads.
    VIEW_FINANCIALS = "VIEW_FINANCIALS", // Permits a user to view finance settings in the Balance menu of the platform.
    MANAGE_FINANCIAL_SETTINGS = "MANAGE_FINANCIAL_SETTINGS", // Permits a user to manage financial settings, such as adding a bank account and initiating funds transfers to brands.
    RUN_FINANCIAL_TRANSACTION_REPORTS = "RUN_FINANCIAL_TRANSACTION_REPORTS", // Permits a user to run the financial reports available in the Balance menu of the platform.
    WEBSERVICES_INTEGRATION = "WEBSERVICES_INTEGRATION", // Permits a user to enable API access for the account and view access credentials.
    EVENT_CALLBACK_INTEGRATION = "EVENT_CALLBACK_INTEGRATION", // Permits a user to configure event notification postbacks.
    RUN_TECHNICAL_REPORTS = "RUN_TECHNICAL_REPORTS", // Permits a user to run technical reports found in Reports → All Reports.
    TRACKER_AND_BRAND_URL_INTEGRATIONS = "TRACKER_AND_BRAND_URL_INTEGRATIONS", // Permits a user to manage technical integration settings (partner tracking pixels, postbacks) on a per-brand basis.
    ITEM_LIST_INTEGRATIONS = "ITEM_LIST_INTEGRATIONS", // Permits a user to view and manage product catalogs.
}
