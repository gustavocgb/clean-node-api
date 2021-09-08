import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,
  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null as any
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.isConnected()) await this.connect(this.uri)
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    // devido ao mongo por padrao usar '_id' e a nossa interface da regra de nogocio nao tem '_id'
    // ela tem 'id' e necessario criar um novo objeto para nao infrigir a regra de negocio
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
