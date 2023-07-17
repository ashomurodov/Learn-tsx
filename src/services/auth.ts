import http from "./http";
import { iApi } from "types";

export const Login = ({ email, password }: iApi.Auth.Login.RequestParams) =>
  http.post<iApi.Auth.Login.Response>("/auth", { password, email });

export const Register = ({ email, name, password }: iApi.Auth.Register.RequestParams) =>
  http.post<iApi.Auth.Register.Response>("/users", { email, name, password });

export const GetMe = ({ accessToken }: iApi.Auth.GetMe.RequestParams) =>
  http.get<iApi.Auth.GetMe.Response>("/users/me", {
    headers: {
      "x-auth-token": accessToken,
    },
  });
