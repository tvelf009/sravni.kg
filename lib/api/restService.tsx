import axios, { AxiosRequestConfig } from "axios";
import { catchAxiosError } from "../../src/components/dash/error";


const baseConfig: AxiosRequestConfig = {
  baseURL: "https://sravni.kg:9090/api/v1",
};

export const post = (url: string, data: any) => {
  return axios.post(url, data, baseConfig).catch(catchAxiosError);
};

export const get = (url: string, data: any) => {
  return axios.get(url, {
    headers: {
      'Authorization': `Bearer ${data}`
    }
  }).catch(catchAxiosError);
};
