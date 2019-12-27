/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IRCASMDataProvider } from '../rcasmLanguageTypes';
import { RCASMDataProvider } from './dataProvider';
import { rcasmData } from './data/webCustomData';

export const builtinDataProviders: IRCASMDataProvider[] = [
	new RCASMDataProvider('html5', rcasmData)
];

const customDataProviders: IRCASMDataProvider[] = [];

export function getAllDataProviders(): IRCASMDataProvider[] {
	return builtinDataProviders.concat(customDataProviders);
}

export function handleCustomDataProviders(providers: IRCASMDataProvider[]) {
	providers.forEach(p => {
		customDataProviders.push(p);
	});
}