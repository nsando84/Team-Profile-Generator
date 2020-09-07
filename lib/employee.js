
class Employee {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
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
// Employee.prototype.getRole = function() {
//     return "Employee"
// }


const joe = new Employee(15, "james", "email.com")
// console.log(joe.getId())
// console.log(joe.getEmail())
// console.log(joe.getName())
// console.log(joe.getRole())
module.exports = Employee