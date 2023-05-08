import { User } from "../../entities";
import { IUserService } from "./user";

export class UserService implements IUserService {
	users: User[];
	setSMSCode(smsCode: number, phoneNumber: string): number {
		throw new Error("Method not implemented.");
	}
	signIn(phoneNumber: string, smsCode: number): User {
		throw new Error("Method not implemented.");
	}
	searchByName(name: string): User[] {
		throw new Error("Method not implemented.");
	}
	create(data: User): number {
		throw new Error("Method not implemented.");
	}
	getById(id: number): User {
		throw new Error("Method not implemented.");
	}
	updateById(update: User): User {
		throw new Error("Method not implemented.");
	}
	deleteById(id: number): number {
		throw new Error("Method not implemented.");
	}
}
