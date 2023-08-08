<h1>Day 3</h1>

<h2>Operators:</h2>

We learned two operators previously:

<h3>Plus operator:</h3>
examples:

```javascript
'Hello' + 'World!'; // concatination
1 + 2; // add
```

<h3>(typeof) operator:</h3>
this returns the type of the thing follow it:

```javascript
typeof 1; //number
typeof 'a'; //string
```
<hr>
there are alot of other operators:

<h3>Arithmetic operators</h3>
like:

```javascript
2 + 5; //add
7 - 3; //subtract
6 * 12; //multiply
19 / 7; //divide
4 ** 3; //power or exponentiation
```

<h3>Comparison operators:</h3>
These returns a boolean value.

```javascript
x > y; //greater than
x < y; //less than
x >= y; //greater than or equal
x <= y; //less than or equal
```

<h3>Equality operators</h3>

```javascript
x == y; //equal values (we dont look to the data types).
x != y; //not equal
x === y; //strict equal (equal values and data types).
x !== y; //strictly not equal.
```

<h3>Modular operator</h3>
example:

```javascript
console.log(16 % 7); //output = 2.
```

<h3>Logical operators</h3>

```javascript
A && B; //And
A || B; //Or
```

<h3>Increment and decrement operators:</h3>

```javascript
X++; //Increment.
X--; //Decrement.
```

<hr>
<hr>

<h2>Statements and decleration:</h2>

<h3>let:</h3>
This keyword (let) us to declare a variable and assign a value to it

If I didn't assign a value to the variable, its value will be <b>undefined</b>.

```javascript
let X = 1;
let Y; // its value is undefined.
Y = 10;
```

<h3>const:</h3>
This declares and assigns a 'constant', so that its value cannot be change.

```javascript
const X = 'Hello';
```

<h3><b>Variables point to Values</b></h3>

<h3>Statements VS. Expressions:</h3>
- An expression 'asks' JS for a value.
ex:

```javascript
myAssignedVariab1e;
6 + 4;
document.getE1ementById("board");
```

- An statement 'tells' JS to do something.
ex:

```javascript
let ten = 6 + 4;
myDec1aredVariab1e = "new value";
let board = document.getEIementById("board");
```
