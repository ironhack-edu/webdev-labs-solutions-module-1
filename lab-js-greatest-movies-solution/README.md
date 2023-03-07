![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Greatest Movies of All Time

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1561a196c2e3852533bad64d9b0d4e9f.gif)

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

   This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Declare functions using the function expression and arrow function syntax.
  - Pass functions as arguments to other functions (callbacks).
  - Pass arrays and objects to functions as arguments.
  - Iterate over arrays using the `forEach()` method.
  - Manipulate arrays using the `map()`  method.
  - Filter array elements using the `filter()`  method.
  - Reduce array values using the `reduce()`  method.
  - Sort arrays using the `sort()`  method.
  - Explore and apply different ways to copy an array (`slice()` and spread operator `...`).

  <br>
  <hr> 

</details>

## Introduction

We have just learned some useful methods that will help us manipulate **objects and arrays**. In this exercise, we will practice working with these methods, and you are required to use at least one of them in each iteration.

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

- Create a Pull Request so that your TAs can check your work.

<br>

## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the `tests/movies.spec.js` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## Instructions

You will work on the `src/movies.js` file, which is already loaded in the `SpecRunner.html` file.

The `src/data.js` file containing the array of movies is also loaded in the `SpecRunner.html` file.

<br>

## Iteration 0: Movies array

The best way to practice is to work with real data. In the **`src/data.js`** file, you will find an array of info about **the best 250 movies of all times** according to [IMDB Ranking](http://www.imdb.com/chart/top?ref_=nv_mv_250_6) that you will use to display what each iteration asks! 

Here is an example of how the data is displayed:

```javascript
{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime","Drama"],
  "score": 9.3
}
```

You will be digging deeper into some "facts" that this data set has. For example, we can use this data set to find the most popular movie, the average duration of the movie, the list of movies by some director, etc. 

In this iteration, no action is required, but here comes your challenge: In the following iterations, you will use your JS knowledge to manipulate this data.

Remember to read each iteration description carefully before working on the solution.

<br>

### Iteration 1: All directors

We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to _map_ through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named `getAllDirectors()` that receives an array of movies as an argument and returns a new (_mapped_) array.

<br>

#### Bonus - Iteration 1.1: _Clean_ the array of directors

Some of the directors had directed multiple movies, so they will pop up multiple times in the array of directors. How could you "clean" this array and make it unified (meaning, without duplicates)? _Don't prioritize the bonus part now. You can return to it when you finish the mandatory iterations._ :wink:

<br>

### Iteration 2: Steven Spielberg. The best?

One of the most famous directors in cinema is **[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)**, and he has some really awesome drama movies that are on our list, but we want to know how many of them are there.

Create a `howManyMovies()` function that receives an array as a parameter and `filter` :eyes: the array so we can have only the **drama** movies where **Steven Spielberg** is the director.

<br>

### Iteration 3: All scores average

These are the best movies based on their scores, so they all have remarkable scores. In this iteration, we want to know the average score of all of them and display it on the console. Create a `scoresAverage()` function that receives an array as a parameter and solves the challenge.

The score must be returned rounded to 2 decimals!

**:bulb: Maybe you want to _"reduce"_ the data to a single value. :wink:**

<br>

### Iteration 4: Drama movies

Drama is the genre that repeats the most on our `array`. Apparently, people love drama! :eyes:

Create a `dramaMoviesScore()` function that receives an array as a parameter to get the average score of all drama movies! Let's see if it is better than the general average.

Again, rounded to 2 decimals!

<br>

### Iteration 5: Order by year

We need to sort the movies in ascending order by their release year. This should be easy using one of the **methods** we have just learned. :wink:
Create a function `orderByYear()` that receives an array as a parameter and returns a _new sorted array_.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3db351079827c0acba42cf1e397dd8a3.gif)

If two movies have the same year, order them in alphabetical order by their title! :heavy_check_mark:

:warning: **Important:** Your function should *return a new array*, containing the movies ordered by the year. Your function should not modify (mutate) the original array. You may need to research how to make a "copy" or "clone" an array.

<br>

### Iteration 6: Alphabetic order

Another popular way to order the movies is to sort them alphabetically using the `title` key. However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. :wink:

Create an `orderAlphabetically()` function that receives an array and returns an array of the first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.



:warning: **Important:** Your function should *return a new array*, containing movie objects sorted alphabetically. Your function should not modify (mutate) the original array. You may need to research how to make a "copy" or "clone" an array.

<br>

### BONUS - Iteration 7: Time format

We got the info from the **IMDB** web page, but the duration info was saved in a format that is difficult for us to compare movies.

Finding the longest movie is almost impossible using that format, so let's change it!

- Create a `turnHoursToMinutes()` function that receives an array as a parameter and, with some _magic_ implemented by you - replaces the duration info of each of the movies for its equivalent in minutes. For example:

```javascript
{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime","Drama"],
  "score" :9.3
}
```

Should be:

```javascript
{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": 142,
  "genre": ["Crime","Drama"],
  "score": 9.3
}
```

<br>

:warning: **Important:** Your function should *return a new array*, containing movie objects with the duration time in minutes. Your function should not modify (mutate) the original array.

<br>

### BONUS - Iteration 8: Best yearly score average

We always hear so much about classic movies, but we want to know which year has the best average score so that we can declare the **BEST YEAR FOR CINEMA** officially!

Go ahead and find which year has the best average score for the movies released that year!
Create `bestYearAvg()` function that receives an array of movies and gives us an answer to which year was the best year for cinema and what was its average score. The `bestYearAvg()` should return a **string** with the following structure:
<br>

**The best year was \<YEAR\> with an average score of \<RATE\>**

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dfc3fe557576abca4dba274e3aabe9a3.gif)

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
  <summary>How do I loop over an array using the <code>forEach()</code> method?</summary>
  <br>


  The `forEach()` method executes a provided function once for each array element. It does not return a new array but rather executes the function on each element in the array.

  The syntax of the `forEach()` method is as follows:

  ```js
  array.forEach( function(element) {
    // code to be executed for each element
  });
  ```

  Here is an example that uses the `forEach()` method to log each element and its index in an array to the console:

  ```js
  const fruits = ["apple", "banana", "cherry"];

  fruits.forEach( function(element, index) {
    console.log(`${index}: ${element}`);
  });
  ```

  You can also use an arrow function as the callback function for `forEach()`:

  ```js
  fruits.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
  ```

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
