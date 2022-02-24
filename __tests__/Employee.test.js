const Employee = require('../lib/Employee');



test('Creates an employee name', () => {
    var employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    
});