<h1>Day 2</h1>

<h2>If i wanna know the data type of some value I can use:</h2>

```javascript
typeof value;
```

<hr>

<h2>Data Types:</h2>

<h3>Primitive data types:</h3>

<h4>String</h4>
Is a set of characters.
represented by these:

```javascript
'Ahmad'
"Ahmad"
`Ahmad`
```

The characters positions starts from 0 (0-indexed).

To return the i-th character (character at index i-1):

```javascript
str[i-1];
<h4>Number</h4>
```

If I wanna connect to strings together:

```javascript
str1 + str2;
```

- String functions:

To find the length of a string use this:

```javascript
let str = 'Ayman'
console.log(str.length);
```

To return the index of a specific character or the index of the beginning if a specific substring:

```javascript
str.indexOf(str2); //where str2 is a character or a string.
// if str2 doesn't exist in str it will return -1.
```

To chech if a substring is is included in a string:

```javascript
str.includes(str2); //where str2 is the substring.
// it returns a boolean value.
```

To check if a string starts with a specific substring:

```javascript
str.startsWith(str2);
// it returns a boolean value.
```

To convert all characters in string to lower or upper case:

```javascript
str.toLowerCase();
str.toUpperCase();
```


all of these are numbers:

```javascript
9
525600
-3.45
1.21e9
Infinity
```

<h4>boolean</h4>

```javascript
true
false
```

<h4>undefined</h4>
It represents the accidental nothing.

<h4>null</h4>
It represents the deliberate nothing.
It is an object.
