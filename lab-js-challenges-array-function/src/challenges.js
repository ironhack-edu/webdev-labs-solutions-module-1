// Iteration 1 | Count Repetition
const repeatedWords = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

function howManyTimes(wordsArr, wordToSearch) {
  // Create a counter variable to store the number of times the word appears in the array
  let counter = 0;

  // Loop through the array and compare each word in the array with the word to search
  for (let i = 0; i < wordsArr.length; i++) {
    // If the word is found, increase the counter by 1
    if (wordsArr[i] === wordToSearch) {
      counter++;
    }
  }

  return counter;
}




// Iteration 2 | Number Sequence
function createSequence(num) {
  // Create an array to store the numbers in the sequence from 0 to `num`
  let sequence = [];

  // If `num` is 0, return an empty array and exit the function
  if (num === 0) {
    return sequence;
  }

  // If `num` is greater than 0, create the sequence
  for (let i = 0; i <= num; i++) {
    sequence.push(i);
  }

  return sequence;
}




// Iteration 3 | Multiply for Each
const numbers = [1, 2, 5, 10, 13, 50];

function multiplyBy(numbersArr, multiplier) {
  // Create an array to store the multiplied numbers
  let multipliedNumbers = [];

  // Loop through the array using the forEach() method
  numbersArr.forEach(function (number) {
    // Multiply each number by the multiplier and push it to the new array
    const multipliedNumber = number * multiplier;
    multipliedNumbers.push(multipliedNumber);
  });

  return multipliedNumbers;
}




// Iteration 4 | Filter Out
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

function filterOut(originalArr, toRemoveArr) {
  // If the original array is empty, return `null` and exit the function
  if (originalArr.length === 0) {
    return null;
  }

  // Create an array to store the filtered words
  const filteredWords = [];

  // Loop through the original array using the forEach() method
  originalArr.forEach(function (word) {
    // If the word is not included in the toRemove array, push it to the new array
    if (!toRemoveArr.includes(word)) {
      filteredWords.push(word);
    }
  });

  /* OR a simpler way using the for loop: */
  // for (let i = 0; i < originalArr.length; i++) {
  //   if (!toRemoveArr.includes(originalArr[i])) {
  //     filteredWords.push(originalArr[i]);
  //   }
  // }

  return filteredWords;
}




// Iteration 5 | Unique Arrays
const duplicateWords = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

function uniquifyArray (words) {
  if (words.length === 0) {
    return null;
  }


  let uniqueArr = [];
  //   for (let i = 0; i < words.length; i++) {
  //     let word = words[i];
  //   }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!uniqueArr.includes(word)) uniqueArr.push(word);

    /* 
    the other way doing the same as above:
    - indexOf() => returns 1 (true) if the word already exists in the array
    - indexOf() => returns -1 (false) if the word doesn't exist in the array
    */
    // if (uniqueArr.indexOf(word) < 0) {
    //   uniqueArr.push(word);
    // }

  }    

  return uniqueArr;
};

// uniquifyArray(duplicatedWords)

// const uniquifyArray = words => [ ...new Set(words) ];




// Bonus: Iteration 6 | Product of Adjacent Numbers
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let product = 0;

  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;

  // console.log(numberOfRows);
  // console.log(numberOfColumns)

  for (let i = 0; i < numberOfRows; i++) {
    let row = matrix[i];
    for (let e = 0; e < numberOfColumns - 3; e++) {
      // 0 - 1 - 2 - 3
      // 1 - 2 - 3 - 4
      let rowProduct = row[e] * row[e + 1] * row[e + 2] * row[e + 3];
      if (rowProduct > product) {
        product = rowProduct;
      }
    }
  }

  for (let i = 0; i < numberOfColumns; i++) {
    for (let e = 0; e < numberOfRows - 3; e++) {
      let columnProduct =
        matrix[e][i] * matrix[e + 1][i] * matrix[e + 2][i] * matrix[e + 3][i];
      if (columnProduct > product) {
        product = columnProduct;
      }
    }
  }

  return product;
};