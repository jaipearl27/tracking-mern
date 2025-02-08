"use client";
import React, { useEffect, useState } from "react";
import {
    ConversionsSummaryData,
    CurrencyAmounts,
} from "../../types/ConversionSummary";
import "./ConversionsSummaryViewer.scss";
import Loader from "@/components/common/Loader";

const dummyConversionsData: ConversionsSummaryData = {
    execution_time: "2.25885 seconds",
    summary: {
        available: {
            CAD: 12.45,
            AUD: 0.4,
        },
        confirmed: {
            EUR: 11,
            GBP: 54.2,
        },
        pending: {
            EUR: 125.11,
            GBP: 57.65,
            JPY: 97,
        },
        approved: {
            GBP: 90.8,
            USD: 100.23,
        },
        paid: {
            PLN: 68.96,
        },
    },
};

function ConversionsSummaryViewer() {
    const [isLoading, setIsLoading] = useState(true);
    const [conversionsSummary, setConversionsSummary] =
        useState<ConversionsSummaryData | null>(null);

    const fetchPartnerConversions = async () => {
        setIsLoading(true);
        try {
            // Simulating fetching data with dummy data for now
            setConversionsSummary(dummyConversionsData);
        } catch (error) {
            console.error("Error fetching conversions:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPartnerConversions();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (!conversionsSummary) {
        return <div>No data available</div>;
    }

    const renderCurrencyCards = (data: CurrencyAmounts) => (
        <div className="grid">
            {Object.entries(data).map(([currency, amount]) => (
                <div className="card" key={currency}>
                    <h4>{currency}</h4>
                    <p>{amount.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div className="conversions-summary">
            <h2>Conversions Summary</h2>

            {Object.entries(conversionsSummary.summary).map(
                ([category, data]) => (
                    <div className="category-section" key={category}>
                        <h3>{category}</h3>
                        {renderCurrencyCards(data)}
                    </div>
                )
            )}
        </div>
    );
}

export default ConversionsSummaryViewer;
