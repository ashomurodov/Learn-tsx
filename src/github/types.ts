export namespace IEntity {
	export interface User {
		id: number;
		email: string;
		username: string;
	}

	export interface Repo {
		id: number;
		owner: string;
		name: string;
	}

	export interface Branch {
		id: number;
		repoID: number;
		name: string;
	}

	export interface Commit {
		id: number;
		branchID: number;
		message: string;
	}
}

export namespace IFunction {
	export type Callback<T> = (data: T) => void;
}
