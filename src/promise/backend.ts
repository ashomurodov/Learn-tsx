import { TIME, branches, commits, repositories, users } from "../constants";
import { IEntity, IFunction } from "../types";



export function getUser(email: string) {
	return new Promise<IEntity.User>((resolve, reject) => {
		console.log("[USER][🌀] Loading...");

		setTimeout(() => {
			const user = users.find((u) => u.email === email);
			if (!user) reject(new Error(`User not found with email ${email}`));
			else resolve(user);
		}, TIME);
	});
}



export function getRepositories(username: string) {
	return new Promise<IEntity.Repo[]>((resolve, reject) => {
		console.log("[REPOSITORIES][🌀] Loading...");

		setTimeout(() => {
			const repos = repositories.filter((r) => r.owner === username);
			resolve(repos);
		}, TIME);
	});
}

export function getBranches(repoID: number) {
	return new Promise<IEntity.Branch[]>((resolve, reject) => {
		console.log("[BRANCHES][🌀] Loading...");

		setTimeout(() => {
			const _branches = branches.filter((b) => b.repoID === repoID);
			resolve(_branches);
		}, TIME);
	});
}

export function getCommits(branchID: number) {
	return new Promise<IEntity.Commit[]>((resolve, reject) => {
		console.log("[COMMITS][🌀] Loading...");

		setTimeout(() => {
			const _commits = commits.filter((c) => c.branchID === branchID);
			resolve(_commits);
		}, TIME);
	});
}
