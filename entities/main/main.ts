function Box(firstName: string) {
	this.firstName = firstName;
	function run() {
		console.log(this);
		console.log(`${this?.firstName} is running`);
	}

	this.jump = function () {
		console.log(`${this.firstName} is jumping...`);
		run();
	};
}

const box = new Box("Black Box");

box.jump();
