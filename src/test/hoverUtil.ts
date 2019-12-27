// /*---------------------------------------------------------------------------------------------
//  *  Copyright (c) Microsoft Corporation. All rights reserved.
//  *  Licensed under the MIT License. See License.txt in the project root for license information.
//  *--------------------------------------------------------------------------------------------*/

// import * as assert from 'assert';
// import * as htmlLanguageService from '../rcasmLanguageService';
// import { MarkupContent } from 'vscode-languageserver-types';
// import { TextDocument } from 'vscode-languageserver-textdocument';

// export function assertHover(value: string, expectedHoverContent: MarkupContent | undefined, expectedHoverOffset: number | undefined): void {
// 	const offset = value.indexOf('|');
// 	value = value.substr(0, offset) + value.substr(offset + 1);

// 	const document = TextDocument.create('test://test/test.html', 'html', 0, value);

// 	const position = document.positionAt(offset);
// 	const ls = htmlLanguageService.getLanguageService();
// 	const htmlDoc = ls.parseRCASMDocument(document);

// 	const hover = ls.doHover(document, position, htmlDoc);
// 	assert.deepEqual(hover && hover.contents, expectedHoverContent);
// 	assert.equal(hover && document.offsetAt(hover.range!.start), expectedHoverOffset);
// }

// export function assertHover2(value: string, contents: string | MarkupContent, rangeText: string): void {
// 	const offset = value.indexOf('|');
// 	value = value.substr(0, offset) + value.substr(offset + 1);

// 	const document = TextDocument.create('test://test/test.html', 'html', 0, value);

// 	const position = document.positionAt(offset);
// 	const ls = htmlLanguageService.getLanguageService();
// 	const htmlDoc = ls.parseRCASMDocument(document);

// 	const hover = ls.doHover(document, position, htmlDoc);
// 	if (hover) {
// 		if (typeof contents === 'string') {
// 			assert.equal(hover.contents, contents);
// 		} else {
// 			assert.equal((hover.contents as MarkupContent).kind, contents.kind);
// 			assert.equal((hover.contents as MarkupContent).value, contents.value);
// 		}

// 		if (hover.range) {
// 			assert.equal(rangeText, document.getText(hover.range));
// 		}
// 	}
// }

