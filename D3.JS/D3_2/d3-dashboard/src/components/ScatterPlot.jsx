import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ScatterPlot = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const width = 400;
    const height = 250;

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    const x = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const tooltip = d3.select("body").append("div")
      .style("position", "absolute")
      .style("background", "#000")
      .style("color", "#fff")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("opacity", 0);

    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (_, i) => x(i))
      .attr("cy", d => y(d))
      .attr("r", 5)
      .attr("fill", "#3b82f6")

      .on("mouseover", (e, d) => {
        tooltip.style("opacity", 1).html(`Value: ${d}`);
      })
      .on("mousemove", (e) => {
        tooltip.style("left", e.pageX + "px")
               .style("top", e.pageY + "px");
      })
      .on("mouseout", () => tooltip.style("opacity", 0));

  }, [data]);

  return <svg ref={ref}></svg>;
};

export default ScatterPlot;