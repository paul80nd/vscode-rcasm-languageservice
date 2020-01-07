/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { /* Position, Range, */ MarkupContent, MarkupKind } from 'vscode-languageserver-types';
//import { TextDocument } from 'vscode-languageserver-textdocument';
//import { IToken } from './parser/rcasmScanner';

export * from 'vscode-languageserver-types';

// export interface RCASMFormatConfiguration {
// 	tabSize?: number;
// 	insertSpaces?: boolean;
// 	indentEmptyLines?: boolean;
// 	wrapLineLength?: number;
// 	unformatted?: string;
// 	contentUnformatted?: string;
// 	indentInnerRcasm?: boolean;
// 	wrapAttributes?: 'auto' | 'force' | 'force-aligned' | 'force-expand-multiline' | 'aligned-multiple' | 'preserve' | 'preserve-aligned';
// 	wrapAttributesIndentSize?: number;
// 	preserveNewLines?: boolean;
// 	maxPreserveNewLines?: number;
// 	indentHandlebars?: boolean;
// 	endWithNewline?: boolean;
// 	extraLiners?: string;
// }

export interface CompletionConfiguration {
	// 	[provider: string]: boolean | undefined;
	//	hideAutoCompleteProposals?: boolean;
}

export interface Node {
	tag: string | undefined;
	start: number;
	startTagEnd: number | undefined;
	end: number;
	endTagStart: number | undefined;
	children: Node[];
	parent?: Node;
	attributes?: { [name: string]: string | null } | undefined;
}

export enum TokenType {
	Binary,
	Comma,
	Comment,
	Hexadecimal,
	Identifier,
	Integer,
	Label,
	Minus,
	Plus,
	EOL,
	EOF,
	InvalidChar
}

export type Program = {

};
// export interface DocumentContext {
// 	resolveReference(ref: string, base?: string): string | undefined;
// }

// export interface RcasmAttributeValueContext {
// 	document: TextDocument;
// 	position: Position;
// 	tag: string;
// 	attribute: string;
// 	value: string;
// 	range: Range;
// }

// export interface RcasmContentContext {
// 	document: TextDocument;
// 	position: Position;
// }

// export interface ICompletionParticipant {
// 	onRcasmAttributeValue?: (context: RcasmAttributeValueContext) => void;
// 	onRcasmContent?: (context: RcasmContentContext) => void;
// }

// export interface IReference {
// 	name: string;
// 	url: string;
// }

export interface IMnemonicData {
	name: string;
	description?: string | MarkupContent;
	syntax?: string;
}

export interface RCASMDataV1 {
	version: 1;
	mnemonics?: IMnemonicData[];
}

export interface IRCASMDataProvider {
	provideMnemonics(): IMnemonicData[];
}

/**
 * Describes what LSP capabilities the client supports
 */
export interface ClientCapabilities {
	/**
	 * The text document client capabilities
	 */
	textDocument?: {
		// 		/**
		// 		 * Capabilities specific to completions.
		// 		 */
		// 		completion?: {
		// 			/**
		// 			 * The client supports the following `CompletionItem` specific
		// 			 * capabilities.
		// 			 */
		// 			completionItem?: {
		// 				/**
		// 				 * Client supports the follow content formats for the documentation
		// 				 * property. The order describes the preferred format of the client.
		// 				 */
		// 				documentationFormat?: MarkupKind[];
		// 			};

		// 		};
		/**
		 * Capabilities specific to hovers.
		 */
		hover?: {
			/**
			 * Client supports the follow content formats for the content
			 * property. The order describes the preferred format of the client.
			 */
			contentFormat?: MarkupKind[];
		};
	};
}

export namespace ClientCapabilities {
	export const LATEST: ClientCapabilities = {
		textDocument: {
			// 			completion: {
			// 				completionItem: {
			// 					documentationFormat: [MarkupKind.Markdown, MarkupKind.PlainText]
			// 				}
			// 			},
			hover: {
				contentFormat: [MarkupKind.Markdown, MarkupKind.PlainText]
			}
		}
	};
}

export interface LanguageSettings {
	validate?: boolean;
}

export interface LanguageServiceOptions {
	// 	// /**
	// 	//  * Provide data that could enhance the service's understanding of
	// 	//  * HTML tag / attribute / attribute-value
	// 	//  */
	// 	// customDataProviders?: IRCASMDataProvider[];

	/**
	 * Describes the LSP capabilities the client supports.
	 */
	clientCapabilities?: ClientCapabilities;
}