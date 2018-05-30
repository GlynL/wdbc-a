d3.select("#new-note").on("submit", function() {
  d3.event.preventDefault();
  var input = d3.select("input");
  d3
    .select("#notes")
    .append("p")
    .classed("note", true)
    .text(input.property("value"));
  input.property("value", "");
  d3.select(".previewNote").remove();
});

d3
  .select("#new-note")
  .append("button")
  .text("Remove all Notes")
  .style("background-color", "red")
  .style("margin-right", "5px")
  .on("click", () => {
    d3.event.preventDefault();
    d3.selectAll(".note").remove();
  });

d3
  .select("#new-note")
  .append("button")
  .text("I'm feelin lucky!")
  .style("background-color", "lightgreen")
  .on("click", () => {
    d3.event.preventDefault();
    // didn't need .each - callback of .style would be executed for each element in selectAll
    let notes = d3.selectAll(".note").each(function() {
      const randomSize = Math.random() * 20 + 10;
      d3.select(this).style("font-size", randomSize + "px");
    });
  });

d3.select("input").on("input", function() {
  d3.event.preventDefault();
  let previewNote = d3.select(".previewNote");
  if (!previewNote.node()) {
    d3
      .select("#notes")
      .append("p")
      .classed("note", true)
      .classed("previewNote", true)
      .style("background-color", "green")
      .text(d3.select("input").property("value"));
  } else {
    previewNote.text(d3.select("input").property("value"));
  }
});

/* 
    TODO: d3 actions
    // 1. button to remove all current notes 
    // 2. i'm feeling lucky - random styling
    // 3. preview note on screen when typinig - diff colour
    */
