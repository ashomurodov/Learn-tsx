import { TIME, users, repositories, branches, commits } from "./constants";
import { IEntity, IFunction } from "./types";

/** BACKEND FUNCTIONS */
function getUser(email: string, cb: IFunction.Callback<IEntity.User>) {
	console.log("[USER][🌀] Loading...");

	const user = users.find((u) => u.email === email);
	if (!user) throw new Error(`User not found with email ${email}`);

	setTimeout(() => cb(user), TIME);
}

function getRepositories(username: string, cb: IFunction.Callback<IEntity.Repo[]>) {
	console.log("[REPOSITORIES][🌀] Loading...");
	const repos = repositories.filter((r) => r.owner === username);

	setTimeout(() => cb(repos), TIME);
}

function getBranches(repoID: number, cb: IFunction.Callback<IEntity.Branch[]>) {
	console.log("[BRANCHES][🌀] Loading...");
	const _branches = branches.filter((b) => b.repoID === repoID);

	setTimeout(() => cb(_branches), TIME);
}

function getCommits(branchID: number, cb: IFunction.Callback<IEntity.Commit[]>) {
	console.log("[COMMITS][🌀] Loading...");
	const _commits = commits.filter((c) => c.branchID === branchID);

	setTimeout(() => cb(_commits), TIME);
}

/** DISPLAY FUNCTIONS */

const displayCommits = (commits: IEntity.Commit[]) => {
	console.log("commits = ", commits);
};

const displayBranches = (branches: IEntity.Branch[]) => {
	console.log("branches = ", branches);
	getCommits(branches[0].id, displayCommits);
};

const displayRepositories = (repos: IEntity.Repo[]) => {
	console.log("repos = ", repos);
	getBranches(repos[0].id, displayBranches);
};

const displayUser = (user: IEntity.User) => {
	console.log("user = ", user);
	getRepositories(user.username, displayRepositories);
};

// getUser("ars@domain.com", displayUser);

getUser("ars@domain.com", (user) => {
	console.log("user = ", user);
	getRepositories(user.username, (repos: IEntity.Repo[]) => {
		console.log("repos = ", repos);
		getBranches(repos[0].id, (branches: IEntity.Branch[]) => {
			console.log("branches = ", branches);
			getCommits(branches[0].id, (commits: IEntity.Commit[]) => {
				console.log("commits = ", commits);
			});
		});
	});
});
