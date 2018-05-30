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
