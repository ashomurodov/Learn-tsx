"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.list = [];
        this.counter = 0;
    }
    getList() {
        return this.list;
    }
    create(user) {
        if (this.isExist(user.phoneNumber)) {
            throw new Error(`User(${user.phoneNumber}) already exists`);
        }
        user.setId(++this.counter);
        this.list.push(user);
    }
    isExist(phoneNumber) {
        for (let user of this.list) {
            if (user.phoneNumber === phoneNumber)
                return true;
        }
        return false;
    }
}
exports.UserRepository = UserRepository;
