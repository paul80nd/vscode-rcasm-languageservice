/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

export function values<T>(obj: { [s: string]: T }): T[] {
	return Object.keys(obj).map(key => obj[key]);
}

export function isDefined(obj: any): boolean {
	return typeof obj !== 'undefined';
}
