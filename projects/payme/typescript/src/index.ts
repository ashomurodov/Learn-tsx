import { Card } from "./entities/card";
import { User } from "./entities/user";

function init() {
	const user = new User("Mark", "Maya", "+998998961348", "root123");

	console.log("USER: ", user);
	const card = new Card("8600 0417 1313 0495", 8080, "11/11", "UZCARD", 100000, user.getId(), "TBC BANK");
	console.log("CARD: ", card);
}

init();
