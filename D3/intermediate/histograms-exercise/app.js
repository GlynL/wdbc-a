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
  .domain([0, d3.max(ageData, d => d.medianAge)])
  .range([padding, width - padding]);

const histogram = d3
  .histogram()
  .domain(xScale.domain())
  .thresholds(xScale.ticks())
  .value(d => d.medianAge);

const bins = histogram(ageData);

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
  .append("g")
  .classed("bar", true);

bars
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
  .call(xAxis);

const yAxis = d3.axisLeft(yScale);

svg
  .append("g")
  .attr("transform", `translate(${padding}, 0)`)
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
