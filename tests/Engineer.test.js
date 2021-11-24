//require from employee file to test
const { it, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

//create tests for engineer-name, id, email, role, github

//describe test suit first
describe('Gets Engineer name', () => {
    //tests; description plus callback
    it('should return the name', () => {
        const engineerA = new Engineer('Pam')
        expect(engineerA.getName()).toBe('Pam');
    });
});

describe('Gets Engineer ID', () => {
    //tests; description plus callback
    it('should return the Id', () => {
        const engineerA = new Engineer('Pam', 3)
        expect(engineerA.getId()).toBe(3);
    });
});

describe('Gets Engineer email', () => {
    //tests; description plus callback
    it('should return the email', () => {
        const engineerA = new Engineer('Pam', 3, 'email.test@gmail.com')
        expect(engineerA.getEmail()).toBe('email.test@gmail.com');
    });
});

describe('Gets Engineer role', () => {
    //tests; description plus callback
    it('should return "Engineer"', () => {
        const engineerA = new Engineer()
        expect(engineerA.getRole()).toBe('Engineer');
    });
});

describe('Gets Engineer github', () => {
    //tests; description plus callback
    it('should return the github', () => {
        const engineerA = new Engineer('Pam', 3, 'email.test@gmail.com', 'pamGithub')
        expect(engineerA.getGithub()).toBe('pamGithub');
    });
});