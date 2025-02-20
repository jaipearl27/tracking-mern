import axios, { AxiosInstance, AxiosResponse } from "axios";

function getAuthorizationHeaders(auth_token: string, acc_sid: string): string {
    const token = Buffer.from(`${acc_sid}:${auth_token}`, "utf8").toString(
        "base64"
    );
    return `Basic ${token}`;
}

type TData = {
    CompanyName?: string;
    Website?: string;
    PrimaryPhoneNumber?: string;
    PrimaryPhoneNumberCountry?: string;
    SecondaryPhoneNumber?: string;
    OrganizationType?: string;
    EinSsnForeginTaxId?: string;
    CorporateAddressLine1?: string;
    CorporateAddressCity?: string;
    BillingAddressLine1?: string;
    BillingAddressCity?: string;
};

export const updateAccountInfo = async (data: TData) => {
    const res = await axios.put(
        `https://api.impact.com/Mediapartners/${process.env.IMPACT_ACCOUNT_SID}/CompanyInformation`,
        data,
        {
            headers: {
                Authorization: getAuthorizationHeaders(
                    process.env.IMPACT_AUTH_TOKEN as string,
                    process.env.IMPACT_ACCOUNT_SID as string
                ),
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            auth: {
                username: process.env.IMPACT_ACCOUNT_SID as string,
                password: process.env.IMPACT_AUTH_TOKEN as string,
            },
        }
    );
    console.log(res.data);
};
