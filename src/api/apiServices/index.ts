import {weatherQueryObjectType} from '../../types';
import {clientRequest} from '../apiSettings';

const apiVersion = '1.0';
const prefix = `geo/${apiVersion}/direct`;

const endpoint = {
	London: `${prefix}?q=London`,
};

const querifyObject = (queryObject: any): string => {
	let queryString = '';
	// eslint-disable-next-line guard-for-in
	for (const key in queryObject) {
		queryString += `&${key}=${queryObject[key]}`;
	}

	return queryString;
};

export const pathFrom = (apiPath: keyof typeof endpoint, queryObject: weatherQueryObjectType) => {
	const path = endpoint[apiPath];
	const query = querifyObject(queryObject);
	const apiKey = `&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
	return `${path}${query}${apiKey}`;
};

export const fromLondon = (queryObject: weatherQueryObjectType) => pathFrom('London', queryObject);

const ApiService = {
	weather: {
		London: (queryObject: weatherQueryObjectType) => clientRequest().get(fromLondon(queryObject)),
	},
};

export default ApiService;
