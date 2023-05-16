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
function getBranches(repoID, cb) {
    console.log("[BRANCHES][🌀] Loading...");
    const _branches = constants_1.branches.filter((b) => b.repoID === repoID);
    setTimeout(() => cb(_branches), constants_1.TIME);
}
function getCommits(branchID, cb) {
    console.log("[COMMITS][🌀] Loading...");
    const _commits = constants_1.commits.filter((c) => c.branchID === branchID);
    setTimeout(() => cb(_commits), constants_1.TIME);
}
/** DISPLAY FUNCTIONS */
const displayCommits = (commits) => {
    console.log("commits = ", commits);
};
const displayBranches = (branches) => {
    console.log("branches = ", branches);
    getCommits(branches[0].id, displayCommits);
};
const displayRepositories = (repos) => {
    console.log("repos = ", repos);
    getBranches(repos[0].id, displayBranches);
};
const displayUser = (user) => {
    console.log("user = ", user);
    getRepositories(user.username, displayRepositories);
};
getUser("ars@domain.com", displayUser);
getUser("ars@domain.com", (user) => {
    console.log("user = ", user);
    getRepositories(user.username, (repos) => {
        console.log("repos = ", repos);
        getBranches(repos[0].id, (branches) => {
            console.log("branches = ", branches);
            getCommits(branches[0].id, (commits) => {
                console.log("commits = ", commits);
            });
        });
    });
});
