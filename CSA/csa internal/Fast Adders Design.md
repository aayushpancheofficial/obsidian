# Fast Adders Design

## Meaning

Fast adders reduce carry propagation delay in binary addition.

## Carry Lookahead Adder

Generate and propagate:

```text
Gi = Ai.Bi
Pi = Ai xor Bi
Si = Pi xor Ci
Ci+1 = Gi + Pi.Ci
```

## 4-bit Carry Equations

```text
C1 = G0 + P0C0
C2 = G1 + P1G0 + P1P0C0
C3 = G2 + P2G1 + P2P1G0 + P2P1P0C0
C4 = G3 + P3G2 + P3P2G1 + P3P2P1G0 + P3P2P1P0C0
```

## Exam Answer

Carry lookahead adder is faster than ripple carry adder because it calculates carry signals in advance using generate and propagate functions.
