// config dos arquivos que vao rodar os tests do jest
// por padrão o jest roda os teste nos .spec
// dessa maneira esta separado test unitario .spec e test de integracao .test

const config = require('./jest.config')
config.testMatch = ['**/*.spec.ts']
module.exports = config
