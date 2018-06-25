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

 * state relies on prev state <!-- setState((prevstate, props) => counter: prevState.counter + 1) -->
 * state is asynchronous - can't console log after-  use a callback <!-- setState({ state }, callback) -->

<!-- react 16 -->
* error boundary
* can return array of elements <!-- don't need wrapper div -->
* fiber

* form - onSubmit event not an onClick w/ button

# refs <!-- uncommon -->
* managing focus, text selection, or media playback
* triggering imperative animations
* integarting with 3rd party DOM libraries



# React-Router - v4
* history.back(), history.forward(), history.pushState({}, 'title', '/newpage') <!-- doesn't make a GET request -->
* BrowserRouter - more common <!-- uses history object - requires serverside support --> 
* HashRouter <!-- doesn't use history object - changes # after url - doesn't require serverside support -->

* wrap app in Router
* Switch statement for components rendering under difif routs
* Link for links to 'pages'
* NavLink <!-- has active link -->

* route props
  - match <!-- how path matches current url -->
  - location <!-- where you are now -->
  - history <!-- similar to html5 history object -->
* withRouter <!-- using route props outside route componetn  -->
* render or component <!-- render to pass custom props  -->

# REDUX
* redux & react-redux packages
* dispatch(action)
* reducer(currentState, action)
* new state
* invoke listeners

* Provider store = { store} <!-- wrap top level component> -->
* presentational component <!-- primarily just visual -->
* container component <!-- stateful component (app data) -->
* combineReducers 
* action creators
* actions/components/containers/reducers <!-- folders -->

* createStore(reducer) <!-- reducer tells store how to make changes to data in store -->
* rootReducer(state<!-- = initialState -->, action) <!-- return state -->
* store.getState() <!-- get state -->
* store.dispatch(action) <!-- make changes to state -->
* action is an object <!-- must have a type property -->
* action creators <!-- function that returns an object - don't have to hardcode objects  -->

* Provider <!-- connect react to redux -->
* connect(mapStateToProps, mapDispatchToProps)(Component) <!-- connect component to redux -->
  - mapDispatchToProps <!-- import actioncreators and pass as object, don't write a function -->
* mapStateToProps(reduxState) <!-- return an object -->

* https://github.com/zalmoxisus/redux-devtools-extension

# React-Router w/ Redux
* BrowserRouter inside Provider



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
