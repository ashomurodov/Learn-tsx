import { Message } from "../../entities";
import { IBaseService } from "../base";

export interface IMessageService extends IBaseService<Message> {
	messages: Message[];
	getByUserIdAndReceiverId(userId: number, receiverId: number): Message[];
}
