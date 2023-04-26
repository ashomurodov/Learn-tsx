"use strict";

class Course {
	constructor(public course: string, public teacher: string) {}

	ask(question: string) {
		console.log(`[${this.course}][${this.teacher}] : ${question}`);
	}
}

const course = new Course("React JS", "Kent");
console.log(course);
