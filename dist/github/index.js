"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
/** BACKEND FUNCTIONS */
function getUser(email, cb) {
    console.log("[USER][🌀] Loading...");
    const user = constants_1.users.find((u) => u.email === email);
    if (!user)
        throw new Error(`User not found with email ${email}`);
    setTimeout(() => cb(user), constants_1.TIME);
}
function getRepositories(username, cb) {
    console.log("[REPOSITORIES][🌀] Loading...");
    const repos = constants_1.repositories.filter((r) => r.owner === username);
    setTimeout(() => cb(repos), constants_1.TIME);
}
/** DISPLAY FUNCTIONS */
const displayRepositories = (repos) => {
    console.log("repos = ", repos);
};
const displayUser = (user) => {
    console.log("user = ", user);
    getRepositories(user.username, displayRepositories);
};
getUser("ars@domain.com", displayUser);
