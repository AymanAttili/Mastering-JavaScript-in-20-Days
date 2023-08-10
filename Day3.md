<h1>Day 3</h1>

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
numbers[1] = 5;// numbers3 => [1, 5, 3
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

<hr>

<h2>Objects</h2>

- It can be declared like this:

```javascript
let myObj = {
    name: 'Ayman Attili',
    age: 21,
    position: 'QA Automation Engineer'
};
```

- Objects collect multiple values together to describe more complex data.
- Similar to how we can point at different values using variables in our code.
- Objects let us point at related values using *properties* in the object.
- I can get the properties values, use them and modify:

  ```javascript
  // get
  myObj.name;
  myObj.age;

  // use
  myObj.position.startsWith('QA');
  let birthdate = 2023 - myObj.age;

  // modify
  myObj.age = 22;
  myObj.isGraduated = false; // this will add a new property to myObj.

  // another way to access properties
  myObj['age'];
  ```

<h3>Objects methods:</h3>
- Objects can hava a function as a property:

```javascript
let myObj = {
    name: 'Ayman Attili',
    age: 21,
    position: 'QA Automation Engineer'
    talk: function(){
            console.log('Hello!');
          }
};
```

- I can access other properties on the object using 'this':

  ```javascript
  let myObj = {
    name: 'Ayman Attili',
    talk: function(){
            console.log('Hello my name is ', this.name);
          }
  };
  ```

- Objects have a built-in methods like:

```javascript
myObj.freeze(); // this will make my object immutable.

// array methods
arr.push(1);
arr.unshift();
```

<hr>
- We can declare objects inside an object (nested objects);

```javascript
const menu = {
    lunch: {
        appetizer: "salad",
        main: "spaghetti ",
        dessert: "tiramisu"
    },
    dinner: {
        appetizer: "samosa",
        main: "saag paneer",
        dessert: "gulab jamun"
    }
};
const tiramisu = menu.lunch.dessert;

// arrays are also objects

const pupil = {
    name: 'Ahmad',
    languages: ['Arabic', 'English']
};
```

<h3>Built-in objects</h3>

- 'document' is an object we deal with earlier:

```javascript
document. title = "Tic Tac Toe" ;
document.querySe1ector("h2").append(" and love") ;
```

- console is an object too.

```javascript
console.log("hello coder!");
console.log(document.querySe1ector("hl").textContent) ;
console.warn(something seems iffy");
console.error("oh no, it broke!");
console.clear();
```

- Math object:

```javascript
let randomNumber = Math.random();
const pi = Math.PI;
const five = Math.abs(—5);
```

- Strings are primitive values (not objects), but JS automatically wraps them in String objects

```javascript
const hello = "hello";
console.log = (hello.length) ;
const yello = hello.toUpperCase() 
```

<hr>

##[ Delieverables.](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/main/Delieverables/Day3.md)
