import { http } from "services";
import { IApi } from "types";

export const List = () => http.get<IApi.Movie.List.Response>("/movies");

export const Single = ({ movieID }: IApi.Movie.Single.Request) =>
	http.get<IApi.Movie.Single.Response>(`/movies/${movieID}`);

export const Create = ({
	stock: numberInStock,
	rate: dailyRentalRate,
	...args
}: IApi.Movie.Create.Request) =>
	http.post<IApi.Movie.Create.Response>(`/movies`, {
		numberInStock,
		dailyRentalRate,
		...args,
	});
