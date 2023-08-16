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
    counter;
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
