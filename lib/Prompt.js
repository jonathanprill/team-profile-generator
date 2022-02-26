const inquirer = require('inquirer');
const Manager = require('./Manager');

function Prompt() {
    this.manager;
};

Prompt.prototype.initializePrompt = function() {
    inquirer
    .prompt(
        [{
        type: 'text',
        name: 'name',
        message: 'What is the team managers name? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
            console.log('Please enter the team managers name!');
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the team managers ID? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
            console.log('Please enter the team managers ID!');
                return false;
            }
        }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                console.log('Please enter the team managers email!');
                    return false;
                }
            }
            }
        ]
        
    )
    .then(({ name, id, email }) => {
                this.manager = new Manager(name, id, email);
                console.log(this.manager.getName());
                console.log(this.manager.getId());
                console.log(this.manager.getEmail());
        
            })
   
        
};

// Prompt.prototype.askID = function() {
//     inquirer
//     .prompt({
//         type: 'text',
//         name: 'id',
//         message: 'What is your ID number?'
//     })
//     .then(({ id }) => {
//         this.manager = new Manager(id);
//         console.log(this.manager.getId());

//         this.askEmail();
//     })
// };

// Prompt.prototype.askEmail = function() {
//     inquirer
//     .prompt({
//         type: 'text',
//         name: 'email',
//         message: 'What is your Email?'
//     })
//     .then(({ email }) => {
//         this.manager = new Manager(email);
//         console.log(this.manager.getEmail());

//     })

// };
    
module.exports = Prompt;

