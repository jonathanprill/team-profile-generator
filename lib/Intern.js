const Employee = require('./Employee');

class Intern {
    
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        
    }
    
    getSchool() {
        return `${this.school} is the School!`;
    }

    getRole() {
        return 'Intern'
    }
   
        

  
}



module.exports = Intern;