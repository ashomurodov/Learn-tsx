import { Card, User } from "./entities";
import { CardRepository, UserRepository } from "./repository";

const cardRepository = new CardRepository();
const userRepository = new UserRepository();

const mark = new User("Mark", "Tween", "+998991234567", "root123"); // 2
const kent = new User("Kent", "John", "+998991234512", "root124"); // 1
userRepository.add(kent, mark);

const card1 = new Card("8600 1348 1111 2223", 7777, "12/24", "UZCARD", 100000, mark.getId(), "TBC BANK"); //
const card2 = new Card("8600 1348 1111 2222", 7777, "12/24", "UZCARD", 100000, mark.getId(), "TBC BANK");
cardRepository.add(card1, card2);

console.log("CARDS OF MARK: ", cardRepository.getCardsByOwnerID(kent.getId()));
