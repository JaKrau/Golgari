// TODO: Include packages needed for this application
const generateMarkdown = require("./assets/generateMarkdown");

const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'Project Title:',
    'Description:',
    'Installation Instructions:',
    'Usage:',
    'Contributor Guidelines:',
    'Tests:',
    'Credits:',
    'License:',
    'GitHub Username:',
    'Email Address:',
];

const license = [
    'No License',
    'Apache 2.0',
    'GPLv2',
    'GNU GPLv3',
    'MIT',
    'ISC',
];

// TODO: Create a function to write README file
// This function is unnecessary, writeFileSync works.
/*function writeToFile(fileName, data) {
    try {
        fs.writeFile(fileName, data);
    } catch (error) {
        console.log(error);
    }
}*/

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
            message: questions[4],
            name: 'contributing',
        },
        {
            message: questions[5],
            name: 'tests',
        },
        {
            message: questions[6],
            name: 'credits',
        },
        {
            type: 'list',
            name: 'license',
            message: questions[7],
            choices: license,
        },
        {
            message: questions[8],
            name: 'github',
        },
        {
            message: questions[9],
            name: 'email',
        },
    ]).then((response) => {
        fs.writeFileSync('./newREADME/README.md', generateMarkdown(response)); 
    });
}

// Function call to initialize app
init();