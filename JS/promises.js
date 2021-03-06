// ES2015 Promises Assignment
// Section 17, Lecture 207

// ES2015 Promises Assignment

// 1. Write a function called getMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a promise, which when resolved, returns a string which displays the username who has the most followers.

// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

// getMostFollowers('elie','tigarcia','colt').then(function(data){
//     console.log(data)
// });

function getMostFollowers(...args) {
  let mostFollowers;
  let users = args.map(user => {
    return $.getJSON(`https://api.github.com/users/${user}`);
  });
  return Promise.all(users).then(data => {
    let followers = 0;
    data.forEach(user => {
      if (user.followers > followers) {
        followers = user.followers;
        mostFollowers = user.login;
      }
    });
    return `most followers ${mostFollowers} with ${followers} followers`;
  });
}
// "Colt has the most followers with 424"

/* 2. Write a function called starWarsString, which accepts a number. 
You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. 
Your function should return a promise that when resolved will console.log the name of the character. */

function starWarsString(num) {
  return $.getJSON(`https://swapi.co/api/people/${num}`).then(
    data => `${data.name}, ${data.films[0]}, `
  );
}

/* 
starWarsString(1).then(function(data){
    console.log(data)
})
 */
// "Luke Skywalker"

// Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in

// starWarsString(1).then(function(data){
//     console.log(data)
// })

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
// Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet.

// starWarsString(1).then(function(data){
//     console.log(data)
// })

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"
