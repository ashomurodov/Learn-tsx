"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepository = void 0;
class CardRepository {
    constructor() {
        this.list = [];
        this.counterID = 0;
    }
    add(newCard) {
        if (this.isExist(newCard.cardNumber))
            throw new Error(`This card(${newCard.cardNumber}) already exists`);
        newCard.setId(++this.counterID);
        this.list.push(newCard);
    }
    addList() { }
    isExist(cardNumber) {
        for (let card of this.list) {
            if (card.cardNumber === cardNumber)
                return true;
        }
        return false;
    }
    getList() {
        return this.list;
    }
}
exports.CardRepository = CardRepository;
