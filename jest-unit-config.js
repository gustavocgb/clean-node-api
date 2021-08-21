// config dos arquivos que vao rodar os tests do jest
const config = require('./jest.config')
config.testMatch = ['**/*.spec.ts']
module.exports = config
