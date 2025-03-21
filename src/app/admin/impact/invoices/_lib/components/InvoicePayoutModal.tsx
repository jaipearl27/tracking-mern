"use client";
import Anchor from "@/components/common/Anchor";
import Divider from "@/components/common/Divider";
import Modal from "@/components/common/Modal";
import TableV2 from "@/components/common/TableV2";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import React from "react";
import { invoiceListingData } from "../_data";
import Link from "next/link";

type Props = {
    data: Record<string, any>[];
};

const InvoicePayoutModal = ({ data }: Props) => {
    const { handleChange, isOpen } = useToggleBoolean();

    return (
        <>
            <Anchor text="View" onClick={() => handleChange?.(true)} />
            <Modal
                onClose={() => handleChange?.(false)}
                open={isOpen}
                width={650}
                height={400}
                title="Invoice Entries"
            >
                <Divider mb={15} />
                <TableV2
                    columns={[
                        {
                            dataIndex: "CampaignName",
                            id: "CampaignName",
                            title: "Campaign Name",
                            styleConfig: {
                                width: 120,
                            },
                        },
                        {
                            dataIndex: "Description",
                            id: "Description",
                            title: "Description",
                            styleConfig: {
                                width: 120,
                            },
                        },
                        {
                            dataIndex: "EventMonthYear",
                            id: "EventMonthYear",
                            title: "Event Trigger Date",
                            styleConfig: {
                                width: 150,
                            },
                            render(p) {
                                if (p?.EventMonthYear?.trim() === "") {
                                    return "-";
                                }

                                // single digit month
                                if (
                                    p?.EventMonthYear?.split("")?.length === 5
                                ) {
                                    let month = p?.EventMonthYear.slice(
                                        0,
                                        p?.EventMonthYear.length - 4
                                    );
                                    let year = p?.EventMonthYear.slice(
                                        p?.EventMonthYear.length - 4
                                    );

                                    return `${month}-${year}`;
                                }

                                // 2 digit month

                                let month = p?.EventMonthYear.slice(
                                    1,
                                    p?.EventMonthYear.length - 4
                                );
                                let year = p?.EventMonthYear.slice(
                                    p?.EventMonthYear.length - 4
                                );

                                return `${month}-${year}`;
                            },
                        },
                        {
                            dataIndex: "Actions",
                            id: "Actions",
                            title: "Actions",
                            styleConfig: {
                                width: 120,
                            },
                        },
                        {
                            dataIndex: "NetItemAmount",
                            id: "NetItemAmount",
                            title: "Net Amount",
                            styleConfig: {
                                width: 120,
                            },
                        },
                        {
                            dataIndex: "VatItemAmount",
                            id: "VatItemAmount",
                            title: "Tax Amount",
                            styleConfig: {
                                width: 120,
                            },
                        },
                        {
                            dataIndex: "TotalItemAmount",
                            id: "TotalItemAmount",
                            title: "Total Amount",
                            styleConfig: {
                                width: 120,
                            },
                        },
                        {
                            dataIndex: "Status",
                            id: "Status",
                            title: "Status",
                            styleConfig: {
                                width: 120,
                            },
                        },
                        {
                            dataIndex: "DueDate",
                            id: "DueDate",
                            title: "Due Date",
                            styleConfig: {
                                width: 120,
                            },
                            render(p) {
                                return p?.DueDate?.trim() !== ""
                                    ? new Date(p?.DueDate).toLocaleDateString()
                                    : "-";
                            },
                        },
                        {
                            dataIndex: "PaidDate",
                            id: "PaidDate",
                            title: "Paid Date",
                            styleConfig: {
                                width: 120,
                            },
                            render(p) {
                                return p?.PaidDate?.trim() !== ""
                                    ? new Date(p?.PaidDate).toLocaleDateString()
                                    : "-";
                            },
                        },
                        {
                            dataIndex: "Program",
                            id: "Program",
                            title: "Program",
                            styleConfig: {
                                width: 120,
                            },
                            render(p) {
                                return (
                                    <Link  href={`/impact/programs/${p.CampaignId}`}>
                                        {p.CampaignName}
                                    </Link>
                                );
                            },
                        },
                    ]}
                    data={data as any}
                />
            </Modal>
        </>
    );
};

export default InvoicePayoutModal;
