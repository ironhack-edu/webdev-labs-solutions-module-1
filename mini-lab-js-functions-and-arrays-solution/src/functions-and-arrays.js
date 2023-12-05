// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

// ES6 & ternary conditional
// const maxOfTwoNumbers = (a, b) => (a > b ? a : b);



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArr) {
  if (wordsArr.length === 0) {
    return 0;
  }

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




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (numbersArr) {
  if (!numbersArr) return null;
  let sum = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    const num = numbersArr[i];

    sum += num;
  }

  return sum;
}

// const result = sumNumbers(numbers);




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return 0;
  }
  else {
    return sumNumbers(numbersArray) / numbersArray.length;
  };
}

// const avg = averageNumbers(numbers2);





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

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




