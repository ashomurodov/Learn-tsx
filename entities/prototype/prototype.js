class Car {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log(`${this.name} is moving...`);
    }
}
class Cobalt extends Car {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;
    }
    lock() {
        console.log(`${this.name} was locked`);
    }
}
