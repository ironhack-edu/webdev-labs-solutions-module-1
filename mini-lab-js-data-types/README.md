![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Data Types

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>


  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Perform basic mathematical calculations using arithmetic operators
  - Assign values to variables using assignment operators (`=`, `+=`, `-=`, etc.)
  - Use string concatenation (`+`) or interpolation `${}` to join strings together
  - Use the `Math` methods to generate random numbers and round floating point numbers
  - Access specific characters in a string and check the string length
  - Manipulate strings and substrings using string methods
  - Interpret expressions using the logical operators AND, OR, NOT (`&&`, `||`, `!`)


  <br>

  <hr> 


</details>



## Introduction

This exercise aims to familiarize you with the primitive data structures in JavaScript, which we have covered in class. Feel free to reference lesson materials, and don't limit yourself; be curious and use Google to explore multiple solutions.

<br>

## Getting Started
For this exercise, we will use VSCode and the Live Server extension to run the JavaScript code. To do it, follow these steps:



- Fork this repo

  

- Clone it to your machine

  

- Open the project folder in VSCode

  

- Once in VS Code, open the file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. To do this, right-click on the `index.html` file and select **Open with Live Server**.

  

- A new browser window will open with the `index.html` file loaded. You can now start working on the exercise.

<br>



## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request and submit your assignment.



*You should make a PR (Pull Request) when you make any significant change. You shouldn't have to wait until you're completely done with this or any other exercise to make the PR. After you do the first PR, any other time you push the changes (following the previous three steps), your change will appear automatically on the PR allowing the teaching staff to check your progress.*

<br>



## Instructions

You should do all your work in the `index.js` file. The file is already linked to the `index.html` file, so you can open the `index.html` file in the browser and see the results of your work in the console.

<br>

Before you start writing any code, make sure to carefully read the instructions provided for each iteration.<br>Additionally, the `index.js` file includes comments to help guide you through the exercise and variables and starter code to help you get started in each iteration.

Remember to take the time to read instructions and understand what is expected before starting to code.

We hope you enjoy the exercise ahead! :muscle:

<br>




## Strings

### Iteration 1 | Tongue Twister

Create a new variable named **`tongueTwister`** by combining the existing strings `s1`, `s2`, `s3`, `s4`, and `s5` to form the following tongue twister string: `"Fred fed Ted bread and Ted fed Fred bread"`.

Once done, print out the `tongueTwister` string using `console.log()`.

```js
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

// Print out the concatenated string
```

<br>



### Iteration 2 | Camel Tail

In the typical **camelCase** naming convention used in JavaScript, the first letter of each new word is capitalized. Now, imagine if the world of coding had a different history, where the usual **camelCase** rule was to capitalize the last letter of each new word. What would we call this naming convention? 

Well, we got the answer! Behold, a new naming convention - **"cameLtaiL"**! 🐪

<br>

Create a new variable named **`result`** by concatenating the strings `part1` and `part2`, and converting their last letters to uppercase to form a new "cameLtaiL" formatted string: `"javAscripT"`



Once done, print out the `result` string using `console.log()`.

```js
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// Print the cameLtaiL-formatted string

```

<br>







## Numbers

### Iteration 3 | Calculate Tip

You've had a meal at a restaurant, and you want to leave a tip. The bill total is $84. Calculate a 15% tip and store the amount in a new variable named **`tipAmount`**.

Once done, print out the `tipAmount` value using `console.log()`.

```js
const billTotal = 84;

// Calculate the tip (15% of the bill total)

// Print out the tipAmount

```

<br>



### Iteration 4 | Generate Random Number 

Generate a random integer (whole number) between `1` and `10` (inclusive) and store it in a variable named **`randomNumber`**. 

Once you are done generating and storing the random the number, print it out using `console.log()`.


<br>





## Booleans and Logical Operators

### Iteration 5 | Booleans

We have provided you with two boolean variables, `a` and `b`. Your task is to try and guess the output of the below expressions where the booleans are combined with different logical operators: AND `&&`, OR `||`, NOT `!`.

You should write down your answer for each expression. Once you are done, use `console.log()` to print out each expression and compare it to your answer.


```js
const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

// Once you are done writing down your answers, print out each expression and compare it to your answer
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


  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 


  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  [Back to top](#faqs)

</details>



<details>
  <summary>How do I create a multi-line string in JavaScript?</summary>
  <br>

  To create a multi-line string in JavaScript, you must use template literals. Template literals are string literals denoted with backticks (`). They allow you to embed expressions inside string values and create strings that span multiple lines.

  Example:

  ```js
  let str = `This is an
  example of a
  multi-line string.`;

  console.log(str);
  ```

  [Back to top](#faqs)

</details>



<details>
  <summary>How do I convert a string to capital or lowercase letters?</summary>
  <br>

  #### Uppercase

  To convert a string to *uppercase* letters, use the `toUpperCase()` method. The method `toUpperCase()` returns a new string with all the characters in uppercase.

  Example:

  ```js
  let str = "ironhack";

  console.log(str.toUpperCase());  // "IRONHACK"
  ```

  <br>

  #### Lowercase

  To convert a string to all *lowercase* letters, you can use the `toLowerCase()` method. This method returns a new string with all the characters in lowercase.

  Example:

  ```js
  let str = "IRONHACK";

  console.log(str.toLowerCase());  // "ironhack"
  ```

  It's important to note that methods `toUpperCase()` and `toLowerCase()` do not modify the original string. They return a new string that has been converted to the desired case.

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



<br>