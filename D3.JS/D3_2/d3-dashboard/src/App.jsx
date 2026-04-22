import React, { useEffect, useState } from "react";
import axios from "axios";
import AreaChart from "./components/AreaChart.jsx";
import DonutChart from "./components/DonutChart.jsx";
import HorizontalBarChart from "./components/HorizontalBarChart.jsx";
import LineChart from "./components/LineChart.jsx";
import BarChart from "./components/BarChart.jsx";
import PieChart from "./components/PieChart.jsx";
import ChartCard from "./components/ChartCard.jsx";
import ScatterPlot from "./components/ScatterPlot.jsx";
import Histogram from "./components/Histogram.jsx";
function App() {
  const [priceData, setPriceData] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7")
      .then(res => {
        // normalize values (important)
        const prices = res.data.prices.map(p => p[1] / 1000);
        setPriceData(prices);
      });

    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5")
      .then(res => {
        setCoins(res.data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">
        🚀 Crypto Dashboard
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <ChartCard title="📈 Line Chart">
          <LineChart data={priceData} />
        </ChartCard>

        <ChartCard title="📊 Bar Chart">
          <BarChart data={priceData} />
        </ChartCard>

        <ChartCard title="🥧 Pie Chart">
          <PieChart data={[10, 20, 30]} />
        </ChartCard>

        <ChartCard title="📉 Area Chart">
          <AreaChart data={priceData} />
        </ChartCard>

        <ChartCard title="🍩 Donut Chart">
          <DonutChart data={coins.map(c => c.market_cap)} />
        </ChartCard>

        <ChartCard title="🏆 Top Coins">
          <HorizontalBarChart data={coins} />
        </ChartCard>
        
        <ChartCard title="🔵 Scatter Plot">
          <ScatterPlot data={priceData} />
        </ChartCard>
        
        <ChartCard title="📊 Histogram">
          <Histogram data={priceData} />
        </ChartCard>
      </div>
    </div>
  );
}

export default App;