# Memory Mapped I/O

## Definition

Memory mapped I/O treats I/O device registers as memory locations.

## Features

- Same address space for memory and I/O.
- Uses normal memory instructions.
- Programming is simpler.

## Example

```text
LOAD R1, [5000]
STORE [5001], R1
```

## Exam Answer

In memory mapped I/O, I/O device registers are assigned memory addresses and accessed using normal load/store instructions.
