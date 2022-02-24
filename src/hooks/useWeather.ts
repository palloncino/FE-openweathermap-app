import {useEffect, useState} from 'react';
import ApiService from '../api/apiServices';

export const useWeather = () => {
	const [londonData, setLondonData] = useState();

	const getLondonData = async () => {
		// eslint-disable-next-line new-cap
		const {data} = await ApiService.weather.London({limit: 5});
		setLondonData(data);
	};

	useEffect(() => {
		getLondonData();
	}, []);

	return {londonData};
};
