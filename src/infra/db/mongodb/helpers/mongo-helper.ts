import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    // devido ao mongo por padrao usar '_id' e a nossa interface da regra de nogocio nao tem '_id'
    // ela tem 'id' e necessario criar um novo objeto para nao infrigir a regra de negocio
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
