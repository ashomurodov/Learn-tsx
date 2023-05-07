import { User } from "../../entities";
import { IBaseService } from "../base";

export interface IUserService extends IBaseService<User> {
	users: User[];
	setSMSCode(smsCode: number, phoneNumber: string): number;
	signIn(phoneNumber: string, smsCode: number): User;
	searchByName(name: string): User[];
}
