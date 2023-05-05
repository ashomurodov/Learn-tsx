import { BaseEntity } from "./base";
import { Card } from "./card";

export class Transaction extends BaseEntity {
	transactionDate: Date;
	constructor(public senderCard: Card, public receivedCard: Card, public amount: number, public senderName: string, public receivedName: string) {
		super();

		if (senderCard.balance < amount) throw new Error(`[${senderCard.cardNumber}] Not enough money`);
		senderCard.balance -= amount;
		receivedCard.balance += amount;

		this.transactionDate = new Date();
	}
}
