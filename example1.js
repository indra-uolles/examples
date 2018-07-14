function rows(matrix) {
    return matrix.length;
}

function cols(matrix) {
    return matrix[0].length;
}

function isNumeric(value) {
    return !isNaN(value - parseFloat(value));
}

function isMatrix(matrix) {
    if (!Array.isArray(matrix)) {
        return false;
    }

    if (!Array.isArray(matrix[0])) {
        return false;
    }

    var matrixCols = matrix[0].length;

    for (var i = 0; i < rows(matrix); i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length === 0 || matrix[i].length !== matrixCols) {
            return false;
        }
    }

    if (rows(matrix) < 2 || cols(matrix) < 2) {
        return false;
    }

    for (var i = 0; i < rows(matrix); i++) {
        for (var j = 0; j < cols(matrix); j++) {
            if (!isNumeric(matrix[i][j])) {
                return false;
            }
        }
    }

    return true;
}

function sumUpDiagonals(matrix) {
    if (!isMatrix(matrix)) {
        throw new Error("value is not a matrix");
    }

    var rowsNum = rows(matrix);
    var colsNum = cols(matrix);

    var main = 0, nextI = 0, nextJ = 0;
    while (nextI < rowsNum && nextJ < colsNum) {
        main += matrix[nextI][nextJ];
        nextI += 1;
        nextJ +=1;
    }

    var counter = 0, nextI = 0, nextJ = colsNum - 1;
    while (nextI < rowsNum && nextJ >= 0) {
        counter += matrix[nextI][nextJ];
        nextI += 1;
        nextJ -=1;
    }

    return { main: main, counter: counter };
}

module.exports = {
    rows: rows,
    cols: cols,
    sumUpDiagonals: sumUpDiagonals
}