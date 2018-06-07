// write your code here!

const width = 700;
const height = 700;
const barPadding = 1;
const padding = 50;

let ageData = regionData /* .map(d => d.medianAge). */
  .filter(d => d !== null);

// const barWidth = width / bins.length - barPadding;

const xScale = d3
  .scaleLinear()
  .domain(d3.extent(ageData, d => d.medianAge))
  .rangeRound([padding, width - padding]);

let histogram = d3
  .histogram()
  .domain(xScale.domain())
  .thresholds(16)
  .value(d => d.medianAge);

let bins = histogram(ageData);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(bins, d => d.length)])
  .range([height - padding, padding]);

let svg = d3
  .select("svg")
  .attr("height", height)
  .attr("width", width);

let bars = svg
  .selectAll(".bar")
  .data(bins)
  .enter()
  .append("rect")
  .attr("x", d => xScale(d.x0))
  // .attr("x", (d, i) => (barWidth + barPadding) * i)
  .attr("y", d => yScale(d.length) - padding)
  .attr("height", d => height - yScale(d.length))
  .attr("width", d => xScale(d.x1) - xScale(d.x0) - barPadding)
  .attr("fill", "blue");

const xAxis = d3.axisBottom(xScale);

svg
  .append("g")
  .attr("transform", `translate(0, ${height - padding})`)
  // .attr("dy", "-2em") /* not working - not sure */
  .classed("x-axis", true)
  .call(xAxis);

let yAxis = d3.axisLeft(yScale);

svg
  .append("g")
  .attr("transform", `translate(${padding}, 0)`)
  .classed("y-axis", true)
  .call(yAxis);

svg
  .append("text")
  .attr("y", height - padding)
  .attr("dy", "2em")
  .attr("x", width / 2)
  .style("text-anchor", "middle")
  .style("font-size", "1.3em")
  .text("Median Age");

svg
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", padding)
  .attr("dy", "-1.5em")
  .style("text-anchor", "middle")
  .style("font-size", "1.3em")
  .text("Frequency");

const input = d3.select("input");

input.on("input", () => {
  const thresholds = Number(d3.event.target.value);
  histogram.thresholds(thresholds);
  yScale.domain([0, d3.max(bins, d => d.length)]);
  d3.select(".y-axis").call(yAxis);
  bins = histogram(ageData);

  let bars = svg.selectAll("rect").data(bins);
  bars.exit().remove();

  let g = bars
    .enter()
    .append("rect")
    .merge(bars)
    .attr("x", d => xScale(d.x0))
    // .attr("x", (d, i) => (barWidth + barPadding) * i)
    .attr("y", d => yScale(d.length) - padding)
    .attr("height", d => height - yScale(d.length))
    .attr("width", d => xScale(d.x1) - xScale(d.x0) - barPadding)
    .attr("fill", "blue");
});
