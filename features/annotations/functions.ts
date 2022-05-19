const add = (a: number, b: number): number => {

  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
}

const throwError = (message: string): never => {
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

const logWeatherES2015 = ({ date, weather }: { date: Date; weather: string; }): void => {
  console.log(date)
  console.log(weather)
}
