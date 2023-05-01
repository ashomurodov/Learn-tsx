"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.list = [];
        this.counter = 0;
    }
    UserRepository.prototype.getList = function () {
        return this.list;
    };
    UserRepository.prototype.create = function (user) {
        if (this.isExist(user.phoneNumber)) {
            throw new Error("User(".concat(user.phoneNumber, ") already exists"));
        }
        user.setId(++this.counter);
        this.list.push(user);
    };
    UserRepository.prototype.isExist = function (phoneNumber) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.phoneNumber === phoneNumber)
                return true;
        }
        return false;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
