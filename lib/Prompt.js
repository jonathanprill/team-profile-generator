const inquirer = require('inquirer');
const Manager = require('./Manager');

function Prompt() {
    this.manager;
};

Prompt.prototype.initializePrompt = function() {
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    .then(({ name }) => {
        this.manager = new Manager(name);
        console.log(this.manager.getName());
    });
    
};

    
module.exports = Prompt;

