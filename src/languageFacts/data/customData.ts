import { RCASMDataV1 as RCASMDataV1 } from '../../rcasmLanguageTypes';

export const rcasmData: RCASMDataV1 = {
	"version": 1,
	"mnemonics": [
		{
			"name": "add",
			"summary": "Arithmetic Add [ALU]",
			"description": "Adds the contents of register B and C (B+C) placing the result in register A or D.",
			"syntax": "[ a | d ]"
		},
		{
			"name": "and",
			"summary": "Logic And [ALU]",
			"description": "Performs a bitwise AND operation on register B and C (B&C) placing the result in register A or D.",
			"syntax": "[ a | d ]"
		},
		{
			"name": "bcs",
			"summary": "Branch if Carry Set [GOTO]",
			"description": "Jumps to the given address if the carry flag is set.",
			"syntax": "<label>"
		},
		{
			"name": "beq",
			"summary": "Branch if Equal/Zero [GOTO]",
			"description": "Jumps to the given address if the zero flag is set (equal).",
			"syntax": "<label>"
		},
		{
			"name": "ble",
			"summary": "Branch if Less Than or Equal (Sign+Zero) [GOTO]",
			"description": "Jumps to the given address if the sign or zero flag is set (less than or equal).",
			"syntax": "<label>"
		},
		{
			"name": "blt",
			"summary": "Branch if Less Than (Sign) [GOTO]",
			"description": "Jumps to the given address if the sign flag is set (less than).",
			"syntax": "<label>"
		},
		{
			"name": "bmi",
			"summary": "Branch if Minus/Sign [GOTO]",
			"description": "Jumps to the given address if the sign flag is set (negative).",
			"syntax": "<label>"
		},
		{
			"name": "bne",
			"summary": "Branch if Not Equal/Zero [GOTO]",
			"description": "Jumps to the given address if the zero flag is not set (not equal).",
			"syntax": "<label>"
		},
		{
			"name": "clr",
			"summary": "Zero Value [ALU]",
			"description": "Clears the content (=0) of a given 8-bit register.",
			"syntax": "<target>{a,d}"
		},
		{
			"name": "cmp",
			"summary": "Compare (Logic Xor) [ALU]",
			"description": "Compares the values in register B and C setting the zero flag if the same (affects register A or D) (equivalent to eor).",
			"syntax": "[ a | d ]"
		},
		{
			"name": "eor",
			"summary": "Logic Xor [ALU]",
			"description": "Performs a bitwise XOR operation on register B and C (B^C) placing the result in register A or D.",
			"syntax": "[ a | d ]"
		},
		{
			"name": "inc",
			"summary": "Increment [ALU]",
			"description": "Increments contents of register B placing the result in register A or D",
			"syntax": "[ a | d ]"
		},
		{
			"name": "jmp",
			"summary": "Jump to Label [GOTO]",
			"description": "Unconditionally jumps to the given address.",
			"syntax": "<label>"
		},
		{
			"name": "jsr",
			"summary": "Call Subroutine (Jump and Link) [GOTO]",
			"description": "Calls the subroutine at the given address.",
			"syntax": "<label>"
		},
		{
			"name": "ldi",
			"summary": "Load Immediate [SETAB]",
			"description": "Loads an 8-bit value in to register A/B or a 16-bit value in to register M/J.",
			"syntax": "[ <target>{a|b} , <value>{-16,15} ] | [ <target>{m|j} , [ <value>{0x0000,0xFFFF} | <label> ] ]"
 		},
		{
			"name": "mov",
			"summary": "Copy Register to Register [MOV8]",
			"description": "Copies the content of one 8-bit register to another.",
			"syntax": "<destination>{a,d} , <source>{a,d}"
		},
		{
			"name": "not",
			"summary": "Logic Not [ALU]",
			"description": "Performs a bitwise NOT operation on register B (~B) placing the result in register A or D.",
			"syntax": "[ a | d ]"
		},
		{
			"name": "opc",
			"summary": "Literal Opcode",
			"description": "Performs the given machine opcode directly.",
			"syntax": "[ <opcode>{0x00,0xFF} | <opcode>{0b00000000,0b11111111} ]"
		},
		{
			"name": "orr",
			"summary": "Logic Or [ALU]",
			"description": "Performs a bitwise OR operation on register B and C (B|C) placing the result in register A or D.",
			"syntax": "[ a | d ]"
		},
		{
			"name": "rol",
			"summary": "Bitwise Circular Shift Left [ALU]",
			"description": "Performs a bitwise left rotation on register B (<<B) placing the result in register A or D.",
			"syntax": "[ a | d ]"
		},
	]
};