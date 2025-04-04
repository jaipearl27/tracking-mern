"use client"

import axios, { AxiosInstance } from "axios";

// Utility function to safely get token
const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("token");
  }
  return null;
};

// Create getConfig() function instead of constant
const getConfig = () => ({
  headers: { 
    Authorization: `Bearer ${getAuthToken()}` 
  }
});

export const LOGIN = async (data: { email: string, password: string }): Promise<any> => {
  try {
    const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signin`, data);
    return result;
  } catch (error) {
    console.error("Error during login:", error);
    return error;
  }
};

export const LOGOUT = async (): Promise<any> => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`, 
      {}, 
      getConfig()
    );
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
    return result;
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
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/info`, getConfig())
                return response.data
        }
        catch (error) {
                console.error("Error fetching user data:", error);
                throw error
        }
};

// Update all other functions that use getConfig() to use getConfig() instead
// For example:
export const getUser = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`, 
      getConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
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

export const createImpactAssignment = async (data: { trackingLinkId: string, userId: string, commissionPercentage: number }): Promise<any> => {
        try {
                const payload = {...data, platform: "impact"}
                console.log(payload, "payload")
                const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/assignments`, payload)
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

export const getUserAssignments = async (): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/assignments/user`, getConfig())
                return result
        } catch (error) {
                console.error("Error fetching assignments by User ID:", error);
                return error;
        }
}


export const getAssignmentsByUserID = async (id: string): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/assignments/user/${id}`, getConfig())
                return result
        } catch (error) {
                console.error("Error fetching assignments by User ID:", error);
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



export const getTotalClicksAsPerProgramId = async (ProgramId: string): Promise<any> => {
        try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/clicks/total/${ProgramId}`)
                return result
        } catch (error) {
                console.error("Error fetching total clicks", error)
                return error;
        }
}



export const syncClicks = async (startDate: string, endDate: string):Promise<any> => {
        try {
                const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/clicks?startDate=${startDate}=&endDate=${endDate}`)
                return result
        } catch (error) {
                console.error("Error fetching total clicks", error)
                return error;
        }
}

