# Addressing Modes

## Definition

Addressing modes specify how the operand of an instruction is located.

## Effective Address

Effective address is the actual memory address of the operand.

## Types

| Mode              | Formula / Meaning             | Example        |
| ----------------- | ----------------------------- | -------------- |
| Immediate         | Operand is inside instruction | MOV R1,#5      |
| Direct            | EA = address field            | MOV R1,[400]   |
| Indirect          | EA = M[address field]         | MOV R1,[[400]] |
| Register          | Operand in register           | ADD R1,R2      |
| Register Indirect | EA = register content         | MOV R1,[R2]    |
| Indexed           | EA = address + index          | MOV R1,400(R2) |
| Relative          | EA = PC + offset              | BR 50          |

## Exam Answer

Addressing modes provide flexibility in accessing operands. They may place the operand directly in the instruction, in a register, or in memory. Important modes are immediate, direct, indirect, register, register indirect, indexed, and relative addressing.

## Remember

Immediate has no effective address because operand is directly given.
