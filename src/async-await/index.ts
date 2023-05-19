import { IEntity } from "../types";
import { getBranches, getCommits, getRepositories, getUser } from "./backend";

const displayCommits = (commits: IEntity.Commit[]) => {
	console.log("commits = ", commits);
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
	.then(displayCommits)
	.catch((err: Error) => console.error(`[ERROR][❌] ${err.message}`));

async function init() {
	try {
		const user = await getUser("ars@domain.com");
		const repos = await displayUser(user);
		const branches = await displayRepositories(repos);
		const commits = await displayBranches(branches);
		displayCommits(commits);
	} catch (err: any) {
		console.error(`[ERROR][❌] ${err.message}`);
	}
}
async function init2() {
	try {
		getUser("ars@domain.com").then((user) => {
			displayUser(user).then((repos) => {
				displayRepositories(repos).then((branches) => {
					displayBranches(branches).then((commits) => {
						displayCommits(commits);
					});
				});
			});
		});
	} catch (err: any) {
		console.error(`[ERROR][❌] ${err.message}`);
	}
}
