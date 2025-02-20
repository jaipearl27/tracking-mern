import { TrackingLinkType } from "@/types/Impact/trackingLink";
import { z } from "zod";

export const createTrackingLinkFormSchema = z.object({
  Type: z.nativeEnum(TrackingLinkType).optional(),
  CustomPath: z.string().optional(),
  AdId: z.string().optional(),
  DeepLink: z.string().optional(),
  MediaPartnerPropertyId: z.string().optional() || z.number().optional(),
  subId1: z.string().optional(),
  subId2: z.string().optional(),
  subId3: z.string().optional(),
  sharedId: z.string().optional(),
});
