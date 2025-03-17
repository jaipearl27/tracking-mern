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



export const LOGIN = async (data: {email: string, password: string}): Promise<any> => {
        const result = axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signin`, data)
        return result
};
export const Signup=async(data:{name:string,email:string,password:string}):Promise<any>=>{
        const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,data);
        return result
}

export const getallUser=async():Promise<any>=>{
        try{
                const response=await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`)
                return response.data
        }
        catch(error){
                console.error("Error fetching users:",error);
                throw error

        }
};


export const getTrackingLinks=async():Promise<any>=>{
        const result=await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trackingLinks`)
        return result
}

export const getTrackingLinkByProgramId=async(ProgramId:string):Promise<any>=>{
        const result=await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trackingLinks/program/${ProgramId}`)
        return result
}

export const getTrackingLinkById=async(id:string):Promise<any>=>{
        const result=await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trackingLinks/${id}`)
        return result
}

export const createTrackingLink=async(data:{TrackingLink:string,ProgramId:string}):Promise<any>=>{
        const result=await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trackingLinks`,data)
        return result
}
