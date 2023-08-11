<h2>Day1 deliererables:</h2>


- [First Challenge.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
   
  ```javascript
   // Declare the myGlobal variable below this line
  let myGlobal = 10;
  
  function fun1() {
      // Assign 5 to oopsGlobal here
      oopsGlobal = 5;
  }
  
  // Only change code above this line
  
  function fun2() {
      let output = "";
      if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
      }
      if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
      }
      console.log(output);
  }
  ```
  
- [Second Challenge.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)
   
  ```javascript
  function myLocalScope() {
      // Only change code below this line
      var myVar = 'foo';
      console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  ```

- [Third Challenge.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)
-    
  ```javascript
  // Setup
  const outerWear = "T-Shirt";
  
  function myOutfit() {
      // Only change code below this line
      const outerWear = 'sweater';
      // or let outerWear = 'sweater';
    
    
      // Only change code above this line
      return outerWear;
  }
  
  myOutfit();
  ```
  
- [Fourth Challenge.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)
   
  ```javascript
   function nextInLine(arr, item) {
        // Only change code below this line
        arr.push(item);
        item = arr.shift();
        return item;
        // Only change code above this line
   }

  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  ```

  
  
