# Bit-Pair Recoding

## Definition

Bit-pair recoding, or modified Booth algorithm, processes multiplier bits in groups of three and reduces partial products.

## Recoding Table

| Bits | Operation |
|---|---|
| 000 | 0 |
| 001 | +M |
| 010 | +M |
| 011 | +2M |
| 100 | -2M |
| 101 | -M |
| 110 | -M |
| 111 | 0 |

## Exam Answer

Modified Booth algorithm speeds multiplication by recoding multiplier bits in pairs. It uses operations 0, +M, -M, +2M, and -2M.
