const Engineer = require('../lib/Engineer')

test('creates engineer object', () => {
    const engineer = new Engineer('ryan', '10', 'ryan@yahoo.com', 'ryanms1')

    expect(engineer.name).toBe('ryan')
    expect(engineer.id).toBe('10')
    expect(engineer.email).toBe('ryan@yahoo.com')
    expect(engineer.github).toBe('ryanms1')

    expect(engineer.getRole()).toBe('Engineer')
    expect(engineer.getGithub()).toBe('ryanms1')
})