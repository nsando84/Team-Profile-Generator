
class Employee {
    constructor(id, name, email){
        if (!id) {
            throw new Error("Missing ID for employee")
        }
        if (!name) {
            throw new Error("Missing Name for employee")
        }
        if (!email) {
            throw new Error("Missing Email for employee")
        }
        this.id = id;
        this.name = name
        this.email = email
    }    
}

Employee.prototype.getName = function() {
    return this.name
}
Employee.prototype.getId = function() {
    return this.id
}
Employee.prototype.getEmail = function() {
    return this.email
}
Employee.prototype.getRole = function() {
    return this
}



module.exports = Employee