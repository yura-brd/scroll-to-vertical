import "./polyfill.js"

class ScrollToVertical {
  constructor(selector, options={}) {
    this.selector = selector || '[href^="#"]';
    this.isBehavior = options.isBehavior ?? true;
    this.behavior = options.behavior || 'smooth';
    this.STEP = options.step || 50;
    this.typeToScrollAdd = typeof options.typeToScrollAdd === 'number' ? options.typeToScrollAdd : 0;
    this.eventType = options.eventType || 'click';
    this.supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style && this.isBehavior;

    this.stepAnimation = this.stepAnimation.bind(this);

    if (typeof options.typeToScroll === 'function') {
      this.typeToScroll = options.typeToScroll.bind(this)
    } else {
      this.typeToScroll = options.typeToScroll ?? 'href';
    }

    this.loadCallback = options.loadCallback || null;
    this.startEventCallback = options.startEventCallback || null;
    this.beforeAnimationCallback = options.beforeAnimationCallback || null;
    this.afterAnimationCallback = options.afterAnimationCallback || null;
    
    this.scrollOption = {};
    
    this.selector && this.init();
  }

  init () {
    const $elements = document.querySelectorAll(this.selector);
    this.loadCallback && this.loadCallback(this);
    
    $elements.forEach($el => {
      $el.addEventListener(this.eventType, (e) => {
        e.preventDefault();
        
        if (typeof this.typeToScroll === 'function') {
          const endScroll = this.typeToScroll(e, this, $el) - this.typeToScrollAdd;
          this.startEventCallback && this.startEventCallback(e, this, $el, endScroll);
          this.stepAnimationInit(endScroll, $el);
        } else if (typeof this.typeToScroll === 'number') {
          this.startEventCallback && this.startEventCallback(e, this, $el, this.typeToScroll);
          this.stepAnimationInit(this.typeToScroll - this.typeToScrollAdd, $el);
        } else {
          const $scrollToElement = document.querySelector($el.getAttribute('href'));
          const endScroll = this.findEndPosition($scrollToElement) - this.typeToScrollAdd;
          this.startEventCallback && this.startEventCallback(e, this, $el, endScroll);
          this.stepAnimationInit(endScroll, $el);
        }
      });
    });
  }
  
  stepAnimationInit(toPos, $el) {
    this.beforeAnimationCallback && this.beforeAnimationCallback(this, $el, toPos);
    let currentScroll = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
    const itemsStep = this.crateSteps(currentScroll, toPos);
    if (this.supportsNativeSmoothScroll) {
      window.scrollTo({
        top: toPos,
        behavior: this.behavior
      });
    } else {
      if (itemsStep.length) {
        this.scrollOption = {
          thisStep: 0,
          limitScrollDown: document.body.scrollHeight - window.innerHeight + this.STEP,
          itemsStep,
          isDown: itemsStep[0] < itemsStep[1]
        };
        window.requestAnimationFrame(this.stepAnimation);
      }
    }
  }
  stepAnimation() {
    window.scrollTo(0, this.scrollOption.itemsStep[this.scrollOption.thisStep]);
    this.scrollOption.thisStep++;
    let nestStep = this.scrollOption.itemsStep[this.scrollOption.thisStep];
    if (nestStep || nestStep === 0) {
      let isDownNext = true;
      if (this.scrollOption.isDown && nestStep > this.scrollOption.limitScrollDown) {
        isDownNext = false;
      }
      if (isDownNext) {
        requestAnimationFrame(this.stepAnimation)
      } else {
        this.afterAnimationCallback && this.afterAnimationCallback(this);
      }
    } else {
      this.afterAnimationCallback && this.afterAnimationCallback(this);
    }
  }
  findEndPosition(element) {
    let res = 0;
    function resVal () {
      res += element.offsetTop;
      element = element.offsetParent;
      if (element) {
        return resVal(element.offsetParent)
      } else {
        return res
      }
    }
    return resVal();
  }
  
  crateSteps(start, end) {
    let reverse = -1;
    let countStep = Math.round((start - end) / this.STEP);
    
    if (start < end) {
      countStep = Math.round((end - start) / this.STEP);
      reverse = 1;
    }
    
    
    return  new Array(countStep)
      .fill('')
      .map((item, ind) => {
        if (ind + 1  === countStep ) {
          return  end
        } else {
          return start + (this.STEP * (ind + 1) * reverse);
        }
      });
  };
}

export default ScrollToVertical;
