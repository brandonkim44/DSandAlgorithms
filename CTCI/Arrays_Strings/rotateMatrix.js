//  Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 

const rotateMatrix = (matrix) => {

    //O(N^2) time complexity and O(N^2) space complexity 

    let rotatedArray = new Array(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
        rotatedArray[i] = new Array(matrix.length);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            rotatedArray[i][j] = 0;
        }
    }

    let pointer = matrix.length-1;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            rotatedArray[col][pointer] = matrix[row][col];
        }
        pointer--;
    }

    return rotatedArray;
};

var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1],
];

// first row
// (0, 0) => (0, 3)
// (0, 1) => (1, 3)
// (0, 2) => (2, 3)
// (0, 3) => (3, 3)

// second row
// (1, 0) => (0, 2)
// (1, 1) => (1, 2)
// (1, 2) => (2, 2)
// (1, 3) => (3, 2)

// first column
// (0, 0) => (0, 3)
// (1, 0) => (0, 2)
// (2, 0) => (0, 1)
// (3, 0) => (0, 0)


// (x, y) => ()

console.log(rotateMatrix(testMatrix));



