import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Histogram = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const width = 400;
    const height = 250;

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    const bins = d3.bin()(data);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .range([height, 0]);

    svg.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
      .attr("x", d => x(d.x0))
      .attr("y", d => y(d.length))
      .attr("width", d => x(d.x1) - x(d.x0) - 1)
      .attr("height", d => height - y(d.length))
      .attr("fill", "#f97316");

  }, [data]);

  return <svg ref={ref}></svg>;
};

export default Histogram;