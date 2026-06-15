# Microprogrammed Control

## Definition

Microprogrammed control unit generates control signals using microinstructions stored in control memory.

## Components

| Component | Use |
|---|---|
| Control memory | Stores microinstructions |
| Control address register | Holds address of microinstruction |
| Sequencer | Selects next microinstruction |
| Control word | Generates control signals |

## Diagram

```text
Instruction Register -> Mapping Logic -> Control Memory -> Control Word -> Control Signals
```

## Exam Answer

Microprogrammed control is flexible and easy to modify. It is slower than hardwired control because microinstructions must be read from control memory.
