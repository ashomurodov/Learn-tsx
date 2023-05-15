"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commits = exports.branches = exports.repositories = exports.users = exports.TIME = void 0;
exports.TIME = 4000; // for all settimes
exports.users = [
    {
        id: 123,
        username: "arslonbekXX",
        email: "ars@domain.com",
    },
    {
        id: 104,
        username: "xushnud123",
        email: "xushnud@domain.com",
    },
    {
        id: 100,
        username: "abdurakhmon",
        email: "abdurakhmon@domain.com",
    },
];
exports.repositories = [
    {
        id: 1,
        name: "pdp-8",
        owner: "arslonbekXX",
    },
    {
        id: 2,
        name: "Pig Game",
        owner: "abdurakhmon",
    },
    {
        id: 3,
        name: "pdp-11",
        owner: "arslonbekXX",
    },
    {
        id: 4,
        name: "pdp-10",
        owner: "arslonbekXX",
    },
];
exports.branches = [
    {
        id: 15,
        name: "lesson-74",
        repoID: 1,
    },
    {
        id: 16,
        name: "lesson-13",
        repoID: 1,
    },
    {
        id: 17,
        name: "master",
        repoID: 2,
    },
    {
        id: 18,
        name: "dev",
        repoID: 2,
    },
];
exports.commits = [
    {
        id: 50,
        message: "lesson-74 start-codes",
        branchID: 15,
    },
    {
        id: 51,
        message: "lesson-74 finish-codes",
        branchID: 15,
    },
    {
        id: 52,
        message: "Finish Pig Game Project",
        branchID: 18,
    },
    {
        id: 52,
        message: "Deployed project to pig-game.netlify.app",
        branchID: 17,
    },
];
