<h1>Day 5</h1>

<h2>Conditionals</h2>

- 'if' statements let us execute code under a certain condition.
- code in the 'if' block only runs if the (condition) is true.

```javascript
if(condition){
    // statement/s here.
}
```

- We can use 'else' to run other code if (condition ) is false.

```javascript
if(condition){
    // statement/s here.
} else {
    // statement/s here.
}
```

- We can chain else and if blocks to account for multiple conditions.

```javascript
if(condition){
    // statement/s here.
} else if {
    // statement/s here.
} else {
    // statements here.
}
```

- The (condition) is usually an expression that evaluates to a boolean.
- If it's given some other value, JS will convert it to a *boolean* and decide based on its "truthiness".

 ```javascript
if('Ayman'){ // this will convert to true, because it's not an empty string
    console.log('HI');
}

if(0){ // this will convert to false, because all numbers are true, and 0 is false.
    console.log('0');
}
```

- null and undefined are falsy too.

<h3>Logical and ternary operators</h3>
- The ! operator negates a boolean (gives its opposite).
- The ( || , && ) operators provides us a way to check the truthiness of more than one value.

- JS also has a "shortcut" operator for writing quick conditionals, it needs 3 values to work:

```javascript
condition ? valueIfTrue : ValueIfFalse; //this is a *conditional ternary operator*.

//this is equivalent to:

if(condition){
    valueIfTrue;
} else {
    valueIfFalse;
}
```

<h3>Loops/h3>

- Loops let us run the same chunk of code multiple times.

```javascript
for(let i=0 ; i<10 ; i++{
    // do something.
}

for(let n of arr){
    // do something.
}
```

<h4>Map & filter</h4>

- The map & filter methods also let us process all the items in an array.
- Map calls a function on each item in an array to create a new array:

```javascript
const spices = [
    {name: "Emma ", nickname: "Baby"},
    {name: "Geri ", nickname: "Ginger"},
    {name: "Mel B ", nickname: "Scary"},
    {name: "Mel C ", nickname: "Sporty"},
    {name: "Victoria ", nickname: "Posh"},
];

const nicknames = spices.map(s => s.nickname + " Spice"); // ["Baby Spice", "Ginger Spice", .......].
```

Note: 
    - To insert a value into a string we use:

```javascript
s = `${variable} Spice`.
```

- filter calls a true/false function on each item and creates a new array with only the items where the function returns true.

```javascript
const mels = spices.filter(s => s.name.includes("Mel"));
// mels = [{name: "Mel B ", nickname: "Scary"},{name: "Mel C ", nickname: "Sporty"}]
```


<h4>Spread (...)</h4>
- We can use it to put all items from one array inside another array.

```javascript
const oldBurns = ["square" ,"wack"];
const newBurns = ["basic" ,"dusty"];
const burnBook = [...oldBurns, ...newBurns];

// Equivalent to

const burnBook = oldBurns.concat(newBurns);

// or

const burnBook = [];
burnBooks.push(newBurns);
burnBooks.shift(oldBurns);
```

## [JS Quiz project](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/main/Delieverables/JSQuiz.html)
