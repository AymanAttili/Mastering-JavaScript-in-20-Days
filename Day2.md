<h1>Day 2</h1>

<h2>If I wanna know the data type of some value I can use:</h2>

```javascript
typeof value;
```

<hr>

<h1>Data Types:</h1>

<h2>Primitive data types:</h2>

<h3>String</h3>
Is a set of characters.
represented by these:

```javascript
'Ahmad'
"Ahmad"
`Ahmad`
```

The characters positions starts from 0 (0-indexed).

To return the i-th character (character at index i-1):

```javascript
str[i-1];
```

If I wanna connect to strings together:

```javascript
str1 + str2;
```

<b>String functions:</b>

- To find the length of a string use this:

```javascript
let str = 'Ayman'
console.log(str.length);
```

- To return the index of a specific character or the index of the beginning if a specific substring:

```javascript
str.indexOf(str2); //where str2 is a character or a string.
// if str2 doesn't exist in str it will return -1.
```

- To check if a substring is is included in a string:

```javascript
str.includes(str2); //where str2 is the substring.
// it returns a boolean value.
```

- To check if a string starts with a specific substring:

```javascript
str.startsWith(str2);
// it returns a boolean value.
```

- To convert all characters in string to lower or upper case:

```javascript
str.toLowerCase();
str.toUpperCase();
```

<h3>Number</h3>

all of these are numbers:

```javascript
9
525600
-3.45
1.21e9
Infinity
```

<h3>boolean</h3>

```javascript
true
false
```

<h3>undefined</h3>
It represents the accidental nothing.

<h3>null</h3>
It represents the deliberate nothing.
It is an object.

<hr>

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

-----<h3><b>Variables point to Values not contain it</b></h3>-----

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

<hr>

## [Derievables.](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/main/Delieverables/Day2.md)
