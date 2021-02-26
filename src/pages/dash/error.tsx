import { AxiosError } from "axios";

export type ErrorResponse = {
  error: string
}

export function catchAxiosError(err: AxiosError): ErrorResponse {
  
  console.log("Error", err.message);
  let message = "Something happened in setting up the request that triggered an Error";

  if (err.response) {
    console.log(err.response.data.message);
    console.log(err.response.status);
    message = err.response.data.message;
  } else if (err.request) {
    console.log(err.request);
    message = "The request was made, but no response was received";
  }
  return { error: message };
}