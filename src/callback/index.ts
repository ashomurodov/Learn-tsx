import { getBranches, getCommits, getRepositories, getUser } from "./backend";
import { IEntity } from "../types";

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
/* CALLBACK */
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
