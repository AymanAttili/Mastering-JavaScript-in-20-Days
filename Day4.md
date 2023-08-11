<h1>Day 4</h1>

<h2>Functions</h2>

- values are things, variables point to things and **functions do things**.

<h3>Declaring (creating) a function:</h3>

    ```javascript
    function mulByFive(x){
        return x * 5;
    }
    ```

<h3>Calling (using) a function:</h3>

```javascript
const ten = mulByFive(2);
```

<h3>Parameters & Arguments</h3>
- Some functions need more than one value to work:

```javascript
function add(x, y){ // x, y are the function *parameters*.
    return x + y;
}

add(4, 7); // 4, 7 are the function *arguments*.
```
