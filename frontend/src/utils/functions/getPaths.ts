"use server";

export const getPaths = async () => {
  const partnerId = "1100l286361";

  return {
    /**
     * Impact Media Partners Endpoints
     */
    impactMediaPartners: {
      baseUrl: "",

      /**
       * Account Endpoints
       */
      getAccount: "/CompanyInformation",
      updateAccount: "/CompanyInformation",

      /**
       * Users Endpoints
       */
      getUsers: "/Users",
      getSpecificUser: (id: string) => `/Users/${id}`,

      /**
       * Campaigns Endpoints
       */
      getCampaigns: "/Campaigns",
      getSingleCampaign: (id: string) => `/Campaigns/${id}`,
      downloadPublicTerms: (id: string) =>
        `/Campaigns/${id}/PublicTerms/Download`,
    },

    partnerize_v1: {
      baseUrl: "https://api.partnerize.com",
      retrievePartner: `/user/publisher/${partnerId}`,
      updatePartner: `/user/publisher/${partnerId}`,
      listPartnerWebsites: `/user/publisher/${partnerId}/website`,
      listTransactionQueries: `/user/publisher/${partnerId}/tq`,
      fetchPartnerCreatives: `/user/publisher/${partnerId}/creative`,
      fetchPartnerCampaignCreatives: (campaignId: string) =>
        `/user/publisher/${partnerId}/campaign/${campaignId}/creative`,
      listCampaigns: `/user/publisher/${partnerId}/campaign`,
      conversionsDetails: `/reporting/report_publisher/publisher/${partnerId}/conversion.json`,
      conversionsSummary: `/user/publisher/${partnerId}/payment/summary`,
    },
    partnerize_v2: {
      baseUrl: "https://api.partnerize.com/v2",
      defaultCommission: (campaignId: string) =>
        `/campaigns/${campaignId}/publishers/${partnerId}/commissions/default`,
      partnerCommission: (campaignId: string) =>
        `/campaigns/${campaignId}/publishers/${partnerId}/commissions/campaign`,
      activeCommission: (campaignId: string) =>
        `/campaigns/${campaignId}/publishers/${partnerId}/commissions/active`,
      voucherCommission: (campaignId: string) =>
        `/campaigns/${campaignId}/publishers/${partnerId}/commissions/voucher`,
      promotionCommission: (campaignId: string) =>
        `/campaigns/${campaignId}/publishers/${partnerId}/commissions/promotion`,
      tierCommission: (campaignId: string) =>
        `/campaigns/${campaignId}/publishers/${partnerId}/commissions/tier`,
    },
    partnerize_v3: {
      baseUrl: "https://api.partnerize.com/v3",
      getClicksCount: "/partner/analytics/clicks/count",
      getConversionsCount: "/partner/analytics/conversions/count",
    },
  };
};
