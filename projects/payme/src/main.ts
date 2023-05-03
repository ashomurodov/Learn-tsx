type Uniform = "Green" | "Blue" | "White";
type Gender = "Male" | "Female";

class Person {
	constructor(public fullName: string, public birthDate: string, public address: string) {}
	run() {
		console.log(`${this.fullName} is running...`);
	}
}

class Doctor extends Person {
	constructor(fullName: string, birthDate: string, address: string, public uniform: Uniform) {
		super(fullName, birthDate, address);
	}

	cure(gender: Gender) {
		console.log(`${this.fullName} is curring ${gender} person...`);
	}
}

const doctor = new Doctor("Kent Mark Tween", "12.12.2012", "Urganch city", "White");
console.log(doctor);
