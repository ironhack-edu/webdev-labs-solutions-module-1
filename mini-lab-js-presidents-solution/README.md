![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Presidents

![giphy](https://media.giphy.com/media/kdjFVMLndECwJIFg0t/giphy.gif)

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

 This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Run predefined tests in Jasmine to verify that the program meets the technical requirements.
  - Declare functions using the function expression and arrow function syntax.
  - Pass functions as arguments to other functions (callbacks).
  - Pass arrays and objects to functions as arguments.
  - Manipulate arrays using the `map()`  method.
  - Filter array elements using the `filter()`  method.
  - Reduce array values using the `reduce()`  method.
  - Sort arrays using the `sort()`  method.

  <br>
  <hr> 

</details>

## Introduction

Now that we've covered JavaScript array methods let's put them to use!
In this lab, we'll explore a dataset of US presidents with information about their terms in office. We'll use the array methods `map()`, `filter`, `reduce()`, and `sort()` to iterate over the array and format, filter, and sort the data.


<br>

## Requirements

- Fork this repo.
- Clone this repo.

<br>

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request and submit your assignment

<br>



## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on your lab progress. If you want to check the tests, they are in the `tests/presidents.spec.js` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## Instructions

You will work in the `src/presidents.js` file. The file already includes the array of presidents and the function definitions. You will need to implement the functions following the requirements in each iteration and make the tests pass.

<br>

The `presidents` array contains an object for each president with the following properties:
```js
  {
    id: 44,
    name: "Barack Obama",
    birthYear: 1961,
    deathYear: null,
    tookOffice: 2009,
    leftOffice: 2017,
    party: "Democratic",
  }
```

<br>

It is possible for certain properties, such as `party` and `leftOffice`, to have a value of `null`. For instance, if a president was not affiliated with any political party, the `party` property would be `null`. Similarly, if a president is still in office, the `leftOffice` property would be `null`.

<br>

### Array Methods

In case you need a refresher on any of the array methods, you can check the [FAQs](#faqs) section at the end of the README, where you will find the explanations and examples of using the array methods `map()`, `filter()`, `reduce()`, and `sort()`.

<br>


### Iteration 1: Names of All Presidents - `map()`

We will start our practice of JS array methods by working with the `map()` method.

The `map()` method creates a new array populated with the results
returned from the provided callback function for every element in the array. The callback function should return a value to be included in the new array.

<br>

Implement the function `getNames()` that takes the **presidents array** as an argument. The function should **return a new array of strings containing only the names** of presidents. 

You must use the `map()` method in your implementation to create the new array.

<br>

**Example:**

```js
console.log( getNames(presidents) );
```

**Expected Output:**
```js
[
  "George Washington",
  "John Adams",
  "Thomas Jefferson",
  // ...
  // ...
];
```

Make sure to check the test output to verify that the function is working correctly.

<br>

### Iteration 2: Names and Party - `map()`

We are continuing our practice with the `map()` method. This time, we want to create an array of objects with only the name and party of each president.

Implement the function `getNamesAndParty()` that takes the **presidents array** as an argument. The function should **return a new array of objects**, where each object contains only the **name** and **party** of each president.

The function must use the `map()` method to create the new array.

<br>

**Example:**

```js
console.log( getNamesAndParty(presidents) );
```

**Expected Output:**
```js
[
  { name: "George Washington", party: "No Party" },
  { name: "John Quincy Adams", party: "Federalist" },
  { name: "Thomas Jefferson", party: "Democratic-Republican" },
  // ...
  // ...
];
```

<br>

### Iteration 3:  Democratic Presidents - `filter()`

Next up, we will practice using the `filter()` method.
The `filter()` method creates a new array containing the elements for which the callback function returns `true`. In other words, the `filter()` method creates a new array containing only the elements that pass the test implemented by the callback function.

<br>

Implement the function `getDemocraticPresidents()` that takes the **presidents array** as an argument. The function should use the `filter()` method to create a new filtered array containing only the **presidents who belonged to the Democratic party**. The function should then return the new filtered array.

The presidents who belonged to the Democratic party have the `party` property set to `"Democratic"`.

<br>

**Example:**

```js
console.log( getDemocraticPresidents(presidents) );
```

**Expected Output:**
```js
[
  { id: 7, name: "Andrew Jackson",  /*  ...  */ party: "Democratic" },
  { id: 8, name: "Martin Van Buren", /*  ...  */ party: "Democratic" },
  { id: 11, name: "James K. Polk", /*  ...  */  party: "Democratic" },
  // ...
  // ...
];
```

<br>

### Iteration 4:  Affiliated Presidents - `filter()`

Moving on to the next iteration, we will continue practicing with the `filter()` method.

Implement the function `getAffiliatedPresidents()` that takes the **presidents array** as an argument. The function should use the `filter()` method to create a new filtered array containing only the **presidents who were affiliated with a political party** (those who **belong to some political party**). The function should then return the new filtered array.

In other words the function should use the `filter()` method to filter out the presidents who were not affiliated with any political party.

Hint: The presidents who were are not affiliated with any party have the `party` property set to `null`.


<br>

**Example:**

```js
console.log( getAffiliatedPresidents(presidents) );
```

**Expected Output:**
```js
[
  { id: 2, name: "John Quincy Adams", /*  ...  */ party: "Federalist" },
  { id: 3, name: "Thomas Jefferson", /*  ...  */ party: "Democratic-Republican" },
  { id: 4, name: "James Madison", /*  ...  */ party: "Democratic-Republican" },
  // ...
  // ...
];
```

<br>

### Iteration 5: Count Years in Office - `reduce()`

Next on our practice menu is the `reduce()` method.

The `reduce()` method executes a reducer function (callback) for each value of an array. During each iteration, the reducer function receives the accumulated value and returns a new value to be used as the accumulated value for the next iteration.
The `reduce()` method returns a single value, which is the final accumulated result.

<br>

Implement the function `countYearsInOffice()` that takes the **presidents array** as an argument.
The function should use the `reduce()` method to count the total years that all the presidents served in office (leftOffice - tookOffice). The function should then return a number representing the total years.

**Important:** You should skip the president who is still in office (the president with the `leftOffice` property set to `null`) and not include them in the total years.

<br>

**Example:**

```js
console.log( countYearsInOffice(presidents) );
```

**Expected Output:**
```js
232
```

<br>

### Iteration 6: Count Republican Presidents - `reduce()`

Implement the function `countRepublicanPresidents()` that takes the **presidents array** as an argument. The function should use the `reduce()` method to count the total number of presidents who belonged to the Republican party. The function should then return a number representing the number of Republican presidents.

The presidents who belonged to the Republican party have the `party` property set to `"Republican"`.

<br>

**Example:**

```js
console.log( countRepublicanPresidents(presidents) );
```

**Expected Output:**
```js
19
```

<br>

### Iteration 7:  Sort Presidents by Birth Year - `sort()`

For the final few mandatory iterations, we will practice using the `sort()` method.

The `sort()` method is used to sort the elements of an array in place. This means the original array is mutated, and the sorted elements are rearranged within the same array.
To sort an array, we need to pass a *compare function* to the `sort()` method with the conditional logic that returns `-1`, `1`, or `0` and specifies how to sort the elements.


<br>

Implement the function `sortPresidentsByBirthYear()` that takes the **presidents array** as an argument. The function should use the `sort()` method to **sort the presidents array by birth year, from oldest to youngest**. The function should then return the sorted array of presidents.

<br>

**Example:**

```js
console.log( sortPresidentsByBirthYear(presidents) );
```

**Expected Output:**
```js
[
  { id: 1, name: "George Washington", /*  ...  */ birthYear: 1732 },
  { id: 2, name: "John Quincy Adams", /*  ...  */ birthYear: 1767 },
  { id: 3, name: "Thomas Jefferson", /*  ...  */ birthYear: 1743 },
  // ...
  // ...
];
```

<br>

## Bonus Iterations

You are doing great! Let's move on to the bonus iterations. :rocket:

<br>

Before you start working on the bonus iterations, you will need to enable the tests for the bonus iterations. You may have noticed that the test results for the bonus iterations are gray. This is because we disabled them intentionally to avoid overwhelming you with too many tests.

The tests are located in the file `tests/bonus.specs.js`. To enable the tests, remove the `x` from the first  `xdescribe()` block, like this:

**Before:**
```js
xdescribe("BONUS", () => {
  // ...
```

**After:**
```js
describe("BONUS", () => {
  // ...
```

<br>

### Bonus: Iteration 8 | Age at Inauguration - `map()`

Implement the function `getAgeAtInauguration()` that takes the **presidents array** as an argument.
The function should use the `map()` method to create a new array of updated president objects, with a new property `ageAtInauguration` containing the age of each president when they took office. The function should then return the new array containing the updated president objects, where each object contains the new property `ageAtInauguration`.

<br>

**Example:**

```js
console.log( getAgeAtInauguration(presidents) );
```

**Expected Output:**
```js
[
  { id: 1, name: "George Washington", /*  ...  */ ageAtInauguration: 57 },
  { id: 2, name: "John Quincy Adams", /*  ...  */ ageAtInauguration: 62 },
  { id: 3, name: "Thomas Jefferson", /*  ...  */ ageAtInauguration: 58 },
  // ...
  // ...
];
```


<br>

### Bonus: Iteration 9 | Presidents Born After - `filter()`

Implement the function `getPresidentsBornAfter()` that takes two arguments: the **presidents array** and a **year**.
The function should use the `filter()` method to create a new array containing only the **presidents who were born after the year provided as an argument**. The function should then return the new filtered array containing only the presidents who were born after the specified year.

<br>

**Example:**

```js
console.log( getPresidentsBornAfter(presidents, 1945) );
```

**Expected Output:**
```js
[
  { id: 42, name: "Bill Clinton", /*  ...  */ birthYear: 1946 },
  { id: 43, name: "George W. Bush", /*  ...  */ birthYear: 1946 },
  { id: 44, name: "Barack Obama", /*  ...  */ birthYear: 1961 },
  { id: 45, name: "Donald Trump", /*  ...  */ birthYear: 1946 },
];
```

<br>

### Bonus: Iteration 10 | Sort Presidents by Name - `sort()`

Implement the function `sortPresidentsByName()` that takes the **presidents array** as an argument.
The function should use the `sort()` method to **sort the presidents array alphabetically by name, in ascending order**. The function should then return the sorted array of presidents.

<br>

**Example:**

```js
console.log( sortPresidentsByName(presidents) );
```

**Expected Output:**
```js
[
  { id: 16, name: "Abraham Lincoln", /*  ...  */ },
  { id: 7,  name: "Andrew Jackson",  /*  ...  */ },
  { id: 17, name: "Andrew Johnson",  /*  ...  */ },
  { id: 44, name: "Barack Obama",  /*  ...  */ },
  { id: 23, name: "Benjamin Harrison", /*  ...  */ },
  { id: 42, name: "Bill Clinton",  /*  ...  */ },
  { id: 30, name: "Calvin Coolidge",  /*  ...  */ },
  // ...
  // ...
];
```

<br>


**Happy coding!** :blue_heart:

<br>

## FAQs

<br>

<details>
  <summary>I am stuck in the exercise and don't know how to solve the problem or where to start.</summary>
  <br>


  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.


  For example, is it a concept you don't understand, or are you receiving an error message you don't know how to fix? It is usually helpful to state the problem as clearly as possible, including any error messages you receive. This can help you communicate the issue to others and potentially get help from classmates or online resources. 


  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  [Back to top](#faqs)

</details>

<details>
  <summary>All of the Jasmine tests are failing and in red. Why did this happen?</summary>
  <br>


  One possible reason why all of the Jasmine tests are failing is that there is a syntax error in the code being tested. If the code contains a syntax error, it will not be loaded properly and none of the tests will be able to run. This will cause all of the tests to fail.

  To troubleshoot this issue, you will need to examine the code being tested for syntax errors. Look for missing brackets, semicolons, or other syntax issues that could be causing the problem. If you find a syntax error, correct it and try running the tests again.

  Another possibility is that there is an issue with the tests. It is possible that you may have modified the test file and caused an issue. If you have made changes to the test file, try copying and pasting the original test file and running the tests again to see if this resolves the issue.

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use the <code>map()</code> array method?</summary>
  <br>

  The `map()` method is used to create a new array by returning a value for each element in an array.

  The `filter()` method takes a callback function as an argument. The `map()` method returns a new array containing the values returned from the callback function.

  Here is an example of using the `map()` method to extract the `grade` property from each student object in the `students` array and create a new array with the grades:

  ```js
  const students = [
    { name: "Anna", grade: 8 },
    { name: "Bill", grade: 9 },
    { name: "Cloe", grade: 7 }
  ];

  // Use map() to extract the 'grade' from each student object
  const studentGrades = students.map(function (student) {
    // Return the value to be included in the new array
    return student.grade;
  });


  console.log(studentGrades); // Output: [8, 9, 7]
  ```

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use the <code>filter()</code> array method?</summary>
  <br>

  The `filter()` method is used for iterating through an array and selecting only certain elements to include in a new array.

  The `filter()` method returns a new array with all elements that pass a certain condition. The `filter()` method takes a callback function as an argument.

  The callback function should return a boolean value (`true` / `false`) or a *truthy*/*falsy* value:

  - If the callback function returns `true` for a particular element, that element will be included in the new array.
  - If the callback function returns `false` for a particular element, that element will be excluded from the new array.

  Here is an example of filtering an array to get a new array containing only students that have a course property of `"Web Dev"`:

  ```js
  const students = [
    { name: "Anna", course: "Web Dev" },
    { name: "Bill", course: "UX/UI" },
    { name: "Cori", course: "Data" },
    { name: "Dave", course: "Web Dev" },
    { name: "Erin", course: "UX/UI" }
  ];

  const webDevStudents = students.filter( function(el) {
    return el.course === "Web Dev";
  });

  console.log(webDevStudents);
  // Output: 
  // [ 
  //   {name: "Anna", course: "Web Dev"},
  //   {name: "Dave", course: "Web Dev"}
  // ]
  ```

<br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use the <code>sort()</code> array method?</summary>
  <br>

  The `sort()` method is used to sort the elements of an array in place. This means the original array is mutated and the sorted elements are rearranged within the same array.

  The default sort order is based on converting the elements into strings and then comparing their sequences of UTF-16 Unicode values. This means that the `sort()` method can be used directly to sort an array of strings in alphabetical order.  However, when working with numbers, the default sort order may not produce the desired result and it is necessary to provide a sorting function as an argument to the `sort()` method.

  #### Sorting numbers - ascending order

  Here is an example of using the `sort()` method to sort an array of numbers in ascending order:

  ```js
  const numbers = [5, 2, 3, 1, 4];

  numbers.sort((a, b) => a - b);

  console.log(numbers); // Output: [1, 2, 3, 4, 5]
  ```

  <br>

  #### Sorting numbers - ascending order

  Here is an example of using the `sort()` method to sort an array of numbers in descending order:

  ```js
  const numbers = [5, 2, 3, 1, 4];

  numbers.sort((a, b) => b - a);

  console.log(numbers); // Output: [5, 4, 3, 2, 1]
  ```

  <br>

  #### Sorting strings - ascending order A-Z

  Here is an example of using the `sort()` method to sort an array of strings in ascending order (A-Z):

  ```js
  const words = ["cherry", "apple", "blueberry"];

  words.sort((a, b) => a.localeCompare(b));

  console.log(words); // Output: ["apple", "blueberry", "cherry"]
  ```

  The `localeCompare()` method is used to compare the strings in alphabetical order. In the above example `localeCompare()` method returns a negative value if `a` comes before `b` in the sort order, a positive value if `a` comes after `b`, and 0 if they are equal. This causes the strings to be sorted in ascending order (A-Z).

  <br>

  #### Sorting strings - descending order Z-A

  Alternatively, you can use the default sort order by simply calling the `sort()` method without a compare function:

  ```js
  const words = ["cherry", "apple", "blueberry"];

  words.sort();

  console.log(words); // Output: ["apple", "blueberry", "cherry"]
  ```

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use the <code>reduce()</code> array method?</summary>
  <br>

  The `reduce()` method is used to reduce an array of values to a single value by adding each element to the accumulator.

  <br>

  #### Syntax

  The `reduce()` method takes two arguments: a *callback function* and the *initial value*.

  ```js
  array.reduce((accumulator, element, index, array) => {}, initialValue);
  ```

  The callback function takes four arguments:

  - `accumulator`: the accumulated value. The `accumulator` is initialized with the value passed as the second argument: `initialValue`.
  - `element`: the current element being processed in the array
  - `index`: *(optional)* the index of the current element being processed in the array
  - `array`: *(optional)* the original array

  <br>

  #### Example

  Here is an example of using the `reduce()` method to calculate the sum of all `grade` values in an array:

  ```js
  const students = [
    { name: "John", grade: 8 },
    { name: "Jane", grade: 9 },
    { name: "Bob", grade: 7 }
  ];

  const gradesTotal = students.reduce((accumulator, element) {
    // For each array element, add its 'grade' to the accumulator 
    const newAccumulator = accumulator + element.grade;
    // Return the new accumulator value for the next iteration
    return newAccumulator;                              
  }, 0);

  console.log(gradesTotal); // Output: 24
  ```

  In the above example, the accumulator was initialized with the initial value of `0`.

  The callback function adds the `grade` of the current element to the accumulator on each iteration. The returned value becomes the new accumulator value for the next iteration. The `reduce()` method returns the final value of the accumulator, which is the sum of all elements in the array.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use the <code>slice()</code> array method?</summary>
  <br>

  The `slice()` method is used to copy a portion of an array and return it as a new array. The  `slice()` method doesn't mutate the original array.

  <br>

  #### Syntax

  ```js
  const newArray = array.slice(start, end);
  ```

  - `start` is the index at which the slice begins.
  - `end` is the index at which the slice ends.

  <br>

  The `slice()` method extracts elements from the original array and includes them in the new array up to, but not including, the `end` index. If the `end` index is not provided, the `slice()` method will extract elements from the `start` index to the *end of the original array*.



  Here is an example of using the `slice()` method to copy array elements:

  ```js
  const strings = ["a", "b", "c", "d", "e"];

  // Extract elements from index 1 to index 3
  const slice = strings.slice(1, 3);

  console.log(slice); // Output: ["b", "c"]
  ```

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>
  <br>

There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:
  ```bash
  git add .
  git commit -m "Your commit message"
  git push
  ```
2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
To check which remote repository you have cloned, run the following terminal command from the project folder:
  ```bash
  git remote -v
  ```
If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first and then clone your fork to your local machine to be able to push the changes.

**Note**: You should make a copy of your local code to avoid losing it in the process.

  [Back to top](#faqs)

</details>
