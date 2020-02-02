'use strict';

import {
	/*Color, ColorInformation, ColorPresentation, DocumentHighlight, DocumentHighlightKind, DocumentLink,*/ Location,
	Position, Range, SymbolInformation, SymbolKind, /*TextEdit, WorkspaceEdit,*/ TextDocument /*, DocumentContext*/
} from '../rcasmLanguageTypes';
import * as nodes from '../parser/rcasmNodes';
import { Symbols } from '../parser/rcasmSymbolScope';

export class RCASMNavigation {

	public findDefinition(document: TextDocument, position: Position, program: nodes.Program): Location | null {

		const symbols = new Symbols(program);
		const offset = document.offsetAt(position);
		const node = nodes.getNodeAtOffset(program, offset);

		if (!node) {
			return null;
		}

		const symbol = symbols.findSymbolFromNode(node);
		if (!symbol) {
			return null;
		}

		return {
			uri: document.uri,
			range: getRange(symbol.node, document)
		};
	}

	public findDocumentSymbols(document: TextDocument, program: nodes.Program): SymbolInformation[] {
		const result: SymbolInformation[] = [];

		program.accept((node) => {
			const entry: SymbolInformation = {
				name: null!,
				kind: SymbolKind.Class,
				location: null!
			};
			let locationNode: nodes.Node | null = node;

			if (node instanceof nodes.Label) {
				entry.name = (<nodes.Label>node).getName();
				entry.kind = SymbolKind.Variable;
			}

			if (entry.name) {
				entry.location = Location.create(document.uri, getRange(locationNode, document));
				result.push(entry);
			}

			return true;
		});

		return result;
	}

}

function getRange(node: nodes.Node, document: TextDocument): Range {
	return Range.create(document.positionAt(node.offset), document.positionAt(node.end));
}