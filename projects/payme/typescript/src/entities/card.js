"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(number, pin, expiry, type, balance, ownerID, bankName) {
        this.number = number;
        this.pin = pin;
        this.expiry = expiry;
        this.type = type;
        this.balance = balance;
        this.ownerID = ownerID;
        this.bankName = bankName;
    }
    Card.prototype.getId = function () {
        return this.id;
    };
    Card.prototype.setId = function (newID) {
        this.id = newID;
    };
    return Card;
}());
exports.Card = Card;
