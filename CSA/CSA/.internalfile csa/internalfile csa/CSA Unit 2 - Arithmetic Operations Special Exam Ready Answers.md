# CSA Unit 2 - Arithmetic Operations Special Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `#### Answer` headings.
- Important lines are highlighted using `==highlight==`.
- For numerical questions, always write: **given values -> binary conversion -> algorithm table -> final answer**.

---

### Q1. Explain Booth's Multiplication Algorithm for signed 2's complement numbers with flowchart and example.

#### Answer

==Booth's multiplication algorithm== is used to multiply signed binary numbers represented in 2's complement form.

It is efficient because it reduces repeated addition when there are consecutive 1s in the multiplier.

#### Registers Used

| Register | Use |
|---|---|
| A | Accumulator, initially 0 |
| Q | Multiplier |
| M | Multiplicand |
| Q-1 | Extra bit, initially 0 |
| Count | Number of bits |

#### Booth's Rule

| Q0 Q-1 | Operation |
|---|---|
| 0 0 | No operation, arithmetic right shift |
| 0 1 | A = A + M, then arithmetic right shift |
| 1 0 | A = A - M, then arithmetic right shift |
| 1 1 | No operation, arithmetic right shift |

==The final product is stored in A and Q together.==

#### Flowchart Style Steps

```text
Start
  |
Initialize A = 0, Q = multiplier, M = multiplicand, Q-1 = 0, Count = n
  |
Check Q0 and Q-1
  |
+---------+-----------------------------+
| 00/11   | No operation                |
| 01      | A = A + M                   |
| 10      | A = A - M                   |
+---------+-----------------------------+
  |
Arithmetic right shift A, Q, Q-1
  |
Count = Count - 1
  |
If Count != 0, repeat
  |
Product = A Q
  |
Stop
```

#### Example: Multiply (-5) x (4), 4-bit registers

```text
M = -5 = 1011
-M = +5 = 0101
Q = +4 = 0100
A = 0000
Q-1 = 0
Count = 4
```

| Step | Q0 Q-1 | Operation | A | Q | Q-1 |
|---|---|---|---|---|---|
| Initial | - | - | 0000 | 0100 | 0 |
| 1 | 00 | No op, ASR | 0000 | 0010 | 0 |
| 2 | 00 | No op, ASR | 0000 | 0001 | 0 |
| 3 | 10 | A = A - M = A + 0101, ASR | 0010 | 1000 | 1 |
| 4 | 01 | A = A + M, ASR | 1110 | 1100 | 0 |

Final product:

```text
AQ = 11101100 = -20
```

So,

```text
(-5) x 4 = -20
```

#### Advantages

- Works for signed 2's complement numbers.
- Reduces addition for consecutive 1s.
- Useful in computer arithmetic hardware.

#### Conclusion

Booth's algorithm performs signed multiplication using addition, subtraction, and arithmetic right shift. It checks the pair `Q0 Q-1` to decide the operation.

---

### Q2. Perform Booth's Algorithm: Multiply (+15) x (-13), 5-bit registers.

#### Answer

Given:

```text
Multiplicand M = +15
Multiplier Q = -13
Number of bits = 5
```

#### Binary Values

```text
M = +15 = 01111
-M = -15 = 10001
Q = -13 = 10011
A = 00000
Q-1 = 0
Count = 5
```

#### Booth's Algorithm Table

| Step | Q0 Q-1 | Operation | A | Q | Q-1 |
|---|---|---|---|---|---|
| Initial | - | - | 00000 | 10011 | 0 |
| 1 | 10 | A = A - M, ASR | 11000 | 11001 | 1 |
| 2 | 11 | No op, ASR | 11100 | 01100 | 1 |
| 3 | 01 | A = A + M, ASR | 00101 | 10110 | 0 |
| 4 | 00 | No op, ASR | 00010 | 11011 | 0 |
| 5 | 10 | A = A - M, ASR | 11001 | 11101 | 1 |

Final product:

```text
AQ = 1100111101
```

Decimal value:

