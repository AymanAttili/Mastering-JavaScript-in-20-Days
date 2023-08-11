<h1>Day 5</h1>

- [Challenge 1.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

```javascript
function checkSign(num) {
    return num>0 ? 'positive' : num<0 ? 'negative': 'zero';
}

checkSign(10);
```

- [Challenge 2.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

```javascript
const ratings = watchList.map(s=> (
  {
    title: s.Title,
    rating: s.imdbRating
  })
);

```

- [Challenge 3.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

```javascript
const filteredList = watchList.map(s => (
  {
    title: s.Title,
    rating: s.imdbRating
  }
)).filter(s => Number(s.rating) >= 8);
```

- [Challenge 4.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

```javascript
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  return strokes == 1 ? names[0] :
   strokes <= par-2 ? names[1] :
    strokes == par-1 ? names[2] :
     strokes == par ? names[3] :
      strokes == par+1 ? names[4] :
       strokes == par+2 ? names[5] :
        names[6];
  // Only change code above this line
}

golfScore(5, 4);
```
