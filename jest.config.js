module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.ts?(x)', '!**/dist/test/**/*.d.ts', '!**/test/utils/**', '!**/test/specs/**'],
    setupFilesAfterEnv: ['<rootDir>/dist/test/utils/init-tests'],
};
