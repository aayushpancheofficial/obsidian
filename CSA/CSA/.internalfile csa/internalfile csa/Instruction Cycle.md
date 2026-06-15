# Instruction Cycle

## Definition

Instruction cycle is the sequence of steps followed by CPU to execute an instruction.

## Steps

```text
Fetch -> Decode -> Execute -> Memory Access -> Write Back
```

## Fetch Micro-operations

```text
MAR <- PC
MDR <- M[MAR]
IR <- MDR
PC <- PC + 1
```

## Explanation

- Fetch: instruction is fetched from memory.
- Decode: opcode is decoded.
- Execute: operation is performed.
- Memory access: memory is read/written if needed.
- Write back: result is stored.

## Exam Answer

The instruction cycle is the basic working cycle of CPU. It includes fetch, decode, execute, memory access, and write back phases.
