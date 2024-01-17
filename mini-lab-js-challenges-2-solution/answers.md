**1. Challenge 1:**
  - Answer: **b** - `"xyz"` and `"xyz"`
  - Explanation: The function `bar` reassigns the value of the global variable `foo` to `"xyz"`.

<br>

**2. Challenge 2:**
  - Answer: **`c`** - `10` and `1`
  - Explanation: The function `example` has a parameter `a`. In Javascript, the **function parameters are by default created as local variables**. Therefore, the `a` inside the function is a local variable, and the `a` outside the function is a global variable. The function `example` reassigns the value of the local variable `a` to `10`, but the global variable `a` remains unchanged.

<br>

**3. Challenge 3:**
  - Answer: **`c`** - `"Hi there!"`
  - Explanation: The function `sayHi` is hoisted to the top of the file, so it is available to be called before it is declared.

<br>

**4. Challenge 4:**
  - Answer: **`b`** - `{ num: 90 }`
  - Explanation: The variable `a` stores a reference to an object. When we assign the value of `a` to `b`, we are copying the reference to the object. Therefore, `a` and `b` are pointing to the same object. When we change the value of the property `num` of the object, we are changing the value of the property `num` of the object that both `a` and `b` are pointing to.


<br>

**5. Bonus - Challenge 5:**
- Answer: **`c`**
  ```javascript
  console.log('rabbit1: ', rabbit1); // -> { name: "Bob", age: 10 }
  console.log('rabbit2: ', rabbit2); // -> { name: "Ada", age: 20 }
  ```
  <br>

- Explanation: The challenge has a catch that involves two specific concepts in JavaScript:
  
  (1) First, functions in JavaScript create their own internal variables for each parameter/argument passed to them.<br>
  (2) Second, objects (objects, arrays and functions) in JavaScript are copied by reference.

  We first store `rabbit1`'s reference in the functions internal variable `obj` created automatically for the parameter `obj`.

  On line `obj.age = 10`, variable `obj` holds a reference that points to the object passed as an argument, therefore we change the age of `rabbit1`.

  On the next line `obj = { name: "Ada", age: 20 };` , we create a totally new object and assign it to the functions internal variable `obj`. Therefore obj after this line points to the new object in memory `{ name: "Ada", age: 20 }`.

  Finally, the function returns the reference stored in `obj`. That reference is being saved in the variable `rabbit2``, therefore making the `rabbit2` to point to the object `{ name: "Ada", age: 20 }`.
