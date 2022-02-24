/* eslint-disable  */
import {useEffect, useState} from 'react';
import ApiService from '../api/apiServices';

export const useWeather = () => {
  const [londonWeather, setLondonWeather] = useState();
  const getLondonData = async () => {
  	const {data} = await ApiService.coordinates.London({limit: 1}); // Limit 2 would result in 2 London (GB, CA) which is useless for us
  	const {lat, lon} = data[0];
    const response = await ApiService.weather.London({lat, lon});
    setLondonWeather(response.data);
  };

  useEffect(() => {
  	getLondonData();
  }, []);

  return {londonWeather};
};
