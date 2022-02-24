import {Stack} from '@fluentui/react';
import styled from 'styled-components';

const StyledArticlesStack = styled(Stack)`
  height: calc(${window?.innerHeight}px - 120px);
  width: 100%;
	margin: 0 auto;
	max-width: 800px;
`;

const StyledParagraphHeader = styled.div`
	margin-bottom: 1rem;
`;

const StyledParagraph = styled.div`
	text-align: justify;
	margin-bottom: 1rem;
  line-height: 2rem;
`;

const StyledSectionDiv = styled.div`
	margin-bottom: 2rem;
`;

const SpecialWordStyle = styled.span<{ color?: string }>`
	color: ${props => props.color};
	font-family: 'menlo';
`;

const StyledArticlesGrid = styled.div<{gridTemplateColumns?: string[]}>`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 1rem;
  row-gap: 1rem;
`;

const StyledArticleCardContainer = styled.div<{key?: string, color?: string, bgColor?: string}>`
	background: ${props => props.bgColor};
	color: ${props => props.color};
	padding: 1rem;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	border-radius: .2rem;
`;

const StyledArticleCardTitle = styled.div<{}>``;

const StyledArticleCardSummary = styled.div<{}>``;

export {
	StyledArticlesStack,
	StyledParagraphHeader,
	StyledParagraph,
	StyledSectionDiv,
	SpecialWordStyle,
	StyledArticlesGrid,
	StyledArticleCardContainer,
	StyledArticleCardTitle,
	StyledArticleCardSummary,
};
