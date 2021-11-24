//require from employee file to test
const { it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

//create tests for manager-name, id, email, role, officenumber

//describe test suit first
describe('Gets Manager name', () => {
    //tests; description plus callback
    it('should return the name', () => {
        const managerA = new Manager('Jim')
        expect(managerA.getName()).toBe('Jim');
    });
});

describe('Gets Manager ID', () => {
    //tests; description plus callback
    it('should return the Id', () => {
        const managerA = new Manager('Jim', 5)
        expect(managerA.getId()).toBe(5);
    });
});

describe('Gets Manager email', () => {
    //tests; description plus callback
    it('should return the email', () => {
        const managerA = new Manager('Jim', 5, 'email.test@gmail.com')
        expect(managerA.getEmail()).toBe('email.test@gmail.com');
    });
});

describe('Gets Manager role', () => {
    //tests; description plus callback
    it('should return "Manager"', () => {
        const managerA = new Manager()
        expect(managerA.getRole()).toBe('Manager');
    });
});

describe('Gets Manager office number', () => {
    //tests; description plus callback
    it('should return the office number', () => {
        const managerA = new Manager('Jim', 5, 'email.test@gmail.com', 1725)
        expect(managerA.getOfficeNumber()).toBe(1725);
    });
});