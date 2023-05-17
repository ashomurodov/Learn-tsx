import { TIME, repositories, users } from "./constants";

export type IResolveFun = (data: any) => void;
export type IRejectFun = (error: any) => void;
export type IFunction = (resolve?: IResolveFun, reject?: IRejectFun) => PDPPromise | void;

class PDPPromise {
	constructor(public execute: IFunction) {}

	then(resolve?: IResolveFun, reject?: IRejectFun): PDPPromise {
		return this.execute(resolve, reject)!;
	}
}

const getUser = (email: string) => {
	return new PDPPromise((resolve, reject) => {
		console.log("[USER][🌀] Loading...");

		setTimeout(() => {
			const user = users.find((u) => u.email === email);
			if (!user) reject!(new Error(`User not found with email ${email}`));
			else resolve!(user);
		}, TIME);
	});
};

export function getRepositories(username: string) {
	return new PDPPromise((resolve, reject) => {
		console.log("[REPOSITORIES][🌀] Loading...");

		setTimeout(() => {
			const repos = repositories.filter((r) => r.owner === username);
			resolve!(repos);
		}, TIME);
	});
}

const displayUser = (user: any) => {
	console.log("user = ", user);
	
};

getUser("ars@domain.com").then(displayUser);
