/* eslint-disable new-cap */
import {useEffect, useState} from 'react';
import ApiService from '../api/apiServices';
import {CityWeatherObjectType} from '../types';
import {kelvinToCelsius, translateUnixDate} from '../utils';

export const useWeather = () => {
	const [currentLondonWeather, setCurrentLondonWeather] = useState<CityWeatherObjectType | undefined>();
	const [currentWeatherLoading, setCurrentWeatherLoading] = useState(false);
	const [forecastLondonWeather, setForecastLondonWeather] = useState<CityWeatherObjectType[]>();
	const [forecastWeatherLoading, setForecastWeatherLoading] = useState(false);

	const getLondonWeather = async () => {
		// Fetching London Current Weather
		setCurrentWeatherLoading(true);
		const resGeo = await ApiService.coordinates.London({limit: 1});
		const {lat, lon} = resGeo.data[0];
		const resLon = await ApiService.weather.London({lat, lon});

		const payload: CityWeatherObjectType = {
			cityOf: resGeo.data[0].name,
			summary: resLon.data.weather[0].description,
			temp: `${kelvinToCelsius(resLon.data.main.temp)} ℃`,
			humidity: `${resLon.data.main.humidity} %`,
			lastUpdate: new Date().toLocaleString(),
		};

		setCurrentLondonWeather(payload);
		setCurrentWeatherLoading(false);

		// Fetching London Weather Forecast
		setForecastWeatherLoading(true);
		const resForecast = await ApiService.weather.LondonForecast({lat, lon});

		const arrPayloads: CityWeatherObjectType[] = resForecast.data.list.map(({weather, main, dt}: any) => ({
			dt: translateUnixDate(dt),
			summary: weather[0].description,
			temp: `${kelvinToCelsius(main.temp)} ℃`,
			humidity: `${main.humidity} %`,
			lastUpdate: undefined,
		}));

		setForecastLondonWeather(arrPayloads);
		setForecastWeatherLoading(false);
	};

	useEffect(() => {
		getLondonWeather();
	}, []);

	return {currentLondonWeather, currentWeatherLoading, forecastLondonWeather, forecastWeatherLoading};
};
