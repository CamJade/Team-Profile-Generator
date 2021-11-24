//require parent class employee
const Employee = require('./Employee');

//create constructor that extends from employee class(ES6)
//engineer’s name, ID, email, and GitHub username
class Engineer extends Employee {
        constructor(name, id, email, github) {
            super(name, id, email);//super is used in constuctor to access/call parents functions
            this.github = github //engineer adds github
        }

        getRole() {
            return 'Engineer';
        }

        getGithub() {
            return this.github
        }
}


//export so other files can access
module.exports = Engineer;