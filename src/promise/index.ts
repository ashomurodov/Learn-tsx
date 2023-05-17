import { IEntity } from "../types";
import { getBranches, getCommits, getRepositories, getUser } from "./backend";

const displayCommits = (commits: IEntity.Commit[]) => {
	console.log("commits = ", commits);
};

const displayBranches = (branches: IEntity.Branch[]) => {
	console.log("branches = ", branches);
	getCommits(branches[0].id).then(displayCommits);
};

const displayRepositories = (repos: IEntity.Repo[]) => {
	console.log("repos = ", repos);
	getBranches(repos[0].id).then(displayBranches);
};

const displayUser = (user: IEntity.User) => {
	console.log("user = ", user);
	return getRepositories(user.username);
};

/** Promise */
getUser("ars@domain.com").then(displayUser).then(displayRepositories);
