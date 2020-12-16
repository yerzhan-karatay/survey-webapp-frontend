module.exports = {
  'roots': [
    '<rootDir>/src',
  ],
  'transform': {
    '^.+\\.tsx?$': 'ts-jest',
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'setupFilesAfterEnv': ['./jest.setup.ts'],
  'moduleNameMapper': {
    '\\.(css|less|sass|scss)$': '<rootDir>/mock/styleMock.js',
    '\\.(svg)$': '<rootDir>/mock/svgMock.js',
  },
};
