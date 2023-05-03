class Person {
    constructor(fullName, birthDate, address) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.address = address;
    }
    run() {
        console.log(`${this.fullName} is running...`);
    }
}
class Doctor extends Person {
    constructor(fullName, birthDate, address, uniform) {
        super(fullName, birthDate, address);
        this.uniform = uniform;
    }
    cure(gender) {
        console.log(`${this.fullName} is curring ${gender} person...`);
    }
}
const doctor = new Doctor("Kent Mark Tween", "12.12.2012", "Urganch city", "White");
console.log(doctor);
