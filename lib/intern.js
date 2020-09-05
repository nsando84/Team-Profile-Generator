const Employee = require("./employee");

class Intern extends Employee {
        constructor (id, name, email, school) {
            super(id, name, email)
            this.school = school
        }
}

Intern.prototype.getRole = function() {
    return "Intern"
}

Intern.prototype.getSchool = function() {
    return this.school
}

module.exports = Intern