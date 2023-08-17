<h1>Day 7</h1>

<h2>JS Principles:</h2>

- Goes through the code line-by-line and runs/ 'executes' each line - known as the **thread of execution**.
- Saves 'data' like strings and arrays so we can use that data later - in its memory. We can even save code ('functions').

<h3>Functions</h3>
Code we save ('define') functions & can use (callinvoke/execute/run) later with the function's name & ( ).

<h3>Excutiob Context</h3>
Created to run the code of a function - has 2 parts:
- Thread of execution -JS just have one-.
- Memory.

```javascript
const num = 3;

function multiptyBy2 (inputNumber) {
const result = inputNumber*2;
return result;
}

const output = multiplyBy2(num) ;
const newOutput = multiplyBy2(10) ;
```

- How the code above runs on JS:

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/1cb00510-869c-4194-9c9b-a3e0c1c58817)

<h3>Call stack</h3>

- JavaScript keeps track of what function is currently running (where's the thread of execution).
- Run a function - add to call stack.
- Finish running the function - JS removes it from call stack.
- Whatever is top of the call stack
  - that's the function we're currently running


**DRY**: Dont Reapeat Yourself.
- instead of declaring many functions and each of them handle a specific value, we can generalize the functon to make it reusable.
    - 'Parameters' (placeholders) mean we don't need to decide what       data to run our functionality on until we run the function.
    - Then provide an actual value ('argument') when we run the           function
```javascript
function tenMultiply(){
    return 10*10;
}
function twentyMultily(){
    return 12*12;
}

// Instead we will generalize the multiply function

function multiply(x){
    return x*x;
}
```
- We can use functions to handle repeating functionality.

<h3>High Order Functions</h3>

```javascrit
function copyArrayAndAdd3 (array) {
    const output = [];
    for (let i = 0 ; i < array.length ; i++) {
        output.push(array[i] + 3);
    }
    return output;
}

function copyArrayAndMultiply6 (array) {
    const output = [];
    for (let i = 0 ; i < array.length ; i++) {
        output.push(array[i] * 6);
    }
    return output;
}

// using high order function to handle redunduncy
function copyArrayAndManipulate(array, instructions){
    const output = [];
    for (let i = 0 ; i < array.length ; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

function multiply6(input) => { return input * 6 };
function add3(input) => { return input + 3 };

const result = copyArrayAndManipulate([1, 2, 3], add3);
```
![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/a702f907-45b7-4a30-a876-c598442feb72)


Functions in javascript = first class objects.
They can co-exist with and can be treated like any other javascript object
1. Assigned to variables and properties of other objects
2. Passed as arguments into functions
3. Returned as values from functions

<h3>Callbacks & Higher Order Function</h3>

<h4>Higher-order functions</h4>
Takes in a function or passes out a function.
Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently.
- in our previous example above, copyArrayAndManipulate is our higher order function, and add3 function is the callnack function.

**Callbacks and Higher Order Functions simplify our code and keep it DRY**

**Declarative readable code:** Map, filter. reduce - the most readable way to write code to work with data.
**Codesmith & pro interview prep:** One of the most popular topics to test in interview both for Codesmith and mid/senior level job interviews.
**Asynchronous JavaScript:** Callbacks are a core aspect of async JavaScript. and are under-the-hood of promises, async/await.

<hr>

<h3>Arrow function</h3>

```javascript
function multiply6(input) => { return input * 6 };

// We can convert it to this

const multiply6 = (input) => {return input * 6};

// we can simple it more and more

const multiply6 = (input) => input * 6;

// more and more

const multiply6 = input => input * 6;

// in the previous example i can replace multiply6 function with an anonymous function

 const result = copyArrayAndManipulate([1, 2, 3], input => input * 6); // this will be equal to copyArrayAndManipulate([1, 2, 3], multiply6);
```

<h3>Anonymous and arrow functions</h3>

- Improve immediate legibility of the code
- But at least for our purposes here they are •syntactic sugar' - we'll see their full effects later.
- Understanding how they're working under-the-hood is vital to avoid confusion.

<hr>

<h3>Pair programming</h3>

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/525b17fe-b621-4cde-a4c7-4568e7b3c1b0)

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/84b28e1e-b88d-4be2-8abc-487d9d5d7228)

<hr>

## [Delieverables.](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/main/Delieverables/Day7.md)
