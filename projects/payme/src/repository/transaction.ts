import { Transaction } from "../entities";

export class TransactionRepository {
	private list: Transaction[] = [];
	private counterID = 0;

	add(...transactions: Transaction[]) {
		for (let transaction of transactions) {
			transaction.setId(++this.counterID);
			this.list.push(transaction);
		}
	}

	getList() {
		return this.list;
	}

	getTransactionByID(transactionID: number) {
		for (let transaction of this.list) {
			if (transaction.getId() === transactionID) return transaction;
		}

		throw new Error(`Transaction(${transactionID}) not found`);
	}

	getTransactionByCardNumber(cardNumber: string) {
		const transactions: Transaction[] = this.list.filter((transaction) => transaction.senderCard.cardNumber === cardNumber || transaction.receivedCard.cardNumber === cardNumber);

		if (!transactions.length) throw new Error(`❌ Transactions not found with ${cardNumber} card number`);

		return transactions;
	}
}
