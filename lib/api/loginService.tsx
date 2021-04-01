import Cookie from "js-cookie";
import Router from "next/router";
import { LoginInputs, RegInputs } from "../../src/pages/dash/login";
import { catchAxiosError } from "../../src/components/dash/error";
import { post, get } from "./restService";

export const COOKIES = {
  authToken: "access_token",
  role: "role",
  lastName: "lastname",
  username: "username"
};

export async function login(inputs: LoginInputs): Promise<string | void> {
  const data = inputs;
  
  const res: any = await post("/auth/login", data).catch(catchAxiosError);
  if (res.error) {
        return res.error;
  } else if (!res.data || !res.data.access_token) {
    return "Something went wrong!";
  }
  const role:any = await get("https://sravni.kg:9090/api/v1/auth/me", res.data.access_token).catch(catchAxiosError);
  const { access_token } = res.data;
  const { authority } = role.data.authorities[0];
  const { lastName, username  } = role.data;
  // store the token into cookies
  Cookie.set(COOKIES.authToken, access_token, {expires: 1});
  Cookie.set(COOKIES.role, authority, {expires: 1});
  Cookie.set(COOKIES.lastName, lastName, {expires: 1});
  Cookie.set(COOKIES.username, username, {expires: 1});

  console.log(COOKIES.role);
  
  if(authority === "ROLE_STAFF"){
    await Router.push("/dash/");
  }else{
    await Router.push("/user/")
  }
  
}

export async function registration(inputs: RegInputs): Promise<string | void> {

  const data = inputs;

  const res: any = await post("/auth/register", data).catch(catchAxiosError);
  if (res.error) {
        return res.error;
  } else if (!res.data || !res.data.access_token) {
    return "Something went wrong!";
  }

  console.log(res);
  
}