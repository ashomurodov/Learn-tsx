"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(firstName, lastName, phoneNumber, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (newID) {
        this.id = newID;
    };
    return User;
}());
exports.User = User;
