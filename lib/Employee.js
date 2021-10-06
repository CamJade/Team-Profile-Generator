//create constructor function for employee
//all employees have name, id, and email
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

//callback
getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return "Employee";
}
}

//export so other files can access
module.exports = Employee;