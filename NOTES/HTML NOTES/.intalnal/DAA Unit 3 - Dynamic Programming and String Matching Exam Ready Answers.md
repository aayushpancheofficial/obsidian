# DAA Unit 3 - Dynamic Programming and String Matching Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `#### Answer` headings.
- Important lines are highlighted using `==highlight==`.

---

### Q1. Explain Dynamic Programming â€” concept, steps and characteristics.

#### Answer

==Dynamic programming== solves optimization problems by breaking them into overlapping subproblems and storing their answers.

#### Conditions

| Condition | Meaning |
|---|---|
| Optimal substructure | Optimal answer contains optimal subproblem answers |
| Overlapping subproblems | Same subproblems repeat |

#### Steps

1. Define subproblem.
2. Write recurrence.
3. Create table.
4. Fill table.
5. Construct final answer.

#### Approaches

- Memoization: top-down.
- Tabulation: bottom-up.

---

### Q2. Longest Common Subsequence (LCS) algorithm and example.

#### Answer

==LCS== is the longest sequence appearing in the same relative order in two sequences.

#### Recurrence

```text
if X[i] == Y[j]:
    L[i][j] = L[i-1][j-1] + 1
else:
    L[i][j] = max(L[i-1][j], L[i][j-1])
```

#### Example

```text
X = BCBDAB
Y = BDCABA
One LCS = BCBA
Length = 4
```

#### Complexity

```text
O(mn)
```

---

### Q3. Explain Boyer-Moore Algorithm.

#### Answer

==Boyer-Moore== is a string matching algorithm that compares pattern from right to left and shifts pattern using mismatch information.

#### Heuristics

- Bad character rule
- Good suffix rule

#### Example

Text: `This is a test`, Pattern: `test`.

Boyer-Moore compares from the right side and shifts efficiently until match is found.

#### Exam Answer

Boyer-Moore is fast in practice because it can skip many characters after mismatch.

---

### Q4. Explain KMP Algorithm with example.

#### Answer

==KMP== avoids repeated comparisons using the LPS table.

#### LPS

LPS means longest proper prefix which is also suffix.

Example pattern:

```text
Pattern = ababd
LPS = 0 0 1 2 0
```

#### Complexity

```text
O(n + m)
```

#### Exam Answer

KMP preprocesses the pattern to create LPS table and searches text without moving text pointer backward.

---

### Q5. Matrix Chain Multiplication using Dynamic Programming.

#### Answer

Matrix chain multiplication finds the parenthesization with minimum scalar multiplications.

#### Recurrence

```text
m[i][j] = min(m[i][k] + m[k+1][j] + p[i-1]p[k]p[j])
```

#### Steps

1. Write dimensions.
2. Create cost table.
3. Fill diagonal with 0.
4. Fill by chain length.
5. Find minimum split.

#### Complexity

```text
Time = O(n^3)
Space = O(n^2)
```

---

### Q6. Finite Automata String Matching and 0/1 Knapsack DP.

#### Answer

#### Finite Automata String Matching

It builds an automaton for pattern matching. Each state represents number of matched characters. Searching time is `O(n)`.

#### 0/1 Knapsack DP

Each item is either included or excluded.

```text
K[i][w] = max(profit[i] + K[i-1][w-wt[i]], K[i-1][w])
```

Complexity: `O(nW)`.

---

## Final 60+ Marks Revision Priority

1. Dynamic programming concept
2. LCS
3. Boyer-Moore
4. KMP
5. Matrix chain multiplication
6. Finite automata
7. 0/1 knapsack DP
