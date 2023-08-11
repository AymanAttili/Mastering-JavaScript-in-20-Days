<h1>Day 4</h1>

<h2>Functions</h2>

- values are things, variables point to things and **functions do things**.

<h3>Declaring (creating) a function:</h3>

    ```javascript
    function mulByFive(x){
        return x * 5;
    }
    ```

<h3>Calling (using) a function:</h3>

```javascript
const ten = mulByFive(2);
```

<h3>Parameters & Arguments</h3>
- Some functions need more than one value to work:

```javascript
function add(x, y){ // x, y are the function *parameters*.
    return x + y;
}

add(4, 7); // 4, 7 are the function *arguments*.
```
- Some functions don't even need any values:

  ```javascript
  function getRandom(){
        return Math.random();
  }
 
  getRandom();
  ```

- Parameters are the inputs a function expects.
- Arguments are the actual values that the function is called with.
- Parameters should be named like variables, and behave like variables within the function body.
  ```javascript
  // these two forms of parameter names doesn't work, and make an error
  function doesThisWork( "literally a value") {
      return true;
  }
  function howAboutThis( 1weirdvariable! )
      return true;
  }
  ```
- JS is pretty "loosey-goosey" about missing/extra arguments.
- It is not mandatory for the function to return a value -it will return undefined-.

- Another function type is (Arrow Function)

  ```javascript
  (x, y) => x+y; //unnamed (anonymous) function.

  const add = (x, y) => x + y;
  // is equivalent to
  function add(x, y){
      return x + y;
  }
  ```
  
  - Arrow functions are great when we just want toreturn a value.
  - For one-parameter functions, parentheses are optional, but for more than one, they are        required.

 ```javascript
 x => x * x;
(x, y) => x * y;
```
- If we need to do more than just return a value, we can use curly braces for a "normal"        function body. In that case, we still need a return.

```javascript
const addAndLog = (x, y) => {
    let sum = x + y;
    console.log( 'The sum is', sum);
    return sum;
}
```

<hr>

<h2>Scopes</h2>
- ٍcopes determines where variables are 'in play'.
- Scopes are nested within the program.
- The widest scope is the global scope.
- Each function gets its own new scope within the scope where it was declared.

```javascript
let planet "Jupiter";
function scopeOut( ) {
    let planet "Mars";
    console.log( "Inner planet:" , planet); // this will log 'Mars'.
}
scopeOut() ;
console.log( "Outer planet:" , planet); // this will log 'Jupiter'.

```
- Within each scope, you can access variables declared in a wider scope (e.g. global scope). But not those declared in a narrower scope (e.g. function scope).

```javascript
let planet "Jupiter";
function scopeOut( ) {
    planet "Mars";
    console.log( "Inner planet:" , planet); // this will log 'Mars'.
}
scopeOut() ;
console.log( "Outer planet:" , planet); // this will log 'Mars'.
```

<h3>Var VS. let</h3>

- The var statement declares function-scoped or **globally-scoped** variables, optionally initializing each to a value.
- The let declaration declares re-assignable, **block-scoped** local variables, optionally initializing each to a value.

```javascript
function myFun(){
    var myX = 'Ahmad';
}
myFun();
console.log(myX); // error, myX has not declared (because its a function scope).

///
{
    var myY = 3;
}
console.log(myX); // this will print 3, because its a global scope
```

<hr>

<h2>Events</h2>

- The web browser fires events when certain things happen on the page.
- For example, when the user clicks somewhere on the page, a *click* event is fired.
- We can detect events with JS using an event listener The .addEventListener( ) method lets us listen for events on a DOM element:

```javascript
document.addEventListener("click" , () => {
    console.log( "clicked" )
});
```

- .addEventListener( ) takes 2 parameters:
    1- The name of the event to listen to (e.g. "click").
    2- A handler function that JS calls when that event is fired on this element.
  
- JS passes an event object to the handler function with information about the event. If we accept this as a parameter, we can use it to get details:

```javascript
document.addEventListener("click" , (event) => {
    console.log(event);
    event.target; // is the element the event fired on.
});
```

- "click" isn't the only type of event we can handle
    * "dblclick"
    * "mouseover"
    * "mouseout"
    ...and lots more!


<hr>

## [Delieverables.](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/main/Delieverables/Day4.md)
