const Employee = require("./employee");

class Manager extends Employee {
        constructor (id, name, email, officeNumber) {
            super(id, name, email)
            this.officeNumber = officeNumber
        }
}

Manager.prototype.getRole = function() {
    return this
}

