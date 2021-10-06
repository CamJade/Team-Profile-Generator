//require parent class employee
const Employee = require('./Employee');

//constructor 
//team manager’s name, employee ID, email address, and office number
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);//access parent Employee class
        this.office = office;//add office number
    }

    getRole() {
        return 'Manager';
    }
}

//export so other files can access
module.exports = Manager;