const Employee = require('./Employee');

class Intern extends Employee {
    
    constructor(Employee, school) {
        super(school);
        //this.Employee = Employee;
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