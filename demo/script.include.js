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
