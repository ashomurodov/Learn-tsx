"use strict";

const methods = {
	ask(question) {
		console.log(`[${this.course}][${this.teacher}] : ${question}`);
	},
};

/* Factory function */
function createCourse(course, teacher) {
	return Object.setPrototypeOf({ course, teacher }, methods);
}

const course1 = createCourse("React JS", "Kent");

course1.ask("What is React JS?");
const course2 = createCourse("Angular JS", "Mark");
course2.ask("What is Angular JS?");
