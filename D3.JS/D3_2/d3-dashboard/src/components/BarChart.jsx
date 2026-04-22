import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data = [] }) => {
  const ref = useRef();

  useEffect(() => {
    if (!data.length) return;

    const width = 400;
    const height = 250;

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    // Tooltip
    const tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "#111")
      .style("color", "#fff")
      .style("padding", "6px 10px")
      .style("border-radius", "6px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    const x = d3.scaleBand()
      .domain(data.map((_, i) => i))
      .range([0, width])
      .padding(0.2);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, i) => x(i))
      .attr("y", d => y(d))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d))
      .attr("fill", "#22c55e")

      // 🔥 Hover Events
      .on("mouseover", (event, d) => {
        tooltip.style("opacity", 1).html(`Value: ${d}`);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 20 + "px");
      })
      .on("mouseout", () => {
        tooltip.style("opacity", 0);
      });

  }, [data]);

  return <svg ref={ref}></svg>;
};

export default BarChart;