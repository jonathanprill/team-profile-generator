//const Employee = require('./Employee');

class Engineer {
    
    constructor(name, id, email, github) {
        
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        
    }
    
    getGithub() {
        return `${this.github} is the Github!`;
    }

    getRole() {
        return 'Engineer'
    }
   
        

  
}




module.exports = Engineer;