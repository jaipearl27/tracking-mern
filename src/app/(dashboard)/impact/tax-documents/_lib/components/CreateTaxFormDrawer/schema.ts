import { z } from "zod";

enum DocType {
  W9 = "W9",
  W8BEN = "W8BEN",
  W8BENE = "W8BENE",
}

export const createTaxDocumentFormSchema = z.object({
  UserId: z.string().optional(),
  ReturnUrl: z.string().optional(),
  DocType: z.nativeEnum(DocType),
});
