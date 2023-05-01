import { User } from "../entities/user";

export class UserRepository {
	private list: User[] = [];
}

const list: User[] = [];
list.push(new User("Mark", "Maya", "+998998961348", "root123"));
