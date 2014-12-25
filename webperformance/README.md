60 FPS optimizaions done for main.js in the pizza project.

The initial project details indicated two major issues causing sub 60 FPS. These were the major items I found:

1. The updatePostions function did not take advantage of using requestAnimationFrame. In addition the code was not optimized.

2. Accessing DOM properties like offsetWidth, or document.body.scrollTop were causing unnecessary reflows to happen. The determineDx function was being called 100 times in a loop. Each time it accessed offsetWidth the page did another reflow.

3. Document selectors were not cached.

4. Painting can be very expensive, and there were unnecessary paints happening by processing 200 background images each update.

5. Other minor optimizations were needed like using document.querySelectorAll('.randomPizzaContainer').length as the test of the body of the for loop, vs storing the variable and using that to test. Unnecessary lookups were being done each time. Also, element creation was causing unnecessary parsing.

Optimizations I made.

1. I implemented a technique from the website html5 rocks to handle the scroll event. Rather than calling the update function over and over with potentially tens or hundreds of events firing, I track the location of the last scroll and then let requestAnimationFrame do the updating. The other major optimizaion I did in the update function was to use css transformations to animate the objects instead of changing their actual left location. This helps reduce reflow as well. Finally, the last major optimization I did here was to make all of the modifications to a document fragment, then add it to the dom after it was ready. Once again, this stops having to reflow and repaint with each individual change. I did this same optimization in the resizePizza function as well.

2. For properties like offsetWidth and the scroll location I tied their tracking to events. The scroll location is updated when the window is scrolled. The offest sizes are updated when a resize event is triggered.

3. For the document selectors I cached these in a variable and reused it throughout the code.

4. I felt it is only really necessary to paint the background pizzs that are visible, so I changed the for loops to only display the pizzas that can fit in the current viewport. In most cases on my mobile tests and on my laptop the new for loops only paint 9 - 12 pizzas vs. the original 200. The processing time per frame for the pizza update was down to about 0.35 milliseconds!

5. I updated the loops that accessed the DOM for properties like length in their tests to use a saved local variable instead of going to the DOM each time. I also noticed that creating \<li>'s via strings was causing the page to have to do extra parsing of html when the pizza was being resized. I used createTextNode to help. In other places I chose to use cloneNode to reduce the time to create a new HTML element.