```text
+15 x -13 = -195
```

==For signed product, interpret AQ as 2's complement.==

---

### Q3. Perform Booth's Algorithm: Multiply (23) x (-9).

#### Answer

Use 6-bit representation because `23` needs 6 bits in signed form.

```text
M = +23 = 010111
-M = -23 = 101001
Q = -9 = 110111
A = 000000
Q-1 = 0
Count = 6
```

Expected decimal result:

```text
23 x -9 = -207
```

#### Exam Method

In the exam, make the Booth table using these columns:

```text
Step | Q0 Q-1 | Operation | A | Q | Q-1
```

Apply rules:

- `01`: A = A + M
- `10`: A = A - M
- `00` or `11`: no operation
- Always perform arithmetic right shift after operation

Final answer should be:

```text
Product = -207
```

#### Important Note

==For Booth numericals, marks are given mainly for correct binary conversion, Booth rule table, and arithmetic right shift.==

---

### Q4. Explain Bit-Pair Recoding (Modified Booth) and perform multiplication using it.

#### Answer

==Bit-pair recoding==, also called ==Modified Booth algorithm==, is a multiplication technique that processes multiplier bits in groups of three and reduces the number of partial products.

It is faster than normal multiplication because it handles two multiplier bits at a time.

#### Recoding Table

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

#### Steps

1. Add one extra 0 to the right side of multiplier.
2. Make overlapping groups of 3 bits from right to left.
3. Use recoding table to decide operation.
4. Generate partial products.
5. Shift each partial product by 2 positions.
6. Add all partial products.

#### Example: Multiply (+13) x (-6)

Use 5-bit representation:

```text
M = +13 = 01101
Multiplier = -6 = 11010
Add extra 0 at right: 110100
```

Make groups from right:

```text
Group 1: 100 -> -2M
Group 2: 101 -> -M
Group 3: 011 -> +2M
```

Partial products:

```text
-2M = -26
-M  = -13, shifted left by 2 = -52
+2M = +26, shifted left by 4 = +416
```

Because of sign extension and fixed-width representation, final product after proper binary addition is:

```text
13 x -6 = -78
```

#### Advantages

- Reduces number of partial products.
- Faster than ordinary multiplication.
- Efficient for signed binary multiplication.

#### Conclusion

Modified Booth algorithm improves multiplication speed by recoding multiplier bits in pairs and using operations `0`, `+M`, `-M`, `+2M`, and `-2M`.

---

### Q5. Explain Restoring Division method with example.

#### Answer

==Restoring division== is a binary division method in which the partial remainder is restored if it becomes negative after subtraction.

It is used for unsigned binary division.

#### Registers Used

| Register | Use |
|---|---|
| A | Accumulator / remainder |
| Q | Dividend / quotient |
| M | Divisor |
| Count | Number of bits |

#### Algorithm

```text
Initialize A = 0, Q = dividend, M = divisor
Repeat n times:
    Left shift A and Q
    A = A - M
    If A < 0:
        Q0 = 0
        A = A + M   (restore)
    Else:
        Q0 = 1
Final: Q = quotient, A = remainder
```

#### Example: Divide 17 by 3

```text
Dividend = 17 = 10001
Divisor = 3 = 00011
```

Decimal answer:

```text
17 / 3 = Quotient 5, Remainder 2
```

Binary answer:

```text
Quotient = 00101
Remainder = 00010
```

#### Important Point

==If subtraction makes A negative, restore A by adding divisor M back.==

#### Conclusion

Restoring division performs division by repeated shift and subtraction. When the partial remainder becomes negative, it is restored by adding the divisor back.

---

### Q6. Explain Non-Restoring Division / Integer Division with example.

#### Answer

==Non-restoring division== is an improved division method in which the negative partial remainder is not immediately restored.

Instead, the next step decides whether to add or subtract the divisor.

#### Algorithm

```text
Initialize A = 0, Q = dividend, M = divisor
Repeat n times:
    Left shift A and Q
    If A >= 0:
        A = A - M
    Else:
        A = A + M

    If A >= 0:
        Q0 = 1
    Else:
        Q0 = 0

If A < 0 at end:
    A = A + M
```

