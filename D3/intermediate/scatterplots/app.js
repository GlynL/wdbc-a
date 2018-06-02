const width = 500;
const height = 500;
const padding = 40;
// const yMax = d3.max(birthData2011, d => d.lifeExpectancy);
// const yMin = d3.min(birthData2011, d => d.lifeExpectancy);

const yScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
  .range([height - padding, padding]);

const xScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.births / d.population))
  .range([padding, width - padding]);

const xAxis = d3
  .axisBottom(xScale)
  .tickSize(2 * padding - height)
  .tickSizeOuter(0);
const yAxis = d3
  .axisLeft(yScale)
  .tickSize(2 * padding - width)
  .tickSizeOuter(0);

const colorScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.population / d.area))
  .range(["lightgreen", "black"]);

const radiusScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.births))
  .range([2, 40]);

// x axis
d3
  .select("svg")
  .append("g")
  .attr("transform", `translate(0,${height - padding})`)
  .call(xAxis);

d3
  .select("svg")
  .append("g")
  .attr("transform", `translate(${padding}, 0)`)
  .call(yAxis);

d3
  .select("svg")
  .attr("width", width)
  .attr("height", height)
  .selectAll("circle")
  .data(birthData2011)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d.births / d.population))
  .attr("cy", d => yScale(d.lifeExpectancy))
  .attr("fill", d => colorScale(d.population / d.area))
  .attr("r", d => radiusScale(d.births));

d3
  .select("svg")
  .append("text")
  .attr("x", width / 2)
  .attr("y", height - padding)
  .attr("dy", "1.5em")
  .style("text-anchor", "middle")
  .text("Births per Capita");

d3
  .select("svg")
  .append("text")
  .attr("x", width / 2)
  .attr("y", padding)
  .attr("text-anchor", "middle")
  .style("font-size", "1.5em")
  .text("Data on Births by Country in 2011");

d3
  .select("svg")
  .append("text")
  // rotating changes x/y
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", padding)
  .attr("dy", "-1.5em")
  .style("text-anchor", "middle")
  .text("Life Expectancy");
