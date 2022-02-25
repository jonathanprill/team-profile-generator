const Employee = require('./Employee');

class Manager extends Employee {
    
    constructor(id, email) {
        super(id);
        this.id = id;  
        this.email = email;       

       
    }
    getDescription() {
        console.log( `A ${this.id} holding a ${this.email} has appeared!`)
    };
  
}



module.exports = Manager;