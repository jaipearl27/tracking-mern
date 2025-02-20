export interface ConversionItem {
    conversion_item_id: string;
    sku: number;
    category: string;
    item_value: number;
    item_publisher_commission: number;
    item_status: string;
    last_update: string;
    publisher_self_bill_id: string | null;
    approved_at: string | null;
    item_status_id: number;
    reject_reason: string | null;
    voucher_codes: string[];
    meta_data: {
        gclid: string;
    };
    payable: boolean;
}

export interface ConversionValue {
    conversion_status: string;
    value: number;
    publisher_commission: number;
}

export interface Click {
    campaign_id: string;
    publisher_id: string;
    type: string;
    status: string;
    set_time: string;
    set_ip: string;
    last_used: number;
    last_ip: string;
    publisher_reference: string;
    referer: string;
    creative_id: number;
    creative_type: number;
    specific_creative_id: number;
    ref_device_id: number;
    ref_traffic_source_id: number;
    ref_partnership_model_id: number;
    ref_user_context_id: number;
    ref_device: string;
    ref_traffic_source: string;
    ref_partnership_model: string;
    ref_user_context: string;
    clickref: string;
}

export interface ConversionData {
    conversion_id: string;
    campaign_id: string;
    publisher_id: string;
    conversion_time: string;
    creative_type: number;
    creative_id: number;
    specific_creative_id: number;
    currency: string;
    publisher_reference: string;
    advertiser_reference: string;
    conversion_reference: string;
    customer_type: string | null;
    referer_ip: string;
    source_referer: string;
    last_modified: string;
    conversion_type: number;
    country: string;
    customer_reference: string;
    ref_device_id: number;
    ref_partnership_model_id: number;
    ref_traffic_source_id: number;
    ref_conversion_metric_id: number;
    ref_user_context_id: number;
    campaign_title: string;
    publisher_name: string;
    click: Click;
    ref_conversion_metric: string;
    ref_device: string;
    ref_partnership_model: string;
    ref_traffic_source: string;
    ref_user_context: string;
    conversion_value: ConversionValue;
    meta_data: {
        gclid: string;
    };
    conversion_items: ConversionItem[];
    was_disputed: boolean;
    conversion_lag: number;
    clickref: string;
}

export interface Conversion {
    conversion_data: ConversionData;
}

export interface ConversionsData {
    total_conversion_count: {
        [currency: string]: number;
    };
    total_publisher_commission: {
        [currency: string]: number;
    };
    total_value: {
        [currency: string]: number;
    };
    start_date_time_utc: string;
    end_date_time_utc: string;
    start_date_time: string;
    end_date_time: string;
    limit: number;
    meta_data: any[];
    count: number;
    execution_time: string;
    conversions: Conversion[];
}
