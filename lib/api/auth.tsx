import axios, { AxiosRequestConfig } from "axios";
import { LoginInputs } from "../../src/pages/dash/login";
import { catchAxiosError } from "../../src/pages/dash/error";

type errorMessage = string

export const postLogin = async (inputs: LoginInputs): Promise<errorMessage | void> => {
  const data = new URLSearchParams(inputs);
  const res: any = await post("/api/login", data).catch(catchAxiosError);
  if (res.error) {
    return res.error;
  }
  if (res.data && res.data.token) {
    alert(`this is my token: (${res.data.token})`);
    return;
  }
  return "Something unexpected happened!";
};

// a base configuration we can extend from
const baseConfig: AxiosRequestConfig = {
  baseURL: "https://sravni.kg:9090/api/v1/auth/login",
};

const post = (url: string, data: URLSearchParams) => {
  return axios.post(url, data, baseConfig).catch(catchAxiosError);
};