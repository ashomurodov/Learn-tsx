"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
const user_service_1 = require("./service/user-service");
const card_service_1 = require("./service/card-service");
const userService = new user_service_1.UserService();
const cardService = new card_service_1.CardService();
const mark = new entities_1.User("Mark", "Tween", "+998991234567", "root123"); // 2
const kent = new entities_1.User("Kent", "John", "+998991234512", "root124"); // 1
userService.add(kent);
userService.add(mark);
const card1 = new entities_1.Card("8600 1348 1111 2223", 7777, "12/24", "UZCARD", 100000, mark.getId(), "TBC BANK"); //
const card2 = new entities_1.Card("8600 1348 1111 2222", 7777, "12/24", "UZCARD", 100000, mark.getId(), "TBC BANK");
cardService.add(card1);
cardService.add(card2);
const transaction1 = new Transaction("123 123 123 123", '222 222 111 111', 200000);
