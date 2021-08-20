import { AccountModel } from '../models/account'

export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add (account: AddAccountModel): AccountModel
}

// AccountModel sera um model de uma entidade da base de dados
