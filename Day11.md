# Day 11

<h1>Types</h1>

- **In javaScript, not everything is an object, But they can behave as an objects.**

<h2>Primitive types:</h2>

- undefined.
- string.
- number.
- boolean.
- object. including arrays and functions.
- symbol.

### In javaScript variables don't have types, but values have.

<h2>typeof</h2>

```javascript
// here we are asking what is the type of the value in v
var v;
typeof v;  //undefined

v = '1';
typeof v;  //string

v = 2;
typeof v;  //number

v = true;
typeof v;  //boolean

v = {};
typeof v;  //object

v = Symbol();
typeof v;  //symbol

v = null;
typeof v;  //object

v = function(){};
typeof v;  //function

v = [1, 2, 3];
typeof v;  //object

v = 42n; // or BigInt(42)
typeof v;  //bigint
```

- undefined: means that the variable doesn't have a value now.

<h2>undefined vs undeclared</h2>

- undefined: I have the variable, but it hasn't any value.
- undeclared: I didn;t declare the variable essentiallyز
