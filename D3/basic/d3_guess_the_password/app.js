document.addEventListener("DOMContentLoaded", () => {
  const wordCount = 10;
  let guessCount = 4;
  let password = "";

  d3.select("#start").on("click", () => {
    d3
      .select("#start-screen")
      .classed("hide", true)
      .classed("show", false);
    d3
      .select("#game-screen")
      .classed("hide", false)
      .classed("show", true);
    startGame();
  });

  const toggleClasses = (element, ...args) => {
    args.forEach(arg => {
      const classIsSet = element.classed(arg);
      element.classed(arg, !classIsSet);
    });
  };

  function startGame() {
    // get random words and append them to the DOM
    const wordList = d3.select("#word-list");
    const randomWords = getRandomValues(words);
    randomWords.forEach(word => wordList.append("li").text(word));

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.on("click", updateGame);
  }

  const getRandomValues = (array, numVals = wordCount) =>
    shuffle(array).slice(0, numVals);

  function shuffle(array) {
    let arrayCopy = [...array];

    for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      const idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
    }
    return arrayCopy;
  }

  function setGuessCount(newCount) {
    guessCount = newCount;
    d3.select("guesses-remaining").text(`Guesses remaining: ${guessCount}.`);
  }

  function updateGame() {
    const e = d3.event;
    let target = d3.select(d3.event.target);
    console.log(target.property("tagName"));
    if (target.property("tagName") === "LI" && !target.classed("disabled")) {
      // grab guessed word, check it against password, update view
      const guess = target.text();
      const similarityScore = compareWords(guess, password);
      target
        .classed("disabled", true)
        .text(`${guess} --> Matching Letters: ${similarityScore}`);
      setGuessCount(guessCount - 1);

      // check whether the game is over
      if (similarityScore === password.length) {
        d3
          .select("#winner")
          .classed("hide", false)
          .classed("show", true);
        d3.select(this).on("click", null);
      } else if (guessCount === 0) {
        d3
          .select("#loser")
          .classed("hide", false)
          .classed("show", true);
        d3.select(this).on("click", null);
      }
    }
  }

  function compareWords([...word1], [...word2]) {
    if (word1.length !== word2.length) throw "Words must have the same length";

    return word1.reduce((acc, curr, idx) => {
      if (word1[idx] === word2[idx]) return acc + 1;
      return acc;
    }, 0);
  }
});
