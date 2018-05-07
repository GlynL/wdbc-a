<!-- 
=============== CSS ==================================
 -->

<!-- 
CSS ANIMATIONS - TRANSITIONS/TRANSFORMS
 -->

# Pseudo-classes

* :hover
* :focus
* :active

<!-- * my extras -->
<!-- a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective! a:active MUST come after a:hover in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive. -->
<!-- LVHA - Love Hate -->
* :link <!-- i don't think anyone uses -->
* :visited
* :hover
* :active

# Transform

* translateX(), translateY(), translate()
* scale(), scaleX(), scaleY(), scale(x, y)
* transform-origin: <!-- where the element is scaled from -->
* rotate()

* multiple transforms: in same argumetn
* vendor prefixes - auto-prefixer <!-- https://autoprefixer.github.io/ -->

# Transition

* transition-duration: 5s<!-- first property -->, 1s<!-- 2nd property -->;
* transition-property: 
* transition-delay: 5ms, 10ms;
* transition-timing-function: ease-in/ease-out/linear/etc<!-- easings.net/mdn/caeser -->
* transition: property duration function delay, comma seperated;

# Performance
* transform: translate/scale/rotate, opacity <!-- best performance animations -->

# Buidling An Animated Gallery
* background div/ image/ icon -hide/show:hover
* https://codepen.io/GeeL/pen/aGwYgQ?editors=1100


<!-- 
CSS ANIMATIONS - KEYFRAMES
 -->

 @keyframes [animationName] {
   0% {
     style
   }

   25% {
     style
   }
   
   50% {
     style
   }

   100% {
     style
   }
 }

 element selector {
  animation-name: [animationName];
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: forward/reverse/alternate;
  animation-fill-mode: forwards<!-- stays at end state -->/backwards<!-- delay is applied after first state -->/both/none; 
  animation-play-state: paused/running;
 }

animation: semi-flexible ordering - first time is duration - 2nd delay <!-- shorthand (mdn) --> 

# animated CSS Loader
* https://codepen.io/RRoberts/pen/pEXWEp
* https://codepen.io/GeeL/pen/XqapwE
* https://codepen.io/Colt/pen/OjPwmL?editors=1100

<!-- 
FLEXBOX
 -->

 * http://flexboxfroggy.com/
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 * main-axis (horiz & l->r if default) & cross-axis


 <!-- flex conatinaer -->
 * flex-direction: row/row-reverse/column/column-reverse;
 * flex-wrap: wrap/no-wrap(default)/wrap-reverse; <!-- no-wrap will contain width/height to all to be one line  -->
 * justify-content: <!-- spacing along main axis --> flex-end/center/space-between/space-around/
 * align-items: <!-- cross-axis --> stretch(default)/flex-start/flex-end/center/baseline<!-- all text is aligned on base -->
 * align-content: <!-- space between rows --> flex-start/flex-end/space-between/space-around/center/stretch(default)

 <!-- justify-self with margin auto
 https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties
 -->
 
 

 * https://codepen.io/Colt/pen/GvpNEE?editors=1100 <!-- sidebar -->
 * https://codepen.io/GeeL/pen/RyZxmo?editors=1100 <!-- navbar -->

<!-- flex item -->
* align-self: stretch(default)/flex-start/flex-end/center/baselin
* order: 0 (default) <!-- ordered lowest -> highest -->
* flex-basis: <!-- sets ideal size BEFORE placed in container -->
* http://gedd.ski/post/the-difference-between-width-and-flex-basis/
* flex-grow: <!-- ratio of space available (not so many times bigger) --> 0(default)/1/2/etc
* flex-shrink: <!-- items shrinking when not enough space --> 0/1(default)/2/etc
* flex: grow/srhink/basis <!-- shorthand -->

<!-- holy grail layout -->
* https://codepen.io/GeeL/pen/LmzVBb?editors=1100 <!-- my solution -->
* https://codepen.io/Colt/pen/pryaJr?editors=1100 <!-- colt solution - uses wrapping flexbox also -->

* background: fixed; <!-- stays when scrolling -->


