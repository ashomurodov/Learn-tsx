"use strict";
class Course {
    constructor(course, teacher) {
        this.course = course;
        this.teacher = teacher;
    }
    ask(question) {
        console.log(`[${this.course}][${this.teacher}] : ${question}`);
    }
}
const course = new Course("React JS", "Kent");
console.log(course);
