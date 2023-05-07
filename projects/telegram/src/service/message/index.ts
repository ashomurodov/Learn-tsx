import { Message } from "../../entities";
import {} from "../base";
import { IMessageService } from "./message";

export class MessageService implements IMessageService {
	messages: Message[];
	getByUserIdAndReceiverId(userId: number, receiverId: number): Message[] {
		throw new Error("Method not implemented.");
	}
	create(data: Message): number {
		throw new Error("Method not implemented.");
	}
	getById(id: number): Message {
		throw new Error("Method not implemented.");
	}
	updateById(update: Message): Message {
		throw new Error("Method not implemented.");
	}
	deleteById(id: number): number {
		throw new Error("Method not implemented.");
	}
}
