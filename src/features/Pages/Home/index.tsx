import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import {SectionMarginBottom, StylePageContentContainer} from '../../Style';
import {useWeather} from '../../../hooks/useWeather';
import WeatherCard from '../../components/WeatherCard';

const Home = ({theme}: IApplicationProps) => {
	const {currentLondonWeather, currentWeatherLoading} = useWeather();
	return (
		<>
			<StylePageContentContainer>
				<SectionMarginBottom>
					<HeroHeader
						color={theme?.palette?.white}
						bgColor={`linear-gradient(113.96deg, ${theme?.palette?.themeDarker} 0%, ${theme?.palette?.themePrimary} 48.44%, ${theme?.palette?.themeDarker} 100%)`}
						headline={'What\'s the weather like?'} />
				</SectionMarginBottom>
				<WeatherCard data={currentLondonWeather} loading={currentWeatherLoading} />
			</StylePageContentContainer>
		</>
	);
};

export default Home;
