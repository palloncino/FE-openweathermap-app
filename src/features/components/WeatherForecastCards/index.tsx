import {Spinner} from '@fluentui/react';
import {IWeatherForecastCardsProps} from '../../../types';
import WeatherCard from '../WeatherCard';
import {StyledArticlesGrid} from '../../Style';
import {Fragment} from 'react';

const WeatherForecastCards = ({data, loading}: IWeatherForecastCardsProps) => {
	if (loading) {
		return <Spinner />;
	}

	return (
		<StyledArticlesGrid gridTemplateColumns={'repeat(2, 1fr)'}>
			{data?.map((item, index) => (
				<Fragment key={'weather-card-' + index}>
					<WeatherCard data={item} loading={false} />
				</Fragment>
			))}
		</StyledArticlesGrid>
	);
};

export default WeatherForecastCards;
