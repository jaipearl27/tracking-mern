"use client";
import React, { useEffect, useState } from "react";
import styles from "./ConversionsViewer.module.scss";
import { fetchConversions } from "@/utils/Providers/Partnerize/Api/fetchConversions";
import Loader from "@/components/common/Loader";
import PublisherCommission from "../PublisherCommission";
import TotalValue from "../TotalValue";
import { ConversionsData } from "../../types/ConversionDetails";
import { useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";

export const dummyConversionsData: ConversionsData = {
    total_conversion_count: {
        EUR: 10,
        USD: 15,
        GBP: 7,
    },
    total_publisher_commission: {
        EUR: 120.5,
        USD: 150.0,
        GBP: 90.75,
    },
    total_value: {
        EUR: 1200,
        USD: 1500,
        GBP: 950,
    },
    start_date_time_utc: "2023-01-01 00:00:00",
    end_date_time_utc: "2023-12-31 23:59:59",
    start_date_time: "2023-01-01 00:00:00",
    end_date_time: "2023-12-31 23:59:59",
    limit: 100,
    meta_data: [],
    count: 3,
    execution_time: "0.102 seconds",
    conversions: [
        {
            conversion_data: {
                conversion_id: "conv1",
                campaign_id: "camp1",
                publisher_id: "pub1",
                conversion_time: "2023-05-01 12:30:00",
                creative_type: 1,
                creative_id: 101,
                specific_creative_id: 201,
                currency: "EUR",
                publisher_reference: "ref123",
                advertiser_reference: "adv123",
                conversion_reference: "convRef123",
                customer_type: "new",
                referer_ip: "192.168.1.1",
                source_referer: "https://example.com",
                last_modified: "2023-05-02 10:00:00",
                conversion_type: 2,
                country: "DE",
                customer_reference: "cust123",
                ref_device_id: 1,
                ref_partnership_model_id: 1,
                ref_traffic_source_id: 1,
                ref_conversion_metric_id: 1,
                ref_user_context_id: 1,
                campaign_title: "Campaign 1",
                publisher_name: "Publisher 1",
                click: {
                    campaign_id: "camp1",
                    publisher_id: "pub1",
                    type: "standard",
                    status: "valid",
                    set_time: "2023-05-01 12:00:00",
                    set_ip: "192.168.1.1",
                    last_used: 1683102000,
                    last_ip: "192.168.1.2",
                    publisher_reference: "clickRef123",
                    referer: "https://example.com",
                    creative_id: 101,
                    creative_type: 1,
                    specific_creative_id: 201,
                    ref_device_id: 1,
                    ref_traffic_source_id: 1,
                    ref_partnership_model_id: 1,
                    ref_user_context_id: 1,
                    ref_device: "Desktop",
                    ref_traffic_source: "Affiliate",
                    ref_partnership_model: "CPA",
                    ref_user_context: "Web",
                    clickref: "clickRef123",
                },
                ref_conversion_metric: "Standard",
                ref_device: "Desktop",
                ref_partnership_model: "CPA",
                ref_traffic_source: "Affiliate",
                ref_user_context: "Web",
                conversion_value: {
                    conversion_status: "approved",
                    value: 400.0,
                    publisher_commission: 40.0,
                },
                meta_data: {
                    gclid: "example123",
                },
                conversion_items: [
                    {
                        conversion_item_id: "item1",
                        sku: 123,
                        category: "Electronics",
                        item_value: 400.0,
                        item_publisher_commission: 40.0,
                        item_status: "approved",
                        last_update: "2023-05-02 10:00:00",
                        publisher_self_bill_id: null,
                        approved_at: "2023-05-02 12:00:00",
                        item_status_id: 1,
                        reject_reason: null,
                        voucher_codes: [],
                        meta_data: {
                            gclid: "itemMeta123",
                        },
                        payable: true,
                    },
                ],
                was_disputed: false,
                conversion_lag: 0,
                clickref: "clickRef123",
            },
        },
    ],
};

const ConversionsViewer: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [conversions, setConversions] = useState<ConversionsData | null>(
        null
    );
    const [selectedStatus, setSelectedStatus] = useState<
        "approved" | "rejected" | "pending"
    >();

    const router = useRouter();

    const fetchPartnerConversions = async (status?: string) => {
        setIsLoading(true);
        try {
            const data = await fetchConversions({
                status: status as "approved" | "rejected" | "pending",
            });
            console.log(data);
            setConversions(dummyConversionsData);
        } catch (error) {
            console.error("Error fetching conversions:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleStatusChange = (selectedOption: any) => {
        const status = selectedOption?.value || null;
        setSelectedStatus(status);

        // Fetch conversions based on the selected status
        fetchPartnerConversions(status);
    };

    // Fetch conversions on initial load with the query param if available
    useEffect(() => {
        fetchPartnerConversions(selectedStatus);
    }, [selectedStatus]);

    if (isLoading) {
        return <Loader />;
    }

    if (!conversions) {
        return <div>No data available</div>;
    }

    const statusOptions = [
        { value: "approved", label: "Approved" },
        { value: "pending", label: "Pending" },
        { value: "rejected", label: "Rejected" },
    ];

    return (
        <div className={styles.conversionsViewer}>
            {/* Status Filter */}
            <div className={styles.filterContainer}>
                {/* <label htmlFor="statusFilter">Filter by Status:</label> */}
                <Select
                    id="statusFilter"
                    options={statusOptions}
                    value={statusOptions.find(
                        (option) => option.value === selectedStatus
                    )}
                    onChange={handleStatusChange}
                    isClearable
                    placeholder="Filter by Status"
                />
            </div>
            <PublisherCommission
                commissions={conversions.total_publisher_commission}
            />
            <TotalValue values={conversions.total_value} />

            {/* Actual Conversions */}
            <section className={styles.conversionsSection}>
                <h2>Conversions</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.conversionsTable}>
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Country</th>
                                <th>Value</th>
                                <th>Status</th>
                                <th>Commission</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conversions.conversions.map(
                                (conversion, index) => (
                                    <tr key={index}>
                                        <td>
                                            {
                                                conversion.conversion_data
                                                    .currency
                                            }
                                        </td>
                                        <td>
                                            {conversion.conversion_data.country}
                                        </td>
                                        <td>
                                            {conversion.conversion_data.conversion_value.value.toFixed(
                                                2
                                            )}
                                        </td>
                                        <td>
                                            {
                                                conversion.conversion_data
                                                    .conversion_value
                                                    .conversion_status
                                            }
                                        </td>
                                        <td>
                                            {conversion.conversion_data.conversion_value.publisher_commission.toFixed(
                                                2
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                className={
                                                    styles.navigateButton
                                                }
                                                onClick={() =>
                                                    router.push(
                                                        `/partnerize/campaign?campaignId=${conversion.conversion_data.campaign_id}`
                                                    )
                                                }
                                            >
                                                View Campaign
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ConversionsViewer;
