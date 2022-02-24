/* eslint-disable no-unused-vars */
import {PartialTheme} from '@fluentui/react';
import {CSSProperties} from 'styled-components';

type weatherQueryObjectType = {
  limit: number;
}

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

interface IFramedChildComponentProps extends IApplicationProps {}

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
	weatherQueryObjectType,
};

