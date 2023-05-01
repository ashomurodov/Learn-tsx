"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(firstName, lastName, phoneNumber, password, isBlocked) {
        if (isBlocked === void 0) { isBlocked = false; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.isBlocked = isBlocked;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (newId) {
        this.id = newId;
    };
    return User;
}());
exports.User = User;
