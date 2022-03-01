const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Employee = require('./Employee');
const Intern = require('./Intern');


const employeeArr = [];

function Prompt() {

    //this.employee;
};

const addManager = () => {
    //employeeData = {};
    // if (!employeeData.members) {
    //     employeeData.members = [];
    // }

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
        .then(employeeData => {
            const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.office)
            employeeArr.push(manager);
            //console.log(employeeData)

            if (employeeData.confirmAddManager) {
                return addEmployee(employeeData);
            } else {
                return employeeData;
            }
        });
};

///////////////////////////////////ASK TYPE///////////////////////////////////////////
const askType = dataFour => {
    // employeeData = {};
    // if (!employeeData.manager) {
    //     employeeData.manager = [];
    // }
    return inquirer.prompt(
        {
            type: 'list',
            message: 'Which type of employee?',
            name: 'type',
            choices: ['Engineer', 'Intern', 'Quit']
        }
    )
    .then(({ type }) => {
        if (type === 'Engineer'){
            return addEngineer();
        } else if (type === 'Intern') {
            return addIntern();
        } else if (type === 'Quit') {
            // console.log(employeeArr)
            return generatePage(employeeArr);
        }
    });
}
///////////////////////////////////ASK TYPE///////////////////////////////////////////

const addEngineer = () => {
   //employeeData = {};
    // if (!employeeData.members) {
    //     employeeData.members = [];
    // }

    return inquirer
        .prompt(
            [{
                type: 'input',
                name: 'name',
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
                name: 'id',
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
                name: 'email',
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
                name: 'github',
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

        .then(employeeData => {
            const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
            employeeArr.push(engineer);
           
            if (employeeData.confirmAddEngineer) {
                return addEmployee(employeeData);
            } else {
                return employeeData;
            }
        })
        .then(data => {
            return askType(data)
        })

}


const addIntern = () => {
    //employeeData = {};
    // if (!employeeData.members) {
    //     employeeData.members = [];
    // }
    return inquirer
        .prompt(
            [{
                type: 'input',
                name: 'name',
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
                name: 'id',
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
                name: 'email',
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
                name: 'school',
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
            .then(employeeData => {
                const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
                employeeArr.push(intern);
               
                if (employeeData.confirmAddEngineer) {
                    return addEmployee(employeeData);
                } else {
                    return employeeData;
                }
            })
            .then(data => {
                return askType(data)
            })

};
//         })
//         // .then(({ name, id, email, github }) => {
//         //             this.engineer = new Engineer(name, id, email, github);
//         //             console.log(this.engineer.getGithub());

//         // })

// };
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

const { writeFile, copyFile } = require('../utils/generate-site');
const generatePage = require('../src/page-template');

Prompt.prototype.initializePrompt = function () {
    addManager()


        .then(data => {
            //console.log(data)
            
            return askType(data)
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();  
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);  
        })
        .catch(err => {
            console.log(err);
        });

}



module.exports = Prompt;


