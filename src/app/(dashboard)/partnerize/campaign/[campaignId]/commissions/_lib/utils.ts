import { PartnerizeCommissionTypes } from "./typings";

export const checkCommissionParams = (
  commissionType: PartnerizeCommissionTypes
) => {
  if (!commissionType) {
    return { ok: true };
  }

  const { ACTIVE, CAMPAIGN, DEFAULT, PROMOTION, TIER, VOUCHER } =
    PartnerizeCommissionTypes;

  const possibilities = new Set([
    ACTIVE,
    CAMPAIGN,
    DEFAULT,
    PROMOTION,
    TIER,
    VOUCHER,
  ]);

  if (!possibilities?.has(commissionType)) {
    return { ok: false };
  } else {
    return { ok: true };
  }
};
