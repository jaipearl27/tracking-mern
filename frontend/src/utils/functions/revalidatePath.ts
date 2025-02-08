"use server";
import { revalidatePath } from "next/cache";

export const applyRevalidation = async (
  path: string,
  type: "page" | "layout" = "page",
) => {
  await revalidatePath(path, type);
};
