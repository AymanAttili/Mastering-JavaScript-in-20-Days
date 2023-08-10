<h2>Day3 deliererables:</h2>

- [Challenge 1.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

  ```javascript
  function forecast(arr) {
  // Only change code below this line
  return arr.slice(2,4);
  }  

  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  ```

- [Challenge 2.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

  ```javascript
  function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment, 'is', 'fun']; // Change this line
  return sentence;
  }
  ```

console.log(spreadOut());

- [Challenge 3.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

  ```javascript
  function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i=0 ; i<contacts.length ; i++){
    if(name == contacts[i].firstName){
      if(contacts[i][prop] == undefined){
        return 'No such property';
      }
      return contacts[i][prop];
    }
  }
  return 'No such contact'; 
  // Only change code above this line
  }
  ```

- [Challenge 4.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)

  ```javascript
  function reusableFunction() {
  console.log('Hi World');
  }
  
  reusableFunction();
  
  
  
  let reusableFunction1 = function() {
    console.log('Hi World');
  }
  
  let reusableFunction2 = () => {
    console.log('Hi World');
  }
  ```

- [Challenge 5.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)

  ```javascript
  // Setup
  let sum = 0;
  
  function addThree() {
    sum = sum + 3;
  }
  
  // Only change code below this line
  function addFive(){
    sum = sum + 5;
  }
  
  // Only change code above this line
  
  addThree();
  addFive();
  ```

- [Challenge 6.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

  ```javascript
  function timesFive(x){
    return x*5;
  }
  ```
