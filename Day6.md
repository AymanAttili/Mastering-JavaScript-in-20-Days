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

- We can ignore the valuesin the array we don't need
