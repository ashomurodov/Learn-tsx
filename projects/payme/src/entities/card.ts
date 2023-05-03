export type CARD_TYPE = "UZCARD" | "HUMO" | "VISA" | "MASTER CARD";

export class Card {
	private id: number;

	constructor(public cardNumber: string, public pin: number, public expiry: string, public type: CARD_TYPE, public balance: number, public ownerId: number, public bankName: string) {}

	getId() {
		return this.id;
	}

	setId(newId: number) {
		this.id = newId;
	}
}
