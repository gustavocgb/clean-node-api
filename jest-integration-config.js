// config dos arquivos que vao rodar os tests do jest
const config = require('./jest.config')
config.default.testMatch = ['**/*.test.ts']
module.exports = config
