const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('ryan', '1', 'ryan@yahoo.com')

    expect(employee.name).toBe('ryan')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('ryan@yahoo.com')
})

test('retrieves employee name, id, email, role', () => {
    const employee = new Employee('ryan', '1', 'ryan@yahoo.com')

    expect(employee.getName()).toBe(employee.name)
    expect(employee.getId()).toBe(employee.id)
    expect(employee.getEmail()).toBe(employee.email)
    expect(employee.getRole()).toBe('Employee')
})