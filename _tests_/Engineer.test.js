const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Don', '252', 'donniemassenburg75@gmail.com', 'Atlas075' )

test('constructor values', () => {
    expect(engineer.name).toBe('Don')
    expect(engineer.id).toBe('252')
    expect(engineer.email).toBe('donniemassenburg75@gmail.com')
    expect(engineer.github).toBe('Atlas075')
})

test('', () => {
    expect(engineer.getName()).toBe('Don')
})

test('', () => {
    expect(engineer.getId()).toBe('252')
})

test('', () => {
    expect(engineer.getEmail()).toBe('donniemassenburg75@gmail.com')
})

test('', () => {
    expect(engineer.getGitHub()).toBe('Atlas075')
})

test('', () => {
    expect(engineer.getRole()).toBe('Engineer')
})