"use server";
import { IMPACT_ACTION_EXPORT_REPORT } from "@/utils/Providers/Impact/API";

export const downloadReport = async (reportId: string) => {
  try {
    const response = await IMPACT_ACTION_EXPORT_REPORT({
      reportId,
    });

    const token = Buffer.from(
      `${process?.env?.IMPACT_ACCOUNT_SID}:${process?.env?.IMPACT_AUTH_TOKEN}`,
      "utf8",
    ).toString("base64");

    console.log(token, "TOKEN____");

    const data = await fetch(`https://api.impact.com${response.ResultUri}`, {
      headers: {
        Authorization:
          "Basic SVJITk1jMmpobTJGMzI5MzY2NlE0aExCSkc4eTJtWXB5MTo0bWlYX0RzWHZ4bXJ1cFZMbmtDNy5aQmtHTGt6Z2VrVQ==",
      },
    });

    const payload = await data?.text();

    return payload;
  } catch (e) {
    console.log(e, "ERROR");
  }
};
