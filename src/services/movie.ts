import http from "./http";
import { iApi } from "types";

export const List = (params?: iApi.Movies.List.RequestParams) => http.get<iApi.Movies.List.Response>("/movies");

export const Single = ({ movieId }: iApi.Movies.Single.RequestParams) =>
  http.get<iApi.Movies.Single.Response>(`movies/${movieId}`);
