import { RCASMDataV1 as RCASMDataV1 } from '../../rcasmLanguageTypes';

export const rcasmData: RCASMDataV1 = {
	"version": 1,
	"mnemonics": [
		{
			"name": "add",
			"description": "Adds the contents of register B and C (B+C) placing the result in register A or D.",
		},
		{
			"name": "and",
			"description": "Performs a bitwise AND operation on register B and C (B&C) placing the result in register A or D.",
		},
		{
			"name": "bcs",
			"description": "Jumps to the given address if the carry flag is set.",
		},
		{
			"name": "beq",
			"description": "Jumps to the given address if the zero flag is set (equal).",
		},
		{
			"name": "ble",
			"description": "Jumps to the given address if the sign or zero flag is set (less than or equal).",
		},
		{
			"name": "blt",
			"description": "Jumps to the given address if the sign flag is set (less than).",
		},
		{
			"name": "bmi",
			"description": "Jumps to the given address if the sign flag is set (negative).",
		},
		{
			"name": "bne",
			"description": "Jumps to the given address if the zero flag is not set (not equal).",
		},
		{
			"name": "clr",
			"description": "Clears the content (=0) of a given 8-bit register.",
		},
		{
			"name": "cmp",
			"description": "Compares the values in register B and C setting the zero flag if the same (affects register A or D) (equivalent to eor).",
		},
		{
			"name": "eor",
			"description": "Performs a bitwise XOR operation on register B and C (B^C) placing the result in register A or D.",
		},
		{
			"name": "inc",
			"description": "Increments contents of register B placing the result in register A or D",
		},
		{
			"name": "jmp",
			"description": "Unconditionally jumps to the given address.",
		},
		{
			"name": "jsr",
			"description": "Calls the subroutine at the given address.",
		},
		{
			"name": "ldi",
			"description": "Loads an 8-bit value in to register A/B or a 16-bit value in to register M/J.",
		},
		{
			"name": "mov",
			"description": "Copies the content of one 8-bit register to another.",
		},
		{
			"name": "not",
			"description": "Performs a bitwise NOT operation on register B (~B) placing the result in register A or D.",
		},
		{
			"name": "opc",
			"description": "Performs the given machine opcode directly.",
		},
		{
			"name": "orr",
			"description": "Performs a bitwise OR operation on register B and C (B|C) placing the result in register A or D.",
		},
		{
			"name": "rol",
			"description": "Performs a bitwise left rotation on register B (<<B) placing the result in register A or D.",
		},
	]
};