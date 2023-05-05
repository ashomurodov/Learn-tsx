class Base {
    constructor(name, createdDate, price) {
        this.name = name;
        this.createdDate = createdDate;
        this.price = price;
    }
    getName() {
        return this.name;
    }
}
class Laptop extends Base {
    constructor(name, createdDate, price, type) {
        super(name, createdDate, price);
        this.type = type;
    }
    powerOn() {
        console.log(`${this.getName()}[${this.type}] is turning on`);
    }
}
class Fruit extends Base {
    constructor(name, createdDate, price, type, ram) {
        super(name, createdDate, price);
        this.type = type;
        this.ram = ram;
    }
}
