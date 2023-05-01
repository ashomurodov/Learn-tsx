import { User } from "./entities/user";
import { Card } from "./entities/card";
import { CardRepository } from "./repository/card-repository";
import { UserRepository } from "./repository/user-repository";

const users = [
	["Mark", "Kent"],
	["Sherlock", "Holmes"],
	["Barry", "Bob"],
];

function main() {
	const cardRepository = new CardRepository();
	const userRepository = new UserRepository();

	for (let idx in users) {
		const [firstName, lastName] = users[idx];

		const user = new User(firstName, lastName, `+99899896134${idx}`, "root123");
		userRepository.create(user);

		const card = new Card(`8600 1313 4444 095${idx}`, 7878, "11/26", "UZCARD", 100000, user.getId(), `TBC BANK-${+idx + 1}`);
		cardRepository.create(card);
	}

	console.log("USERS: ", userRepository.getList());
	console.log("CARDS: ", cardRepository.getList());
}

main();
