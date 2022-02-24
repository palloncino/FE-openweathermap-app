import {Text} from '@fluentui/react';
import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import SquaredPattern from '../../../media/svgs/squared-pattern-theme.svg';
import {StyledParagraph, StyledSectionDiv, StylePageContentContainer} from '../../Style';

const Home = ({theme}: IApplicationProps) => (
	<StylePageContentContainer>
		<StyledSectionDiv>
			<HeroHeader color={theme?.palette?.white} bgImage={SquaredPattern} headline={'What\'s the weather like?'} />
		</StyledSectionDiv>
		<StyledSectionDiv>
			<StyledParagraph>
				<Text variant={'large'} block>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nobis ab iure? Aut assumenda in nesciunt aliquam, facilis ipsum nisi architecto repellendus magni sequi fugit quo, cumque quia dolorem nobis!
				</Text>
			</StyledParagraph>
		</StyledSectionDiv>
	</StylePageContentContainer>
);

export default Home;
