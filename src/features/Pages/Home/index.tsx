/* eslint-disable */
import {Text} from '@fluentui/react';
import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import SquaredPattern from '../../../media/svgs/squared-pattern-theme.svg';
import {StyledParagraph, StyledSectionDiv, StylePageContentContainer} from '../../Style';
import {useEffect, useState} from 'react';
import ApiService from '../../../api/apiServices';
import { useWeather } from '../../../hooks/useWeather';

const Home = ({theme}: IApplicationProps) => {
	const {londonData} = useWeather();
	return (
		<StylePageContentContainer>
			<StyledSectionDiv>
				<HeroHeader color={theme?.palette?.white} bgImage={SquaredPattern} headline={'What\'s the weather like?'} />
			</StyledSectionDiv>
			<StyledSectionDiv>
				<StyledParagraph>
					<Text variant={'large'} block>
						{JSON.stringify(londonData)}
					</Text>
				</StyledParagraph>
			</StyledSectionDiv>
		</StylePageContentContainer>
	);
};

export default Home;
