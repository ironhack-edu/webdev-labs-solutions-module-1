![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Expense Tracker

![giphy](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2k4OG4zeWplMjRybTVleWhwMHpxNWo3cWdkbDdzemQyMzNtaWlhbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26nfp8HGGHLPGY2KQ/giphy.gif)

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

 This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Run predefined tests in Jasmine to verify that the program meets the technical requirements.
  - Define a `class` and use it to create objects (instances).
  - Create a subclass using `extends` and `super()` to inherit properties and methods from a parent class.
  - Define class methods that use the `this` keyword to access object properties.
  - Iterate over arrays using the `forEach` loop.
  - Pass values as arguments to functions.
  - Use the `return` keyword to return a value from a function.

  <br>
  <hr> 

</details>

## Introduction

We have learned Object-oriented programming and how class and inheritance work in JavaScript. Now, let's put what we have learned into practice.



We all know that keeping track of our incomes and expenses is crucial to staying on top of our budget, but doing it manually can be a tedious task.
Well, in this lab, we're going to create a personal expense tracking program to help us with that!
Our expense tracking program will help us automate the tedious task of categorizing our transactions into income and expenses, allowing us to take full control of our budget. But there's more!
We won't just stop at recording our incomes and expenses. We will also add features that will make it even more useful, such as calculating the total income and expenses and the current balance. :money_with_wings:

Let's get started!

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

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the `tests/index.spec.js` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## Instructions

You will work on the `src/index.js` file.

Your task is to write the code in the `src/index.js` file following the below guidelines to make the tests pass. In this file, you will find the following starter code:

```javascript
// Entry
class Entry {}

// Income
class Income {}

// Expense
class Expense {}

// Budget
class Budget {}
```



### Iteration 0: First test

Let's have a look at the first test case together to get you started.

The first test case says that the `Entry` **"should take 3 arguments: `date`, `amount`**, and **`description`"**. This means that the `Entry` class should have a `constructor` method that takes 3 arguments:

```javascript
// Entry
class Entry {
  constructor(date, amount, description) {}
}

// Income
class Income {}

// Expense
class Expense {}

// Budget
class Budget {}
```

<br>



### Iteration 1 | Entry

Implement the `Entry` class so that it has the following properties and methods:



#### constructor

- should take **3 arguments** (date, amount, description).
- should take the **`date` property** as **1st argument** and assign it to a property `date`.
- should take the **`amount` property** as **2nd argument** and assign it to a property `amount`.
- should take the **`description` property** as **3rd argument** and assign it to a property `description`.

<br>



#### `getFormattedAmount()` method

- should be defined
- should receive **0 arguments**
- should return the amount string with the **amount** and the **€** symbol (format: `"AMOUNT €"`)

<br>



### Iteration 2 | Income

An `Income` object is an `Entry` with an additional property **`type`** by default set to **`"income"`**.



Implement the `Income` class following the below guidelines. The `Income` class should inherit the properties and methods from `Entry`, which means that you have to use the **`extends`** keyword and the **`super()`** inside the constructor. 



#### class

- `Income` should **extend** `Entry`.

<br>



#### constructor

- should take **3 arguments** (date, amount, description).
- should take **`date`** as **1st argument** and assign it to a **property `date`**.
- should take **`amount`** as **2nd argument** and assign it to a **property `amount`**.
- should take **`description`** as **3rd argument** and assign it to a **property `description`**.
<br>
- should call the **`super()`** method and correctly pass the arguments to it.
- should create a **`type` property** and give it a default value of `"income"`.

<br>



### Iteration 3 | Expense

This class is almost the same as the `Income` class, except that it has an additional property `paid`, and the **`type`** property has a default value of **`"expense"`**.



An `Expense` is an `Entry` with an additional property `type` by default set to `"expense"`. The `Expense` class instances **should have an additional property `paid`** used to keep track of whether the expense has been paid or not.



#### class

- `Expense` should **extend** `Entry`

<br>



#### constructor

- should take **4 arguments** (date, amount, description, category)
- should take **`date`** as **1st argument** and assign it to a **property `date`**.
- should take **`amount`** as **2nd argument** and assign it to a **property `amount`**.
- should take **`description`** as **3rd argument** and assign it to a **property `description`**.
- should take **`paid`** as **4th argument** and assign it to a **property `paid`**.
<br>
- should call the **`super()`** method and correctly pass the arguments to it.
- should create a **property `type`** and give it a default value of `"expense"`.

<br>



#### `getFormattedAmount()` method

This method needs to be **re-implemented** for `Expense`, because the `Expense` version is supposed to have a different return. It should **return the amount string with a *minus* (`-`) sign**. The requireme



- should be defined
- should receive **0 arguments**
- should return the amount string with a **minus sign**, the **amount**, and the **€** symbol (`"-AMOUNT €"`)

<br>



### Iteration 4 | Budget

We are almost there! We are going to create a `Budget` class that will help us store our incomes and expenses and that way keep track of our budget. The `Budget` class should have the following properties and methods:



Add the following 4 methods to the `Budget` class:

- `addEntry()`
- `getTotalIncome()`
- `getTotalExpense()`
- `getCurrentBalance()`



<br>



#### constructor

When we first create a `Budget`, there should be no income or expenses. Therefore, the `constructor` should **receive no arguments**. Here is how the `constructor` should look like:



- should receive **0 arguments**
- should create an **`entries` property** and assign it an **empty array** as the initial value

<br>



#### `addEntry()` method

Adds 1 entry (income or expense) to the `entries` array. Here are the requirements for this method:



- should be defined
- should receive **1 argument** (**new entry** that can be either an `Income` or an `Expense` object)
- should add the received entry to the `entries` array
- **shouldn't return** anything

<br>



#### `getTotalIncome()` method

Returns the total amount (number) of all incomes (entries with `type` of `"income"`).



- should be a defined
- should take **0 arguments**
- should return **the sum (number) of all incomes**
- should **use the `forEach()` method** to iterate over the `entries` array

<br>



#### `getTotalExpense()` method

Returns the total amount (number) of all expenses (entries with `type` of `"expense"`).



- should be a defined
- should take **0 arguments**
- should return **the sum (number) of all expenses**
- should **use the `forEach()` method** to iterate over the `entries` array

<br>



#### `getCurrentBalance()` method

Returns the balance of the budget (total income - total expenses).



- should be defined
- should receive **0 arguments**
- should return 0 if there are no entries.
- should calculate and return the balance, which is the **total income** minus the **total expenses**

<br>



### Bonus: Iteration 5 | Get total by type

As you may have noticed, methods `getTotalIncome()` and `getTotalExpense()` have a lot of repeated code. This makes them good candidates for refactoring.

Let's refactor them and fix this by implementing a new method `getTotal(type)` that will take the string `type` (either `"income"` or `"expense"`) as an argument and return the total amount (number) of all entries with the given type.



#### `getTotal()` method

Returns the total amount (number) of all entries with the given type.



- should be a defined
- should take **1 argument** (a string with the type of entry)
- should return **the total amount (number) of all entries with the given type**
- should **use the `forEach()` method** to iterate over the `entries` array

<br>



### Bonus: Iteration 6 | Get Formatted Entries

Implement the `getFormattedEntries()` method that returns an array of strings with the formatted entries. The format of the string should be as follows:

- For incomes:  `"DATE | DESCRIPTION | +AMOUNT €"`

- For expenses: `"DATE | DESCRIPTION | -AMOUNT €"`

<br>



#### `getFormattedEntries()` method

Returns an array of strings with the formatted entries.

- should be a defined
- should take **0 arguments**
- should return an array of strings with the formatted entries
- should **use the `forEach()` method** to iterate over the `entries` array

<br>



### Bonus: Iteration 7 | Unit Tests

We have a real treat for you for the last bonus iteration! It is your turn to write the unit tests for the new methods `getTotal()` and `getFormattedEntries()` you just implemented. You should write the tests in the `tests/bonus.spec.js` file.




You should use the method requirement descriptions from the two previous iterations and the tests in the `tests/index.spec.js` file as guides to write the tests for the new methods. You got this! :muscle:

<br>

**Happy Coding!** :blue_heart:

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
<summary>All of the Jasmine tests are failing and in red. Why did this happen?</summary>
<br>

One possible reason why all of the Jasmine tests are failing is that there is a syntax error in the code being tested. If the code contains a syntax error, it will not be loaded properly and none of the tests will be able to run. This will cause all of the tests to fail.

To troubleshoot this issue, you will need to examine the code being tested for syntax errors. Look for missing brackets, semicolons, or other syntax issues that could be causing the problem. If you find a syntax error, correct it and try running the tests again.

Another possibility is that there is an issue with the tests. It is possible that you may have modified the test file and caused an issue. If you have made changes to the test file, try copying and pasting the original test file and running the tests again to see if this resolves the issue.

[Back to top](#faqs)

</details>


<details>
<summary>How can I extend a class and reuse methods through inheritance?</summary>
<br>

In JavaScript, you can use the `extends` keyword to create a *subclass* that extends a *superclass* (also called a base class). 

The subclass inherits methods and properties from the superclass and can also have its own methods and properties.

Here is an example of extending a class and reusing its methods in JavaScript:

```js
class Dog {
  constructor (name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

class Labradoodle extends Dog {
  constructor (name, color) {
    super(name);
    this.color = color;
  }
}

const dog1 = new Labradoodle("Daisy", "white");
dog1.bark();  // Output: "Daisy is barking."
```

  In this example, the `Labradoodle` class *extends* the `Dog` class and inherits the `name` property and the `bark()` method. The `Labradoodle` class also defines its own property `color`.

  When the `bark()` method is called on the `dog1` object, it uses the method `bark()` coming from the `Dog` class, because the `Labradoodle` class extends the `Dog` class and inherits its methods and properties.

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
  const fruits = ['apple', 'banana', 'cherry'];

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

