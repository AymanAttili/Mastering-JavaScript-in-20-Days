<h1>Day 6</h1>

<h2>Destructuring</h2>

- Destructuring is a fancy way of declaring multiple variables at once.
- By "extracting" values from an object with their property names.

```javascript
const spices = [
    {name: 'Emma', nickname: 'Baby'},
    {name: 'M7MD', nickname: '3llawi'},
    {name: 'Ahmad', nickname: 'Mohsen'}
];
let {name, nickname} = spices[1];
```

- If we only care about some of properties, we can omit the others.

```javascript
let {nickname} = spices[0];
```

- We can also destructure Arrays, assigning variables for their items.

```javascript
const [baby, 3llawi, Mohsen] = spices;
```

- We can ignore the valuesin the array we don't need, and we can use commas to skip values.

```javascript
const [emma, 3llawi] = spices;
//
const [,, Mohsen] = spices;
```

- We can use ... to collect remaining values.

```javascript
const [babySpices, ...adultSpices] = spices;
// adultSpices = array contains the remaining values.
```

<h2>Async Functions</h2>
- To use 'await' we have to declare the function as a 'async'.

```javascript
async function fetchResponse(url) {
    const response = await fetch(url);
    return response;
}
```

- javascript is a 'Single-threaded' language.


## [Delieverables.](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/blob/main/Delieverables/Day6.md)
