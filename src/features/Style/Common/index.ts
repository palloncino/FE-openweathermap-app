import {Stack} from '@fluentui/react';
import styled from 'styled-components';

const StylePageContentContainer = styled(Stack)`
  height: calc(${window?.innerHeight}px - 120px);
  width: 100%;
	margin: 0 auto;
	max-width: 800px;
`;

export {
	StylePageContentContainer,
};
