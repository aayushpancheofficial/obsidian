# Instruction Formats

## Definition

Instruction format is the arrangement of bits in a machine instruction.

## Fields

| Field | Meaning |
|---|---|
| Opcode | Operation to be performed |
| Addressing mode | Method of operand access |
| Register field | Register used |
| Address field | Memory address or operand |

## Types

| Format | Example | Meaning |
|---|---|---|
| Three-address | ADD X,A,B | X = A + B |
| Two-address | ADD A,B | A = A + B |
| One-address | ADD B | AC = AC + B |
| Zero-address | ADD | Stack top values added |

## Exam Answer

Instruction format defines how opcode, operands, addressing mode, and register fields are arranged in an instruction. Common formats are three-address, two-address, one-address, and zero-address formats.