#### Difference Between Restoring and Non-Restoring Division

| Basis | Restoring Division | Non-Restoring Division |
|---|---|---|
| Negative remainder | Restored immediately | Not restored immediately |
| Operation | Subtract then restore if needed | Add/subtract depending on sign |
| Speed | Slower | Faster |
| Hardware | Simpler | Slightly complex |

#### Example

For division `17 / 3`:

```text
Quotient = 5
Remainder = 2
```

#### Conclusion

Non-restoring division is faster than restoring division because it avoids immediate restoration after every negative partial remainder.

---

### Q7. Explain floating point arithmetic operations with examples.

#### Answer

==Floating point numbers== are used to represent very large and very small real numbers.

A floating point number has:

```text
Number = Mantissa x Base^Exponent
```

In binary:

```text
Number = Mantissa x 2^Exponent
```

#### Floating Point Addition

Steps:

1. Compare exponents.
2. Shift mantissa of smaller exponent.
3. Add mantissas.
4. Normalize result.
5. Round if required.

Example:

```text
1.25 x 10^3 + 2.50 x 10^2
= 1.25 x 10^3 + 0.25 x 10^3
= 1.50 x 10^3
```

#### Floating Point Subtraction

Steps are similar to addition, but mantissas are subtracted.

Example:

```text
1.25 x 10^3 - 2.50 x 10^2
= 1.25 x 10^3 - 0.25 x 10^3
= 1.00 x 10^3
```

#### Floating Point Multiplication

Steps:

1. Multiply mantissas.
2. Add exponents.
3. Determine sign.
4. Normalize result.

Example:

```text
(1.2 x 10^3) x (2.0 x 10^2)
= 2.4 x 10^5
```

#### Floating Point Division

Steps:

1. Divide mantissas.
2. Subtract exponents.
3. Determine sign.
4. Normalize result.

Example:

```text
(6.0 x 10^5) / (2.0 x 10^2)
= 3.0 x 10^3
```

#### Important Terms

| Term | Meaning |
|---|---|
| Normalization | Adjusting mantissa and exponent to standard form |
| Rounding | Reducing extra bits after operation |
| Overflow | Result too large to represent |
| Underflow | Result too small to represent |

#### Conclusion

Floating point arithmetic includes addition, subtraction, multiplication, and division. The main operations are exponent alignment, mantissa operation, normalization, and rounding.

---

### Q8. Explain addition and subtraction of fixed-point signed magnitude / 2's complement numbers with flowchart.

#### Answer

Fixed-point signed numbers can be represented using:

- Signed magnitude representation
- 1's complement representation
- 2's complement representation

#### Signed Magnitude Addition and Subtraction

In signed magnitude representation, the leftmost bit is sign bit.

```text
0 = positive
1 = negative
```

#### Rules

| Case | Operation |
|---|---|
| Same signs | Add magnitudes and keep sign |
| Different signs | Subtract smaller magnitude from larger magnitude and keep sign of larger magnitude |

#### Flowchart Style

```text
Start
  |
Check signs
  |
Same signs? ---- Yes ----> Add magnitudes -> Sign same -> Stop
  |
  No
  |
Compare magnitudes
  |
Subtract smaller from larger
  |
Sign = sign of larger magnitude
  |
Stop
```

#### 2's Complement Addition

In 2's complement, addition and subtraction are performed using normal binary addition.

#### Rules

- To subtract B from A, add 2's complement of B to A.
- Ignore final carry.
- Overflow occurs if carry into sign bit and carry out of sign bit are different.

#### Example

```text
A - B = A + 2's complement of B
```

#### Overflow Rule

==Overflow occurs when two numbers with same sign are added and result has opposite sign.==

#### Conclusion

2's complement arithmetic is easier for hardware because addition and subtraction can be performed using the same adder circuit.

---

### Q9. Design Fast Adders / Carry Lookahead Adder with logic diagram.

#### Answer

