![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Chronometer

![giphy (1)](https://user-images.githubusercontent.com/76580/167427065-a674fb55-44ea-448a-a7ef-940b45eeb9df.gif)

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Run tests in Jasmine and interpret results to verify expected code behavior.
  - Define a `class` and use it to create objects (instances).
  - Define and implement class methods that use `this` to access and manipulate object properties.
  - Use arrow functions to maintain the context of `this`.
  - Pass functions as arguments to other functions (callbacks).
  - Use the `setInterval()` to repeatedly run code at specified intervals and `clearInterval()` to cancel existing interval processes.
  - Use the clearInterval() method to stop an interval timer.
  - Debug and troubleshoot code using the Chrome Dev Tools.
  - Use the `Math` object and its methods `Math.random()` for generating random numbers, and `Math.floor()`, `Math.ceil()`, or `Math.round()` for rounding numbers.

  <br>
  <hr> 

</details>

## Introduction

In this lab, we are going to create a [chronometer](https://www.dictionary.com/browse/chronometer). Chronometers are very commonly used in sports - car racing, athletics, etc. We will use classes to organize and abstract our code and the JavaScript timers to implement the chronometer functionality. This is a perfect opportunity to sharpen our OOP skills and practice working with asynchronous JavaScript.

Let's get started!



## Requirements

- Fork this repo.
- Clone this repo.

## Submission

- Upon completion, run the following commands:

```shell
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request so that your TAs can check your work.

## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the `tests/chronometer.spec.js` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## Instructions

To check how the final version of the chronometer should work, check this **[demo](https://sandrabosk.github.io/demo-chrono/index.html)**.

<br>

### Iteration 0: Getting Started

#### The Stopwatch UI

To let you focus on the JavaScript portion of the exercise and on developing the chronometer functionality, we created the *stopwatch* UI for you.

To start, **open the `index.html` page in the browser**. Next, you should see the *stopwatch* as shown in the below example.  This way, you can visually check the functionality of your chronometer as you progress with the exercise.

<details>
  <summary> Click here to see the image</summary>

<br>

![](https://education-team-2020.s3-eu-west-1.amazonaws.com/web-dev/labs/chronometer.png)
</details>

<br>

The *stopwatch* markup, styles, and DOM functionality are in the files `styles/style.css`, `index.html`, and `src/index.js`. These files already include all the needed code, and **you should not modify them**.

<br>

#### The Chronometer

**You will do all your work in the `src/chronometer.js` file.**

The goal of the exercise is to finish implementing the `Chronometer` class and its methods. The class and the methods are already defined in the `chronometer.js` file but have no functionality.

The `src/index.js` file depends on the methods of the `Chronometer` to display the time on the *stopwatch* and includes a `Chronometer` instance as follows:

> ```js
> // src/index.js
> const chronometer = new Chronometer(); // instance of the Chronometer
> 
> // ...
> ```

The methods of the `Chronometer` are not yet functional. Your task will be to implement them in the following iterations.

<br>

### Iteration 1: The `Chronometer` class

Let's implement the `Chronometer` class following the below requirements:
- The class (`constructor`) should not take any arguments.
- The class (`constructor`) should initialize two properties for each new chronometer object:
  -  `currentTime`, with the initial value set to `0`.
  -  `intervalId`, with the initial value set to `null`.


Once done, check the test results and verify that your code is passing the checks.

<br>

### Iteration 2: The `start` method

##### `start()` method

- should be declared on the `Chronometer` class
- should receive *one* argument (`printTimeCallback`)
- should increment by `1` the `currentTime` property every 1 second
- should invoke the passed `printTimeCallback` every 1 second

When called, the `start` will begin keeping track of time by running a function in 1-second intervals and incrementing the number of seconds stored in the property `currentTime` by `1`.

You should use the `setInterval` method to achieve this. The *interval id* that is returned by calling `setInterval` should be assigned to the `intervalId` property, so this way, we will be able to clear it later on when we need to stop the timer.

Additionally, the `start` method should accept a *callback function* as an argument. Let's name it `printTimeCallback`. Once `start` is invoked, the said `printTimeCallback` function should be executed in 1-second intervals, meaning inside the `setInterval`.
If `printTimeCallback` is not passed, it should be disregarded (hint: you should check whether the callback was passed before attempting to run it).

:bulb: _Hint 1_: Keep in mind, if you pass a function declaration to the `setInterval()` method (by writing `setInterval(function () {/* */})`), the keyword `this` will not refer to the object _chronometer_, but to the global scope. To enable referencing the chronometer by accessing `this`, pass a function expression (a so-called arrow function) to the `setInterval()` method (by writing `setInterval(() => {/* */})` instead).

<br>

### Iteration 3: The `getMinutes` method

##### `getMinutes()` method

- should be declared on the `Chronometer` class
- should not receive any arguments
- should return the number of entire *minutes* passed

We're storing the number of seconds elapsed in the `currentTime` property. First, however, we will need to calculate how many minutes have elapsed.

The `getMinutes` method should take no arguments and return the _number_ of minutes that have passed as an integer, as a whole number.
To calculate the minutes, divide the current time by 60 and use the `Math.floor()` method to get a rounded number.

<br>

### Iteration 4: The `getSeconds` method

##### `getSeconds()` method

- should be declared on the `Chronometer` class
- should not receive any arguments
- should return the number of entire *seconds* passed

Previously, we implemented the method that returns the number of minutes passed. What if we want to get the number of seconds passed after the start of the current minute?

The `getSeconds` method should return the number of seconds that have passed after the start of the current minute.

For example, if the property `currentTime` holds `75`, `getSeconds` should return `15`. If `currentTime` holds `210`, `getSeconds` should return `30`, and so on.

You can use the [modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) (current time % 60) to get the number of remaining seconds.

<br>

### Iteration 5: The `computeTwoDigitNumber` method

##### `computeTwoDigitNumber()` method

- should be declared on the `Chronometer` class
- should receive *one* argument (`value`)
- should return a string
- should always return a string of length 2

Our *stopwatch* has a screen that displays the number of minutes and seconds that passed. However, sometimes the `getMinutes` and `getSeconds` methods return a single-digit number. Let's create a helper function that will convert any number into a two-digits string representation.

The `computeTwoDigitNumber` method should take a `value` argument, a number, and return a string. The received number should be *padded* with 0s when the value is a single-digit number. 

For example, if `computeTwoDigitNumber` is called with the number `7`, it should return a string `"07"`. If called with the number `36`, it should return a string with the value of `"36"`.

:bulb: _Hint_: You can achieve this dynamically by using the `.slice()` method.

We'll use the `computeTwoDigitNumber` method in the following iterations to format the values before displaying them on the *stopwatch*.

<br>

### Iteration 6: The `stop` method

##### `stop()` method

- should be declared on the `Chronometer` class
- should not receive any arguments
- should call `clearInterval`
- should clear the existing interval timer

We can start our chronometer, but we still need to implement a method to stop it.

When invoked, the `stop` method should clear the interval with the id that we had stored in the `intervalId` property. It's as simple as that.

:bulb: _Hint_: Use `clearInterval`.

<br>

### Iteration 7: The `reset` method

##### `reset()` method

- should be declared on the `Chronometer` class
- should not receive any arguments
- should reset the value of the `currentTime` property to `0`

The `reset()` will reset our chronometer. To do this, we need to set the value of the `currentTime` property back to `0`, and that's it!

<br>

### BONUS - Iteration 8: The `split` method

##### `split()` method

- should be declared on the `Chronometer` class
- should not receive any arguments
- should return a string
- should return a string showing the minutes and seconds in the *"mm:ss"* format

We might want to extract a formatted timestamp of the time elapsed since the chronometer was started. We call this "obtaining the split time".

The `split` method should take no arguments, and it should return a string where the time since the start is formatted as "_mm:ss_". Internally, the `split` method can use the previously declared methods `getMinutes`, `getSeconds`, and `computeTwoDigitNumber`.

<details>
  <summary> Click here to see the image </summary>
<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a5c9687f25bd710b2e7658ee6d997174.png)
    
</details>

<br>

### BONUS - Iteration 9: Centiseconds

Our chronometer is now fully functional, and we can use it to measure how much time we spend on each exercise. Now, what if we want to calculate our time in a race? We would need to be more accurate with our chronometer. How can we be more accurate? By adding the hundredths of a second ([centiseconds](https://en.wiktionary.org/wiki/centisecond))!

Finally, in JavaScript, we will have to add all the logic to show the centiseconds on the stopwatch. You will also have to show these centiseconds in each *Splits* snapshot.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_82e9d1fd5976a3f98bb1382f2385f6a1.png)

Your goal is to create the JavaScript logic to:

- Be able to count the centiseconds.
- Capture the centiseconds when you capture a split time.
- Reset the current time to 0.

**Note:** This slightly more complicated iteration will require you to modify the *timer interval* and update the calculation logic for *minutes*, *seconds*, and *centiseconds*. Use the following conversion guideline as a reference:

> 1 centisecond = 10 milliseconds
>
> 1 second = 100 centiseconds = 1000 milliseconds

<br>

#### Tests & File Setup (Bonus - Iteration 9: Centiseconds)

You'll use different tests and a different working file for this iteration. To do so, change your HTML files:

1. In `SpecRunner.html`, *comment out* the two script tags in use and *uncomment* the two for the bonus iteration, like this:

   ```html
       <!--  Iterations 1 - 8 -->
       <!-- <script src="src/chronometer.js"></script> -->
       <!-- <script src="tests/chronometer.spec.js"></script> -->
   
       <!-- Bonus Iteration 9: Centiseconds -->
       <script src="src/chronometer-centiseconds.js"></script>
       <script src="tests/chronometer-centiseconds.spec.js"></script>
   ```

   

2. In `index.html`, *comment out* the script tag loading the `chronometer.js` file, and *uncomment* the `chronometer-centiseconds.js` one, like this:

   ```html
     <!--  Iterations 1 - 8 -->
     <!-- <script src="src/chronometer.js"></script> -->
   
     <!-- Bonus Iteration 9: Centiseconds -->
     <script src="src/chronometer-centiseconds.js"></script>
   ```

<br>

**Happy coding!** :heart:


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
  <summary>All of the Jasmine tests are failing and in red. Why did this happen?</summary>
  <br>


  One possible reason why all of the Jasmine tests are failing is that there is a syntax error in the code being tested. If the code contains a syntax error, it will not be loaded properly and none of the tests will be able to run. This will cause all of the tests to fail.

  To troubleshoot this issue, you will need to examine the code being tested for syntax errors. Look for missing brackets, semicolons, or other syntax issues that could be causing the problem. If you find a syntax error, correct it and try running the tests again.

  Another possibility is that there is an issue with the tests. It is possible that you may have modified the test file and caused an issue. If you have made changes to the test file, try copying and pasting the original test file and running the tests again to see if this resolves the issue.

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use <code>setTimeout()</code> and <code>clearTimeout()</code>?</summary>
  <br>

  `setTimeout()` is a global function that can be used to execute a callback function after a specified delay.

  <br>

  #### Syntax

  ```js
  setTimeout(callback, delay);
  ```

  - `callback` is the function that will be executed after the specified delay.
  - `delay` is the time in milliseconds that the callback function should be delayed before being executed.

  <br>

  #### Using `setTimeout()`

  Here is an example of using `setTimeout()` to log a message to the console after a delay of 2000 milliseconds (2 seconds):

  ```js
  setTimeout(() => {
    console.log("Hi!");
  }, 2000);
  ```

  #### Canceling a timeout with `clearTimeout()`

  When invoked, `setTimeout()` returns a timer ID that can be used to cancel the execution of the callback function using the `clearTimeout()` function:

  ```js
  const timerId = setTimeout(() => {
    console.log("Hi!");
  }, 2000);

  // Cancel the execution of the callback function
  clearTimeout(timerId);
  ```

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to use <code>setInterval()</code> and <code>clearIntervalI()</code>?</summary>
  <br>

  `setInterval()` is a global function that can be used to execute a callback function repeatedly at a specified interval.

  <br>

  #### Syntax

  ```js
  setTimeout(callback, delay);
  ```

  - `callback` is the function that will be executed after the specified delay.
  - `delay` is the time in milliseconds that the callback function should be delayed before being executed.

  <br>

  #### Using `setInterval()`

  Here is an example of using `setTimeout()` to log a message to the console after a delay of 2000 milliseconds (2 seconds):

  ```js
  setInterval(() => {
    console.log("Hello, world!");
  }, 2000);
  ```


  #### Canceling an interval with `clearInterval()`

  When invoked, `setInterval()` returns a timer ID that can be used to cancel the execution of the callback function using the `clearInterval()` function:

  ```js
  const timerId = setInterval(() => {
    console.log("Hello, world!");
  }, 2000);


  // Cancel the execution of the interval function after 10 seconds
  setTimeout(() => {
    clearInterval(timerId);
  }, 10000);
  ```

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>What is the proper way to pass a callback function as an argument and execute it?</summary>
  <br>

  In JavaScript, you can pass a callback function as an argument to another function and execute it by calling it inside the outer function. 

  <br>

  Here is an example of **passing a callback as an argument to a function**: 

  ```js
  function sayHello() {
    console.log('Hello!!!');
  }


  function outerFunction(callback) {
    console.log('Inside outerFunction');
    
    callback();
  }


  outerFunction(sayHello);
  ```

  In this example, the `sayHello` function is passed as a callback to the `outerFunction`. The `outerFunction` calls the passed function using its parameter name `callback`  by invoking it with `callback()`. When you run the code, you will see the log statements from both functions printed to the console.

  <br>

  Here is an example of **passing a callback as an argument to a method**: 

  ```js
  class ExampleClass {
    constructor() {
      this.name = "ExampleClass";
    }

    myMethod(callback) {
      console.log("Inside myMethod");
      
      callback();
    }
    
  }
  ```

  <br>

  Here is an example of **passing a callback to a method and checking if it was passed** before invoking it:

  ```js
  class ExampleClass {
    constructor() {
      this.name = "ExampleClass";
    }

    myMethod(callback) {
      console.log("Inside myMethod");
      
      if (callback) { // Check if the callback is passed before invoking it to prevent errors
        callback(); 
      }
      
    }
  }
  ```

  In the above example, the method `myMethod` takes a *callback* function as an argument. Inside the method, it first checks if a callback function was actually passed using an if statement. If a callback was passed, the method invokes it by calling `callback()`.

  This approach prevents errors from occurring if the callback was not passed (if it is `undefined`).

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
