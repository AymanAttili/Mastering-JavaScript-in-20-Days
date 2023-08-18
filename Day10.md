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

    1- Generate objects using a function

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
