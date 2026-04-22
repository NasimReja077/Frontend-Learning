import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const AreaChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr("width", 400)
      .attr("height", 250);

    svg.selectAll("*").remove();

    const x = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, 400]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([250, 0]);

    const area = d3.area()
      .x((d, i) => x(i))
      .y0(250)
      .y1(d => y(d));

    svg.append("path")
      .datum(data)
      .attr("fill", "#93c5fd")
      .attr("d", area);

  }, [data]);

  return <svg ref={ref}></svg>;
};

export default AreaChart;