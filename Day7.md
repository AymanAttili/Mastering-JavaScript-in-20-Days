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
