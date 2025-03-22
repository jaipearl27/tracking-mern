import axios, { AxiosInstance } from "axios";


const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};


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


export const LOGIN = async (data: { email: string, password: string }): Promise<any> => {
        try {
                const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signin`, data)
                return result
        } catch (error) {
                console.error("Error during login:", error);
                return error;
        }
};


export const LOGOUT = async (): Promise<any> => {
        try {
                console.log(config, 'config')
                const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`, {}, config)
                localStorage.clear()
                console.log(result)
                return result
        } catch (error) {
                console.error("Error during logout:", error);
                return error;
        }
};

export const Signup = async (data: { name: string, email: string, password: string }): Promise<any> => {
        try {
                const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`, data);
                return result
        } catch (error) {
                console.error("Error during signup:", error);
                return error;
        }
}

export const getallUser = async (): Promise<any> => {
        try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`)
                return response.data
        }
        catch (error) {
                console.error("Error fetching users:", error);
                throw error
        }
};



export const getUserData = async (): Promise<any> => {
        try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/info`, config)
                return response.data
        }
        catch (error) {
                console.error("Error fetching user data:", error);
                throw error
        }
};


export const getTrackingLinks = async (): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trackingLinks`)
                return result
        } catch (error) {
                console.error("Error fetching tracking links:", error);
                return error;
        }
}

export const getTrackingLinkByProgramId = async (ProgramId: string): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trackingLinks/program/${ProgramId}`)
                return result
        } catch (error) {
                console.error("Error fetching tracking link by program ID:", error);
                return error;
        }
}

export const getTrackingLinkById = async (id: string): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trackingLinks/${id}`)
                return result
        } catch (error) {
                console.error("Error fetching tracking link by ID:", error);
                return error;
        }
}

export const createTrackingLink = async (data: { TrackingLink: string, ProgramId: string }): Promise<any> => {
        try {
                const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trackingLinks`, data)
                return result
        } catch (error) {
                console.error("Error creating tracking link:", error);
                return error;
        }
}

export const createAssignment = async (data: { trackingLinkId: string, userId: string }): Promise<any> => {
        try {
                const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/assignments`, data)
                return result
        } catch (error) {
                console.error("Error creating assignment:", error);
                return error;
        }
}

export const getAssignments = async (): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/assignments`)
                return result
        } catch (error) {
                console.error("Error fetching assignments:", error);
                return error;
        }
}

export const getAssignmentsByTrackingLinkID = async (trackingLinkId: string): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/assignments/trackingLink/${trackingLinkId}`)
                return result
        } catch (error) {
                console.error("Error fetching assignments by tracking link ID:", error);
                return error;
        }
}

export const getAssignmentById = async (id: string): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/assignments/${id}`)
                return result
        } catch (error) {
                console.error("Error fetching assignment by ID:", error);
                return error;
        }
}



