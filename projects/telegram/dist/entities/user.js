"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const base_1 = require("./base");
class User extends base_1.Base {
    constructor(phoneNumber, fullName, username, smsCode) {
        super();
        this.phoneNumber = phoneNumber;
        this.fullName = fullName;
        this.username = username;
        this.smsCode = smsCode;
    }
}
exports.User = User;
