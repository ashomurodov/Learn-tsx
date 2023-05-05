"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }
    run() {
        console.log(`${this.name} is running...`);
    }
    getMoney() {
        return this.money;
    }
    setMoney(newMoney) {
        this.money = newMoney;
    }
}
exports.Person = Person;
class Doctor extends Person {
    constructor(name, money, uniform) {
        super(name, money);
        this.uniform = uniform;
    }
    jump() {
        console.log(`${this.name} is jumping...`);
        console.log(`my money: ${this.getMoney()}`);
    }
}
const doctor = new Doctor("Kent", 2000, "BLUE");
doctor.run(); //
doctor.jump(); //
