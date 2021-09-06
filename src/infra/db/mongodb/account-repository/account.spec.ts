import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

// teste de integracao

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    // @ts-ignore
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return an account on success', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@gmail.com',
      password: 'any_password'
    })
    // toBeTruthy -> nao e nulo
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@gmail.com')
    expect(account.password).toBe('any_password')
  })

  test('', async () => {

  })
})
