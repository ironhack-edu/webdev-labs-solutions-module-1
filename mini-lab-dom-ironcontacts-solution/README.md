![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | DOM IronContacts

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/00-lab-dom-ironcontacts-intro.gif" alt="finished lab example">
</p>


<br>


<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Select HTML elements using DOM methods and HTML element properties `querySelector()`, `querySelectorAll()`, etc.
  - Access and modify HTML elements content using properties `textContent`, `innerHTML`
  - Add or remove HTML elements to the DOM using Javascript DOM methods `createElement()`, `appendChild()`, `removeChild()`, `insertBefore()`
  - Add or remove event listeners to HTML elements using DOM methods `addEventListener()`, `removeEventListener()`
  - Use loops to iterate through HTML elements, performing actions like adding event listeners and accessing values
  - Access and modify properties, values and attributes of HTML elements 
  - Add, remove and toggle CSS classes to HTML elements using DOM methods `classList.add()`, `classList.remove()`, `classList.toggle()`

  <br>
  <hr> 

</details>

<br>

## Introduction

While doing the course at Ironhack, you came across a job opportunity where you need to manage the contacts of a famous movie producer. What better way to do it than to put your newly acquired JavaScript and DOM skills to use?

Your task is to create a digital contact list for the producer using Javascript and the DOM.

<br>

## Getting Started

- Fork this repo

- Clone this repo

- Open the LAB and start:

  ```bash
  cd lab-dom-ironcontacts
  code .
  ```


## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.


<br>

## Instructions

### Iteration 0 | Example Row

First, let's help you get familiar with the starter code. Take a moment and review the starter code provided in the files `index.html` and `index.js`.

<br>

Next, open the `index.html` file in your browser using the Live Server extension.

<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/01-lab-dom-iteration-0.png" alt="iteration 0" width="700">
</p>

<br>

You should see a table with 1 *example row*, similar to the one shown in the image above.

The code for the example row is located in the `index.js` file, where indicated by the comment `// ITERATION 0 | Example Row`. We included it there as an example to give you a starting point and to help you understand how the table rows should be structured.

<br>




In the following iterations, you will be adding more rows to the table. The data for the rows comes from the `contacts.js` file, which is already linked and loaded in the `index.html` file. You can access it by using the `contacts` variable. For example, `contacts[0]` will give you the first contact object in the array.



<br>



### Iteration 1 | Display 3 Contacts

Let's start by displaying the first 3 contacts in the table. To do so, you will need to:

1. Get the **first 3 contacts** from the `contacts` array.<br>You can use the `splice()` method for this. Remember that the `splice()` method modifies the original array, and returns the results as a new array.
2. Iterate over the newly obtained array of 3 contacts and, for each contact, create a new table row and append it to the table body.<br>You can use the *Iteration 0* code as an example of how to create a new table row and what its structure should be.
3. Append each new table row to the table body. You can use the `appendChild()` method for this.

<br>

<details>
  <summary><b>See Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/02-lab-dom-iteration-1.png" alt="iteration 1" width="800">
  </p>

  <br>

</details>

<br>

### Iteration 2 | Delete Buttons

As you can see, each row has a *Delete* button. However, the buttons don't do anything yet. Let's fix that!
Your task in this iteration is to add an event listener to each *Delete* button so that, when clicked, the corresponding row is removed from the table.
You will need to do this  in the same loop where you are creating the new table rows. As soon as you create a new table row, you should also add an event listener to the delete button of that row. Here are the steps you should follow:

1. Get the *Delete* button element from a newly created row.<br> After creating a new table row, you can call the `querySelector()` method on the newly created table row to search for the *Delete* button only inside that row, like this: `newRow.querySelector(...)`.
2. Add an event listener to the *Delete* button element, for the `click` event.<br> You can use the `addEventListener()` method for this.
3. When the *Delete* button is clicked, the *row* element should be removed from the table.<br> You can use the `remove()` method for this.

<br>

<details>
  <summary><b>See Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/03-lab-dom-iteration-2.gif" alt="iteration 2" width="800" >
  </p>

  <br>

</details>

<br>

### Iteration 3 | Like Buttons

Now that you have the *Delete* buttons working, let's move on to the *Like* buttons. Your task in this iteration is to repeat the process you followed in the previous iteration, but for the *Like* buttons. When clicked the *Like* button should toggle (add or remove) the `class` `"selected"` on the corresponding row. You will need to do this in the same loop where you are creating the new table rows. As soon as you create a new table row, you should also add an event listener to the *Like* button of that row. Here are the steps you should follow:

1. Get the *Like* button element from a newly created row.
2. Add an event listener to the *Like* button element, for the `click` event.
3. When the *Like* button is clicked, the `class` of the *row* element should be toggled between `class="btn-like"` and `class="btn-like selected"`. You can use the `element.classList.toggle()` method for this.
4. The class `selected` will make the button appear red when clicked and gray (original color) when clicked again. You can see the CSS styles for the `selected` class in the `style.css` file.

<br>

<details>
  <summary><b>See Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/04-lab-dom-iteration-3.gif" alt="iteration 3" width="800" >
  </p>

  <br>

</details>

<br>

### Bonus: Iteration 4 | Add Random Contacts

For the final iteration, you will need to implement the event listener for the *Add Random Contact* button. When clicked, the button should add a new random contact to the table. You will need to do the following:

1. Add an event listener to the *Add Random Contact* button element, for the `click` event.
2. When the *Add Random Contact* button is clicked, get a random contact from the `contacts` array.<br>You can use the `Math.random()` method to generate a random number.
3. Create a new table row for the new contact and append it to the table body.
4. Add event listeners to the *Delete* and *Like* buttons of the new row, following the same steps as in the previous iterations.

<br>

<details>
  <summary><b>See Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/05-lab-dom-iteration-4.gif" alt="iteration 4" width="800" >
  </p>

  <br>

</details>

<br>

<!--
### Bonus: Iteration 5 | Sort Contacts by Name

For this bonus iteration, implement the button *Sort by Name* and the corresponding logic to sort the contacts by name. You will need to do the following:

1. Create a new button with the text 'Sort by Name'.
2. Create a new array with the contacts for the table. The array should contain all the contacts to be displayed in the table.
3. Create a helper function `showContacts()` that will display the contacts in the table. This function should take an array of contacts as an argument and display them in the table. When called the function should:
    - Remove the existing rows from the table.
    - Iterate over the array of contacts and, for each contact, create a new table row and append it to the table body.
    - Add event listeners to the *Delete* and *Like* buttons of the new rows.
4. Update the rest of the code so that whenever the contacts list is updated, the `showContacts()` function is called to display the updated list.

<br> 
-->

Happy coding! :blue_heart:


## FAQs

<br>

<details>
  <summary>I am stuck in the exercise and don't know how to solve the problem or where to start.</summary>
  <br>


  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and develop potential solutions.


  For example, is it a concept you don't understand, or are you receiving an error message you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

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
  <summary>How can I append a new DOM element to an existing one?</summary>
  <br>

  To append a new DOM element to an existing one in JavaScript, you can use the `appendChild()` method. 

  **Example:**

  ```js
  // Get the parent element
  var parentElement = document.getElementById("parent");

  // Create the new element
  var newElement = document.createElement("p");

  // Set the text content of the new element
  newElement.textContent = "This is a new paragraph.";

  // Append the new element to the parent element
  parentElement.appendChild(newElement);
  ```

  This will create a new `p` element with the text `"This is a new paragraph."` and append it to the element with the ID `parent`.

[Back to top](#faqs)

</details>

<details>
  <summary>Why do some DOM element values have to be converted to numbers when they already seem to be numbers?</summary>
  <br>

  This is because all values in HTML are strings and all attribute values are strings. Therefore, DOM element values are returned as strings even if they contain numeric values.

  If you want to use a value from a DOM element as a number, you will need to convert it to a number type.

  Here is an example of how to access and convert the value of the `price` element to a number using JavaScript:

  ```js
  // Get the input element
  const input = item.querySelector('input');

  // Convert the string value of the input element to a number
  const value = Number(input.value);
  ```

  [Back to top](#faqs)

</details>

<details>
  <summary>I keep getting the <code>NaN</code> result in my program. How can I fix it?</summary>
  <br>

  In JavaScript, `NaN` stands for "Not a Number". It is a special value that represents a problem with a numerical operation or a failed type of coercion. There are several reasons why you might get `NaN` as a result in your JavaScript code:



  1. **Dividing a number by `0`**: Any operation that involves dividing a number by `0` (zero) will result in `NaN`. Example:

   ```js
   const result = 10 / 0;
   
   console.log(result); // NaN
   ```

   <br>

  2. **Parsing an invalid number**: If you try to parse `undefined` or a string that can't be represented as a number using the `parseInt()` and `parseFloat()` functions, you will get `NaN` as a result. 
      <br>

   Example of parsing an invalid value with `parseInt()`: 

   ```js
   const result1 = parseInt("ironhack");
   const result2 = parseInt(undefined);
   
   console.log(result1); // NaN
   console.log(result2); // NaN
   ```

   <br>Example of parsing an invalid value with `parseFloat()`:

   ```js
   const result1 = parseFloat("ironhack");
   const result2 = parseFloat(undefined);
   
   console.log(result1); // NaN
   console.log(result2); // NaN
   ```

   <br>Example of parsing an invalid value with `Number()`:

   ```js
   const result1 = Number("ironhack");
   const result2 = Number(undefined);
   
   console.log(result1); // NaN
   console.log(result2); // NaN
   ```

   <br>

   

  To fix the `NaN` issue in your code, you can try a couple of things:

  - Check if you are attempting to divide a number by `0`. 
  - Make sure that the strings you are trying to parse as numbers are actually valid representations of numbers. You can use the `console.log()` to check the values of your variables and see if this is the issue.

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I add an event listener to an HTML element?</summary>
  <br>

  Use the `addEventListener()` method to add an event listener. This method takes two arguments: the *event type* and the *event handler function* that will be called when the event occurs.

  Here's an example of how to add a *click* event listener to a button element:

  ```js
  const button = document.querySelector('button');

  function handleClick() {
    console.log('Button was clicked');
  }

  button.addEventListener('click', handleClick);
  ```

  This will add a click event listener to the `button` element, which will call the `handleClick()` function whenever the button is clicked.

  For more information, check: [MDN - addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I remove an event listener?</summary>
  <br>

  Use the `removeEventListener()` method to remove an event listener. This method takes two arguments: the *event type* and the *event handler function* that was originally assigned when adding the event listener.

  For example, let's say you have added the following event listener:

  ```js
  button.addEventListener('click', handleClick);
  ```

  To remove this event listener, you can use the following code:

  ```js
  button.removeEventListener('click', handleClick);
  ```

  For more information, check: [MDN - removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

  [Back to top](#faqs)

</details>

<details>
  <summary>Why am I getting <code>null</code> when I try to access an HTML element?</summary>
  <br>

  There are a couple of possible reasons why you might be getting a `null` value when trying to access a DOM element in JavaScript:

  1. **You are using the wrong selector or mistyping the name**: Make sure you are using the correct selector and spelling to access the element. If you are using an incorrect selector or mistyping the name, you will get a `null` value when you try to access the element.

  2. **The element is not yet loaded**: If you are trying to access an element that is not yet loaded in the DOM (e.g., an element that is defined in a script that is loaded at the bottom of the page), you will get a `null` value when you try to access it. You can fix this by wrapping your code in a `window.onload` event handler, which will ensure that the element is available before your code runs:

   ```js
   window.addEventListener("load", function (event) {
     const element = document.querySelector('#my-element');
     // now you can safely access the element
   };
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