"use client";
import { useState } from "react";

export const useToggleBoolean = (defaultValue: boolean = false) => {
  const [open, setOpen] = useState<boolean>(defaultValue);

  const handleChange = (val: boolean = !open) => {
    val !== open && setOpen(val);
  };

  return {
    handleChange,
    isOpen: open,
  };
};

// {
//   "Id": "161714",
//   "Name": "Public Terms",
//   "CampaignId": "17561",
//   "CampaignName": "Punktrendy",
//   "PayoutTermsList": [{
//       "TrackerName": "Online Sale",
//       "TrackerType": "SALE",
//       "PayoutPercentage": "15",
//       "PayoutAmount": "",
//       "PayoutCurrency": "",
//       "ReferralPeriod": "30",
//       "ReferralPeriodUnit": "DAY",
//       "PayoutAmountLowerLimit": "",
//       "PayoutAmountUpperLimit": "",
//       "PayoutPercentageLowerLimit": "15",
//       "PayoutPercentageUpperLimit": "15"
//   }],
//   "PdfUri": "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Campaigns/17561/PublicTerms/Download",
//   "Uri": "/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/Campaigns/17561/PublicTerms/"
// }
