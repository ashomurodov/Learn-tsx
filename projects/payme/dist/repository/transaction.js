"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
class TransactionRepository {
    constructor() {
        this.list = [];
        this.counterID = 0;
    }
    add(...transactions) {
        for (let transaction of transactions) {
            transaction.setId(++this.counterID);
            this.list.push(transaction);
        }
    }
    getList() {
        return this.list;
    }
    getTransactionByID(transactionID) {
        for (let transaction of this.list) {
            if (transaction.getId() === transactionID)
                return transaction;
        }
        throw new Error(`Transaction(${transactionID}) not found`);
    }
    getTransactionByCardNumber(cardNumber) {
        const transactions = this.list.filter((transaction) => transaction.senderCard.cardNumber === cardNumber || transaction.receivedCard.cardNumber === cardNumber);
        if (!transactions.length)
            throw new Error(`❌ Transactions not found with ${cardNumber} card number`);
        return transactions;
    }
}
exports.TransactionRepository = TransactionRepository;
