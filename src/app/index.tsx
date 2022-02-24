import {useCallback, useEffect} from 'react';
import {RouteObject, useRoutes} from 'react-router-dom';
import {framedView} from '../features/Layout';
import {IApplicationProps, ViewType} from '../types';
import {initializeIcons} from '@fluentui/font-icons-mdl2';

const Application = (props: IApplicationProps) => {
	const {appConfig} = props;
	useEffect(() => initializeIcons(), []);
	const viewObjectBuilder = useCallback((views: ViewType[]) => {
		const routesBuffer: RouteObject[] = [];

		views.forEach(({url, folderName}) => {
			const item = {
				path: url,
				element: framedView(folderName, {...props}),
			};
			return routesBuffer.push(item);
		});

		return routesBuffer;
	}, [props!.appConfig!.views]);

	const View = useRoutes(viewObjectBuilder(appConfig!.views));

	return View;
};

export default Application;
