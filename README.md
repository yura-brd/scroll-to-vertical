# scroll-to-vertical

Smooth scroll to element or position at page. Takes into account document height for elements low on the page.
## Features
- ~5 KB
- no dependencies
- scrolling - bottom, top
- specify the amount in pixels that needs to be scrolled
- scroll to an element

## Installation
```
npm install scroll-to-vertical --save
```
Or you can load it via a script tag as follows:
```
<script src="https://unpkg.com/scroll-to-vertical" />
```

## Importing
### ES6
```
import ScrollToVertical from 'scroll-to-vertical';
```
### CommonJS
```
var ScrollToVertical = require('scroll-to-vertical');
```
### Global variable
the variable `ScrollToVertical` attached to `window` or `this` depending on what environment you are using

## API
#### `new ScrollToVertical(selector, <options>)`
|         Property       |                             Value                             |
| ---------------------- | ------------------------------------------------------------- |
| **selector**:string(required)  |  css selector  |
| **OPTIONS:**|    |
| **isBehavior**:boolean |  <p>default: **true**  </p>  use native `window.scrollTo` (if the browser supports)  |
| **behavior**:string |  <p>default: **smooth** <br /> option for `window.scrollTo` <br /> `smooth, instant, auto` |
| **typeToScroll**:string or number or function | <p>default: **`string: href`** </p> <br />  string - name of the attribute where the selector of the element to which scrolling should lie <br />  example: `href`, `data-href`... <br /> <br />  <p> number - position on the page where you want to scroll <br /> example: 0 - to scroll up  </p> <p> function - triggered by every event. Returns the number. Point to scroll to <br /> example: return document.documentElement.scrollHeight - to scroll bottom page </p> |
| **step**:number |   <p>default: <strong>50</strong></p>  number of pixels scrolled at a time  |
| **typeToScrollAdd**:number | <p>default: **0**</p> indent for the end point of the scroll   |
| **eventType**:string |  <p>default: **click**</p> event: 'click', 'mouseover' ...   |
| **Callbacks** |    |
| **loadCallback** | callback function that is called upon initialization <p>  **parameters**: this - instance class </p> |
| **startEventCallback** |  callback function that is called before eventType (click) <p> **parameters**: event, this, element, endScrollPosition </p>  |
| **beforeAnimationCallback** |   callback function that is called before start animation  <p> **parameters**: this, element, endScrollPosition </p>  |
| **afterAnimationCallback** |  callback function that is called after finish animation*  <br />  *not working on native window.scrollTo (isBehavior=true) <p> **parameters**: this - instance class  </p>  |
| **Methods** |    |
| **simulationScroll** |  scrolls to the desired (**dynamic**) point  <br />  takes two parameters a **scroll point** (number, selector or DOM ELEMENT) and **indent for the end point of the scroll** |


## Example Usage
``` 
import ScrollToVertical from 'scroll-to-vertical';

new ScrollToVertical('.js_link_nav_scroll', {
    eventType: 'click',
    behavior: "smooth",
    typeToScroll: 20,
    beforeAnimationCallback: function (that, $el, endPosition) {
        console.group('beforeAnimationCallback');
        console.log(that);
        console.log($el);
        console.log(endPosition);
        console.groupEnd();
    }
})
```
#### default (no settings)
```
Click on the link. Scroll to the element whose selector is registered in the href

<a class="js_link_nav_scroll" href="#section_1">scroll to section_1</a>
<div id="#section_1"></div>

<script>  
    new ScrollToVertical('.js_link_nav_scroll');
</script>
```
#### Dynamic value - method simulationScroll
```
<script>  
    const simulateScroll = new  ScrollToVertical('empty');
    /** scroll to the point */
    setTimeout(() => {
        simulateScroll.simulationScroll(1120)
    }, 1000);
    setTimeout(() => {
        /** scroll to the DOM element (by selector). And indent for the end point of the scroll */
        simulateScroll.simulationScroll('#content', -50)
    }, 2000);
    setTimeout(() => {
        /** scroll to the DOM element (by DOM ELEMENT). And indent for the end point of the scroll */
        simulateScroll.simulationScroll(document.getElementById('#content'), -50)
    }, 3000);
</script>
```
## Browser Support
Supported on all modern browsers. For older browsers, you would need the polyfills for `requestAnimationFrame`.
