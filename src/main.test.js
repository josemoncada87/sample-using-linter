const sayHi = require('./main');

describe('some test', () => {
  test('Say hi to James', () => {
    expect(sayHi('James')).toBe('Hi my dear friend James');
  });
});
