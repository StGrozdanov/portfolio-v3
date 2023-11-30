const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: ['./src/tests'],
}

module.exports = createJestConfig(customJestConfig)