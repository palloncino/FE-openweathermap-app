import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import {SectionMarginBottom, StylePageContentContainer} from '../../Style';
import {useWeather} from '../../../hooks/useWeather';
import WeatherCard from '../../components/WeatherCard';
import WeatherForecastCards from '../../components/WeatherForecastCards';
import {Text} from '@fluentui/react';

const Home = ({theme}: IApplicationProps) => {
	const {currentLondonWeather, currentWeatherLoading, forecastLondonWeather, forecastWeatherLoading} = useWeather();
	return (
		<>
			<StylePageContentContainer>
				<SectionMarginBottom>
					<HeroHeader
						color={theme?.palette?.white}
						bgColor={`linear-gradient(113.96deg, ${theme?.palette?.themeDarker} 0%, ${theme?.palette?.themePrimary} 48.44%, ${theme?.palette?.themeDarker} 100%)`}
						headline={'What\'s the weather like?'} />
				</SectionMarginBottom>

				<SectionMarginBottom>
					<Text variant={'xxLarge'} nowrap block>
						Current Weather
					</Text>
				</SectionMarginBottom>

				<SectionMarginBottom>
					<WeatherCard data={currentLondonWeather} loading={currentWeatherLoading} />
				</SectionMarginBottom>

				<SectionMarginBottom>
					<Text variant={'xxLarge'} nowrap block>
						Forecast next 5 days.
					</Text>
				</SectionMarginBottom>

				<SectionMarginBottom>
					<Text variant={'xLarge'} nowrap block>
						Every 3 hours
					</Text>
				</SectionMarginBottom>

				<SectionMarginBottom>
					<WeatherForecastCards data={forecastLondonWeather} loading={forecastWeatherLoading} />
				</SectionMarginBottom>
			</StylePageContentContainer>
		</>
	);
};

export default Home;
