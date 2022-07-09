const Intern = require('../lib/Intern')

test('creates intern object', () => {
    const intern = new Intern('ryan', '3', 'ryan@yahoo.com', 'UCB')

    expect(intern.name).toBe('ryan')
    expect(intern.id).toBe('3')
    expect(intern.email).toBe('ryan@yahoo.com')
    expect(intern.school).toBe('UCB')

    expect(intern.getSchool()).toBe('UCB')
    expect(intern.getRole()).toBe('Intern')
})