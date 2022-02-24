/* eslint-disable */
import {useEffect, useState} from 'react';
import ApiService from '../api/apiServices';
import {CityWeatherObjectType} from '../types';
import {kelvinToCelsius} from '../utils';

export const useWeather = () => {
	const [currentLondonWeather, setCurrentLondonWeather] = useState<CityWeatherObjectType | undefined>();
  const [currentWeatherLoading, setCurrentWeatherLoading] = useState(false);

	const getLondonCurrentWeather = async () => {
    setCurrentWeatherLoading(true);
  	const response = await ApiService.coordinates.London({limit: 1}); // Limit 2 would result in 2 London (GB, CA) which is useless for us
  	const {lat, lon} = response.data[0];
		const {data} = await ApiService.weather.London({lat, lon});
		const payload: CityWeatherObjectType = {
      cityOf: response.data[0].name,
			summary: data.weather[0].description,
			temp: `${kelvinToCelsius(data.main.temp)} ℃`,
			humidity: `${data.main.humidity} %`,
			lastUpdate: new Date().toLocaleString()
		};
		setCurrentLondonWeather(payload);
    setCurrentWeatherLoading(false);
	};

	useEffect(() => {
  	getLondonCurrentWeather();
	}, []);

	return {currentLondonWeather, currentWeatherLoading};
};
