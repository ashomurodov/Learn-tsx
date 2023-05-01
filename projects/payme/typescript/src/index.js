"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./entities/user");
var card_1 = require("./entities/card");
var card_repository_1 = require("./repository/card-repository");
var user_repository_1 = require("./repository/user-repository");
var users = [
    ["Mark", "Kent"],
    ["Sherlock", "Holmes"],
    ["Barry", "Bob"],
];
function main() {
    var cardRepository = new card_repository_1.CardRepository();
    var userRepository = new user_repository_1.UserRepository();
    for (var idx in users) {
        var _a = users[idx], firstName = _a[0], lastName = _a[1];
        var user = new user_1.User(firstName, lastName, "+99899896134".concat(idx), "root123");
        userRepository.create(user);
        var card = new card_1.Card("8600 1313 4444 095".concat(idx), 7878, "11/26", "UZCARD", 100000, user.getId(), "TBC BANK-".concat(+idx + 1));
        cardRepository.create(card);
    }
    console.log("USERS: ", userRepository.getList());
    console.log("CARDS: ", cardRepository.getList());
}
main();
