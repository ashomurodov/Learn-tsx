"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./entities/user");
const card_1 = require("./entities/card");
const card_repository_1 = require("./repository/card-repository");
const user_repository_1 = require("./repository/user-repository");
const users = [
    ["Mark", "Kent"],
    ["Sherlock", "Holmes"],
    ["Barry", "Bob"],
];
function main() {
    const cardRepository = new card_repository_1.CardRepository();
    const userRepository = new user_repository_1.UserRepository();
    for (let idx in users) {
        const [firstName, lastName] = users[idx];
        const user = new user_1.User(firstName, lastName, `+99899896134${idx}`, "root123");
        userRepository.create(user);
        const card = new card_1.Card(`8600 1313 4444 095${idx}`, 7878, "11/26", "UZCARD", 100000, user.getId(), `TBC BANK-${+idx + 1}`);
        cardRepository.create(card);
    }
    console.log("USERS: ", userRepository.getList());
    console.log("CARDS: ", cardRepository.getList());
}
main();
