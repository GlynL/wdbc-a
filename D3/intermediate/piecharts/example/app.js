var minYear = d3.min(birthData, d => d.year);
const maxYear = d3.max(birthData, d => d.year);

var width = 600;
var height = 600;

const continents = birthData.reduce(
  (acc, currVal) =>
    acc.includes(currVal.continent) ? acc : [...acc, currVal.continent],
  []
);

//  colour sclae for continents
// maps colours to continents
const colourScale = d3
  .scaleOrdinal()
  .domain(continents)
  .range(d3.schemeCategory10);

// create 'g' (pie chart) in center of svg w/ class chart
const svg = d3
  .select("svg")
  .attr("height", height)
  .attr("width", width);

svg
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`)
  .classed("chart", true);

// input
d3.select("input")
  .property("min", minYear)
  .property("max", maxYear)
  .property("value", minYear)
  .on("input", () => makeGraph(Number(d3.event.target.value)));

// initial graphing on page load
makeGraph(minYear);

function makeGraph(year) {
  var yearData = birthData.filter(d => d.year === year);

  const pie = d3
    .pie()
    .value(d => d.births)
    // sort continets alphabetically
    .sort((a, b) => {
      if (a.continent < b.continent) return -1;
      else if (a.continent > b.continent) return 1;
      else
        return (
          a.births - b.births
        ); /* same continent - difference in birth counts */
    });
  const arcs = pie(yearData);

  const path = d3
    .arc()
    .outerRadius(width / 2 - 10)
    .innerRadius(width / 4)
    .padAngle(0.02)
    .cornerRadius(20);

  // use general update pattern intead of just enter for flexibile
  var update = d3
    .select(".chart")
    .selectAll(".arc")
    .data(arcs);

  update.exit().remove();

  update
    .enter()
    .append("path")
    .classed("arc", true)
    .merge(update)
    .attr("fill", d => colourScale(d.data.continent))
    .attr("stroke", "black")
    // path is a function - invoked once for each object in arcs array
    .attr("d", path);
}

// code without update pattern

// d3.select(".chart")
//   .selectAll(".arc")
//   .data(arcs)
//   .enter()
//   .append("path")
//   .classed("arc", true)
//   .attr("fill", d => colourScale(d.data.continent))
//   .attr("stroke", "black")
//   .attr("d", path);
