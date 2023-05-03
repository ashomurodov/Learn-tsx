"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainService = void 0;
const repository_1 = require("../repository");
class MainService {
    constructor() {
        this.userRepository = new repository_1.UserRepository();
        this.cardRepository = new repository_1.CardRepository();
    }
    register(user) {
        this.userRepository.add(user);
    }
    registerCard(card) {
        this.cardRepository.add(card);
    }
    getCardList() {
        return this.cardRepository.getList();
    }
    getUserList() {
        return this.userRepository.getList();
    }
    getCardsByPhoneNumber(phoneNumber) {
        const user = this.userRepository.getByPhoneNumber(phoneNumber);
        const userID = user.getId();
        this.cardRepository.getCardsByOwnerID(userID);
    }
}
exports.MainService = MainService;
