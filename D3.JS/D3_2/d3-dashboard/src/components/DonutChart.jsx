import { useEffect, useRef } from "react";
import * as d3 from "d3";

const DonutChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr("width", 300)
      .attr("height", 300)
      .append("g")
      .attr("transform", "translate(150,150)");

    const pie = d3.pie()(data);

    const arc = d3.arc()
      .innerRadius(60)
      .outerRadius(100);

    svg.selectAll("path")
      .data(pie)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => d3.schemeCategory10[i]);

  }, [data]);

  return <svg ref={ref}></svg>;
};

export default DonutChart;