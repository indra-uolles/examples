var matrices = require('./example1.js');

var matrixExample = [
    [ 1, 2, 3, 4 ],
    [ 4, 5, 6, 5 ],
    [ 7, 8, 9, 7 ],
    [ 7, 8, 9, 7 ]
];

var matrix2 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ]
];

var matrix3 = [
    [ 1, 2 ],
    [ 3, 4 ],
    [ 5, 6 ]
];

var matrix4 = [
    [ 1, 2 ],
    [ 3, 4 ]
];

var badMatrix1 = [];
var badMatrix2 = [[], [1, 2]];
var badMatrix3 = [[1, 'aaa'], [3, 4]];
var badMatrix4 = [[1, 2]];
var badMatrix5 = [[1], [2]];

test('matrices rows works', () => {
  expect(matrices.rows(matrixExample)).toBe(4);
  expect(matrices.rows(matrix2)).toBe(2);
  expect(matrices.rows(matrix3)).toBe(3);
  expect(matrices.rows(matrix4)).toBe(2);
});

test('matrices cols works', () => {
    expect(matrices.cols(matrixExample)).toBe(4);
    expect(matrices.cols(matrix2)).toBe(3);
    expect(matrices.cols(matrix3)).toBe(2);
    expect(matrices.cols(matrix4)).toBe(2);
});

test('sum up diagonals works', () => {
    expect(matrices.sumUpDiagonals(matrixExample)).toEqual({ main: 22, counter: 25 });
    expect(matrices.sumUpDiagonals(matrix2)).toEqual({ main: 6, counter: 8 });
    expect(matrices.sumUpDiagonals(matrix3)).toEqual({ main: 5, counter: 5 });
    expect(matrices.sumUpDiagonals(matrix4)).toEqual({ main: 5, counter: 5 });
});

test('non-matrices throw error', () => {
    expect(() => matrices.sumUpDiagonals('aaa')).toThrowError(Error);
    expect(() => matrices.sumUpDiagonals(badMatrix1)).toThrowError(Error);
    expect(() => matrices.sumUpDiagonals(badMatrix2)).toThrowError(Error);
    expect(() => matrices.sumUpDiagonals(badMatrix3)).toThrowError(Error);
    expect(() => matrices.sumUpDiagonals(badMatrix4)).toThrowError(Error);
    expect(() => matrices.sumUpDiagonals(badMatrix5)).toThrowError(Error);
});