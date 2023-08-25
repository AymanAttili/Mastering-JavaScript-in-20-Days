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
<h1>Coercion</h1>

<h2>toPrimitive(hint)</h2>

- It's recursively built, while the result is no a primitive, the function call itself again.
  
- hint? that where i put the expected type that the resukt could be.
  
- for the hint 'number' the function tries:
    - valueOf().
    - toString(), if the above didnt work.
    - and the an error if it doesn't work.
      
- for the hint 'stirng':
    - toString().
    - valueOf().
    - and the an error if it doesn't work.


<h2>toString()</h2>

- It takes any value, and returns the string representation of it.

  ![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/ff9c920e-a2f8-4c3a-a476-17f372bbfcfe)
  

  - toString(Array):
    
    ![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/0ffa4a79-49ed-4148-811b-24bb368539a4)


  - toString(Object), this will turn to 'toPrimitive(String)':
 
    ![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/fc2b6eb1-397f-4055-b867-71bc9fc3d722)


<hr>

<h2>toNumber()</h2>

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/4b8f850d-6599-4a72-bd80-877342e52e14)

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/9bc82751-b898-45b7-af78-64a841b2c788)


  - toNumber(Object), this will turn into 'toPrimitive(Number):

    ![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/d4ea27a6-790e-4814-9196-90984ef08a9f)

    ![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/12d6eb03-b6b0-446d-80c6-d4a545f1e139)

    ![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/96427951-67ba-4ced-8b17-864b7535f06e)


<hr>

<h2>toBoolean()</h2>

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/40b8ffe0-af1e-4d2d-a294-6517262be13b)



<h2>Cases of coercion</h2>

- If I put plus operator between two values one of them is a string, then the result is a string.
  
```javascript
let msg1 = "Hello";
let msg2 = 4;

console.log(msg1 + msg2); "Hello 4"
```

```javascript
let age = 21;

console.log(`My name is Ayman, I'm ${age} years old.`); //My name is Ayman, I'm 21 years old.

// don't do this:
${age + ""};
${[age].join("")};
${age.toString()};

// If you wanna be explicit use this:
${String(age)};

```

- I can convert a string to number by putting unary plus operator before it;

```javascript
let str = '12';

console.log(str + 1); // 121
console.log(+str + 1); // 13
console.log(str - 1); // 11
```

<hr>
<h2>Boxing</h2>

- Helps us to access properties on primitive values.

```javascript
let len = "Ayman".length;
```

<hr>
<h2>Corner Cases of Coercion</h2>

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/b55b287d-b015-4655-8ee4-aa493792d372)

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/371ac7cb-4fdf-41e9-b841-8c7177dbb372)


<hr>

## [Delieverables.](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/0973b32ce773f9e3fc29e6f674ee15c06c54f0fb/Delieverables/Day11.md)
