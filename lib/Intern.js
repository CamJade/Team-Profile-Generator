//require employee parent class
const Employee = require('./Employee');

//constructor function that extends from employee and adds school
//intern’s name, ID, email, and school
class Intern extends Employee {
    super(name, id, email, school) {
        super(name,id,email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }
}

//export so other files can access
module.exports = Intern;