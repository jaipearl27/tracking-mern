export type TCampaignPartnerize = {
    campaign: {
        campaign_id: string;
        title: string;
        allow_deep_linking: string;
        allow_third_party_pixel: string;
        associated_campaigns: string | null;
        campaign_currency_conversions: any;
        campaign_custom_terms_and_conditions_id: string | null;
        campaign_custom_terms_and_conditions_title: string;
        campaign_logo: string;
        commissions: any[];
        conversion_type: string;
        cookie_period: string;
        cookie_status: string;
        default_commission_rate: string | null;
        default_currency: string;
        default_mobile_destination: string | null;
        description: {
            en: string;
        };
        destination_url: string;
        is_cpc: string;
        lead_confirmation_url_fail: string;
        lead_confirmation_url_success: string;
        multiple_conversions_per_click: string;
        promotional_countries: {
            iso: string;
            name: string;
        }[];
        publisher_status: string;
        reporting_timezone: string;
        status: string;
        terms: {
            en: string;
        };
        test_mode: string;
        tq_enabled: string;
        vertical_id: number;
        vertical_name: string;
    };
};
