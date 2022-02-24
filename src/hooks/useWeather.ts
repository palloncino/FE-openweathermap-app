/* eslint-disable  */
import {useEffect, useState} from 'react';
import ApiService from '../api/apiServices';

type CityWeatherObjectType = {
  summary: string;
  temp: string;
  humidity: string;
  last_update: string;
}

export const useWeather = () => {
  const [currentLondonWeather, setCurrentLondonWeather] = useState<CityWeatherObjectType | undefined>();
  const getLondonCurrentWeather = async () => {
  	const response = await ApiService.coordinates.London({limit: 1}); // Limit 2 would result in 2 London (GB, CA) which is useless for us
  	const {lat, lon} = response.data[0];
    const {data} = await ApiService.weather.London({lat, lon});
    console.log({data})
    const payload: CityWeatherObjectType = {
      summary: data.weather[0].description,
      temp: `${data.main.temp - 273.15} ℃`,
      humidity: `${data.main.humidity} %`,
      last_update: new Date().toString(),
    }
    setCurrentLondonWeather(payload);
  };

  useEffect(() => {
  	getLondonCurrentWeather();
  }, []);

  return {currentLondonWeather};
};
