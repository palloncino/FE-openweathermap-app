/* eslint-disable no-unused-vars */
import {PartialTheme} from '@fluentui/react';
import {CSSProperties} from 'styled-components';

// +------------------------------------------------------------
// | Weather
// +------------------------------------------------------------

type coordinatesQueryObjectType = {
	limit: number;
}
type weatherQueryObjectType = {
	lat: number;
	lon: number;
}

type CityWeatherObjectType = {
	dt?: number;
	cityOf?: string;
	summary?: string;
	temp?: string;
	humidity?: string;
	lastUpdate?: string;
}

interface IWeatherCardProps {
	data: CityWeatherObjectType | undefined;
	loading: boolean;
}

interface IWeatherForecastCardsProps {
	data: CityWeatherObjectType[] | undefined;
	loading: boolean;
}

interface ICityForecastResponse {
	cod: number;
	message: number;
	cnt: number;
	list: [
		{
			dt: number;
			main: {
				temp: number;
				feels_like: number;
				temp_min: number;
				temp_max: number;
				pressure: number;
				sea_level: number;
				grnd_level: number;
				humidity: number;
				temp_kf: number;
			},
			weather: [
				{
					id: number;
					main: string;
					description: string;
					icon: string;
				}
			],
			clouds: {
				all: number;
			},
			wind: {
				speed: number,
				deg: number,
				gust: number;
			},
			visibility: number;
			pop: number;
			rain: {
				['3h']: number;
			},
			sys: {
				pod: string;
			},
			dt_txt: string
		},
	]
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		}
		country: string;
		timezone: number;
		sunrise: number;
		sunset: number;
	}
}

// +------------------------------------------------------------
// | Others
// +------------------------------------------------------------

type FolderNameType = string; // Gets used when create a new page and added to app.config.json (see: Home, Articles)
interface ViewType {
	folderName: FolderNameType;
	name: string;
	label: string;
	url: string;
}
interface IAppConfig {
	views: ViewType[];
}
interface IHeroHeaderProps extends IApplicationProps {
	color?: string;
	bgColor?: string;
	bgImage?: string;
	headline?: string;
}
interface IApplicationProps {
	theme?: PartialTheme | undefined;
	appConfig?: IAppConfig;
}

interface IFramedChildComponentProps extends IApplicationProps { }

interface ILinkButton extends IFramedChildComponentProps {
	name?: string;
	label: string;
	url: string;
	currentPath?: boolean;
}

interface IImageProps {
	src: string;
	alt?: string;
	style?: CSSProperties;
}

interface IAnchorProps {
	text?: string;
	color?: string;
	href?: string;
}

export enum ArticleTagType {
	Code = 'code',
	React = 'react',
	Hooks = 'hooks',
	Art = 'art',
	Streaming = 'stremaing',
	Design = 'design',
	Ideas = 'ideas',
	Gaming = 'gaming',
}

interface IArticleMetadata {
	folderName: string;
	component: string;
	title: string;
	created: Date | string;
	summary: string;
	tags: string[];
}

type IArticleMetadataModuleImport = {
	[key: string]: IArticleMetadata;
};

export type {
	FolderNameType,
	ViewType,
	IAppConfig,
	IApplicationProps,
	IFramedChildComponentProps,
	ILinkButton,
	IHeroHeaderProps,
	IImageProps,
	IAnchorProps,
	IArticleMetadata,
	IArticleMetadataModuleImport,
	coordinatesQueryObjectType,
	weatherQueryObjectType,
	CityWeatherObjectType,
	IWeatherCardProps,
	ICityForecastResponse,
	IWeatherForecastCardsProps,
};

