/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createScanner } from './parser/rcasmScanner';
import { parse } from './parser/rcasmParser';
import { RCASMCompletion } from './services/rcasmCompletion';
import { RCASMHover } from './services/rcasmHover';
import { format } from './services/rcasmFormatter';
import { findDocumentLinks } from './services/rcasmLinks';
import { findDocumentHighlights } from './services/rcasmHighlighting';
import { findDocumentSymbols } from './services/rcasmSymbolsProvider';
import { doRename } from './services/rcasmRename';
import { findMatchingTagPosition } from './services/rcasmMatchingTagPosition';
import { Position, CompletionList, Hover, Range, SymbolInformation, TextEdit, DocumentHighlight, DocumentLink, FoldingRange, SelectionRange, WorkspaceEdit } from 'vscode-languageserver-types';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Scanner, RCASMDocument, CompletionConfiguration, ICompletionParticipant, RCASMFormatConfiguration, DocumentContext, IRCASMDataProvider, RCASMDataV1, LanguageServiceOptions } from './rcasmLanguageTypes';
import { getFoldingRanges } from './services/rcasmFolding';
import { getSelectionRanges } from './services/rcasmSelectionRange';
import { handleCustomDataProviders } from './languageFacts/builtinDataProviders';
import { RCASMDataProvider } from './languageFacts/dataProvider';

export * from './rcasmLanguageTypes';
export { TextDocument } from 'vscode-languageserver-textdocument';
export * from 'vscode-languageserver-types';

export interface LanguageService {
	createScanner(input: string, initialOffset?: number): Scanner;
	parseRCASMDocument(document: TextDocument): RCASMDocument;
	findDocumentHighlights(document: TextDocument, position: Position, rcasmDocument: RCASMDocument): DocumentHighlight[];
	doComplete(document: TextDocument, position: Position, rcasmDocument: RCASMDocument, options?: CompletionConfiguration): CompletionList;
	setCompletionParticipants(registeredCompletionParticipants: ICompletionParticipant[]): void;
	doHover(document: TextDocument, position: Position, rcasmDocument: RCASMDocument): Hover | null;
	format(document: TextDocument, range: Range | undefined, options: RCASMFormatConfiguration): TextEdit[];
	findDocumentLinks(document: TextDocument, documentContext: DocumentContext): DocumentLink[];
	findDocumentSymbols(document: TextDocument, rcasmDocument: RCASMDocument): SymbolInformation[];
	doTagComplete(document: TextDocument, position: Position, rcasmDocument: RCASMDocument): string | null;
	getFoldingRanges(document: TextDocument, context?: { rangeLimit?: number }): FoldingRange[];
	getSelectionRanges(document: TextDocument, positions: Position[]): SelectionRange[];
	doRename(document: TextDocument, position: Position, newName: string, rcasmDocument: RCASMDocument): WorkspaceEdit | null;
	findMatchingTagPosition(document: TextDocument, position: Position, rcasmDocument: RCASMDocument): Position | null;
}

export function getLanguageService(options?: LanguageServiceOptions): LanguageService {
	const rcasmHover = new RCASMHover(options && options.clientCapabilities);
	const rcasmCompletion = new RCASMCompletion(options && options.clientCapabilities);

	if (options && options.customDataProviders) {
		handleCustomDataProviders(options.customDataProviders);
	}

	return {
		createScanner,
		parseRCASMDocument: document => parse(document.getText()),
		doComplete: rcasmCompletion.doComplete.bind(rcasmCompletion),
		setCompletionParticipants: rcasmCompletion.setCompletionParticipants.bind(rcasmCompletion),
		doHover: rcasmHover.doHover.bind(rcasmHover),
		format,
		findDocumentHighlights,
		findDocumentLinks,
		findDocumentSymbols,
		getFoldingRanges,
		getSelectionRanges,
		doTagComplete: rcasmCompletion.doTagComplete.bind(rcasmCompletion),
		doRename,
		findMatchingTagPosition
	};
}

export function newRCASMDataProvider(id: string, customData: RCASMDataV1) : IRCASMDataProvider {
	return new RCASMDataProvider(id, customData);
}
