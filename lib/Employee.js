class Employee {
    constructor(name = '') {
        this.name = name;
    }
    getName() {
        return `${this.name}'s EMployee Name!`;
    };
}
module.exports = Employee;