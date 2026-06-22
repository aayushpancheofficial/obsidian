# DAA Unit 5 - Branch and Bound and NP Problems Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `#### Answer` headings.
- Important lines are highlighted using `==highlight==`.

---

### Q1. Explain NP-Hard and NP-Complete problems.

#### Answer

==NP-Hard== problems are at least as hard as every problem in NP. They may not belong to NP.

==NP-Complete== problems are both NP and NP-Hard.

| Basis | NP-Hard | NP-Complete |
|---|---|---|
| Belongs to NP | Not necessary | Required |
| Verification | Not always polynomial | Polynomial |
| Example | Optimization TSP | SAT, Hamiltonian cycle |

#### Exam Answer

NP-Complete problems are the hardest problems in NP. If any NP-Complete problem is solved in polynomial time, then all NP problems can be solved in polynomial time.

---

### Q2. State and Explain Cook's Theorem.

#### Answer

==Cook's theorem== states that Boolean Satisfiability Problem (SAT) is NP-Complete.

#### Importance

- SAT was the first NP-Complete problem.
- Every NP problem can be reduced to SAT in polynomial time.
- It is used to prove other problems NP-Complete.

---

### Q3. Explain Travelling Salesman Problem (TSP).

#### Answer

==TSP== asks for the minimum cost tour that visits every city exactly once and returns to starting city.

#### Tour Example

```text
A -> B -> C -> D -> A
```

#### Types

- Decision TSP: Is there a tour with cost <= K?
- Optimization TSP: Find minimum cost tour.

TSP optimization is NP-Hard.

---

### Q4. Explain FIFO Branch and Bound.

#### Answer

==Branch and bound== explores a state space tree and prunes nodes using bounds.

==FIFO Branch and Bound== uses a queue to select the next live node.

#### Node Types

| Node | Meaning |
|---|---|
| Live node | Generated but not expanded |
| E-node | Node being expanded |
| Dead node | Pruned or completed |

#### Steps

```text
Insert root in queue
Remove front node
Generate children
Compute bounds
Prune non-promising nodes
Insert promising nodes at rear
```

---

### Q5. Explain P-Class and NP-Class.

#### Answer

==P-class== contains problems solvable in polynomial time.

==NP-class== contains problems whose solutions can be verified in polynomial time.

| Basis | P | NP |
|---|---|---|
| Meaning | Solvable fast | Verifiable fast |
| Example | MST, binary search | SAT, Hamiltonian cycle |
| Relation | P subset of NP | Contains P |

Important:

```text
P âŠ† NP
```

---

### Q6. Explain LC Search / Least-Cost Branch and Bound.

#### Answer

==LC branch and bound== selects the live node with least cost or best bound using priority queue.

| Basis | FIFO B&B | LC B&B |
|---|---|---|
| Data structure | Queue | Priority queue |
| Node selected | First generated | Least cost |
| Efficiency | Less informed | More informed |

---

### Q7. 0/1 Knapsack and 15-Puzzle using Branch and Bound.

#### Answer

#### 0/1 Knapsack

Use state space tree. Each level represents item. Each branch means include or exclude. Bound is used to prune non-promising nodes.

#### 15-Puzzle

Use least-cost search.

Cost function:

```text
Cost = Level + Number of misplaced tiles
```

or

```text
Cost = Level + Manhattan distance
```

---

## Final 60+ Marks Revision Priority

1. NP-Hard and NP-Complete
2. Cook's theorem
3. FIFO Branch and Bound
4. TSP
5. P and NP classes
6. LC search
7. 0/1 knapsack B&B
8. 15-puzzle
