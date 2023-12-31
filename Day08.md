<h1>Day 8</h1>

<h2>Closure</h2>

- Closure is the most esoteric of JavaScript concepts
- Enables powerful pro-level functions like 'once' and 'memoize'
- Many JavaScript design patterns including the module pattern use closure
- Build iterators, handle partial application and maintain state in an asynchronous world.

- Every time we run the previous functions, they get a new memory every run -Functions didn't remember their previous outputs-.

<h3>Functions with memory</h3>

- When our functions get called, we create a live store Of data (local memory/variable environment/state) for that function's execution context.
- When the function finishes executing. its local memory is deleted (except the returned value)
- But what if our functions could hold on to live data between executions? 
- This would let our function definitions have an associated cache/persistent memory.
- But it all starts with us returning a function from another function.

- Functions can be returned from other functions:

```javascript
function createFunction(){
    function multiplyBy2 (num){
        return num*2;
    }

    return multiplyBy2;
}

const generatedFunc = createFunction() ; // just the multiplyBy2 function body will return from above function.
const result = generatedFunc(3) ; // 6

```

<h3>Calling function outside of the function call in which it was defined</h3>

```javascript
function outer(){
    let counter = 0;
    function incrementCounter(){ counter++; }
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();
```

- here myNewFunction will take the incrementCounter function and all data was in the local memory where incrementCounter declared.
![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/fdf66326-aa8b-49e1-9847-731542156126)

- And every time we use the function, if the required data isn't in its scope, it will return to (backpack -the data it takes with him previously-)
![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/4a6d1e17-b6b6-4d4b-85db-f382ec413b39)

- This backpack is a hidden attribute for the function, called {{scope}}.
- This means that every function call will remember what the previous function calls do.
- **Not all data will store on {{scope}}, just the data that the function ever makes reference to**.

<h3>What can we call backpack?</h3>

- Closed over 'Variable Environment' (C.O.V.E.).
- Persistent Lexical Scope Referenced Data (P.L.S.R.D.).
- 'Backpack'. 
- 'Closure'.

The 'backpack' (or •closure') of live data is attached incrementCounter (then to myNewFunction) through a hidden property known as [(scope)) which persists when the inner function is returned out. 


### **Individual backpacks**
If we run 'outer' again and store the returned 'incrementCounter' function definition in 'anotherFunction', this new incrementCounter function was created in a new execution context and therefore has a brand new independent backpack.

```javascript
function outer(){
    let counter = 0;
    function incrementCounter(){ counter++; }
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

// another function runs outer()
const anotherFunction = outer();
anotherFunction();
anotherFunction();
```

<h3>Closure gives our functions persistent memories and entirely new toolkit for writing professional code</h3>

**Helper functions:** Everyday professional helper functions like •once' and •memoize'.

**Iterators and generators:** Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript.

**Module pattern:** Preserve state for the life of an application without polluting the global namespace.

**Asynchronous JavaScript:** Callbacks and Promises rely on closure to persist state in an a nchronous environment

<hr>

<h2>Asyncronous JS</h2>

- Promises - the most signficant ES6 feature.
- Asynchronicity - the feature that makes dynamic web applications possible.
- The event loop - JavaScript's triage.
- Microtask queue, Callback queue and Web Browser features (APIs).

* JavaScript is:
    - Single threaded (one command runs at a time).
    - Synchronously executed (each line is run in order the code appears).
 
## JavaScript is not enough - We need new pieces (some of which aren't JavaScript at all)

Our core JavaScript engine has 3 main parts:
    - Thread of execution.
    - Memory/variable environment.
    - Call stack.

We need to add some new components:

- Web Browser APIs/Node background APIs.

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/a9d02604-28d5-432a-a289-959e4b6d4ed9)

- Promises.
- Event loop, Callback/Task queue and micro task queue.


* ES5 solution: Introducing 'callback functions', and Web Browser APIs


```javascript
function printHello(){ console.log('Hello'); }

setTimeout(printHello, 1000);

console.log('me first'); // this will print first.

// another example

function printHello(){ console.log('Hello'); }

setTimeout(printHello, 0);

console.log('me first'); // this also will print first.
```
- The code above will excute like this:
  
![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/dd747188-b788-4f2b-b09b-adfd1a12e55d)


**SetTimeout()**

```javascript
function printHello(){ console.log('Hello'); }
function blockFor1Sec(){ // a code that takes 1sec to finish excuting}

setTimeout(printHello, 0);

blockFor1Sec();
console.log('me first'); // this also will print first.
```

- Any callback function used in setTimeout() will be sent to callback queue, and they will never excute until the call stack will be empty.
- The operation when JS takes functions from callback queue to call stack names: Event Loop.


## ES5 Web Browser APIs with callback functions

Problems:

- Our response data is only available in the callback function - Callback hell.
- Maybe it feels a little Odd to think Of passing a function into another function only for it to run much later.

Benefits

- Super explicit once you understand how it works under-the-hood.

<hr>

## [Delieverables.](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/main/Delieverables/Day8.md)
