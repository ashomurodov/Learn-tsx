import { User } from "../entities/user";

export class UserRepository {
	private list: User[] = [];
	private counter = 0;

	getList() {
		return this.list;
	}

	create(user: User) {
		if (this.isExist(user.phoneNumber)) {
			throw new Error(`User(${user.phoneNumber}) already exists`);
		}

		user.setId(++this.counter);
		this.list.push(user);
	}

	isExist(phoneNumber: string) {
		for (let user of this.list) {
			if (user.phoneNumber === phoneNumber) return true;
		}

		return false;
	}
}
