import { useFetch } from "../hooks/useFetch";
import type { WeatherData } from "../types";

export const WeatherDisplay = () => {
  const API_KEY = "55c62ff660343ec1612127668d69eb9a";
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const { data, loading, error } = useFetch<WeatherData>(url);

  if (loading) return <p>Loading weather...</p>;
  
  // If there is an error (like 401), show the error message instead of crashing
  if (error || !data) return <p>Error: {error || "No data received"}</p>;

  return (
    <div className="weather-card">
      <h3>Timezone: {data.timezone}</h3>
      {/* The '?' ensures we don't crash if main or weather is missing */}
      <p>Temperature: {data.main?.temp}°C</p>
      <p>Humidity: {data.main?.humidity}%</p>
      <p>Condition: {data.weather?.[0]?.description}</p>
    </div>
  );
};