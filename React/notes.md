# Source Code
* https://github.com/rithmschool/udemy_course_exercises/tree/master/react
* https://ide.c9.io/learnwithcolt/wdb-part2

# Babel
* JSX --> JS

* bottom maybe for vscode https://github.com/Microsoft/vscode/issues/18427

# React
* > create-react-app 'name'
* import { App as Pizza }
* package prop-types <!-- dev testing -->
* this.props.children <!-- all child elements inside component mxstrbr.blog/2017/02/react-children-deepdive/-->

* pure function <!-- no side effects/does not modify inputs - can be repeated w/ same input/output  -->

<!-- 
randomly select instructor
randomly select hobby & remove after 5 secs
  - set timeout on constructor
 -->

 * state relies on prev state <!-- setState((prevstate, props) => counter: prevState.counter + 1) -->
 * state is asynchronous - can't console log after-  use a callback <!-- setState({ state }, callback) -->



 # shallow/deep copies 
 I went down a lil rabbit hole w/ copies so I'll share what I learnt related to this.

The spread operator will create a new array. 

arr = [1,2,3];
copy = [...arr];
copy[1] = 3
​console.log(arr) // [1,2,3]
console.log(copy) // [3,2,3]; 
This works. However, if you have another array/object inside the array this is referenced rather than copied.

arr = [1,[2,3],4];
copy = [...arr];
​copy[1].push('hi');
console.log(arr) // [1,[2,3,'hi'], 4]
console.log(copy) // [1,[2,3,'hi'], 4]
​So remember that you are only copying one level deep.
Note, you can do this as it's the first level. 
arr = [1,[2,3],4];
copy = [...arr];
​copy[1]= 'hi';
console.log(arr) // [1,[2,3], 4]
console.log(copy) // [1,'hi', 4]
You can also spread out the inner array. You are then making a copy and adding to it.
arr = [1,[2,3],4];
copy = [...arr];
​copy[1] = [...copy[1], 'hi']
console.log(arr) // [1,[2,3], 4]
console.log(copy) // [1,[2,3,'hi'], 4]
