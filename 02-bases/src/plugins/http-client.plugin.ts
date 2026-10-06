import axios from "axios";

export const httpClient = {
  get: async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  },
  post: async (url: string, body: any) => {
    throw new Error("Not implemented");
  },
  put: async (url: string, body: any) => {
    throw new Error("Not implemented");
  },
  delete: async (url: string) => {
    throw new Error("Not implemented");
  },
};
