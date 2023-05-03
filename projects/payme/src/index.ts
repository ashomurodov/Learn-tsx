import { Card, User } from "./entities";
import { UserService } from "./service/user-service";
import { CardService } from "./service/card-service";

const userService = new UserService();
const cardService = new CardService();

const mark = new User("Mark", "Tween", "+998991234567", "root123"); // 2
const kent = new User("Kent", "John", "+998991234512", "root124"); // 1

userService.add(kent);
userService.add(mark);

const card1 = new Card("8600 1348 1111 2223", 7777, "12/24", "UZCARD", 100000, mark.getId(), "TBC BANK"); //
const card2 = new Card("8600 1348 1111 2222", 7777, "12/24", "UZCARD", 100000, mark.getId(), "TBC BANK");
cardService.add(card1);
cardService.add(card2);



const transaction1 = new Transaction("123 123 123 123", '222 222 111 111', 200000)