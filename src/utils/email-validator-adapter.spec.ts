import { EmailValidatorAdpter } from './email-validator-adapter'
import validator from 'validator'

// utils que enxerga presentation

// mock com valor default do validator
// coloca parentese em volta do objeto, signfica retorno
jest.mock('validator', () => ({
  isEmail (): Boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdpter => {
  return new EmailValidatorAdpter()
}

describe('EmailValidator Adpter', () => {
  test('Should return false if validator return false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@gmail.com')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator return true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@gmail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@gmail.com')
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@gmail.com')
  })
})
