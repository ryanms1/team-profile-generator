const Manager = require('../lib/Manager')

test('creates manager object', () => {
    const manager = new Manager('ryan', '1', 'ryan@yahoo.com', '10')

    expect(manager.name).toBe('ryan')
    expect(manager.id).toBe('1')
    expect(manager.email).toBe('ryan@yahoo.com')
    expect(manager.officeNumber).toBe('10')

    expect(manager.getRole()).toBe('Manager')
})