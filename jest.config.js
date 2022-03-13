const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  rootDir: './',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-axe/extend-expect'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/components/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
    '^Context/(.*)$': '<rootDir>/Context/$1',
    '^config/(.*)$': '<rootDir>/config/$1',
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
}

const config = createJestConfig(customJestConfig)

module.exports = config
