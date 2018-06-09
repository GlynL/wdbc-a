// external data
// tooltips
// transtions

document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
  d3.csv(
    "./UNdata_Export_20180607_111125883.csv",
    function(row) {
      const parseTime = d3.timeParse('%Y');
      return {
        country: row["Country or Area"],
        year: parseTime(row.Year),
        GDP: Number(row.Value)
      };
    },

    function(err, data) {
      if (err) throw err;
      let allData = { allData: data };

      allData.countries = data.reduce((acc, currVal) => {
        return (acc.includes(currVal.country)) ? acc : [...acc, currVal.country];
      }, []);

      allData.country = 'Australia';
      allData.data = data.filter(item => item.country === allData.country)
      drawGraph(allData);
    });
}

function drawGraph( { data, countries, country, allData } ) {
  const height = 600;
  const width = 800;
  const padding = 50;
  const barWidth = (width - padding * 2) / data.length;
  const minYear = d3.min(data, d => d.year)
  //  should be refactored
  const formatTime = d3.timeFormat('%Y');
  const parseTime = d3.timeParse('%Y');
  const maxYear = parseTime(Number(formatTime(d3.max(data, d => d.year))) + 1)

  // tooltip
  let tooltip = d3.select('body')
    .append('div')
    .classed('tooltip', true);

  const svg = d3
    .select("svg")
      .attr("height", height)
      .attr("width", width);

  svg.append('text')
  .text(`Yearly GDP for ${country}`)
  .attr('x', width/2)
  .attr('text-anchor', 'middle')
  .attr('y', '1em')
  .classed('title', true);

  const xScale = d3.scaleTime()
                    .domain([minYear, maxYear])
                    .range([padding, width - padding]);

  const yScale = d3.scaleLinear()
                    .domain(d3.extent(data, d => d.GDP))
                    .range([height - padding, padding]);

  const xAxis = d3.axisBottom(xScale);
  
  const yAxis = d3.axisLeft(yScale);

  svg.append('g')
      .attr('transform', `translate(0, ${height-padding})`)
      .classed('x-axis', true)
      .call(xAxis);

  svg.append('g')
      .attr('transform', `translate(${padding}, 0)`)
      .classed("y-axis", true)
      .call(yAxis);


  const input = d3.select('#input')
                  .property('value', country)
                  .on('input', () => {
                    if (countries.includes(d3.event.target.value)) {
                      countryData = allData.filter(item => item.country === d3.event.target.value);
                      yScale.domain(d3.extent(countryData, d => d.GDP));
                      d3.select(".y-axis").call(yAxis);
                      d3.select('.title')
                        .text(`Yearly GDP for ${d3.event.target.value}`);
                      plotData(countryData);
                    }
                  });
                  
  let countriesList = d3
    .select('#countries');

  countries.forEach(country => {
    countriesList
      .append('option')
        .attr('value', country)
  });

  plotData(data);

  function plotData(data) {
    let bars = svg.selectAll('rect')
                  .data(data);
    bars
      .exit()
      .remove();
    bars
      .enter()
      .append('rect')
      .merge(bars)
      .attr('width', barWidth)
      .attr('x', d => xScale  (d.year))
      .on('mousemove', showTooltip)
      .on('touchstart', showTooltip)
      .on('mouseout', hideTooltip)
      .on('touchend', hideTooltip)
      
      .transition()
      .attr('y', d => yScale(d.GDP))  
      .attr('height', d => height - padding - yScale(d.GDP))

    function showTooltip(d) {
      tooltip
        .style('opacity', 1)
        .style('top', d3.event.pageY + 'px')
        .style('left', d3.event.pageX + 'px')
        .html(`
          <ul class='tooltip__list'>
            <li>${d.year.getFullYear()}</li>
            <li>${d.GDP.toLocaleString('en', {maximumFractionDigits: 2})}</li>
          </ul>
        `)
    }

    function hideTooltip() {
      tooltip.style('opacity', 0);
    }
  }
}


