//require parent class employee
const Employee = require('./Employee');

//constructor 
//team manager’s name, employee ID, email address, and office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);//access parent Employee class
        this.officeNumber = officeNumber;//add office number
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

//export so other files can access
module.exports = Manager;