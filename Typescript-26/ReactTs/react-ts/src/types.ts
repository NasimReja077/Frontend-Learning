// types.ts
export interface ItemCard{
     id: number;
     name: string;
     price: number;
}

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: { description: string }[];
  timezone: number; // Add this line
}