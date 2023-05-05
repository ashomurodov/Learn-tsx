"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const base_1 = require("./base");
class Transaction extends base_1.BaseEntity {
    constructor(senderCard, receivedCard, amount, senderName, receivedName) {
        super();
        this.senderCard = senderCard;
        this.receivedCard = receivedCard;
        this.amount = amount;
        this.senderName = senderName;
        this.receivedName = receivedName;
        if (senderCard.balance < amount)
            throw new Error(`[${senderCard.cardNumber}] Not enough money`);
        senderCard.balance -= amount;
        receivedCard.balance += amount;
        this.transactionDate = new Date();
    }
}
exports.Transaction = Transaction;
