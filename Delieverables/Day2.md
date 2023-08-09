# day2 delieverables:

### QUESTION #1

Consider the following JavaScript code:

```javascript
let a = 0;
let b = "0";
let c = false;
let d = "false";

console.log(a == b);
console.log(b === c);
console.log(!!d);
```
What will be the output of each console.log statement? **_You MUST explain WHY_**.

- Solution:
  
  console.log(a == b); ==> ***true, because 0 equals "0" even if their data type differs (double equal ignores data types).***

  console.log(b === c); ==> ***false, even if "0" equals false, but their data types differs.***

  console.log(!!d); ==> ***true, because d is a string and any non-empty string has a value of 'true', !!true ==> true.***

-------------------------------------------------------------------

### QUESTION #2:


Consider the following JavaScript expression:

```javascript
console.log(4 + 5 * "7");
```

What will be the output of this expression? **_You MUST explain the steps of evaluation taken by JS_**.

- Solution:

  console.log(4 + 5 * "7"); ==> ***this will print 39, because multiplication has the most priority ==> 4 + (5 * "7"), and when we multiply a number to a string, the string parse to number ==> 4 + 35 ==> 39***

-------------------------------------------------------------------

### QUESTION #3:

Evaluate the following expression:

```javascript
let result = 5 + 2 * 3 - 1;
```

What will be the output of this expression? **_You MUST explain the steps of evaluation taken by JS_**.

- Solution:

  ***result = 5 + 2 * 3 - 1 ==> 5 + (2 * 3) -1 ==> 5 + 6 - 1 ==> 10.***
-------------------------------------------------------------------

### QUESTION #4:

Consider the following code:

```javascript
let x = 10;
let y = '10';
console.log(x == y);
console.log(x === y);
```
What will be the output of each `console.log` statement? **_You MUST explain WHY_**.


- Solution:

  console.log(x == y); ==> ***true, because 10 equals "10" even if their data types differs (double equal ignores data types).***
  
  console.log(x === y); ==> ***false, even if 10 equals "10" but their data types differs (triple equal checks data types).***
-------------------------------------------------------------------

### QUESTION #5:

Given the code below:

```javascript
let num = "15";
let isPositive = true;
let result = (num > 10 && isPositive) || num < 0;
console.log(result);
```

What is the value of result? **_You MUST explain the steps of evaluation taken by JS_**
