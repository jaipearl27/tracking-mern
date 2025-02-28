import axios, { AxiosInstance } from "axios";

// async function handleRequest<T>(
//     request: Promise<AxiosResponse<T>>,
//   ): Promise<T | null> {
//     try {
//       const response = await request;
//       return response.data;
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         console.trace(error.response.data);
//         console.log(error.response?.data);
//         return null;
//       }
//       return null;
//     }
//     return null;
//   }

//   function createAxiosInstance({
//     accept,
//     contentLength,
//     contentType,
//     responseType = "json",
//   }: {
//     accept: string;
//     contentLength?: string;
//     contentType?: string;
//     responseType?: ResponseType;
//   }): AxiosInstance {
//     return axios.create({
//       baseURL: baseURL,
//       headers: {
//         Authorization: getAuthorizationHeader(auth_token, acc_sid),
//         "Content-Type": contentType ? contentType : "application/json",
//         Accept: accept,
//         "Content-length": contentLength,
//       },
//       responseType,
//     });
//   }

export const LOGIN = async (data: {
  email: string;
  password: string;
}): Promise<any> => {
  const result = axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signin`,
    data
  );
  return result;
};
export const SIGN_UP = async (data: {
  name: string;
  email: string;
  password: string;
}): Promise<any> => {
  const result = axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,
    data
  );
  return result;
};

export const FORGOT_PASSWORD = async (data: {
  email: string;
}): Promise<any> => {
  const result = axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/forgot-password`,
    data
  );
  return result;
};
