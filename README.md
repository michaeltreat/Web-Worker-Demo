# Web Worker Demo

This demo walks through a Real World UI problem and shows how a using a Web Worker or Worker might solve it.</p>

### But first - What is a [Web Worker]("https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API")

Basically, Web Workers give you access to extra threads that you can use to run some of your code "in the background". Web Workers can be used to help ensure that the stack stays un-blocked by passing any potentially long-running code into a different thread.

If you've ever had an infinate loop block you from clicking on different elements on your web page, then you've run into something that's "Blocking" the stack. Beacause we only have 1 thread to run our code on then if one of our functions or loops doesn't stop, then it's blocking any other functions or loops from running, including droping open select fields, entering things into forms, etc.

But sometimes we just naturally have functions that take a long time to execute. Mabye we have to filter through a million records in order to give the user back what they requested. Traditionally the user would have to wait until the sorting was finished in order to even click on anything on the page, but with Web Workers, we can just pass that functionality over to them which allows our main thread to stay clear so the user can continue to use the site.

This demo will simulate the above situation by having a while loop that is counting down from 1 billion, 1 number at a time until it hits 0. As you can imagine that might take some time, even for a computer. You will see how this function blocks the user from clicking a button until the loop is over. Then, you will see the same code run using a Worker and how it fixes the "blocking" issue. 

Click Here to start the demo: https://michaeltreat.github.io/Web-Worker-Demo/
