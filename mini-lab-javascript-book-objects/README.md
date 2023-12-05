![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JavaScript Book Objects

<p align="center">
  <img src="https://media2.giphy.com/media/3osxYeLtSKwjXs8zU4/giphy.gif?cid=ecf05e47vvgft7vhntz40g8itnf6wl8u5pa90hwqbuxrstli&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="books gif" />
</p>



<br>



<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Create objects and initialize object properties with values
- Add, remove, update, and delete object properties
- List the keys and the values of objects using `Object.keys()` and `Object.values()`
- List and access the keys and values of objects using the `for...in` loop

</details>

<br>


## Introduction

In this lab, you will practice working with JavaScript objects and nested data structures (arrays and objects). The theme for this lab are books, where you will need to create, manipulate, and work with an array of book objects using the syntax and concepts you learned in class.

<br>

## Setup

- Fork this repo.
- Clone this repo.


<br>

## Submission
- Upon completion, run the following commands:

```shell
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request and submit your assignment

<br>

## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the `tests/books.spec.js` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>


## Instructions

### Iteration 1 | Books Array

In the `index.js` file, **create an array named `booksArray`** containing **5 objects representing the books** described in the code snippet below. Each object should have the following properties:

- `title`
- `pages`
- `author`
- `description`

<br>

The values of the properties should be the same as the ones in the following code snippet:

```js
// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Pride and Prejudice
// pages: 279
// author: Jane Austen
// details: {
//    language: English
//    description: One of the most popular novels in the English language...
// }

// Book 4
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 5
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

```

<br>


----



### Iteration 2 | Book Details

**Create a function** named **`getBookDetails()`** that takes one argument - a book object.<br>The function should **return a string** with the following format:



**Expected Result:**

```js
TITLE - AUTHOR - PAGES pages
```

For example, if we pass a "book 4" object as an argument, the function **should return the string**:

```js
The Art of Learning - Josh Waitzkin - 288 pages
```

<br>


----


### Iteration 3 | Delete Language

Iterate over the `booksArray`, and **delete the nested object property `language`** from each book object.<br>Once done, `console.log` the `booksArray` array to confirm that the property has been deleted from all the book objects.
<br>



**Note:** You shouldn't change the `booksArray` manually, but instead, you should iterate over the array and delete the property from each book object.

<br>


----



### Iteration 4 | Estimated Reading Time

Iterate over the `booksArray`, and **add a new property `readingTime` to each book object**.<br>The value of the `readingTime` should be the number of minutes it will take to read the book. The number of minutes should be an integer (i.e., no decimals).<br>

Assuming a page consists of *500 words* and that the average reader reads *90 words per minute*, the estimated reading time for a book can be calculated using the following formula:<br>

> reading time in minutes = (`number of pages` * `500`) / `90`

<br>



Once done, `console.log` the `booksArray` to confirm that the property has been added to each book object.

<br>


----


### Bonus: Iteration 5 | Books Dictionary

For this iteration, in the `books.js` file we have provided you with an object named `dictionaryExample`.<br>The `dictionaryExample` object contains different books grouped by the author. Each book is represented by an array containing two elements - the **book title** and the **number of pages**:



```js
/* The `dictionaryExample` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionaryExample = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};
```

<br>



**Create a function** named **`createBooks()`** that takes one argument - `dictionary` which is an object having the same structure as the `dictionaryExample` shown above.

<br>

The function should **return an array containing the book objects with the properties** :

- `title` - the title of the book (first element of the array)
- `pages` - the number of pages of the book (second element of the array)
- `author` - the author of the book (the dictionary key)

<br>

For example, if we pass the above `dictionaryExample` object as the argument, the function **should return the array** of book objects:

**Expected Result:**

```js
[
  {
    title: "Harry Potter and the Philosopher's Stone",
    pages: 223,
    author: "J. K. Rowling",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    pages: 251,
    author: "J. K. Rowling",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    pages: 317,
    author: "J. K. Rowling",
  },

  // ...etc.

```
<br>

The **keys of the dictionary should be the authors' names**, and the values from the array should be converted to objects with the properties described above.



**Hint**: One way is to use the `Object.keys()` method to get the keys of the dictionary. Another way is to use the `for...in` loop to iterate over the keys of the dictionary.
In case you need a refresher on the `Object.keys` or the `for...in` loop, check out the following pages:

- [MDN - `Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [W3Schools - `Object.keys()`](https://www.w3schools.com/jsref/jsref_keys.asp)
- [MDN - `for...in` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [W3Schools - For/in](https://www.w3schools.com/js/js_loop_forin.asp)

<br>


----


### Bonus: Iteration 6 | Average Page Count

Create a function named **`averagePageCount()`** that takes one argument - the books array. The function **should return a number** representing the average page count of all the books in the array.<br>

The formula to calculate the average page count is:

> average page count = `sum of all books' pages` / `number of books`




<br>

Happy coding! 💙

<br>

## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>


  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>



