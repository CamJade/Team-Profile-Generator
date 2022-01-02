const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Team = [];

const generateHTML = require('./src/template');
const generateedDir = path.resolve(__dirname, "generated")
const outputPath = path.join(generateedDir, "team.html");
//questions---use inquirer
//WHEN I start the application THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const managerAdd = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name here"
        },

        {
            type: 'input',
            name: 'id',
            message: "Enter manager's id here"
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email here"
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number here"
        },

        {
            type: 'list',
            name: 'whatNext',
            message: 'Who would you like to add next?',
            choices: ['Employee', 'Engineer', 'Intern', 'My team is complete']
        }

    ])

        .then((managerChoice) => {
            const manager = new Manager(managerChoice.id, managerChoice.name, managerChoice.email, managerChoice.officeNumber)
            Team.push(manager)
            switch(managerChoice.whatNext) {
            case 'Employee':
                employeeAdd();
            case 'Engineer':
                engineerAdd();
                break;
            case 'Intern':
                internAdd();
                break;
           default: 
            createTeam();
        }
    });
};
/*
const employeeAdd = async () => {
    const employeeChoice = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter employee's name here"
        },

        {
            type: 'input',
            name: 'id',
            message: "Enter employee's id here"
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email here"
        },

        {
            type: 'input',
            name: 'github',
            message: "Enter employee's github username here"
        },
        {
            type: 'list',
            name: 'whatNext',
            message: 'Who would you like to add next?',
            choices: ['Employee', 'Engineer', 'Intern', 'My team is complete']
        }
    ]);
    const employee = new Employee(employeeChoice.id, employeeChoice.name, employeeChoice.email, employeeChoice.github);
    Team.push(employee);
    switch (employeeChoice.whatNext) {
        case 'Engineer':
            engineerAdd();
            break;
        case 'Intern':
            internAdd();
            break;
    }
}
*/
const engineerAdd = async () => {
    const engineerChoice = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's name here"
        },

        {
            type: 'input',
            name: 'id',
            message: "Enter engineer's id here"
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter engineer's email here"
        },

        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's github username here"
        },
        {
            type: 'list',
            name: 'whatNext',
            message: 'Who would you like to add next?',
            choices: ['Employee', 'Engineer', 'Intern', 'My team is complete']
        }
    ]);
    const engineer = new Engineer(engineerChoice.id, engineerChoice.name, engineerChoice.email, engineerChoice.github);
    Team.push(engineer);
    switch (engineerChoice.whatNext) {
        case 'Employee':
            employeeAdd();
            break;
        case 'Intern':
            internAdd();
            break;
    }
}

const internAdd = async () => {
    const internChoice = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter intern's name here"
        },

        {
            type: 'input',
            name: 'id',
            message: "Enter intern's id here"
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter intern's email here"
        },

        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school here"
        },
        {
            type: 'list',
            name: 'whatNext',
            message: 'Who would you like to add next?',
            choices: ['Employee', 'Engineer', 'Intern', 'My team is complete']
        }
    ]);
    const intern = new Intern(internChoice.id, internChoice.name, internChoice.email, internChoice.school);
    Team.push(intern);
    switch (internChoice.whatNext) {
        case 'Engineer':
            engineerAdd();
            break;
        case 'Intern':
            internAdd();
            break;
    }
}


/*generate HTML files using answers
function writeFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
    })
}
*/
//create HTml
function createTeam() {
    // creating the directory using fs
    if (!fs.existsSync(generateedDir)) {
      fs.mkdirSync(generateedDir)
    }
    fs.writeFileSync(outputPath, generateHTML(Team), "utf-8");
  }
managerAdd()
  ;
   