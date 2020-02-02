'use strict';

import * as assert from 'assert';

import {
	/*DocumentContext,*/ TextDocument, /*DocumentHighlightKind, */ Range, Position, /*TextEdit, Color,
	ColorInformation, DocumentLink, */ SymbolKind, SymbolInformation, Location,
	getLanguageService, LanguageService /*, Diagnostic, Stylesheet*/
} from '../rcasmLanguageService';

export function assertSymbols(ls: LanguageService, input: string, expected: SymbolInformation[], lang: string = 'rcasm') {
	let document = TextDocument.create(`test://test/test.${lang}`, lang, 0, input);

	let program = ls.parseProgram(document);

	let symbols = ls.findDocumentSymbols(document, program);
	assert.deepEqual(symbols, expected);
}

suite('RCASM - Navigation', () => {

	test('basic labels', () => {
		let ls = getLanguageService();
		assertSymbols(ls, 'label1: add', [{ name: 'label1', kind: SymbolKind.Variable, location: Location.create('test://test/test.rcasm', newRange(0, 7)) }]);
	});

});

export function newRange(start: number, end: number) {
	return Range.create(Position.create(0, start), Position.create(0, end));
}