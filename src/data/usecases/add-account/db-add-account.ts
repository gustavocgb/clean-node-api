import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import { AccountModel } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  // esse metodo nao pode ser implementado com try, catch. Pois ..
  // .. quem captura o erro tem que ser a classe que chamou essa classe
  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve({
      id: '',
      name: '',
      email: '',
      password: ''
    }))
  }
}
