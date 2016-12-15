# microsteps
A small JavaScript module build on top of [impress.js], to support step-wise content display within a slide.

### Demo
Download the repo and open [microsteps-demo.html](microsteps-demo.html).
It is a dumb demo file, just to explain how the "steps" work within a slide.
Use the "right arrow" key for step-wise walkthrough.

### Logic
We set the opacity to zero, for all elements that has the class `microstep` through css. We override the "right arrow" key behavior to display each of these elements one at the time.

> Note: We use the **opacity** property,
> so that we can animate the step.
> We cannot animate **visibility** property.

### How to Use?
- After loading the [impress.js] JavaScript file, load the [microsteps.js](microsteps.js) file.
- Also load the [microsteps.css](css/microsteps.css) file. It is a simple file and the user is encouraged to modify/enhance them.
- Add the class `microstep` to all the elements which you want to appear in steps.
- By default, the microsteps will show up in the order it is present in the slide. In case, if you want to change the order, add a data attribute `data-order` to mention the order. For better understanding refer the last slide in the [microsteps-demo.html](microsteps-demo.html) file.

[impress.js]: <https://github.com/impress/impress.js>
