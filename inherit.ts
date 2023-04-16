class Father {
	fatherName: string;
	fatherAge: number;
	constructor(fatherName: string, fatherAge: number) {
		this.fatherName = fatherName;
		this.fatherAge = fatherAge;
	}

	run() {
		console.log(`${this.fatherName} is running...`);
	}
}

class Child extends Father {
	childName: string;
	childAge: number;
	constructor(childName: string, childAge: number, fatherName: string, fatherAge: number) {
		super(fatherName, fatherAge);
		this.childName = childName;
		this.childAge = childAge;
	}

	jump() {
		console.log(`${this.childName} is jumping...`);
	}
}

const child = new Child("Arslonbek", 21, "Shuxrat", 56);
console.log(child);
child.run();
child.jump();
