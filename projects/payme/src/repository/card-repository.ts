import { Card } from "../entities/card";

export class CardRepository {
	private list: Card[] = [];
	private counterID = 0;

	add(newCard: Card) {
		if (this.isExist(newCard.cardNumber)) throw new Error(`This card(${newCard.cardNumber}) already exists`);
		newCard.setId(++this.counterID);
		this.list.push(newCard);
	}

	addList() {}

	isExist(cardNumber: string) {
		for (let card of this.list) {
			if (card.cardNumber === cardNumber) return true;
		}
		return false;
	}

	getList() {
		return this.list;
	}
}
