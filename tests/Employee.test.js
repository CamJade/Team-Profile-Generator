//require from employee file to test
const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

//create tests for employee-name, id, email, role

//describe test suit first
describe('Gets Employee name', () => {
    //tests; description plus callback
    it('should return the name', () => {
        const employeeA = new Employee('Dwight')
        expect(employeeA.getName()).toBe('Dwight');
    });
});

describe('Gets Employee ID', () => {
    //tests; description plus callback
    it('should return the Id', () => {
        const employeeA = new Employee('Dwight', 2)
        expect(employeeA.getId()).toBe(2);
    });
});

describe('Gets Employee email', () => {
    //tests; description plus callback
    it('should return the email', () => {
        const employeeA = new Employee('Dwight', 2, 'email.test@gmail.com')
        expect(employeeA.getEmail()).toBe('email.test@gmail.com');
    });
});

describe('Gets Employee role', () => {
    //tests; description plus callback
    it('should return "Employee"', () => {
        const employeeA = new Employee()
        expect(employeeA.getRole()).toBe('Employee');
    });
});