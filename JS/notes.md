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
* var p1 = new Promise(function(resolve, reject){
  if(something) resolve('yes!')
  else reject('no!')
})
* .then(value => { value = 'yes!'<!-- resolve value -->})
  .catch(err => { err = 'no!' <!-- reject value -->})


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

<!-- 
CLOSURES & KEYWORD 'THIS'
 -->
# closure 
  * inner function makes use of variables defined in outer function that's already returned
  * only remembers variables used in inner function
  * private variables 
  * immutability <!-- can't change value - return copy of array with .slice() -->  

 * debugger <!-- keyword that pauses execution in dev tools -->

 * 'this'
  * global rule <!-- ouside declared object (window) -inside function still window --> 
  * 'strict mode' <!-- removes ability to do bad things -->
  * implicit/object rule <!-- 'this' value is closest parent object -->
  * explicit binding <!-- call/apply/bind - only used by functions -->
    - call <!-- thisArg, a, b, ... invoked immediately -->
    - apply <!-- thisArg, [a, b, ...] invoked immediaately -->
    - bind <!-- thisArg, a, b, ... not invoked immediately - don't need to know all arguments when binding -->
  * 'new' keyword <!-- new object created - calls a function returns object -->

  * setTimeout() <!-- method on window object - global 'this' -->


<!-- 
OBJECT ORIENTED PROGRAMMING (OOP)
 -->
 * objects created from 'classes' are called 'instances'
 * constructor functions <!-- used as blueprint -->
 # 'new' 
  - creates empty object
  - sets 'this' to obj
  - adds 'return this' to end of function
  - adds property to obj. '__proto__' (dunder)
* https://codepen.io/GeeL/pen/GdzKmp?editors=0010

# Prototypes '__proto__'
* .prototype <!-- all js functions have -->
* __proto__ added to object when created w/ 'new' <!-- points to .prototype on constructor function -->
* JS checks for method on object & then on ___proto__

* prototypal inheritance  <!-- obj2 = obj1 - creates reference not copy -->
* object.create(prototype) <!-- using 'new' adds unnecessary properties -->
* resetting constructor property


<!-- 
ES 2015
 -->

# const
* can still change value of arrays/objects

# Let
* block scoped <!-- var was function scoped -->
* hoists but can't access value before the actual line <!-- TDZ - temporal dead zone -->

# arrow functions 
* should never be used as methods on objects <!-- need the 'this' binding to the object -->

# for...of
* can't access index
* used on structures with a Symbol.iterator method implemented <!-- not objects -->

# Rest (...)
* inside function arguments
*  (a,b, ...c) <!-- contains all or all the remaining arguments -->

# Spread (...)
* outside function arguments

# Object stuff
* key & value same name - only write one 
* Object methods <!-- jsut write a funciton without key/: -->
* computed property names <!-- include a [property] durnig declartion -->

* object destructuring 
* array destructuring

* static class methods 
* extends <!-- has all the methods from the class extending form -->
* super <!-- pass down methods/properties from parent class to child - have to match -->


* maps <!-- like hash map/hash  -->
  - any data type 
  - iterating easy
* weakmap <!-- all keys must be objects -->
* sets
  - all values are unique
  - any data type
  - weakset
* promises <!-- resolve/reject - then/catch -->
  - promise.all <!-- array of promises - if one is rejecte all fail -->
* generators* <!-- pause/resume funciton executions -->
  - create using *
  - when invoked - generator object returned w/ keys value & done
  - yield - instead of return <!-- can call multiple times with gen.next() -->
  - iterate w/ for...of
* Object.assign <!-- not a deep clone. similar to Object.create - assign more flexible -->
* Array.from <!-- like [...arr] but has extra optional arg -->
* arr.find() <!-- callback like forEach - returns either value found or undefined -->
* arr.findIndex() <!-- same but retursn index  or -1 -->
* arr.includes() <!-- alternative to .indexOf() -->
* Number.isFinite() <!-- check if its a Number -->

<!-- 
ES2016 & 2017
 -->
 * exponentiation operator <!-- ** - power--> 
 * arr.includes()

 * padStart/padEnd <!-- padding string to certain length -->

# async/await
 * async <!-- function returns a promise -->
 * await <!-- pause function while doing something and then continue -->
* handling errors
  - await inside try block
  - catch(errr) block
* multiple awaits <!-- run sequenctially/synchronous - get around it with saving in vars or await Promise.all -->

* object rest <!-- ...key - similar to Object.assign-->


