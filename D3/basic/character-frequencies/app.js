// write your code here!

const form = d3.select("form");
const input = d3.select("input");

// submit
form.on("submit", function() {
  d3.event.preventDefault();
  let letters = [];
  input
    .property("value")
    .split("")
    .forEach(letter => {
      for (let i = 0; i < letters.length; i++) {
        if (letters[i].letter === letter) return letters[i].count++;
      }
      letters.push({ letter, count: 1 });
    });

  // * select currnet items & you can apply changes to these
  var letterItems = d3
    .select("#letters")
    .selectAll(".letter")
    .data(letters, d => d.letter)
    .classed("new", false);

  // * exit and remove
  letterItems.exit().remove();

  // * new items and changes
  letterItems
    .enter()
    .append("span")
    .classed("letter new", true)
    .text(d => d.letter)
    // * merge to existing items and make changes
    .merge(letterItems)
    .style("height", d => 20 * d.count + "px");

  d3
    .select("#count")
    .text(`(New Characters: ${letterItems.enter().nodes().length})`);
  input.property("value", "");
});

// remove -  ?? let data be the one source of truth ??
d3.select("#reset").on("click", function() {
  letters = []; /* change letters data */
  d3
    .selectAll(".letter") /* select all elements  */
    .data(letters)
    .exit()
    .remove();

  // reset phrase
  d3.select("#phrase").text("");
});
