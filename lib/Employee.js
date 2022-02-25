class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `${this.name} is the Employee name!`;
    };
    getId() {
        return `${this.id} is the Employee ID number!`;
    };
    getEmail() {
        return `${this.email} is the Email Address!`;
    };
}
module.exports = Employee;