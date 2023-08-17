<h1>Day 8</h1>


## Question 1:

Write a closure named createCounter that takes an initial value start and returns a function. 
The returned function, when invoked, should increment the counter by 1 and return the updated value.

- Solution:

```javascript
function createCounter(initial){
    let counter = initial;
    function incrementCounter(){
        counter++;
        return counter;
    }

    return incrementCounter;
}
```
-------------------------------------------------------------------
## Question 2:

Write a closure named calculateAverage that takes an array of numbers, nums, and returns a function. 
The returned function, when invoked, should calculate and return the average of the numbers in the array.

- Solution
```javascript
function calculateAverage(nums){
    return () => {
        let sum=0;
        nums.map(e => sum+=e)
        return sum/nums.length;
    }
}

```
-------------------------------------------------------------------
## Question 3: 

Write a closure named powerOf that takes a base number base and returns a function. 
The returned function, when invoked with an exponent exp, should calculate and return the result of base raised to the power of exp.

- Solution
```javascript
function powerOf(base){
    return (exp) => {
        return Math.pow(base,exp);
    }
}
```
-------------------------------------------------------------------
## Question 4: 

Write a closure named compose that takes multiple functions as arguments and returns a new function. 
The returned function should apply the provided functions in reverse order, passing the result of each function as an argument to the next function.

- Solution
```javascript
function compose(...functions){
    functions.reverse();
    return (input) => functions.reduce((total, func) => func(total), input);
}

// or

function compose(...functions){
    return (input) => functions.reduceRight((total, func) => func(total), input);
}
```
