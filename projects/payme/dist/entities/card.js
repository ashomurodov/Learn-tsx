"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(cardNumber, pin, expiry, type, balance, ownerId, bankName) {
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.expiry = expiry;
        this.type = type;
        this.balance = balance;
        this.ownerId = ownerId;
        this.bankName = bankName;
    }
    getId() {
        return this.id;
    }
    setId(newId) {
        this.id = newId;
    }
}
exports.Card = Card;
