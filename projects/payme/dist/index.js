"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
const repository_1 = require("./repository");
const cardRepository = new repository_1.CardRepository();
const userRepository = new repository_1.UserRepository();
const mark = new entities_1.User("Mark", "Tween", "+998991234567", "root123"); // 2
const kent = new entities_1.User("Kent", "John", "+998991234512", "root124"); // 1
userRepository.add(kent, mark);
const card1 = new entities_1.Card("8600 1348 1111 2223", 7777, "12/24", "UZCARD", 100000, mark.getId(), "TBC BANK"); //
const card2 = new entities_1.Card("8600 1348 1111 2222", 7777, "12/24", "UZCARD", 100000, mark.getId(), "TBC BANK");
cardRepository.add(card1, card2);
console.log("CARDS OF MARK: ", cardRepository.getCardsByOwnerID(kent.getId()));
