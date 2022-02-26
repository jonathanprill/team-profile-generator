const inquirer = require('inquirer');
const Manager = require('./Manager');

function Prompt() {
  
    this.manager;
};

const promptUser = () => {
    return inquirer
    .prompt(
        [{
        type: 'text',
        name: 'name',
        message: 'What is the team managers name? (Required)',
        validate: nameInput => {
            if (nameInput) {
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
        validate: idInput => {
            if (idInput) {
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
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                console.log('Please enter the team managers email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the team managers office number? (Required)',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                console.log('Please enter the team managers office number!');
                    return false;
                }
            }
        }]   
        
    )
};


const addEmployee = () => {

        return inquirer.prompt(
            {
              type: 'list',
              message: 'Which type of emploee?',
              name: 'type',
              choices: ['Engineer', 'Intern']
            }
        )
    
    .then(({ type }) => {
        if (type === 'Engineer') {
            
            inquirer
            .prompt(
                [{
                    type: 'input',
                    name: 'engineerName',
                    message: "What is your Engineer's name? (Required)",
                    validate: eNameInput => {
                        if (eNameInput) {
                            return true;
                        } else {
                        console.log("Please enter your Engineer's name!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is your Engineer's ID? (Required)",
                    validate: eIdInput => {
                        if (eIdInput) {
                            return true;
                        } else {
                        console.log("Please enter your Engineer's ID!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is your Engineer's email? (Required)",
                    validate: eEmailInput => {
                        if (eEmailInput) {
                            return true;
                        } else {
                        console.log("Please enter your Engineer's email!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is your Engineer's Github username? (Required)",
                    validate: eGitInput => {
                        if (eGitInput) {
                            return true;
                        } else {
                        console.log("Please enter your Engineer's Github username!");
                            return false;
                        }
                    }
                }
                ])

        } else if (type === 'Intern') {
            
            inquirer
            .prompt(
                [{
                    type: 'input',
                    name: 'internName',
                    message: "What is your Intern's name? (Required)",
                    validate: iNameInput => {
                        if (iNameInput) {
                            return true;
                        } else {
                        console.log("Please enter your Intern's name!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "What is your Intern's ID? (Required)",
                    validate: iIdInput => {
                        if (iIdInput) {
                            return true;
                        } else {
                        console.log("Please enter your Intern's ID!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is your Intern's email? (Required)",
                    validate: iEmailInput => {
                        if (iEmailInput) {
                            return true;
                        } else {
                        console.log("Please enter your Intern's email!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: "What is your Intern's school? (Required)",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                        console.log("Please enter your Intern's school!");
                            return false;
                        }
                    }
                }
                
                
                ])

        }
    })
    
};
    // .then(({ name, id, email }) => {
    //             this.manager = new Manager(name, id, email);
    //             console.log(this.manager.getName());
    //             console.log(this.manager.getId());
    //             console.log(this.manager.getEmail());
    // })
    
   
        


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

Prompt.prototype.initializePrompt = function() {
    promptUser()
    .then(addEmployee)
    
    
}


    
module.exports = Prompt;


