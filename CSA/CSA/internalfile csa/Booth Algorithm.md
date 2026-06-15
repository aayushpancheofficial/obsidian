# Booth Algorithm

## Definition

Booth's algorithm is used for multiplication of signed 2's complement numbers.

## Rule

| Q0 Q-1 | Operation |
|---|---|
| 00 | No operation |
| 01 | A = A + M |
| 10 | A = A - M |
| 11 | No operation |

After every operation, perform arithmetic right shift.

## Registers

A, Q, M, Q-1, Count.

## Exam Answer

Booth's algorithm checks Q0 and Q-1 to decide add, subtract, or no operation. The final product is stored in A and Q together.
