import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import {compilerOptions} from './tests/tsconfig.spec.json';

/**
 * It's better to put jest.config.ts into root folder, because it makes Jest work without pointing out this configuration file
 */

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/tests/'}), // helper which makes paths work for jest as well
  transform: {
    '^.+\\.tsx?$': [
      require.resolve('ts-jest'),
      {
        tsconfig: '<rootDir>/tests/tsconfig.spec.json' // this is how we point out tsconfig file
      },
    ],
  }
};

export default jestConfig;