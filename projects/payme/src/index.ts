import { Card, Transaction, User } from "./entities";
import { UserService, CardService, TransactionService } from "./service";

const userService = new UserService();
const cardService = new CardService();
const transactionService = new TransactionService();

function defaults() {
	const mark = new User("Mark", "Tween", "+998991234567", "root123"); // 2
	const kent = new User("Kent", "John", "+998991234512", "root124"); // 1
	userService.add(kent);
	userService.add(mark);

	const card1 = new Card("8600 1348 1111 2223", 7777, "12/24", "UZCARD", 100, mark.getId(), "TBC BANK"); //
	const card2 = new Card("8600 1348 1111 2222", 7777, "12/24", "UZCARD", 100, mark.getId(), "TBC BANK");
	cardService.add(card1);
	cardService.add(card2);
}

function transaction(senderCardNumber: string, receivedCardNumber: string, amount: number) {
	const senderCard = cardService.getCardByCardNumber(senderCardNumber);
	const receivedCard = cardService.getCardByCardNumber(receivedCardNumber);

	const senderName = "";
	const receivedName = "";

	const transaction = new Transaction(senderCard, receivedCard, amount, senderName, receivedName);
	transactionService.add(transaction);
}

function main() {
	defaults();
	transaction("8600 1348 1111 2223", "8600 1348 1111 2222", 50);
	transaction("8600 1348 1111 2222", "8600 1348 1111 2223", 120);
	// console.log("CARDS: ", cardService.getList());
	console.log("TRANSACTIONS: ", transactionService.getList());
}

main();
