const Manager = require('../lib/Manager')
const manager = new Manager('Don', '252', 'donniemassenburg75@gmail.com', '305' )

test('constructor values', () => {
    expect(manager.name).toBe('Don')
    expect(manager.id).toBe('252')
    expect(manager.email).toBe('donniemassenburg75@gmail.com')
    expect(manager.officeNumber).toBe('305')
})

test('', () => {
    expect(manager.getName()).toBe('Don')
})

test('', () => {
    expect(manager.getId()).toBe('252')
})

test('', () => {
    expect(manager.getEmail()).toBe('donniemassenburg75@gmail.com')
})

test('', () => {
    expect(manager.getOfficeNumber()).toBe('305')
})

test('', () => {
    expect(manager.getRole()).toBe('Manager')
})