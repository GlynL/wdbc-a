// external data
// tooltips
// transtions

document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
  d3.csv(
    "./UNdata_Export_20180607_111125883.csv",
    function(row) {
      // if (row.Value === null) return;
      return {
        country: row["Country or Area"],
        year: Number(row.Year),
        GDP: Number(row.Value)
      };
    },

    function(err, data) {
      if (err) throw err;
      drawGraph(data);
    });
}

function drawGraph(data) {
  const height = 800;
  const width = 600;
  const padding = 50;
  const minYear = d3.min(data, d => d.year)
  const maxYear = d3.max(data, d => d.year)

  const svg = d3
    .select("svg")
      .attr("height", height)
      .attr("width", width);

  svg.append('text')
  .text(`Country GDP for Year ${minYear}`)
  .attr('x', width/2)
  .attr('text-anchor', 'middle')
  .attr('y', '1em');

  const xScale = d3.scaleLinear()
                    .domain([minYear, maxYear])
                    .range([padding, width - padding]);

  const yScale = d3.scaleLinear()
                    .domain(d3.extent(data, d => d.GDP))
                    .range([height - padding, padding]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg.append('g')
      .attr('transform', `translate(0, ${height-padding})`)
      .call(xAxis);

  svg.append('g')
      .attr('transform', `translate(${padding}, 0)`)
      .call(yAxis);
}
  