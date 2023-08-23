// TODO: Include packages needed for this application
const fs = require(fs);
const inquirer = require("inquirer");
const generateMarkdown = require("./assets/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    'Project Title:',
    'Description:',
    'Installation Instructions:',
    'Usage:',
    'License:',
    'Contributor Guidelines:',
    'Tests:',
    'GitHub Username:',
    'Email Address:',
];

const license = [
    'No License',
    'Apache 2.0',
    'GNU GPLv2',
    'GNU GPLv3',
    'MIT',
    'ISC',
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFile(fileName, data);
    } catch (error) {
        console.log(error);
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            message: questions[0],
            name: 'title',
        },
        {
            message: questions[1],
            name: 'description',
        },
        {
            message: questions[2],
            name: 'installation',
        },
        {
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: license,
        },
        {
            message: questions[5],
            name: 'contributing',
        },
        {
            message: questions[6],
            name: 'tests',
        },
        {
            message: questions[7],
            name: 'github',
        },
        {
            message: questions[8],
            name: 'email',
        }
    ]).then((response) => {
        writeToFile('./newREADME/README.md', generateMarkdown(response));
    });
}

// Function call to initialize app
init();
