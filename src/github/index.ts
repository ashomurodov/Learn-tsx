import { TIME, users, repositories } from "./constants";
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

/** DISPLAY FUNCTIONS */

const displayRepositories = (repos: IEntity.Repo[]) => {
	console.log("repos = ", repos);
};

const displayUser = (user: IEntity.User) => {
	console.log("user = ", user);
	getRepositories(user.username, displayRepositories);
};
getUser("ars@domain.com", displayUser);
