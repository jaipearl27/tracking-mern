export type CurrencyAmounts = {
    [currency: string]: number;
};

export type ConversionsSummaryData = {
    execution_time: string;
    summary: {
        available: CurrencyAmounts;
        confirmed: CurrencyAmounts;
        pending: CurrencyAmounts;
        approved: CurrencyAmounts;
        paid: CurrencyAmounts;
    };
};
