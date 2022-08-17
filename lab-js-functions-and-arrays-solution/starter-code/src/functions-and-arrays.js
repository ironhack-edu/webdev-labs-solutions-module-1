// --------- Iteration #1: Find the maximum -------
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

// ES6 & ternary conditional
// const maxOfTwoNumbers = (a, b) => (a > b ? a : b);

// --------- Iteration #2: Find longest word ---------

const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(wordsArr) {
  if (!wordsArr.length) return null;

  //to start we take the first word as the longest one
  let longestWord = wordsArr[0];

  // use for loop to go through the wordsArr
  for (let i = 1; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    // if the current word is longer than the longestWord...
    if (word.length > longestWord.length) {
      // ... then that word becomes the new longestWord
      longestWord = word;
    }
  }

  return longestWord;
}

// findLongestWord(words)


// --------- Iteration #3: Calculate the sum ---------
// Iteration #3.1: Sum numbers 

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// we will aim to create generic function for calculating sum,
// to be able to use it with any array of numbers or strings

function sumNumbers (numbersArr) {
  if (!numbersArr) return null;
  let sum = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    const num = numbersArr[i];
    // if the current word is longer than the longestWord...

    sum += num;
  }

  return sum;
}

// ---------------------------------------------------
// Bonus - Iteration #3.2: A generic sum()

function sum(someArr) {
  if (!someArr) return null;
  let sum = 0;

  for (let i = 0; i < someArr.length; i++) {
    const el = someArr[i];
    // if the current word is longer than the longestWord...

    if (typeof el === 'string') {
      sum += el.length;
    }
    else if (typeof el === 'object') {
      return undefined;
    }
    else if (Array.isArray(el)) {
      return undefined;
    }
    else {
      sum += el;
    }
  }

  return sum;
}

// sumArray(numbers);


// --------- Iteration #4: Calculate the average ---------
// Iteration #4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return null;
  }
  else {
    return sumNumbers(numbersArray) / numbersArray.length;
  };
}


// ---------------------------------------------------
// Iteration #4.2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(words) {
  if (!words.length) return null;
  let wordLengths = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordLengths.push(word.length);
  }  

  return averageNumbers(wordLengths);
};

// the other way doing the same as above:
// const averageWordLength = (words) => {
//   if (!words.length) return null;
//   return words.join('').length / words.length;
// };

// averageWordLength(wordsArr)



// ---------------------------------------------------
// Bonus - Iteration #4.3: A generic `avg()` function

// we will do the same as before, create a generic function that can be reused no matter what kind of array we work with

function avg (arr) {
  if (arr.length === 0) return null;
  else return sum(arr) / arr.length;
}

// instead if (!arr) return null, we can do the following:

// function avg(arr) {
//   return sumArray(arr) / arr.length || null;
// };

// the same as above
// const avg = arr => !arr ? null : sumArray(arr) / arr.length;

// avg(numbersAvg)



// -------- Iteration #5: Unique arrays --------
const duplicatedWords = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
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

// --------- Iteration #6: Find elements ---------
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

// super manual solution:
function doesWordExist(wordsArr, word) {
  if (wordsArr.length === 0) {
    return null;
  }

  let doesExist = false;

  for (let i = 0; i < wordsArr.length; i++){
    if (wordsArr[i] === word){
      doesExist = true;
    }
  }
  
  return doesExist;

}


// better then above:
// function doesWordExist(wordsArr, word){
//   if (wordsArr.length === 0) {
//     return null;
//   }

//   for (let i = 0; i < wordsArr.length; i++){
//     if (wordsArr[i] === word){
//       return true;
//     }
//   }

//   return false;
// }

// the shortest and the cleanest:
// function doesWordExist(wordsArr, word) {
//   if (wordsArr.length === 0) {
//     return null;
//   }
//   else {
//     return wordsArr.includes(word);
//   }
// }

// doesWordExist(wordsFind, "machine"); // true
// doesWordExist(wordsFind, "crab"); // false

// --------- Iteration #7: Count repetition ---------
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsArr, word) {
  let count = 0;

  for (let i = 0; i < wordsArr.length; i++){
    if (wordsArr[i] === word) {
      count++;
    }
  }

  return count;
}

// howManyTimes(wordsCount, "matter")


// -------- Iteration #8: Bonus --------
// Bonus - Iteration #8.1: Product of adjacent numbers
const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];


const greatestProduct = matrix => {
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

// ---------------------------------------------------
// Bonus - Iteration #8.2: Product of diagonals
