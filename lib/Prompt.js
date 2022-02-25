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

        this.askID();
        
    })
    
    
};

Prompt.prototype.askID = function() {
    inquirer
    .prompt({
        type: 'text',
        name: 'id',
        message: 'What is your ID number?'
    })
    .then(({ id }) => {
        this.manager = new Manager(id);
        console.log(this.manager.getId());

        this.askEmail();
    })
};

Prompt.prototype.askEmail = function() {
    inquirer
    .prompt({
        type: 'text',
        name: 'email',
        message: 'What is your Email?'
    })
    .then(({ email }) => {
        this.manager = new Manager(email);
        console.log(this.manager.getDescription());

    })

};
    
module.exports = Prompt;

