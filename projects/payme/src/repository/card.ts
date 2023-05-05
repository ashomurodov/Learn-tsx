import { Card } from "../entities";

export class CardRepository {
	private list: Card[] = [];
	private counterID = 0;

	add(...newCards: Card[]) {
		for (let newCard of newCards) {
			if (this.isExist(newCard.cardNumber)) throw new Error(`This card(${newCard.cardNumber}) already exists`);
			newCard.setId(++this.counterID);
			this.list.push(newCard);
		}
	}

	isExist(cardNumber: string) {
		for (let card of this.list) {
			if (card.cardNumber === cardNumber) return true;
		}
		return false;
	}

	getList() {
		return this.list;
	}

	getCardsByOwnerID(ownerID: number) {
		const cards: Card[] = [];

		for (let card of this.list) {
			if (card.ownerId === ownerID) cards.push(card);
		}

		return cards;
	}

	getCardByCardNumber(cardNumber: string) {
		const card = this.list.find((card) => card.cardNumber === cardNumber);
		if (card) return card;

		throw new Error(`Card not found with card number: ${cardNumber}`);
	}
}
