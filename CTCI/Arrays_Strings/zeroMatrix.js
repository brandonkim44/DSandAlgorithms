// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0. 

const zeroMatrix = (matrix) => {
    // iterate through each subarray and check for 0, if 0 exists, find the coordinates (r, c)
    // pass r into method to convert row to 0s, return matrix
    // pass c into method to convert col to 0s, return matrix
    // return matrix

    //O(N^2) time, O(N^2)
    let zeroCds = {};
    let id = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            id++;
            if (matrix[row][col] === 0) {
                zeroCds[id] = [row, col];
            }
        }
    }
    
    let zeroedMat = matrix;
    let coordPairs = Object.values(zeroCds);
    console.log(coordPairs);
    for (let i = 0; i < coordPairs.length; i++) {
        let row = coordPairs[i][0];
        let col = coordPairs[i][1];
        zeroedMat = zeroRow(row, matrix);
        zeroedMat = zeroCol(col, zeroedMat);
    }
    return zeroedMat;
};

const zeroRow = (row, matrix) => {
    let subArray = matrix[row];
    for (let i = 0; i < subArray.length; i++) {
        subArray[i] = 0;
    }
    matrix[row] = subArray;
    return matrix;
}

const zeroCol = (col, matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
    return matrix;
}


var testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
];
var testMatrix4 = [
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
];
var testMatrix2 = [
    [1, 1, 2, 1],
    [1, 3, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 5, 7],
    [1, 2, 1, 1],
    [9, 1, 9, 1],
];
var testMatrix3 = [
    [1, 1, 2, 1],
    [1, 3, 1, 1],
    [1, 9, 1, 1],
    [1, 1, 5, 7],
    [1, 2, 1, 1],
    [9, 1, 9, 1],
];

// console.log(zeroMatrix(testMatrix));
console.log(zeroMatrix(testMatrix4));