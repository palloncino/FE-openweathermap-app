import {useCallback} from 'react';
import {RouteObject, useRoutes} from 'react-router-dom';
import {framedView} from '../features/Layout';
import {IApplicationProps, ViewType} from '../types';

const Application = (props: IApplicationProps) => {
	const {appConfig} = props;
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
