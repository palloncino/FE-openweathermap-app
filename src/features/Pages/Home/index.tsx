/* eslint-disable no-empty-pattern */
import {Text} from '@fluentui/react';
import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import SquaredPattern from '../../../media/svgs/squared-pattern-theme.svg';
import {StyledParagraph, StyledSectionDiv, StylePageContentContainer} from '../../Style';
import {useWeather} from '../../../hooks/useWeather';

const Home = ({theme}: IApplicationProps) => {
	const {londonWeather} = useWeather();
	return (
		<StylePageContentContainer>
			<StyledSectionDiv>
				<HeroHeader color={theme?.palette?.white} bgImage={SquaredPattern} headline={'What\'s the weather like?'} />
			</StyledSectionDiv>
			<StyledSectionDiv>
				<StyledParagraph>
					<Text variant={'large'} block>
						{JSON.stringify(londonWeather)}
					</Text>
				</StyledParagraph>
			</StyledSectionDiv>
		</StylePageContentContainer>
	);
};

export default Home;
