"use server";

export const downloadJobAction = async (uri: string) => {
  const token = Buffer.from(
    `${process?.env?.IMPACT_ACCOUNT_SID!}:${process?.env?.IMPACT_AUTH_TOKEN!}`,
    "utf8",
  ).toString("base64");

  const res = await fetch("https://api.impact.com" + uri, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });

  const data = await res?.text?.();

  return data;
};
