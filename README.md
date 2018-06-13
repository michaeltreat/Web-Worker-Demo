# Web Worker Demo

This demo walks through a Real World UI problem and shows how a using a Web Worker or Worker might solve it.</p>

### But first - What is a [Web Worker]("https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API")

 Web Workers give you access to extra threads that you can use to run some of your code 'in the background'. Web Workers can be used to help ensure that the stack stays un-blocked by passing any potentially long-running or asynchronous code into a different thread.

If you've ever had an infinite loop block you from clicking on different elements on your web page, then you've run into something that's 'blocking' the stack. Beacause we only have 1 thread to run our code on, if one of our functions or loops doesn't stop then it blocks any other code from running, including default browser code like opening select fields and entering things into forms, etc.

But sometimes we just naturally have functions that take a long time to execute. Mabye we have to filter through a million records in order to give the user back what they requested. Usually the user would have to wait until the sorting was finished in order to even click on anything on the page, but with Web Workers, we can just pass that functionality over to them which allows our main thread to stay clear so the user can continue to use the site.

This demo simulates the above scenario by creating a loop that counts down from 1,000,000,001, 1 number at a time until it hits 0. As you can imagine that might take some time, even for a computer. You will see how this loop blocks you from being able to change a button's color until the loop is over. Then, you will see the same code run using a Worker and how it fixes the 'blocking' issue.

Click Here to start the demo: https://michaeltreat.github.io/Web-Worker-Demo/
