import { testCompletionFor /*, testTagCompletion*/ } from "./completionUtil";

suite('RCASM Completion', () => {

	test('Complete', function (): any {

		testCompletionFor(' |', {
			items: [
				{ label: 'ldi', resultText: ' ldi' },
				{ label: 'mov', resultText: ' mov' }
			]
		});
		
	});

	test('Completion includes documentation', () => {
		testCompletionFor('ad|', {
			items: [
				{ label: 'add',
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
