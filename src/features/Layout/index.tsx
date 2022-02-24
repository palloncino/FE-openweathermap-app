import {Spinner, SpinnerSize} from '@fluentui/react';
import React, {lazy, Suspense} from 'react';
import styled from 'styled-components';
import {IFramedChildComponentProps, FolderNameType} from '../../types';
import {NavBar} from '../NavBar';

const ViewWrapper = styled.div`
	height: 100%;
	width: 100%;
	max-width: 2000px;
	margin: 0 auto;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const framedView = (view: FolderNameType, props?: IFramedChildComponentProps): React.ReactNode => {
	const ComponentView = lazy(() => import(`../Pages/${view}`));

	return (
		<ViewWrapper>
			<NavBar {...props} />
			<ContentWrapper>
				<Suspense fallback={<Spinner size={SpinnerSize.large} />}>
					<ComponentView {...props} />
				</Suspense>
			</ContentWrapper>
		</ViewWrapper>
	);
};
