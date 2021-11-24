//require from employee file to test
const { it, expect } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

//create tests for intern-name, id, email, role, school

//describe test suit first
describe('Gets Intern name', () => {
    //tests; description plus callback
    it('should return the name', () => {
        const internA = new Intern('Ryan')
        expect(internA.getName()).toBe('Ryan');
    });
});

describe('Gets Intern ID', () => {
    //tests; description plus callback
    it('should return the Id', () => {
        const internA = new Intern('Ryan', 4)
        expect(internA.getId()).toBe(4);
    });
});

describe('Gets Intern email', () => {
    //tests; description plus callback
    it('should return the email', () => {
        const internA = new Intern('Ryan', 4, 'email.test@gmail.com')
        expect(internA.getEmail()).toBe('email.test@gmail.com');
    });
});

describe('Gets Intern role', () => {
    //tests; description plus callback
    it('should return "Intern"', () => {
        const internA = new Intern()
        expect(internA.getRole()).toBe('Intern');
    });
});

describe('Gets Intern school', () => {
    //tests; description plus callback
    it('should return the school', () => {
        const engineerA = new Intern('Ryan', 4, 'email.test@gmail.com', 'Scranton')
        expect(engineerA.getSchool()).toBe('Scranton');
    });
});