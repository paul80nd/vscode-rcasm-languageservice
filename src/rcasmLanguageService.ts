/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Paul Law. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//import { createScanner } from './parser/rcasmScanner';
import { Parser } from './parser/rcasmParser';
import { RCASMValidation } from './services/rcasmValidation';
import { RCASMCompletion } from './services/rcasmCompletion';
import { RCASMHover } from './services/rcasmHover';
import { RCASMNavigation } from './services/rcasmNavigation';
// import { format } from './services/rcasmFormatter';
// import { findDocumentLinks } from './services/rcasmLinks';
// import { findDocumentSymbols } from './services/rcasmSymbolsProvider';
// import { doRename } from './services/rcasmRename';
// import { findMatchingTagPosition } from './services/rcasmMatchingTagPosition';
import { Diagnostic, Position, CompletionList, Hover, /*Range,*/ SymbolInformation, /*TextEdit, */DocumentHighlight, /*DocumentLink, FoldingRange, SelectionRange, WorkspaceEdit */ } from 'vscode-languageserver-types';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { /* Scanner, */ Program, CompletionConfiguration, Location, /* ICompletionParticipant, RCASMFormatConfiguration, DocumentContext, IRCASMDataProvider, RCASMDataV1, */ LanguageSettings, LanguageServiceOptions } from './rcasmLanguageTypes';
// import { getFoldingRanges } from './services/rcasmFolding';
// import { getSelectionRanges } from './services/rcasmSelectionRange';
// import { handleCustomDataProviders } from './languageFacts/builtinDataProviders';
// import { RCASMDataProvider } from './languageFacts/dataProvider';

export * from './rcasmLanguageTypes';
export { TextDocument } from 'vscode-languageserver-textdocument';
export * from 'vscode-languageserver-types';

export interface LanguageService {
	//	createScanner(input: string, initialOffset?: number): Scanner;
	doValidation(document: TextDocument, program: Program, documentSettings?: LanguageSettings): Diagnostic[];
	parseProgram(document: TextDocument): Program;
	findDocumentHighlights(document: TextDocument, position: Position, program: Program): DocumentHighlight[];
	doComplete(document: TextDocument, position: Position, program: Program, options?: CompletionConfiguration): CompletionList;
	//	setCompletionParticipants(registeredCompletionParticipants: ICompletionParticipant[]): void;
	doHover(document: TextDocument, position: Position, program: Program): Hover | null;
	findDefinition(document: TextDocument, position: Position, program: Program): Location | null;
	findReferences(document: TextDocument, position: Position, program: Program): Location[];
	//	format(document: TextDocument, range: Range | undefined, options: RCASMFormatConfiguration): TextEdit[];
	//	findDocumentLinks(document: TextDocument, documentContext: DocumentContext): DocumentLink[];
	findDocumentSymbols(document: TextDocument, program: Program): SymbolInformation[];
	//	doTagComplete(document: TextDocument, position: Position, rcasmDocument: RCASMDocument): string | null;
	//	getFoldingRanges(document: TextDocument, context?: { rangeLimit?: number }): FoldingRange[];
	//	getSelectionRanges(document: TextDocument, positions: Position[]): SelectionRange[];
	//	doRename(document: TextDocument, position: Position, newName: string, rcasmDocument: RCASMDocument): WorkspaceEdit | null;
	//	findMatchingTagPosition(document: TextDocument, position: Position, rcasmDocument: RCASMDocument): Position | null;
}

export function getLanguageService(options?: LanguageServiceOptions): LanguageService {
	const rcasmParser = new Parser();
	const rcasmHover = new RCASMHover(options && options.clientCapabilities);
	const rcasmCompletion = new RCASMCompletion(options && options.clientCapabilities);
	const rcasmNavigation = new RCASMNavigation();
	const rcasmValidation = new RCASMValidation();

	// if (options && options.customDataProviders) {
	// 	handleCustomDataProviders(options.customDataProviders);
	// }

	return {
		//		createScanner,
		doValidation: rcasmValidation.doValidation.bind(rcasmValidation),
		parseProgram: rcasmParser.parseProgram.bind(rcasmParser),
		doComplete: rcasmCompletion.doComplete.bind(rcasmCompletion),
		//		setCompletionParticipants: rcasmCompletion.setCompletionParticipants.bind(rcasmCompletion),
		doHover: rcasmHover.doHover.bind(rcasmHover),
		findDefinition: rcasmNavigation.findDefinition.bind(rcasmNavigation),
		findReferences: rcasmNavigation.findReferences.bind(rcasmNavigation),
		//		format,
		findDocumentHighlights: rcasmNavigation.findDocumentHighlights.bind(rcasmNavigation),
		//		findDocumentLinks,
		findDocumentSymbols: rcasmNavigation.findDocumentSymbols.bind(rcasmNavigation),
		//		getFoldingRanges,
		//		getSelectionRanges,
		//		doTagComplete: rcasmCompletion.doTagComplete.bind(rcasmCompletion),
		//		doRename,
		//		findMatchingTagPosition
	};
}

// export function newRCASMDataProvider(id: string, customData: RCASMDataV1) : IRCASMDataProvider {
// 	return new RCASMDataProvider(id, customData);
// }
