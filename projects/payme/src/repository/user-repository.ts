import { User } from "../entities/user";

export class UserRepository {
	private list: User[] = [];
	private counterID = 0;

	add(...newUsers: User[]) {
		for (let newUser of newUsers) {
			if (this.isExist(newUser.phoneNumber)) throw new Error(`This user(${newUser.phoneNumber}) already exists`);
			newUser.setId(++this.counterID);
			this.list.push(newUser);
		}
	}

	isExist(phoneNumber: string) {
		for (let user of this.list) {
			if (user.phoneNumber === phoneNumber) return true;
		}
		return false;
	}

	getList() {
		return this.list;
	}
}
