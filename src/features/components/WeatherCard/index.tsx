import {Text, Spinner} from '@fluentui/react';
import {IWeatherCardProps} from '../../../types';
import {StyledArticlesGrid, WeatherCardProp, WeatherCardContainer} from '../../Style';

const WeatherCard = ({data, loading}: IWeatherCardProps) => {
	const fatFontStyle = {fontWeight: 700};

	if (loading) {
		return <Spinner />;
	}

	return (
		<WeatherCardContainer>
			{data?.cityOf && (
				<WeatherCardProp>
					<Text variant={'xxLarge'} block>
						{`Today in ${data?.cityOf}`}
					</Text>
				</WeatherCardProp>
			)}

			<StyledArticlesGrid gridTemplateColumns={'repeat(2, 1fr)'} columnGap={'.5rem'} rowGap={'0'}>
				{data?.summary && (
					<WeatherCardProp>
						<Text variant={'large'} block>
							Summary: <span style={fatFontStyle}>{data?.summary}</span>
						</Text>
					</WeatherCardProp>
				)}

				{data?.temp && (
					<WeatherCardProp>
						<Text variant={'large'} block>
              Temperature: <span style={fatFontStyle}>{data?.temp}</span>
						</Text>
					</WeatherCardProp>
				)}

				{data?.humidity && (
					<WeatherCardProp>
						<Text variant={'large'} block>
              Humidity: <span style={fatFontStyle}>{data?.humidity}</span>
						</Text>
					</WeatherCardProp>
				)}

				{data?.lastUpdate && (
					<WeatherCardProp>
						<Text variant={'large'} block>
              Last updated: <span style={fatFontStyle}>{data?.lastUpdate}</span>
						</Text>
					</WeatherCardProp>
				)}
			</StyledArticlesGrid>

		</WeatherCardContainer>
	);
};

export default WeatherCard;
