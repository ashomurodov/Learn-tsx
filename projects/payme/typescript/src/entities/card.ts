export type CARD_TYPE = "UZCARD" | "HUMO";

export class Card {
	private id: number;
	constructor(public number: string, public pin: number, public expiry: string, public type: CARD_TYPE, public balance: number, public ownerID: number, public bankName: string) {}

	getId() {
		return this.id;
	}

	setId(newID: number) {
		this.id = newID;
	}
}
