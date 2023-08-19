<h1>Day 10</h1>

<h2>Classes and Prototypes</h2>

- An enormously popular paradigm for structuring our complex code.
- Prototype chain - the feature behind-the-scenes that enables emulation of OOP but is a compelling tool in itself.
- Understanding the difference between _proto_ and prototype.
- The new and class keywords as tools to automate our object & method creation.


## Core of development (and running code):

1. Save data (e.g. in a quiz game the scores of userl and user2).

2. Run code (functions) using that data (e.g. increase user 2's score).

## That is, I want my code to be:

1. Easy to reason about.

2. Easy to add features to (new functionality).

3. Nevertheless efficient and performant.

The Object-oriented paradigm aims is to let us achieve these three goals


## ÷f I'm storing each user in my app with their respective data (let's simplify)

user1: 
- name: ‘Tim’
- score: 3

user2: 
- name: ‘Stephanie’
- score: 5

And the functionality I need to have for each user (again simplifying!)
- increment functionality (there’d be a ton of functions in practice)
  
How could I store my data and functionality together in one place?

Objects - store functions with their associated data!, This is the principle of encapsulation - and it’s going to transform how we can ‘reason about’ our code.

```javascript
const user1 = {
     name: "Will",
     score: 3,
     increment: function() { user1.score++; }
};
user1.increment(); //user1.score -> 4
```
- If i wanna declare an objct and add some properties to it, I can do this by -dot notantion-.

```javascript
onst user2 = {}; //create an empty object
//assign properties to that object
user2.name = "Tim"; 
user2.score = 6;
user2.increment = function() {
    user2.score++;
};

```

- There is another way to create objects, Using Object.create.

```javascript
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
    user3.score++;
};
```

- But these ways are not 'DRY'. So we have many solutions:

## Solution 1- Generate objects using a function

```javascript
unction userCreator(name, score) {
     const newUser = {};
     newUser.name = name;
     newUser.score = score;
     newUser.increment = function() {
         newUser.score++;
     };
     return newUser;
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment()

```
  - **Problems:** Each time we create a new user we make space in our computer's memory for all our data and functions. But our functions are just copies.
  - **Benefits:** It's simple and easy to reason about

<hr>

## Solution 2- Using the prototype chain
```javascript
function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function(){this.score++;},
    login: function(){console.log("Logged in");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

  - Store the increment function in just one object and have the interpreter, if it doesn't find the function on user1, look up to that object to check if it's there.
  - Link user1 and functionStore so the interpreter, on not finding .increment, makes  sure to check up in functionStore where it would find it
  - Make the link with Object.create() technique


* If I wanna check if a project have a specific property, Ican do it using .hasOwnProperty() function.

```javascript
function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function(){this.score++;},
    login: function(){console.log("Logged in");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.hasOwnProperty('score') 
```

* All objects have a __proto__ property by default which defaults to linking to a big  object - Object.prototype full of (somewhat) useful functions.
*  get access to it via userFunctionStore’s __proto__ property - the chain.


- What happens if i use 'this' keyword in nested function.

```javascript
function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function() { // 'this' here refers to the object runs it.
    function add1(){
        this.score++;
    } // 'this' here refers to the global memory.
    add1()
    }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

- To solve it we can like this:

```javascript
const userFunctionStore = {
    increment: function() {
        function add1() {
            this.score++;
        }
        add1.call(this);
    }
};
```

- Arrow functions are Lexical this Binding:
  Arrow functions have a lexical binding for the this keyword. This means that they do not have their own this value; instead, they inherit the this value from the enclosing scope. This behavior can be beneficial in certain scenarios, but it's important to understand the implications.

<hr>

## Solution 3 - Introducing the keyword that automates the hard work: new
When we call the function that returns an object with new in front we automate 2 things
1. Create a new user object
2. Return the new user object
But now we need to adjust how we write the body of userCreator - how can we:
- Refer to the auto-created object?
- Know where to put our single copies of functions?


### The new keyword automates a lot of our manual work

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/4375c052-454f-46aa-9060-a92fd54ded1c)


## Interlude - functions are both objects and functions 

```javascript
function multiplyBy2(num){
    return num*2
}
multiplyBy2.stored = 5=
multiplyBy2(3) // 6
multiplyBy2.stored // 5
multiplyBy2.prototype // {}
```

## The new keyword automates a lot of our manual work

```javascript
function userCreator(name, score){
    this.name = name;
    this.score = score;
}
userCreator.prototype.increment = function(){ this.score++; };
userCreator.prototype.login = function(){ console.log("login"); };
const user1 = new userCreator(“Eva”, 9)
user1.increment()

```

### Benifits:

- Faster to write. Often used in practice in professional code.

### Problems: 

- 95% of developers have no idea how it works and therefore fail interviews.
- We have to upper case first letter of the function so we know it requires ‘new’ to work! 

<hr>

## Solution 4: The class.

We’re writing our shared methods separately from our object ‘constructor’ itself (off in the userCreator.prototype object)

Other languages let us do this all in one place. ES6 lets us do so tooز

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/94e039aa-99d9-48e6-acc3-02050d3c8cf1)

## Benefits: 

- Emerging as a new standard.
- Feels more like style of other languages (e.g. Python).

## Problems: 

- 99% of developers have no idea how it works and therefore fail interviews.
- But you will not be one of them!.
