<!--
Data Driven Documents (D3)
 -->

# Selectors

* load at bottom of html <!-- <script src="https://d3js.org/d3.v4.js"></script> -->
* ~ d3 <!-- console to check loaded -->
* d3.select/d3.selectAll
* .nodes/.node <!-- select element - usually don't want to -->
* .style/.attr/.text/.html <!-- select or set -->
* .classed <!-- set/remove classes -->

# Selections & Callback

* callback run once for each elemetn in selection
* chain selections for inner elements

# Event Listeners

* .on('event', 'callback') <!-- remove with null as callback -->
* d3.event <!-- event object in callback -->

* .append
* .property('name') <!-- e.g value -->
* .remove <!-- remove element from DOM -->

<!--
Data Joins & Update Patterns
 -->

* .data(jsData)
* .enter()
* function(d, i) { ... }

 <!--
 Exit Selections & Key Functions
  -->

* .exit() <!-- remove from data and then update -->
* default matches by index <!-- will remove last ones -->
* .data(data, keyFunction) <!-- tell d3 how to match data w/ elements -->

* .merge() <!-- merge selction & new selction together -->
* update pattern

- grab update selection, make changes unique to that selection, store selction in variable
- grab exit selection, remove unnecessary elemetns
- grab enter selection, make any unique changes
- merge the enter and update selections, make any changes for both selections

<!--
SVG
 -->

* SVG - vectors (no pixelation) <!-- lines & curves -->
* raster - pixels <!-- scale pixelates -->
* <svg> - best practice include metadata - <!-- version, baseProfile, xmlns -->

# line

* <line x1='' y1='' x2='' y2='' stroke-width='' stroke='colour' /> <!-- stroke-width needed -->
* 0,0 point is top-left corner <!-- y-axis is downwards -->
* group element - style group with shared attributes/functionality
  <!-- https://codepen.io/GeeL/pen/xzbKbM?editors=1100 -->

# rect/polygon/circle

* rect - x, y, width, height - stroke, stroke-width, fill - rx, ry <!-- rounding -->
* overflow will be cropped
* order determines top/below <!-- no z-index -->
  <!-- https://codepen.io/GeeL/pen/GGgoMa?editors=1100 -->
* polygon - <!-- set of points joined by straight lines -->
* circle - cx, cy, r <!-- center point and radius -->

# text

* x, y <!-- bottom left corner of text -->
* dx, dy <!-- shift text -->
* text-anchor <!-- start/middle/end - horizontal align -->
* alignment-baseline <!-- vertical align e.g. middle -->
* fill/stroke for color
* transform <!-- for rotating etc -->

# path

* can use program and export for path commands
* d <!-- path to draw - default no stroke & black fill-->

  * M <!-- move cursor - don't draw -->
  * L <!-- draw line from current pos to point specified -->
  * lowercase <!-- distance from current position -->
  * uppercase <!-- point to go to -->

  * z <!-- straight line back to starting pos -->
  * H/h v/V <!-- horizontal/vertical line -->

  * Q <!-- quadratic curve -->
  * C <!-- cubic curve -->
  * A <!-- circular arc -->

# flags

* https://codepen.io/GeeL/pen/wXBMYM
* https://codepen.io/GeeL/pen/PawNQp?editors=1100

<!--
Intermediate
 -->

# extrema

* d3.max(dataArr, optionalCallback) <!--  callback helpful if array of objects and want to find max based on key -->
* d3.min()
* d3.extent(dataArr, optionalCallback) <!-- returns min & Max in array -->

# scales

* d3.scaleLinear() <!-- most common -->
  .domain([num1, num2]) <!-- your range of numbers e.g. heights between 100cm & 190cm -->
  .range([num3, num4]) <!-- space for mapping your range of numbers e.g. 0 to 500 - range can also be colours -->
* can flip y axis

# scatterplots

# Axes & Gridlines

* d3.axisTop(scale) <!-- also right/bottom/left -->
* axis.tickSize(size) <!-- set tick size -->
* axis.tickSizeOuter(0) <!-- border -->
* style lines in css - stroke/stroke-dasharray <!-- .tick class added by d3 -->
* rotating text changes x/y axes around

# Histograms

* d3.histogram() <!-- returns function -->
  * pass dataset into return funciton & d3 gives us bins
* histogram.value() <!-- what value used when creating bins -->
* histogram.domain() <!-- min/max for bins - array -->
* histogram.thresholds() <!-- can pass it an array - endpoints for each bin - if a number d3 will try to make that many bins -->
  * xScale.ticks()
* rangeRound() <!-- only whole numbers -->
