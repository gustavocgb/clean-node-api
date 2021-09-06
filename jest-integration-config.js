// config dos arquivos que vao rodar os tests do jest
const config = require('./jest.config')
config.testMatch = ['**/*.test.ts']
module.exports = config
