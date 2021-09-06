import { AddAccountRepository } from '../../../../data/protocols/Add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = result.ops[0]

    // devido ao mongo por padrao usar '_id' e a nossa interface da regra de nogocio nao tem '_id'
    // ela tem 'id' e necessario criar um novo objeto para nao infrigir a regra de negocio
    const { _id, ...acountWithoutId } = account

    return Object.assign({}, acountWithoutId, { id: _id })
  }
}
