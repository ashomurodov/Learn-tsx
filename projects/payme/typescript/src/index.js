"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./entities/card");
var user_1 = require("./entities/user");
function init() {
    var user = new user_1.User("Mark", "Maya", "+998998961348", "root123");
    console.log("USER: ", user);
    var card = new card_1.Card("8600 0417 1313 0495", 8080, "11/11", "UZCARD", 100000, user.getId(), "TBC BANK");
    console.log("CARD: ", card);
}
init();