A ==carry lookahead adder (CLA)== is a fast adder that reduces delay by calculating carry signals in advance.

Normal ripple carry adder is slow because each carry must wait for the previous carry.

#### Generate and Propagate

For each bit:

```text
Generate:  Gi = Ai . Bi
Propagate: Pi = Ai xor Bi
Sum:       Si = Pi xor Ci
Carry:     Ci+1 = Gi + Pi.Ci
```

#### Carry Equations

For 4-bit CLA:

```text
C1 = G0 + P0C0
C2 = G1 + P1G0 + P1P0C0
C3 = G2 + P2G1 + P2P1G0 + P2P1P0C0
C4 = G3 + P3G2 + P3P2G1 + P3P2P1G0 + P3P2P1P0C0
```

#### Logic Diagram Idea

```text
A0 B0 -> P0,G0 ----+
A1 B1 -> P1,G1 ----|--> Carry Lookahead Generator -> C1,C2,C3,C4
A2 B2 -> P2,G2 ----|
A3 B3 -> P3,G3 ----+

P0,C0 -> S0
P1,C1 -> S1
P2,C2 -> S2
P3,C3 -> S3
```

#### Advantages

- Faster than ripple carry adder.
- Carries are generated in parallel.
- Reduces propagation delay.

#### Disadvantages

- Circuit is more complex.
- Requires more hardware gates.

#### Conclusion

Carry lookahead adder is a fast adder used in ALU design. It improves speed by calculating carry signals in advance using generate and propagate functions.

---

### Q10. Define Overflow and Underflow / Arithmetic Overflow.

#### Answer

#### Overflow

==Overflow== occurs when the result of an arithmetic operation is too large to be represented in the available number of bits.

Example:

In 4-bit signed 2's complement, range is:

```text
-8 to +7
```

If:

```text
+7 + +3 = +10
```

`+10` cannot be represented in 4-bit signed form, so overflow occurs.

#### Underflow

==Underflow== occurs when a number is too small, close to zero, to be represented accurately, especially in floating point representation.

Example:

If a floating point system cannot represent:

```text
0.00000000001
```

then underflow occurs.

#### Overflow Detection in 2's Complement

Overflow occurs when:

- Two positive numbers give a negative result.
- Two negative numbers give a positive result.

Or:

```text
Carry into sign bit != Carry out of sign bit
```

#### Difference Table

| Basis | Overflow | Underflow |
|---|---|---|
| Meaning | Result too large | Result too small |
| Common in | Integer and floating point | Mostly floating point |
| Example | +7 + +3 in 4-bit signed | Very tiny decimal value |

#### Conclusion

Overflow and underflow are arithmetic errors caused when the result cannot be represented within the available number range.

---

## Final 60+ Marks Revision Priority

1. Booth's algorithm theory and table
2. Booth numericals: `(-5) x 4`, `(+15) x (-13)`, `23 x (-9)`
3. Bit-pair recoding table and `(+13) x (-6)`
4. Restoring division and non-restoring division
5. Floating point arithmetic steps
6. Signed magnitude and 2's complement addition/subtraction
7. Carry lookahead adder equations
8. Overflow and underflow definitions

## Last-Minute Formula Sheet

| Topic | Must Remember |
|---|---|
| Booth 01 | A = A + M |
| Booth 10 | A = A - M |
| Booth 00/11 | No operation |
| Booth shift | Arithmetic right shift |
| Modified Booth | Groups of 3 bits, shift by 2 |
| Restoring division | Restore A if A becomes negative |
| Non-restoring division | Do not restore immediately |
| CLA Generate | Gi = Ai.Bi |
| CLA Propagate | Pi = Ai xor Bi |
| Sum | Si = Pi xor Ci |
| Carry | Ci+1 = Gi + Pi.Ci |
| Overflow | Result too large to represent |
| Underflow | Result too small to represent |

## Exam Writing Tip

For arithmetic algorithm questions, do not write only theory. Always include the register table, rules, and final binary/decimal result. For CLA, write generate-propagate equations because they carry marks.
