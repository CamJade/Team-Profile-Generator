const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

//questions---use inquirer
inquirer.prompt([ {
    type: 'list',
    name: 'memberType',
    message: 'Please choose type of team member',
    choices: [
        'Engineer',
        'Manager',
        'Intern',
        ],
    },
    {
    type: '',
    name: '',
    message: '',
    choices:'',
    },
])

//generate HTML files using answers

//write file to create HTML