import { EmailValidatorAdpter } from './email-validator'

// utils que enxerga presentation

describe('EmailValidator Adpter', () => {
  test('Should return false if validator return false', () => {
    const sut = new EmailValidatorAdpter()
    const isValid = sut.isValid('invalid_email@gmail.com')
    expect(isValid).toBe(false)
  })
})
