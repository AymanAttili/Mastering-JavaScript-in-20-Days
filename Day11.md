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

typeof NaN;  // number
```

- undefined: means that the variable doesn't have a value now.
- undefinedes are equal to each other.

<h2>undefined vs undeclared</h2>

- **undefined:** I have the variable, but it hasn't any value.
- **undeclared:** I didn;t declare the variable essentiallyز
  

NaN: an invalid number.

NaN with any mathmetical operation returns NaN.

NaNs are not equal to each other.

```javascript
isNaN('Ahmad Mohsen);  //true
Number.isNaN('Ahmad Mohsen);  //false.
// why? because isNaN coerce the value in it to number -it will be coerce to NaN-, and then check if it is NaN, so it returns true,
// But Number.isNaN don't coerce the value in it. 
```

<h2>Type Check</h2>

- If I wanna compare two values, ES6 gives me a built-in funtion Object.is().

```javascript
Object.is( 0, -0) //false.
```

<h1>Fundemental Objects</h1>

- Use new -make new new instances-:
  - Object()
  - Array()
  - Function()
  - Date()
  - RegExp()
  - Error()

- Don't use new:
  - String()
  - Number()
  - Boolean()


<hr>

## [Delieverables.](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/0973b32ce773f9e3fc29e6f674ee15c06c54f0fb/Delieverables/Day11.md)
