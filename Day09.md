<h1>Day 9</h1>

<h2>Promises</h2>

Using two-pronged 'facade' functions that both:
- Initiate background web browser work and
- Return a placeholder object (promise) immediately in JavaScript

Example:

```javascript
function display(data){
    console.log(data);
}

const futureData = fetch("https://twitter.com/will/tweets/1");
futureData.then(display);

console.log('me first');
```

- Promises pecial objects built into JavaScript that get returned immediately when we make a call to a web browser API/feature (e.g. fetch) that's set up to return promises (not all are).
- Promises act as a placeholder for the data we expect to get back from the web browser feature's background work.

## *then* method and functionality to call on completion

Any code we want to run on the returned data must also be saved on the promise object.

Added using .then method to the hidden property •onFulfilment'.

Promise objects will automatically trigger the attached function to run (with its input being the returned data).


## Asynchronous means:
Doing code out of order from when you saw it.
