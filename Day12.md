<h1>Day 12</h1>

Double equal Summary:
- If the types are the same: ===.
- If null or undefined: equal.
- If non-primitive: toPrimitive().
- Prefer: toNumber().


<hr>

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/9ffe12c8-5604-43be-a487-f4b64899e997)

How???

![image](https://github.com/AymanAttili/Mastering-JavaScript-in-20-Days/assets/96499629/0a350b75-1d7e-40d6-b48a-0c04d265f713)


<hr>

- Knowing types is always better than not knowing them.
- Static Types is not the only (or even necessarily best) way to know your types.
- == is not about comparisons with unknown types.
- == is about comparisons with known type(s), optionally where conversions are helpful.

- If you know the type(s) in a comparison:
  - If both types are the same, == is identical to ===.
  - Using === would be unnecessary, so prefer the shorter ==.

- Since === is pointless when the types don't match, it's similarly unnecessary when they do match.

- If you know the type(s) in a comparison:
  - If the types are different, using one === would be broken.
  - Prefer the more powerful == or don't compare at all.
  - If the types are different, the equivalent of one == would be two (or more!) === (ie, "slower")Prefer the "faster" single ==.
  - If the types are different, two (or more!) === comparisons may distract the reader/ Prefer the cleaner single ==.
  - **Summary: whether the types match or not, == is the more sensible choice.**
 

- If you know the type(s) in a comparison:
  - Not knowing the types means not fully understanding that code. So, best to refactor so you can know the types.
  - The uncertainty of not knowing types should be obvious to reader.  The most obvious signal is ===.
  - Not knowing the types is equivalent to assuming type conversion. Because of corner cases, the only safe choice is ===.
  - Summary: if you can't or won't use known and obvious types, === is the only reasonable choice.


 - Even if === would always be equivalent to == in your code, using it everywhere sends a wrong semantic signal: "Protecting myself 
since I don't know/trust the types"


### Summary: making types known and obvious leads to better code. If types are known, == is best. Otherwise, fall back to ===.


<hr>
<hr>

<h1>Static Typing</h1>

- Linting: a tool that applies an opinion about your code and gives you that opinion so that you can decide.
