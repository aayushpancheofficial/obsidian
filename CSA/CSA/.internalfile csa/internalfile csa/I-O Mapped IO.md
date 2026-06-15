# I/O Mapped I/O

## Definition

I/O mapped I/O uses a separate address space for I/O devices.

## Features

- Separate I/O address space.
- Uses special instructions such as IN and OUT.
- Memory address space is not reduced.

## Example

```text
IN A, PORT1
OUT PORT2, A
```

## Exam Answer

In I/O mapped I/O, I/O devices are accessed using separate I/O addresses and special I/O instructions.
