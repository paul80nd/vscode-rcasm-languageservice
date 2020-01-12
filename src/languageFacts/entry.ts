/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { MarkupContent, IMnemonicData } from '../rcasmLanguageTypes';


export function getEntryDescription(entry: IEntry2, doesSupportMarkdown: boolean): MarkupContent {
	if (doesSupportMarkdown) {
		return {
			kind: 'markdown',
			value: getEntryMarkdownDescription(entry)
		};
	} else {
		return {
			kind: 'plaintext',
			value: getEntryStringDescription(entry)
		};
	}
}

function getEntryStringDescription(entry: IEntry2): string {
	if (!entry.description || entry.description === '') {
		return '';
	}

	if (typeof entry.description !== 'string') {
		return entry.description.value;
	}

	let result: string = '';

	//	if (entry.status) {
	//		result += getEntryStatus(entry.status);
	//	}

	result += entry.description;

	// const browserLabel = getBrowserLabel(entry.browsers);
	// if (browserLabel) {
	// 	result += '\n(' + browserLabel + ')';
	// }
	if ('syntax' in entry) {
		result += `\n\nSyntax: ${entry.syntax}`;
	}
	// if (entry.references && entry.references.length > 0) {
	// 	result += '\n\n';
	// 	result += entry.references.map(r => {
	// 		return `${r.name}: ${r.url}`;
	// 	}).join(' | ');
	// }

	return result;
}

function getEntryMarkdownDescription(entry: IEntry2): string {
	if (!entry.description || entry.description === '') {
		return '';
	}

	let result: string = '';

	// if (entry.status) {
	// 	result += getEntryStatus(entry.status);
	// }


	if (typeof entry.description === 'string') {
		result += entry.description;
	} else {
		result = entry.description.value;
	}

	// const browserLabel = getBrowserLabel(entry.browsers);
	// if (browserLabel) {
	// 	result += '\n\n(' + browserLabel + ')';
	// }
	if ('syntax' in entry) {
		result += `\n\nSyntax: ${entry.syntax}`;
	}
	// if (entry.references && entry.references.length > 0) {
	// 	result += '\n\n';
	// 	result += entry.references.map(r => {
	// 		return `[${r.name}](${r.url})`;
	// 	}).join(' | ');
	// }

	return result;
}

export type IEntry2 = IMnemonicData;
