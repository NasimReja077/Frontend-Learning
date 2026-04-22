import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr("width", 400)
      .attr("height", 300);

    svg.selectAll("*").remove();

    const x = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, 400]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([300, 0]);

    const line = d3.line()
      .x((d, i) => x(i))
      .y(d => y(d));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("d", line);

  }, [data]);

  return <svg ref={ref}></svg>;
};

export default LineChart;