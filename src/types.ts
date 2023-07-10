export namespace IEntity {
	export interface Genre {
		_id: string;
		name: string;
	}

	export interface Movie {
		_id: string;
		title: string;
		genre: Genre;
		numberInStock: number;
		dailyRentalRate: number;
		username: string;
	}
}

export namespace IApi {
	export namespace Genre {
		export namespace List {
			export interface Request extends Params {}
			export interface Params {}
			export type Response = IEntity.Genre[];
		}

		export namespace Single {
			export interface Request extends Params {}
			export interface Params {
				genreID: string;
			}
			export type Response = IEntity.Genre;
		}
	}

	export namespace Movie {
		export namespace List {
			export interface Request extends Params {}
			export interface Params {}
			export type Response = IEntity.Movie[];
		}

		export namespace Single {
			export interface Request extends Params {}
			export interface Params {
				movieID: string;
			}
			export type Response = IEntity.Movie;
		}
	}

	export namespace Auth {}
}
