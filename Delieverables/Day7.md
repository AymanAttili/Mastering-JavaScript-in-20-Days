<h2>Day7 deliererables:</h2>


- [First Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

  ```javascript
  const squareList = arr => {
      // Only change code below this line
      return arr.filter(e => e>0 && e%1==0).map(e => e*e);
      // Only change code above this line
  };
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers);
  ```
  
- [Second Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)
  
  ```javascript
   // Only change code below this line
  function urlSlug(title) {
      title = title.trim();
      title = title.toLowerCase();
      let arr = title.split(' ')
      arr = arr.map(e => e.trim()).filter(e => e!='');
  
      console.log(arr.reduce((e,pre) => e+'-'+pre))
      
      return arr.reduce((e,pre) => e.toLowerCase()+'-'+pre);
  }
  // Only change code above this line
  urlSlug(" Winter Is  Coming");
  ```

<hr>

## Question 1: Functions and Callbacks

Implement a JavaScript function called mapAsync that takes an array and a callback function. 
The function should map each element of the array to a new value using the callback function 
asynchronously. 

The final result should be returned as a Promise.

- Solution:
```javascript

```
-------------------------------------------------------------------
## Question 2: Call Stack and Recursion

Write a JavaScript function called sumRange that calculates the sum of all integers in a given range. 
The function should use recursion to handle the calculation and demonstrate understanding of the call stack.

- Solution:
```javascript
const sumRange = (number) => {
    if(number == 0)
        return 0;
    return sumRange(number-1) + number;
}
```
