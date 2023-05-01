export class User {
	private id: number;

	constructor(public firstName: string, public lastName: string, public phoneNumber: string, public password: string) {}

	getId() {
		return this.id;
	}

	setId(newID: number) {
		this.id = newID;
	}
}
