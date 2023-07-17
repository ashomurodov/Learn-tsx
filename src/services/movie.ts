import http from "./http";
import { iApi } from "types";

export const List = (params?: iApi.Movies.List.RequestParams) => http.get<iApi.Movies.List.Response>("/movies");

export const Single = ({ _id }: iApi.Movies.Single.RequestParams) => http.get<iApi.Movies.Single.Response>(`movies/${_id}`);
