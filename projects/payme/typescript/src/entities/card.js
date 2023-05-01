"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(cardNumber, pin, expiry, type, balance, ownerId, bankName) {
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.expiry = expiry;
        this.type = type;
        this.balance = balance;
        this.ownerId = ownerId;
        this.bankName = bankName;
    }
    Card.prototype.getId = function () {
        return this.id;
    };
    Card.prototype.setId = function (newId) {
        this.id = newId;
    };
    return Card;
}());
exports.Card = Card;
