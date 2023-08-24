# Learning sprint (1), week (3), day (1) delieverables

## Question 1:

Write a function called `convertStringToNumber` that converts a string to a
number using the unary plus operator. 

If the input is not a string, return an object of the input's value and type.

```javascript
function convertStringToNumber(input) {
    //write your own code here
    if (typeof input === 'string') {
        return +input;
    } else {
        return {
            value: input,
            type: typeof input
        }
    }
}

console.log(convertStringToNumber('1'));
console.log(convertStringToNumber(true));
}
```

-------------------------------------------------------------------

## Question 2:

Write a function called `checkNaN` that takes a single argument and returns
`true` if the argument is `NaN` and `false` otherwise. 

```javascript
const checkNaN = (value)=>{
    return value !== value;
}

```

-------------------------------------------------------------------

## Question 3: 

Write a function called `isEmptyValue` that checks if a given input is an empty value (undefined,
null, or empty string). 

```javascript
function isEmptyValue(value) {
    return value === '' || value == null;
}
```

-------------------------------------------------------------------

## Question 4: 

Write a function called `compareObjects` that takes 2 arguments of type
`"object"` and compares them. If both arguments are equal, return `true`. If
not, return `false`.

If either argument is not of type `"object"`, the function should return an
array of the arguments. 

```javascript
function compareObjects(input1, input2) {
    if (typeof input1 !== "object" || typeof input2 !== "object") {
        return [input1, input2];
    }

    let props1 = Object.keys(input1);
    let props2 = Object.keys(input2);

    if (props1.length != props2.length) {
        return false;
    }

    for (let prop of props1) {
        if (!input2.hasOwnProperty(prop) || input1[prop] !== input2[prop]) {
            return false;
        }
    }

    return true;
}
```

-------------------------------------------------------------------

## Question 5: 

Write a function called `complexCoercion` that takes a single argument and
checks if its type is primitive, and if so returns a coerced value according to
the rules below.

coercion rules: 
- if input is primive and:
  - if input is a number, convert to string and then return a boolean. 
  - if input is a string, return a boolean.
  - if input is `null` or `undefined`, return `false`.

If input is not a primitive type, return the argument.

```javascript
const complexCoercion = (input) => {
    if(typeof input === "number"){
      input = String(input);
    }

    if(typeof input === "string"){
      return Boolean(input);
    }

    if(input == null){
      return false;
    }


    return input;
  }const complexCoercion = (input) => {
    if(typeof input === "number"){
      input = String(input);
    }

    if(typeof input === "string"){
      return Boolean(input);
    }

    if(input == null){
      return false;
    }


    return input;
}
```
