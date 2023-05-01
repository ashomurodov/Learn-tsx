import { Card } from "../entities/card";

export class CardRepository {
	private list: Card[] = [];
	private counter = 0;

	getList() {
		return this.list;
	}

	create(card: Card) {
		if (this.isExist(card.cardNumber)) {
			throw new Error(`Card(${card.cardNumber}) already exists`);
		}

		card.setId(++this.counter);
		this.list.push(card);
	}

	isExist(cardNumber: string) {
		for (let card of this.list) {
			if (card.cardNumber === cardNumber) return true;
		}

		return false;
	}
}
