// write your code here!

// y - cellular subscribers per 100 people
//  x - literacy rate, 15 up
// fill/radius

const width = 800;
const height = 800;
const padding = 40;

// tooltip
const tooltip = d3
  .select("body")
  .append("div")
  .classed("tooltip", true);

regionData = regionData.filter(obj => {
  const keys = [
    "adultLiteracyRate",
    "subscribersPer100",
    "growthRate",
    "medianAge"
  ];
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === null) return false;
  }
  return true;
});

const xScale = d3
  .scaleLinear()
  .domain(d3.extent(regionData, d => d.adultLiteracyRate))
  .range([padding, width - padding]);

const yScale = d3
  .scaleLinear()
  .domain(d3.extent(regionData, d => d.subscribersPer100))
  .range([height - padding, padding]);

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
  .domain(d3.extent(regionData, d => d.growthRate))
  .range(["red", "green"]);

const radiusScale = d3
  .scaleLinear()
  .domain(d3.extent(regionData, d => d.medianAge))
  .range([2, 10]);

// y axis
d3.select("svg")
  .append("g")
  .attr("transform", `translate(${padding}, 0)`)
  .call(yAxis);

// x axis
d3.select("svg")
  .append("g")
  .attr("transform", `translate(0, ${height - padding})`)
  .attr("dy", "-2em")
  .call(xAxis);

// graph data
d3.select("svg")
  .attr("height", height)
  .attr("width", width)
  .selectAll("circle")
  .data(regionData)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d.adultLiteracyRate))
  .attr("cy", d => yScale(d.subscribersPer100))
  .attr("r", d => radiusScale(d.medianAge))
  .style("fill", d => colorScale(d.growthRate))
  .on("mouseover", showTooltip)
  .on("touchstart", showTooltip)
  .on("mouseout", hideTooltip)
  .on("touchend", hideTooltip);

// text
d3.select("svg")
  .append("text")
  .attr("x", width / 2)
  .attr("y", height - padding)
  .attr("dy", "1.5em")
  .style("text-anchor", "middle")
  .style("font-size", "1.2em")
  .text("Adult Literacy Rate");

d3.select("svg")
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", padding)
  .attr("dy", "-1.4em")
  .style("text-anchor", "middle")
  .style("font-size", "1.2em")
  .text("Subscribers / 100");

d3.select("svg")
  .append("text")
  .attr("x", width / 2)
  .attr("y", padding)
  .attr("dy", "-.5em")
  .style("text-anchor", "middle")
  .style("font-size", "1.7em")
  .text("Regional Literacy");

function showTooltip(d) {
  tooltip
    .style("opacity", 1)
    .style("left", `${d3.event.pageX}px`)
    .style("top", `${d3.event.pageY}px`).html(`
        <ul>
          <li>${d.region}</li>
          <li>${d.subscribersPer100}</li>
          <li>${d.adultLiteracyRate}</li>
        </ul>
      `);
}

function hideTooltip() {
  tooltip.style("opacity", 0);
}
