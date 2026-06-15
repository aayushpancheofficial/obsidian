# Microinstruction Format

## Definition

Microinstruction format is the structure of a microinstruction stored in control memory.

## Format

```text
+---------------+-------------+----------+---------+
| Control Field | Condition   | Branch   | Address |
+---------------+-------------+----------+---------+
```

## Fields

| Field | Function |
|---|---|
| Control field | Specifies micro-operations |
| Condition field | Tests status flags |
| Branch field | Defines next address selection |
| Address field | Stores next microinstruction address |

## Types

- Horizontal microinstruction: long, fast, many signals directly.
- Vertical microinstruction: short, encoded, slower.

## Exam Answer

Microinstruction format defines how control information is represented in control memory. Its fields control micro-operations and next-address sequencing.
