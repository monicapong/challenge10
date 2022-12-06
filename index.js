// Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Employee classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Generate HTML code
const generateHTML = require('./src/generateHTML');
const { of } = require('rxjs');

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