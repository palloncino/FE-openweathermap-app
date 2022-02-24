/* eslint-disable guard-for-in */
import * as articlesModule from '../../features/Pages/Description';
import {IArticleMetadata, IArticleMetadataModuleImport} from '../../types';

function getArticles(): IArticleMetadata[] {
	const articlesDataString: string = JSON.stringify(articlesModule);
	const articlesDataObject: IArticleMetadataModuleImport = JSON.parse(articlesDataString);
	const articlesDataArray = [];
	for (const articleMetadata in articlesDataObject) {
		articlesDataArray.push(articlesDataObject[articleMetadata]);
	}

	return articlesDataArray;
}

export {getArticles};
