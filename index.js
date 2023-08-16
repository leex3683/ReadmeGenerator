// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const md = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success')
    );
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Description',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'Installation',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Usage',
            name: 'Usage',
        },
        {
            type: 'list',
            name: 'License',
            message: 'License',
            choices: ['Apache 2.0', 'Boost', 'MIT']
        },
        {
            type: 'input',
            message: 'Contributing',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'Tests',
        },       
        {
            type: 'input',
            message: 'Enter your email for the questions section',
            name: 'Questions',
        },

        {
            type: 'input',
            message: 'Enter your github username',
            name: 'Github',
        },
    ])
    .then((response) =>
    // md.generateMarkdown(response)
    writeToFile(`README.md`, md(response))
    );

}

// Function call to initialize app
init();
