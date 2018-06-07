// births/month for the year
const minYear = d3.min(birthData, d => d.year);
const months = birthData.reduce(
  (acc, currVal) =>
    acc.includes(currVal.month) ? acc : [...acc, currVal.month],
  []
);

const height = 600;
const width = 600;

const svg = d3
  .select("svg")
  .attr("height", height)
  .attr("width", width);

const chart = svg
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`)
  .classed("chart", true);

d3.select("input")
  .property("min", minYear)
  .property("max", d3.max(birthData, d => d.year))
  .property("value", minYear)
  .on("input", () => drawGraph(Number(d3.event.target.value)));

//title
let title = svg
  .append("text")
  .attr("transform", `translate(${width / 2}, ${20})`)
  .attr("text-anchor", "middle");

drawGraph(minYear); /* inital graph call */
// graph function
function drawGraph(year) {
  const yearData = birthData.filter(d => d.year === year);

  const quarterData = [
    {
      quarter: "one",
      births: yearData[0].births + yearData[1].births + yearData[2].births
    },
    {
      quarter: "two",
      births: yearData[3].births + yearData[4].births + yearData[5].births
    },
    {
      quarter: "three",
      births: yearData[6].births + yearData[7].births + yearData[8].births
    },
    {
      quarter: "four",
      births: yearData[9].births + yearData[10].births + yearData[11].births
    }
  ];

  const quarters = ["one", "two", "three", "four"];

  title.text(`Births by Month & Quarter for ${year}`);

  const colorScale = d3
    .scaleOrdinal()
    .domain(months)
    .range(d3.schemeCategory20);

  const pie = d3
    .pie()
    .value(d => d.births)
    .sort(null);

  const arcs = pie(yearData);

  const path = d3
    .arc()
    .outerRadius(width / 2 - 50)
    .innerRadius(width / 4 - 30);

  let update = chart.selectAll(".arc").data(arcs);

  //  don't need update as there is always same number of months
  // update.exit().remove();

  update
    .enter()
    .append("path")
    .classed(".arc", true)
    .merge(update)
    .attr("d", path)
    .attr("fill", d => colorScale(d.data.month))
    .attr("data-month", d => d.data.month)
    .attr("stroke", "black");

  // quarters
  const quarterColorScale = d3
    .scaleOrdinal()
    .domain(quarters)
    .range(d3.schemeCategory10);

  const quarterArcs = pie(quarterData);

  const quarterPath = d3
    .arc()
    .outerRadius(width / 4 - 30)
    .innerRadius(0);

  let quarterUpdate = chart.selectAll(".arc--q").data(quarterArcs);

  // quarterUpdate.exit().remove();

  quarterUpdate
    .enter()
    .append("path")
    .classed(".arc--q", true)
    .merge(quarterUpdate)
    .attr("d", quarterPath)
    .attr("fill", d => quarterColorScale(d.data.quarter))
    .attr("stroke", "black")
    .attr("data-quarter", d => d.data.quarter);
}
