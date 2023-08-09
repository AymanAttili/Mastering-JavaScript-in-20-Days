![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/af8fa15b-5305-4998-b249-275f669f52d3)<h1>Day 3</h1>

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
<hr>

<h2>Arrays</h2>

<h3>Notes</h3>

- An ordered collection, keeps some related values together.

```javascript
let myArr = [ 1 , 4 , 6 ];
```

- Like strings, arrays have a length:

```javascript
myArr.length; //returns the number of elements in this array.
```

- Each value has an index:

```javascript
myArr[2];
myArr.indexOf(1);
```

- 0-indexed.

```javascript
let myArr = [ 1 , 4 , 6 ];
console.log(myArr[2]); //this will print 6
```

- We can check if it has a specific element:

```javascript
myArr.includes( 4 ); //returns a boolean value.
```

- Unlike strings, we can modify it (by assigning a new values to existing indices or with modifying methods):

```javascript
nmyArr[1] = 1;
myArr.pop();
myArr.push(10);
```

- Can be empty, or hold a single value.

```javascript
let empty = [];
let oneItemArray = [ 'Single' ];
```
  
- Can hold any type of items, or mix and match.

```javascript
let mixArray = [ 2, 'Ayman', {X: 3, Y:4}, null, false];
```

<h3>Methods:</h3>

```javascript
[1, 5, 18, 2, 1].sort(); //This will sort the elements ascending -this will sort them as a strings-.
['Ayman', 'Layth', 'Attili'].join(' & '); //this will join elements in one string and put & between them.
[1, 2, 3].concat([4, 5, 6]); //this will produce a new array [1, 2, 3, 4, 5, 6].

let arr = [1, 2, 3]
arr.push(4); //arr => [1, 2, 3, 4]. it puts the element at the end of array.
arr.push([5, 6, 7]); // arr => [1, 2, 3, 4, [5, 6, 7]].
arr.pop(); // arr => [1, 2, 3, 4], it deletes the element at the end of array.
arr.shift(0); // arr => [0, 1, 2, 3, 4], it puts the element t the beginning of array.
arr.unshift(); // arr => [1, 2, 3, 4], it deletes the element t the beginning of array.
```

<h3>Mutable VS. Immutable</h3>
- "Mutable" data can be edited(e.g. Arrays).
- "Immutable" data always stays the same (e.g. strings & other primitives).

```javascript
let numbersl = [1, 2, 3]
let resultl = numbers1.push(4);
numbers1; // [1, 2, 3, 4].

/////

let numbers2 = [1, 2, 3[;
let result2 = numbers2.concat([4]);
numbers2; // [1, 2, 3].

///

const numbers3 = [1, 2, 3];
numbers[1] = 5;// numbers3 => [1, 5, 3].
//Why?? because const prevent to change the item that it points to, not the value of it;

///

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

arr2; // this will print [1, 2, 3, 4]
arr1; // this will print [1, 2, 3, 4] also.
//Why? because when we declare arr2 we points it to an array object, so any change on arr2 will change the array that ut poibts to -the same array that arr1 points to-.
```
- <b>If your value won't change, use const.</b>

