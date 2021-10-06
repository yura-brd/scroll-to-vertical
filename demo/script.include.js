import  ScrollToVertical from "../src/scrollTo";
new ScrollToVertical('.js_scroll_to', {
  step: 30,
  isBehavior: false,
  eventType: 'click',
  typeToScroll: 'href',
  typeToScrollAdd: 48,
  loadCallback: (that) => {
    console.group('loadCallback');
    console.log(that);
    console.groupEnd();
  },
  startEventCallback: (event, that, $el, endPosition) => {
  
    console.group('startEventCallback');
    console.log(event);
    console.log(that);
    console.log($el);
    console.log(endPosition);
    console.groupEnd();
  },
  beforeAnimationCallback: function (that, $el, endPosition) {
  
    console.group('beforeAnimationCallback');
    console.log(that);
    console.log($el);
    console.log(endPosition);
    console.groupEnd();
    
  },
  afterAnimationCallback: function (that) {
  
    console.group('beforeAnimationCallback');
    console.log(that);
    console.groupEnd();
  }
});

new ScrollToVertical('.top', {
  eventType: 'mouseover',
  behavior: "smooth",
  typeToScroll: 0
});

new ScrollToVertical('.bottom', {
  typeToScroll: () => {
    return document.documentElement.scrollHeight
  }
});


const simulateScroll = new  ScrollToVertical('empty');
/** scroll to the point */
setTimeout(() => {
  simulateScroll.simulationScroll(1120)
}, 1000);
setTimeout(() => {
  /** scroll to the DOM element (by selector). And indent for the end point of the scroll */
  simulateScroll.simulationScroll('#item-7', -50)
}, 2000);
setTimeout(() => {
  /** scroll to the DOM element (by DOM ELEMENT). And indent for the end point of the scroll */
  simulateScroll.simulationScroll(document.getElementById('item-2'), -50)
}, 3000);
