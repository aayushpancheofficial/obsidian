# DAA Unit 4 - Backtracking Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `#### Answer` headings.
- Important lines are highlighted using `==highlight==`.

---

### Q1. Explain Backtracking â€” concept and recursive backtracking.

#### Answer

==Backtracking== builds a solution step by step and abandons a path when it cannot lead to a valid solution.

#### Basic Pattern

```text
Choose -> Check safety -> Recurse -> Undo choice
```

#### Terms

| Term | Meaning |
|---|---|
| State space tree | Tree of choices |
| Promising node | Can lead to solution |
| Non-promising node | Cannot lead to solution |
| Pruning | Removing useless branches |

#### General Algorithm

```text
Backtrack(solution):
    if solution complete: print
    for each choice:
        if safe:
            make choice
            Backtrack(solution)
            undo choice
```

---

### Q2. 8-Queens Problem using Backtracking.

#### Answer

Place 8 queens on an 8x8 board so no two queens attack each other.

#### Safe Conditions

- No same row.
- No same column.
- No same diagonal.

#### Algorithm

```text
NQueen(row):
    if row == N: print board
    for col = 0 to N-1:
        if isSafe(row,col):
            place queen
            NQueen(row+1)
            remove queen
```

#### 4-Queen Example

```text
. Q . .
. . . Q
Q . . .
. . Q .
```

Complexity: `O(N!)`.

---

### Q3. Graph Coloring and Chromatic Number.

#### Answer

==Graph coloring== assigns colors to vertices so adjacent vertices have different colors.

==Chromatic number== is the minimum number of colors required.

#### Algorithm

```text
GraphColor(vertex):
    for color = 1 to m:
        if safe:
            assign color
            color next vertex
            remove color
```

Complexity: `O(m^n)`.

---

### Q4. Sum of Subsets Problem.

#### Answer

Find all subsets whose sum is equal to target.

#### Example

```text
S = {5,10,12,13,15,18}, target = 30
Solutions: {5,10,15}, {5,12,13}, {12,18}
```

```text
S = {1,3,4,5}, target = 8
Solutions: {3,5}, {1,3,4}
```

#### Algorithm

```text
Include item
Recurse
Exclude item
Recurse
Prune if sum > target
```

Complexity: `O(2^n)`.

---

### Q5. Hamiltonian Cycle using Backtracking.

#### Answer

A ==Hamiltonian cycle== visits every vertex exactly once and returns to starting vertex.

#### Safe Condition

- Vertex is adjacent to previous vertex.
- Vertex is not already included.
- Last vertex connects back to first vertex.

Complexity: `O(n!)`.

---

### Q6. Knapsack using Backtracking.

#### Answer

Knapsack using backtracking explores include/exclude choices and prunes branches that exceed capacity or cannot improve best profit.

---

## Final 60+ Marks Revision Priority

1. Backtracking concept
2. 8-Queens
3. Graph coloring
4. Sum of subsets
5. Hamiltonian cycle
6. Knapsack backtracking
