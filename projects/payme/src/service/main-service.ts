import { Card, User } from "../entities";
import { UserRepository, CardRepository } from "../repository";

export class MainService {
	userRepository = new UserRepository();
	cardRepository = new CardRepository();

	register(user: User) {
		this.userRepository.add(user);
	}

	registerCard(card: Card) {
		this.cardRepository.add(card);
	}

	getCardList() {
		return this.cardRepository.getList();
	}

	getUserList() {
		return this.userRepository.getList();
	}

	getCardsByPhoneNumber(phoneNumber: string) {
		const user = this.userRepository.getByPhoneNumber(phoneNumber);
		const userID = user.getId();
		this.cardRepository.getCardsByOwnerID(userID);
	}
}
