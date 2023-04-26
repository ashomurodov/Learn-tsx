"use strict";
var Course = /** @class */ (function () {
    function Course(course, teacher) {
        this.course = course;
        this.teacher = teacher;
    }
    Course.prototype.ask = function (question) {
        console.log("[".concat(this.course, "][").concat(this.teacher, "] : ").concat(question));
    };
    return Course;
}());
var course = new Course("React JS", "Kent");
console.log(course);
