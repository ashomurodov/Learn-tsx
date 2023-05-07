import { Base } from "./base";

export class Message extends Base {
	constructor(public fromId?: number, public toId?: number, public text?: string) {
		super();
	}
}
