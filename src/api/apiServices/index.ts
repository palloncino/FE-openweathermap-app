import {coordinatesQueryObjectType, weatherQueryObjectType} from '../../types';
import {clientRequest} from '../apiSettings';

const ApiPrefixGeo = 'geo/1.0/direct';
const ApiPrefixWeather = '/data/2.5/weather';

// ?lat={lat}&lon={lon}&appid={API key}

const endpoint = {
	LondonCoordinates: `${ApiPrefixGeo}?q=London`,
	LondonWeather: `${ApiPrefixWeather}`,
};

const querifyObject = (queryObject: any): string => {
	let queryString = '';
	// eslint-disable-next-line guard-for-in
	for (const key in queryObject) {
		queryString += `${key}=${queryObject[key]}&`;
	}

	return queryString || '&';
};

export const pathFrom = (apiPath: keyof typeof endpoint, queryObject: coordinatesQueryObjectType | weatherQueryObjectType) => {
	const path = endpoint[apiPath];
	const query = querifyObject(queryObject);
	const apiKey = `appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
	return `${path}${path.includes('?') ? '&' : '?'}${query}${apiKey}`;
};

export const fromLondonCoordinates = (queryObject: coordinatesQueryObjectType) => pathFrom('LondonCoordinates', queryObject);

export const fromLondonWeather = (queryObject: weatherQueryObjectType) => pathFrom('LondonWeather', queryObject);

const ApiService = {
	coordinates: {
		London: (queryObject: coordinatesQueryObjectType) => clientRequest().get(fromLondonCoordinates(queryObject)),
	},
	weather: {
		London: (queryObject: weatherQueryObjectType) => clientRequest().get(fromLondonWeather(queryObject)),
	},
};

export default ApiService;
