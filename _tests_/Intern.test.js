const Intern = require('../lib/Intern')
const intern = new Intern('Don', '252', 'donniemassenburg75@gmail.com', 'NCA&T' )

test('constructor values', () => {
    expect(intern.name).toBe('Don')
    expect(intern.id).toBe('252')
    expect(intern.email).toBe('donniemassenburg75@gmail.com')
    expect(intern.school).toBe('NCA&T')
})

test('', () => {
    expect(intern.getName()).toBe('Don')
})

test('', () => {
    expect(intern.getId()).toBe('252')
})

test('', () => {
    expect(intern.getEmail()).toBe('donniemassenburg75@gmail.com')
})

test('', () => {
    expect(intern.getSchool()).toBe('NCA&T')
})

test('', () => {
    expect(intern.getRole()).toBe('Intern')
})