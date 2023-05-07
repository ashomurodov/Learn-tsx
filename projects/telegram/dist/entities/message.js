"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const base_1 = require("./base");
class Message extends base_1.Base {
    constructor(fromId, toId, text) {
        super();
        this.fromId = fromId;
        this.toId = toId;
        this.text = text;
    }
}
exports.Message = Message;
