/* eslint-disable */
import {Spinner} from '@fluentui/react';
import {useEffect, useState} from 'react';
import {IWeatherForecastCardsProps} from '../../../types';
import {CityWeatherObjectType} from '../../../types';
import WeatherCard from '../WeatherCard';
import {StyledArticlesGrid} from '../../Style';
import { translateUnixDate } from '../../../utils';

const WeatherForecastCards = ({data, loading}: IWeatherForecastCardsProps) => {

	if (loading) {
		return <Spinner />;
	}

	return (
		<StyledArticlesGrid gridTemplateColumns={'repeat(2, 1fr)'}>
			{data?.map((item, index) => (
				<span key={`${item?.cityOf}` + index}>
					<WeatherCard data={item} loading={false} />
				</span>
			))}
		</StyledArticlesGrid>
	);
};

export default WeatherForecastCards;
