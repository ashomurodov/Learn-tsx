import http from "./http";
import { iApi } from "types";

export const List = (params?: iApi.Genres.List.RequestParams) => http.get<iApi.Genres.List.Response>("/genres");

export const Single = ({ _id }: iApi.Genres.Single.RequestParams) => http.get<iApi.Genres.Single.Response>(`genres/${_id}`);
