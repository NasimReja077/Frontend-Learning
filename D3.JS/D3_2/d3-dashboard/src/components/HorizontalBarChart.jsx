import { useEffect, useRef } from "react";
import * as d3 from "d3";

const HorizontalBarChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr("width", 400)
      .attr("height", 250);

    svg.selectAll("*").remove();

    const y = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, 250])
      .padding(0.2);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.market_cap)])
      .range([0, 400]);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("y", d => y(d.name))
      .attr("width", d => x(d.market_cap))
      .attr("height", y.bandwidth())
      .attr("fill", "#f59e0b");

  }, [data]);

  return <svg ref={ref}></svg>;
};

export default HorizontalBarChart;