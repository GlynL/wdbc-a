<!--
ASYNC FOUNDATIONS
 -->

* arr.findIndex(function(element, index, array))

<!-- Stack & Heap -- & Queue -->
# Stack
* keeps trackt of function invocation

# Heap
* memory

# Queue
* queued up execution


<!-- Promises -->
* var p1 = new Promise(function(resolve, reject))


<!-- 
AJAX - XHR & Fetch
 -->
* ajax <!-- http://adaptivepath.org/ideas/ajax-new-approach-web-applications/ -->
* XML - similar to html but doesn't describe presentation
* JSON - almost exact look as js objects

* XMLHTTP Request (XHR) - <!-- https://codepen.io/Colt/pen/ZJBwLO?editors=0010#0 -->
* XHR bitcoin exercise <!-- https://codepen.io/GeeL/pen/WJXoGX?editors=0011 -->`

* fetch options e.g. "POST" - 2nd argument to fetch as an object
* errors
  * .catch - runs if problem with request itself - e.g. internet/connection/credentials
  * status code errors not caught - need to check in 'success' <!-- .ok -->
  * throw Error('custom error') - passed to .catch(error)
  * https://codepen.io/Colt/pen/prWBLb?editors=0010
* fetch user exercise
<!-- https://codepen.io/GeeL/pen/ZovzQo?editors=1010 -->
<!-- https://codepen.io/Colt/pen/LjzaxN -->
* fetch doesn't work with IE

<!-- 
AJAX - jQuery & Axios
 -->
 * $.ajax <!-- $.get/$.post/$.getJSON - shorthands -->
 * jquery ajax doc <!-- https://github.com/jquery/jquery/blob/731c501155ef139f53029c0e58409b80f0af3a0c/src/ajax.js -->
 * exercise jquery cat/dog api <!-- https://codepen.io/GeeL/pen/MGrKej?editors=0010 --> 

 * axios - lightweight http request library - built on xhr <!-- jquery is big library for using ajax -->
 * axios.get(url) .then() .catch() <!-- also post etc -->
 * err.response, err.request, else <!-- differentiates errors -->

 * ron swanson quote generator - xhr/fetch/jquery/axios <!-- https://codepen.io/GeeL/pen/MGrypG -->
 <!-- https://codepen.io/Colt/pen/vJpMvj?editors=1010 -->




<!-- 
TESTING W/ JASMINE
 -->
 * jasmine starter code <!-- https://codepen.io/eschoppik/pen/ZybNdo -->


* describe -> it -> expect
* intro <!-- https://codepen.io/eschoppik/pen/jmgXXK -->
* matchers - toBe/not.toBe, toBeCloseTo, toBeDefined, toBeTruthy/toBeFalsy, toBeGreaterThan/toBeLessThan, toContain, toEqual, jasmine.any()
<!-- https://codepen.io/eschoppik/pen/zwgeRr -->
* beforeEach/afterEach <!-- before/after each 'it' callback -->
* beforeAll/afterAll <!-- all tests -->

* spies
* clocks
* done
* TDD <!-- test driven development --> - red -> green -> refactor
* BDD  <!-- behaviour --> - not mutually exclusive of tdd

* unit/integration/acceptance/stress testing


<!-- 
ADVANCED ARRAY METHODS
 -->
* forEach()
* .map() <!-- creates and returns a new array -->
* .filter() <!-- if the expression evaluates to true it will be added to new array -->
* .some() <!-- if one value of array evaluates to true, true will be returned -->
* .every() <!-- if all values of array evalute to true, true will be returned -->
* .reduce(function(accumulator, nextValue, index, array), 10 <!-- optional accumulator initial val --> ) <!-- whatever is returned becomes the new value of accumulator -->