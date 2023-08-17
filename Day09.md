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
futureData.then(display); //this will wait the fetched data to print it

console.log('me first'); // this wiil print first.
```

- Promises pecial objects built into JavaScript that get returned immediately when we make a call to a web browser API/feature (e.g. fetch) that's set up to return promises (not all are).
- Promises act as a placeholder for the data we expect to get back from the web browser feature's background work.

## *then* method and functionality to call on completion

Any code we want to run on the returned data must also be saved on the promise object.

Added using .then method to the hidden property •onFulfilment'.

Promise objects will automatically trigger the attached function to run (with its input being the returned data).


## Asynchronous means:
Doing code out of order from when you saw it.

<hr>

## Note: what happens if i have two tasks in microtask queue, and there is a task waiting in callback queue?

In JavaScript, tasks are managed by the event loop, which includes the call stack, microtask queue (also known as the job queue), and the callback queue. The order in which tasks are executed is governed by the event loop's rules. Let's break down your scenario step by step:

1. **Microtask Queue**: Microtasks are executed after the current task finishes and before the next task is taken from the callback queue. Microtasks include things like Promise callbacks (resolved or rejected), MutationObserver callbacks, and process.nextTick in Node.js.

2. **Callback Queue**: The callback queue holds asynchronous tasks that are ready to be executed. These tasks are usually associated with events like user interactions, timer events (setTimeout, setInterval), and I/O operations.

Now, let's consider the scenario you've described:

- You have two tasks in the microtask queue.
- There's a task waiting in the callback queue.

Here's how the event loop would typically handle this situation:

1. The current task finishes executing.
2. The event loop checks the microtask queue and starts executing the microtasks in the order they were added.
3. Once all microtasks are executed, the event loop checks the callback queue.

At this point, two things can happen:

- If the callback queue has a task ready, it will be picked and executed.
- If the callback queue is empty or the task is not ready (waiting for a timer or I/O event, for example), the event loop will proceed with the next iteration, checking the microtask queue again before the callback queue.

In either case, the order of execution is generally: microtasks first, and then the callback tasks. The order within the microtask queue and callback queue remains based on their order of arrival.

Remember, JavaScript itself doesn't guarantee a real-time execution order; it adheres to the event loop mechanism. Additionally, browser environments and Node.js can have slight variations in how the event loop is implemented, but the general concepts described above apply.

<hr>

### Promises:

Problems:
- 99% of developers have no idea how they're working under the hood
- Debugging becomes super-hard as a result
- Developers fail technical interviews

Benefits
- Cleaner readable style with pseudo-synchronous style code
- Nice error handling process


<hr>

## We have rules for the execution of our asynchronously delayed code

- Hold promise-deferred functions in a microtask queue and callback function in a task queue (Callback queue) when the Web Browser Feature (API) finishes
- Add the function to the Call stack (i.e. run the function) when:
    - Call stack is empty & all global code run (Have the Event Loop check this condition)
- Prioritize functions in the microtask queue over the Callback queue
