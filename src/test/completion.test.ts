import { testCompletionFor /*, testTagCompletion*/ } from "./completionUtil";

suite('RCASM Completion', () => {

	test('Complete', function (): any {

		testCompletionFor(' |', {
			items: [
				{ label: 'ldi', resultText: ' ldi ${1:a},${2:0}' },
				{ label: 'inc', resultText: ' inc' }
			]
		});

	});

	test('Completion includes detail', () => {
		testCompletionFor('bc|', {
			items: [
				{ label: 'bcs', detail: 'Branch if Carry Set [GOTO]' }
			]
		});
	});

	test('Completion includes documentation', () => {
		testCompletionFor('ad|', {
			items: [
				{
					label: 'add',
					documentation: {
						kind: 'markdown',
						value:
							'Adds the contents of register B and C (B+C) placing the result in register A or D.\n\nSyntax: [ a | d ]'
					}
				}
			]
		});
	});
});
