import { TIME, branches, commits, repositories, users } from "../constants";
import { IEntity, IFunction } from "../types";

export function getUser(email: string, cb: IFunction.Callback<IEntity.User>) {
	console.log("[USER][🌀] Loading...");

	const user = users.find((u) => u.email === email);
	if (!user) throw new Error(`User not found with email ${email}`);

	setTimeout(() => cb(user), TIME);
}

export function getRepositories(username: string, cb: IFunction.Callback<IEntity.Repo[]>) {
	console.log("[REPOSITORIES][🌀] Loading...");
	const repos = repositories.filter((r) => r.owner === username);

	setTimeout(() => cb(repos), TIME);
}

export function getBranches(repoID: number, cb: IFunction.Callback<IEntity.Branch[]>) {
	console.log("[BRANCHES][🌀] Loading...");
	const _branches = branches.filter((b) => b.repoID === repoID);

	setTimeout(() => cb(_branches), TIME);
}

export function getCommits(branchID: number, cb: IFunction.Callback<IEntity.Commit[]>) {
	console.log("[COMMITS][🌀] Loading...");
	const _commits = commits.filter((c) => c.branchID === branchID);

	setTimeout(() => cb(_commits), TIME);
}
