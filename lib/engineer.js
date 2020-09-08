const Employee = require("./employee");

class Engineer extends Employee {
        constructor (id, name, email, github) {
            super(id, name, email)
            this.github = github
        }
}

Engineer.prototype.getRole = function() {
    return "Engineer"
}

Engineer.prototype.getGithub = function() {
    return this.github
}


module.exports = Engineer

