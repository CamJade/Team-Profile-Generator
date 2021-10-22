//create constructor function for employee--parent class
//all employees have name, id, and email properties
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

//employee needs getname, getid, getemail, and getrole methods
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