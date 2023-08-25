<h1>Day 12</h1>

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

