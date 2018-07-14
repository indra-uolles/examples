var utils = require('./example2.js');

//по описанию функция возвращает остаток от деления, 
//а не true или false. может работать так:
test('even works', () => {
    expect(!utils.isEven(4)).toBe(true);
    expect(!utils.isEven(3)).toBe(false);
    expect(!utils.isEven(-4)).toBe(true);
    expect(!utils.isEven(0)).toBe(true);
    expect(() => !utils.isEven('')).toThrowError(Error);
});

//эти тесты падают, потому что функция возвращает остаток от деления
test('even works', () => {
    expect(utils.isEven(4)).toBe(true);
    expect(utils.isEven(3)).toBe(false);
});

