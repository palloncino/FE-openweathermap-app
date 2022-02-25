import {Text} from '@fluentui/react';
import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import Anchor from '../../components/Anchor';
import {SectionMarginBottom, StyledParagraph, StyledSectionWhite, StylePageContentContainer} from '../../Style';

const Description = ({theme}: IApplicationProps) => (
	<>
		<StylePageContentContainer>
			<SectionMarginBottom>
				<HeroHeader
					color={theme?.palette?.white}
					bgColor={`linear-gradient(113.96deg, ${theme?.palette?.themeDarker} 0%, ${theme?.palette?.themePrimary} 48.44%, ${theme?.palette?.themeDarker} 100%)`}
					headline={'Application Description'} />
			</SectionMarginBottom>

			<SectionMarginBottom>
				<Text variant={'xxLarge'} nowrap block>
						To do
				</Text>
				<ul>
					<li>
							UML Graph Route
					</li>
					<li>
							Tests
					</li>
				</ul>
			</SectionMarginBottom>

			<StyledSectionWhite>
				<StyledParagraph>
					<Text variant={'large'} block>
						Take a look at the <Anchor href={'https://github.com/palloncino/alpian-test-weather-app'} text="source code" />.
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Text variant={'large'} block>
					The aim of this test is to build a simple React app that displays the current weather info in London
					and weather forecasts for the next 5 days. The final user should also be able to refresh the view
					bypressing on a proper button.
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Text variant={'large'} block>
					You are free to design the app according to what you think is the best solution in terms of UI/UX. The minimum expected info to be displayed are:
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Text variant={'large'} block>
						<ul style={{marginBottom: '2rem'}}>
							<li style={{marginBottom: '1rem'}}>
							Current weather:
								<ul>
									<li>Weather description</li>
									<li>Temperature in Celsius Degrees (current, min and max)</li>
									<li>Humidity percentage</li>
									<li>Date of last update</li>
								</ul>
							</li>
							<li>
							Forecast item:
								<ul>
									<li>Day</li>
									<li>Weather description</li>
									<li>Temperature in Celsius Degrees (current, min and max)</li>
								</ul>
							</li>
						</ul>
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Text variant={'large'} block>
				The app should fetch and display the current weather info in London and weather forecasts for the
				next 5 days as soon as it gets open. Please consider this test like an app that should go to
				production, so error handling and any good practice is expected. As for the design step, it is up to
				you to implement features that you think are important for the final user for better usability.
					</Text>
				</StyledParagraph>

			</StyledSectionWhite>
		</StylePageContentContainer>
	</>
);

export default Description;
