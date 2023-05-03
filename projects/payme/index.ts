import { Card } from "./src/entities/card";
import { CardRepository } from "./src/repository/card-repository";

const cardRepository = new CardRepository();

const card1 = new Card("8600 1348 1111 2222", 7777, "12/24", "UZCARD", 100000, 0, "TBC BANK");
const card2 = new Card("8600 1348 1111 2223", 7777, "12/24", "UZCARD", 100000, 0, "TBC BANK");
const card3 = new Card("8600 1348 1111 2223", 7777, "12/24", "UZCARD", 100000, 0, "TBC BANK");
const card4 = new Card("8600 1348 1111 2223", 7777, "12/24", "UZCARD", 100000, 0, "TBC BANK");

cardRepository.addList(card1, card2, card3, card4);

cardRepository.add(card1);
cardRepository.add(card2);
cardRepository.add(card3);
cardRepository.add(card4);

console.log("CARDS: ", cardRepository.getList());
