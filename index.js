// Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Employee classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Generate HTML code
const generateHTML = require('./src/generateHTML');

// Manager prompts
const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: `What is the team manager's name?`,
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log(`Please enter manager's name`)
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the team manager's ID?`,
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log(`Please enter manager's employee ID`)
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the team manager's email address?`,
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log(`Please enter manager's email`)
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `What is the team manager's office number?`,
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log(`Please enter manager's office number`)
                return false;
            }
        }
    }
];

// Employee prompts
const employeePrompts = [
    {
        type: 'list',
        name: 'menu',
        choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
    },
    {
        type: 'input',
        name: 'name',
        message: `Please enter the employee's name`,
        when: (input) => input.menu != 'Finish building my team',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log(`Please enter employee's name`)
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter the employee's ID`,
        when: (input) => input.menu != 'Finish building my team',
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('Please enter an employee ID')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter the employee's email address`,
        when: (input) => input.menu != 'Finish building my team',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log(`Please enter employee's email address`)
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter the engineer's GitHub username`,
        when: (input) => input.menu === 'Add an engineer',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log(`Please enter engineer's GitHub username`)
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `Please enter the intern's school`,
        when: (input) => input.menu === 'Add an intern',
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log(`Please enter intern's school`)
                return false;
            }
        }
    }
];

// Create an index.html file in the dist folder
const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, (err) => {
        err ? console.error(err) : console.log('HTML of team profile successfully created!');
    });
};

// Array for team member profiles
const team = []

// Prompt user with managerPrompts and push manager profile object to team array
async function init() {
    // Prompt user with managerPrompts
    await inquirer.prompt(managerPrompts)
    .then(data => {
        // Push manager object to team array
        team.push(new Manager(data.name, data.id, data.email, data.officeNumber));
    })
    // Calls addEmployee to prompt user with employeePrompts and push employee profile objects to team array
    addEmployee();
}

// Calls init to start inquirer prompts and push manager profile object to team array
init();

// Prompt user with employeePrompts and push employee profile objects to team array
async function addEmployee() {
    // Prompt user with employeePrompts
    await inquirer.prompt(employeePrompts)
    .then(data => {
        // If 'Add an engineer' is chosen from the menu,
        if (data.menu === 'Add an engineer') {
            // Push engineer object to team array
            team.push(new Engineer(data.name, data.id, data.email, data.github));
            // Calls addEmployee to prompt user with employeePrompts and push employee profile objects to team array
            addEmployee();
        // If 'Add an intern' is chosen from the menu,
        } else if (data.menu === 'Add an intern') {
            // Push intern object to team array
            team.push(new Intern(data.name, data.id, data.email, data.school));
            // Calls addEmployee to prompt user with employeePrompts and push employee profile objects to team array
            addEmployee();
        // If 'Finish building my team' is chosen from the menu,
        } else {
            // Calls writeToFile to create an index.html file in the dist folder
            // Calls generateHTML to create an HTML of the team profile using the data from the team array
            return writeToFile(generateHTML(team));
        }
    });
};
