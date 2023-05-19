import { IEntity } from "../types";
import { getBranches, getCommits, getRepositories, getUser } from "./backend";

const displayCommits = (commits: IEntity.Commit[]) => {
	return console.log("commits = ", commits);
};

const displayBranches = (branches: IEntity.Branch[]) => {
	console.log("branches = ", branches);
	return getCommits(branches[0].id);
};

const displayRepositories = (repos: IEntity.Repo[]) => {
	console.log("repos = ", repos);
	return getBranches(repos[0].id);
};

const displayUser = (user: IEntity.User) => {
	console.log("user = ", user);
	return getRepositories(user.username);
};

/** Promise */
getUser("ars@domain.com")
	.then(displayUser)
	.then(displayRepositories)
	.then(displayBranches)
	.then(displayCommits);
