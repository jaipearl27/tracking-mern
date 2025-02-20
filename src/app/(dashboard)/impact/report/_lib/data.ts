export const reportsListingData = {
  "@page": "1",
  Reports: [
    {
      Name: "Account Balance History",
      Id: "18",
      Category: "Finance",
      Description:
        "Lists every financial transaction posted to your account over the selected date range. ",
      ApiAccessible: false,
      RunUri: "/secure/mediapartners/report/viewReport.report?id=18",
    },
    {
      Name: "Action Listing",
      Id: "adv_action_listing_fast_pm_only",
      Category: "Performance",
      Description:
        "Displays data for each individual action that has been credited to your media.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/<AccountSID>/Reports/adv_action_listing_fast_pm_only",
      MetaDataUri:
        "/Mediapartners/<AccountSID>/Reports/adv_action_listing_fast_pm_only/MetaData",
    },
  ],
};

// sample list

export const fetchlistreportdata = {
  "@page": "1",
  "@numpages": "1",
  "@pagesize": "100",
  "@total": "79",
  "@start": "0",
  "@end": "78",
  "@uri": "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports",
  "@firstpageuri":
    "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports?Page=1",
  "@previouspageuri": "",
  "@nextpageuri": "",
  "@lastpageuri":
    "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports?Page=1",
  Reports: [
    {
      Name: "Action Listing",
      Id: "mp_action_listing_fast",
      Description:
        "Displays data for each individual action that has been credited to you.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_fast",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_fast",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_fast/MetaData",
    },
    {
      Name: "Action Listing based on Clearing Date",
      Id: "mp_action_listing_clearing_date",
      Description:
        "Shows action listing by clearing date.  The date the payout gets credited to the Media Partner account.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_clearing_date",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_clearing_date",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_clearing_date/MetaData",
    },
    {
      Name: "Action Listing for a Paystub",
      Id: "action_listing_paystub",
      Description: "Shows listing of actions associated  with a paystub.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/action_listing_paystub",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/action_listing_paystub",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/action_listing_paystub/MetaData",
    },
    {
      Name: "Action SKU Listing",
      Id: "mp_action_sku_listing",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_sku_listing",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_sku_listing",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_sku_listing/MetaData",
    },
    {
      Name: "Advanced Action Listing",
      Id: "mp_action_listing_sku",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_sku",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku/MetaData",
    },
    {
      Name: "Airbnb - Custom Partner Listing Report",
      Id: "airbnb_partner_listing",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/airbnb_partner_listing",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/airbnb_partner_listing",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/airbnb_partner_listing/MetaData",
    },
    {
      Name: "Airbnb Advanced Action Listing",
      Id: "airbnb_mp_action_listing_sku",
      Description:
        "Displays very detailed data for each individual action that has been credited to you.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/airbnb_mp_action_listing_sku",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/airbnb_mp_action_listing_sku",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/airbnb_mp_action_listing_sku/MetaData",
    },
    {
      Name: "Airbnb Demand - Custom Partner Listing by Locking Date Report",
      Id: "airbnb_partner_listing_by_locking_date",
      Description:
        "Basic information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/airbnb_partner_listing_by_locking_date",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/airbnb_partner_listing_by_locking_date",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/airbnb_partner_listing_by_locking_date/MetaData",
    },
    {
      Name: "AMEX Field Partnerships - Advanced Action Listing",
      Id: "mp_action_listing_sku_ae",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_ae",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_sku_ae",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_ae/MetaData",
    },
    {
      Name: "Bark Parental Controls - Advanced Action Listing /w Text1,Text2",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=16321",
    },
    {
      Name: "Bonus & Make Good Listing",
      Id: "mp_bonus_make_good_listing",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_bonus_make_good_listing",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_bonus_make_good_listing",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_bonus_make_good_listing/MetaData",
    },
    {
      Name: "Capital One - Advanced Action Listing /w Text1,Text2 and Text3",
      Id: "mp_action_listing_sku_custom_cap_one",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_custom_cap_one",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_sku_custom_cap_one",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_custom_cap_one/MetaData",
    },
    {
      Name: "Caring - Advanced Action Listing /w Text1,Text2,Text3,Text4,Text5 and Text6",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data /w Text1,Text2,Text3,Text4,Text5 and Text6",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=16115",
    },
    {
      Name: "Carter's - Advanced Action Listing /w Text1",
      Id: "12172",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/12172",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/12172",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/12172/MetaData",
    },
    {
      Name: "Click Tracker CPC Earnings",
      Id: "mp_action_listing_cpc_action",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_cpc_action",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_cpc_action",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_cpc_action/MetaData",
    },
    {
      Name: "Compliance Violations Listing",
      Id: "mp_violations_listing",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=6496",
    },
    {
      Name: "Contract History Detail",
      Id: "io_history_detail",
      Description: "Show history of all IOs for a given media partner.",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=4016",
    },
    {
      Name: "Creator - Performance by Brand",
      Id: "creator_partner_perf_by_brand",
      Description:
        "Aggregate Creator performance by brand over a specified date range.",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=14359",
    },
    {
      Name: "Creator - Performance by Campaign",
      Id: "creator_partner_perf_by_campaign",
      Description:
        "Aggregate Creator performance by campaign over a specified date range.",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=14354",
    },
    {
      Name: "Creator - Performance by Social Platform",
      Id: "creator_partner_perf_by_social_platform",
      Description:
        "Aggregate Creator performance by social platform over a specified date range.",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=14341",
    },
    {
      Name: "Credit Karma - American Express Advanced Action Listing ",
      Id: "ck_amex_aal",
      Description:
        "Displays very detailed data for each individual action that has been credited to you.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/ck_amex_aal",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/ck_amex_aal",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/ck_amex_aal/MetaData",
    },
    {
      Name: "Credit Karma - Capital One Canada Advanced Action Listing ",
      Id: "ck_capone_aal",
      Description:
        "Displays very detailed data for each individual action that has been credited to you.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/ck_capone_aal",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/ck_capone_aal",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/ck_capone_aal/MetaData",
    },
    {
      Name: "Credit Karma - Discover Card Advanced Action Listing ",
      Id: "ck_discover_aal",
      Description:
        "Displays very detailed data for each individual action that has been credited to you.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/ck_discover_aal",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/ck_discover_aal",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/ck_discover_aal/MetaData",
    },
    {
      Name: "Credit Karma - Individual Click Action Listing",
      Id: "credit_karma_individual_click_action_listing",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/credit_karma_individual_click_action_listing",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/credit_karma_individual_click_action_listing",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/credit_karma_individual_click_action_listing/MetaData",
    },
    {
      Name: "Credit Karma - Petal Advanced Action Listing ",
      Id: "ck_petal_aal",
      Description:
        "Displays very detailed data for each individual action that has been credited to you.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/ck_petal_aal",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/ck_petal_aal",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/ck_petal_aal/MetaData",
    },
    {
      Name: "Custom Advanced Action Listing /w Text1 and String1",
      Id: "cust_mp_action_listing_sku_text1_string1",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/cust_mp_action_listing_sku_text1_string1",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/cust_mp_action_listing_sku_text1_string1",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/cust_mp_action_listing_sku_text1_string1/MetaData",
    },
    {
      Name: "Custom Advanced Action Listing w/ OID",
      Id: "mp_action_listing_sku_oid",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_oid",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_sku_oid",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_oid/MetaData",
    },
    {
      Name: "Custom Advanced Action Listing with Customer ID",
      Id: "custom_mp_action_listing_sku",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/custom_mp_action_listing_sku",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/custom_mp_action_listing_sku",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/custom_mp_action_listing_sku/MetaData",
    },
    {
      Name: "Custom Performance by Product",
      Id: "custom_partner_performance_by_product",
      Description: "Displays performance data aggregated by product.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/custom_partner_performance_by_product",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/custom_partner_performance_by_product",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/custom_partner_performance_by_product/MetaData",
    },
    {
      Name: "Custom Walmart Advanced Action Listing w/Numeric1",
      Id: "custom_walmart_mp_action_listing_sku",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/custom_walmart_mp_action_listing_sku",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/custom_walmart_mp_action_listing_sku",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/custom_walmart_mp_action_listing_sku/MetaData",
    },
    {
      Name: "Earnings by Campaign",
      Id: "mp_earnings_by_campaign",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=826",
    },
    {
      Name: "Envato Market - Action Listing",
      Id: "mp_action_listing_envato",
      Description:
        "Displays data for each individual action that has been credited to you.",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=4726",
    },
    {
      Name: "Envato Market - Advanced Action Listing ",
      Id: "action_listing_sku_envato",
      Description:
        "Displays very detailed data for each individual action that has been credited to you.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/action_listing_sku_envato",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/action_listing_sku_envato",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/action_listing_sku_envato/MetaData",
    },
    {
      Name: "Figure Home Equity - Advanced Action Listing /w Text1,2,3 and Numeric 1,2 ",
      Id: "mp_action_listing_sku_custom_figure_one",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_custom_figure_one",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_sku_custom_figure_one",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_custom_figure_one/MetaData",
    },
    {
      Name: "Getty AdPlacement Advanced Action Listing",
      Id: "getty_adplacement_mp_action_listing_sku",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/getty_adplacement_mp_action_listing_sku",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/getty_adplacement_mp_action_listing_sku",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/getty_adplacement_mp_action_listing_sku/MetaData",
    },
    {
      Name: "Honeybook - Advanced Action Listing /w Numeric1",
      Id: "honeybook_advanced_action_listing_numeric1",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/honeybook_advanced_action_listing_numeric1",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/honeybook_advanced_action_listing_numeric1",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/honeybook_advanced_action_listing_numeric1/MetaData",
    },
    {
      Name: "Ipsos Advanced Action Listing /w Text1,Text2,Numeric1,Numeric2,Numeric3",
      Id: "mp_action_listing_sku_ipsos",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_ipsos",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_sku_ipsos",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_ipsos/MetaData",
    },
    {
      Name: "My Leads",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=11703",
    },
    {
      Name: "Omio-Advanced Action Listing",
      Id: "omio_mp_action_listing_sku",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/omio_mp_action_listing_sku",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/omio_mp_action_listing_sku",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/omio_mp_action_listing_sku/MetaData",
    },
    {
      Name: "Other Earnings",
      Id: "other_earnings",
      Description:
        "Shows a list of Other Earnings such as Partner Funds Transfer, Performance Bonus given by the brands.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/other_earnings",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/other_earnings",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/other_earnings/MetaData",
    },
    {
      Name: "Overdue Action Earnings",
      Id: "mp_overdue_payouts",
      Description:
        "Shows overdue action earnings based on each actions scheduled clearing date.   These are actions that could not be credit to your account balance on the action due date because the Advertiser had insufficient funds to cover the payment.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_overdue_payouts",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_overdue_payouts",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_overdue_payouts/MetaData",
    },
    {
      Name: "Partner Funds Transfer Listing",
      Id: "partner_funds_transfer_listing",
      Description:
        "Displays listing of Partner Funds Transfers that have been captured, where your account is either the intended recipient, or where you are the payor. The listing is provided by the scheduled (based on the payment date set) year and month.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_funds_transfer_listing",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_funds_transfer_listing",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_funds_transfer_listing/MetaData",
    },
    {
      Name: "Payable Click Data",
      Id: "partner_payable_click_data",
      Description:
        "Excludes duplicate click records.  Limited to 100,000 records.  If you need an large export of clicks then create a support ticket.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_payable_click_data",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_payable_click_data",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_payable_click_data/MetaData",
    },
    {
      Name: "PaystubAction",
      Id: "PaystubActions",
      Description:
        "Shows listing of payable actions associated with a given paystub id.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/PaystubActions",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/PaystubActions",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/PaystubActions/MetaData",
    },
    {
      Name: "Performance by Ad",
      Id: "partner_performance_by_ad",
      Description: "Aggregate performance by ad over a specified date range.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_ad",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_ad",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_ad/MetaData",
    },
    {
      Name: "Performance by Ad - Legacy",
      Id: "partner_performance_by_ad_legacy",
      Description:
        "Aggregate performance by ad over a specified date range. This report only shows data prior to Feb 1, 2021.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_ad_legacy",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_ad_legacy",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_ad_legacy/MetaData",
    },
    {
      Name: "Performance by Brand",
      Id: "partner_performance_by_program",
      Description:
        "Aggregate performance by brand over a specified date range.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_program",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_program",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_program/MetaData",
    },
    {
      Name: "Performance by Brand - Legacy",
      Id: "partner_performance_by_program_legacy",
      Description:
        "Aggregate performance by brand over a specified date range. This report only shows data prior to Feb 1, 2021.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_program_legacy",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_program_legacy",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_program_legacy/MetaData",
    },
    {
      Name: "Performance by Category",
      Id: "partner_performance_by_category",
      Description: "Displays performance data aggregated by category.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_category",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_category",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_category/MetaData",
    },
    {
      Name: "Performance by Country",
      Id: "partner_performance_by_country",
      Description: "Aggregate performance by region and city.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_country",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_country",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_country/MetaData",
    },
    {
      Name: "Performance by Day",
      Id: "partner_performance_by_day",
      Description:
        "Aggregate performance for each day in a specified date range.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_day",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_day",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_day/MetaData",
    },
    {
      Name: "Performance by Day - Legacy",
      Id: "partner_performance_by_day_legacy",
      Description:
        "Aggregate performance for each day in a specified date range. This report only shows data prior to Feb 1, 2021.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_day_legacy",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_day_legacy",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_day_legacy/MetaData",
    },
    {
      Name: "Performance by Event Type",
      Id: "partner_performance_by_event_type",
      Description: "Displays performance data aggregated by Event Type.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_event_type",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_event_type",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_event_type/MetaData",
    },
    {
      Name: "Performance by Media Properties",
      Description: "Aggregate performance by media properties",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=16102",
    },
    {
      Name: "Performance by Month",
      Id: "partner_performance_by_month",
      Description: "Monthly performance snapshot for the last 24 months.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_month",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_month",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_month/MetaData",
    },
    {
      Name: "Performance by Month - Legacy",
      Id: "partner_performance_by_month_legacy",
      Description:
        "Monthly performance snapshot. This report only shows data prior to Feb 1, 2021.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_month_legacy",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_month_legacy",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_month_legacy/MetaData",
    },
    {
      Name: "Performance by Product",
      Id: "partner_performance_by_product",
      Description: "Displays performance data aggregated by product.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_product",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_product",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_product/MetaData",
    },
    {
      Name: "Performance by Promo Code",
      Id: "partner_performance_by_promo_code",
      Description: "Displays performance data aggregated by promo code.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_promo_code",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_promo_code",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_promo_code/MetaData",
    },
    {
      Name: "Performance by Referral Type",
      Id: "partner_performance_by_referral_type",
      Description: "Displays performance data aggregated by referral type.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_referral_type",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_referral_type",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_referral_type/MetaData",
    },
    {
      Name: "Performance by Referring Domain",
      Id: "partner_performance_by_ref_domain",
      Description: "Aggregate performance by referring domain.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_ref_domain",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_ref_domain",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_ref_domain/MetaData",
    },
    {
      Name: "Performance by Referring URL",
      Id: "partner_performance_by_ref_url",
      Description: "Displays performance data aggregated by Event Type.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_ref_url",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_ref_url",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_ref_url/MetaData",
    },
    {
      Name: "Performance by Sub ID and Shared ID",
      Id: "partner_performance_by_subid",
      Description: "Aggregate performance by sub ID.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_subid",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/partner_performance_by_subid",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/partner_performance_by_subid/MetaData",
    },
    {
      Name: "PerformanceByCampaign",
      Id: "PerformanceByCampaigns",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/PerformanceByCampaigns",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/PerformanceByCampaigns",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/PerformanceByCampaigns/MetaData",
    },
    {
      Name: "RMNPaymentNonAction",
      Id: "RMNPaymentNonActions",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/RMNPaymentNonActions",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/RMNPaymentNonActions",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/RMNPaymentNonActions/MetaData",
    },
    {
      Name: "Shopify Advanced Action Listing",
      Id: "mp_action_listing_sku_shopify",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_shopify",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_sku_shopify",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_shopify/MetaData",
    },
    {
      Name: "Skimbit Other Earnings",
      Id: "skimbit_other_earnings",
      ApiAccessible: false,
      RunUri: "/secure/mediapartner/report/viewReport.report?id=14839",
    },
    {
      Name: "SkuLevelAction",
      Id: "SkuLevelActions",
      Description:
        "Shows listing of actions with sku level date based on action event date or date action is modified.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/SkuLevelActions",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/SkuLevelActions",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/SkuLevelActions/MetaData",
    },
    {
      Name: "SoFi - Advanced Action Listing /w Numeric 1,2 & Text4",
      Id: "sofi_advanced_action_listing_numeric1_2_text4",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/sofi_advanced_action_listing_numeric1_2_text4",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/sofi_advanced_action_listing_numeric1_2_text4",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/sofi_advanced_action_listing_numeric1_2_text4/MetaData",
    },
    {
      Name: "Tesco Advanced Action Listing /w Text1 and Money1",
      Id: "mp_action_listing_sku_custom",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_custom",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_action_listing_sku_custom",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_action_listing_sku_custom/MetaData",
    },
    {
      Name: "TopCashBack Action Listing",
      Id: "topcashback",
      Description:
        "Shows listing of actions that orignated as action enquiries",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/topcashback",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/topcashback",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/topcashback/MetaData",
    },
    {
      Name: "Tracking Value Assignments",
      Id: "mp_assigned_tracking_values",
      Description:
        "Displays a listing of unique promo codes, phone numbers, and domains that advertisers have assigned to your media partner account",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_assigned_tracking_values",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_assigned_tracking_values",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_assigned_tracking_values/MetaData",
    },
    {
      Name: "Vanity URLs",
      Id: "mp_vanity_links",
      Description: "Shows a list of all vanity links created",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_vanity_links",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_vanity_links",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_vanity_links/MetaData",
    },
    {
      Name: "Walmart - Invoice History",
      Id: "mp_invoice_history_walmart",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_invoice_history_walmart",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_invoice_history_walmart",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_invoice_history_walmart/MetaData",
    },
    {
      Name: "Walmart - Withdrawal History",
      Id: "mp_paystub_history_walmart",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_paystub_history_walmart",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_paystub_history_walmart",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_paystub_history_walmart/MetaData",
    },
    {
      Name: "Walmart Custom Advanced Action Listing w/ OID",
      Id: "walmart_mp_action_listing_sku_oid",
      Description:
        "Detailed information on the actions that occurred during a specified date range.  The show button allows a view of SKU level data.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/walmart_mp_action_listing_sku_oid",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/walmart_mp_action_listing_sku_oid",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/walmart_mp_action_listing_sku_oid/MetaData",
    },
    {
      Name: "WIthdrawal",
      Id: "Withdrawals",
      Description:
        "Shows listing of all withdrawals (i.e. payments).  Click on Pay stub Id to see details.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/Withdrawals",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/Withdrawals",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/Withdrawals/MetaData",
    },
    {
      Name: "Withdrawal Details",
      Id: "withdrawal_details",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/withdrawal_details",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/withdrawal_details",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/withdrawal_details/MetaData",
    },
    {
      Name: "Withdrawal Details - Action Listing",
      Id: "action_listing_withdrawal",
      Description:
        "Displays data for each individual action that has been credited to you.",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/action_listing_withdrawal",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/action_listing_withdrawal",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/action_listing_withdrawal/MetaData",
    },
    {
      Name: "Withdrawal History",
      Id: "mp_paystub_history",
      ApiAccessible: true,
      ApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_paystub_history",
      DeferredApiRunUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ReportExport/mp_paystub_history",
      MetaDataUri:
        "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Reports/mp_paystub_history/MetaData",
    },
  ],
};
