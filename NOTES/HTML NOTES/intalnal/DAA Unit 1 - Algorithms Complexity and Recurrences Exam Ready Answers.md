# DAA Unit 1 - Algorithms, Complexity and Recurrences Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `#### Answer` headings.
- Important lines are highlighted using `==highlight==`.
- For recurrence questions, always write: **case -> formula -> substitution -> final bound**.

---

### Q1. What are Asymptotic Notations? Explain Big-O, Omega, Theta, little-o, little-omega with examples.

#### Answer

==Asymptotic notations== describe the growth rate of an algorithm when input size `n` becomes very large. They ignore constants and lower-order terms.

#### Types

| Notation | Meaning | Bound |
|---|---|---|
| Big-O | Function grows at most as fast as given function | Upper bound |
| Omega | Function grows at least as fast as given function | Lower bound |
| Theta | Function grows exactly like given function | Tight bound |
| little-o | Strict upper bound | Strictly smaller growth |
| little-omega | Strict lower bound | Strictly larger growth |

#### Definitions

```text
f(n) = O(g(n))       if f(n) <= c.g(n) for n >= n0
f(n) = Omega(g(n))   if f(n) >= c.g(n) for n >= n0
f(n) = Theta(g(n))   if c1.g(n) <= f(n) <= c2.g(n)
```

#### Examples

```text
3n^2 + 5n + 7 = O(n^2)
3n^2 + 5n + 7 = Omega(n^2)
3n^2 + 5n + 7 = Theta(n^2)
n = o(n^2)
n^2 = omega(n)
```

#### Graph Idea

```text
Big-O:     f(n) stays below c.g(n)
Omega:     f(n) stays above c.g(n)
Theta:     f(n) stays between c1.g(n) and c2.g(n)
```

#### Exam Answer

Asymptotic notations are used to analyze algorithm efficiency for large input size. Big-O gives upper bound, Omega gives lower bound, and Theta gives tight bound. Little-o and little-omega are strict upper and lower bounds. They help compare algorithms independent of hardware.

---

### Q2. What is an Algorithm? Write its characteristics/criteria.

#### Answer

An ==algorithm== is a finite sequence of clear and well-defined steps used to solve a problem.

#### Characteristics

| Characteristic | Meaning |
|---|---|
| Input | Takes zero or more inputs |
| Output | Produces at least one output |
| Definiteness | Every step must be clear |
| Finiteness | Must terminate after finite steps |
| Effectiveness | Steps must be basic and executable |
| Correctness | Must solve the problem correctly |

#### Example

```text
Step 1: Start
Step 2: Read A and B
Step 3: Sum = A + B
Step 4: Print Sum
Step 5: Stop
```

#### Exam Answer

An algorithm is a step-by-step procedure to solve a computational problem. A good algorithm must be finite, definite, effective, correct, and must produce output.

---

### Q3. Solve recurrences using Master Method / Master Theorem.

#### Answer

Master theorem solves recurrences of the form:

```text
T(n) = aT(n/b) + f(n)
```

Compare `f(n)` with:

```text
n^(log_b a)
```

#### Cases

| Case | Condition | Result |
|---|---|---|
| 1 | f(n) is smaller than n^(log_b a) | T(n)=Theta(n^(log_b a)) |
| 2 | f(n) is same as n^(log_b a) | T(n)=Theta(n^(log_b a) log n) |
| 3 | f(n) is larger than n^(log_b a) | T(n)=Theta(f(n)) |

#### Important Examples

```text
T(n)=4T(n/2)+n
a=4, b=2, n^(log_2 4)=n^2
f(n)=n, Case 1
T(n)=Theta(n^2)
```

```text
T(n)=2T(n/2)+n
a=2, b=2, n^(log_2 2)=n
f(n)=n, Case 2
T(n)=Theta(n log n)
```

```text
T(n)=9T(n/3)+n
a=9, b=3, n^(log_3 9)=n^2
f(n)=n, Case 1
T(n)=Theta(n^2)
```

```text
T(n)=7T(n/3)+n^2
n^(log_3 7)=n^1.77
f(n)=n^2, Case 3
T(n)=Theta(n^2)
```

#### Exam Tip

==Always calculate n^(log_b a) first. That decides the Master Theorem case.==

---

### Q4. Solve recurrences using Recursion Tree Method.

#### Answer

Recursion tree method expands a recurrence level by level and adds the cost at each level.

#### Steps

1. Write cost at root.
2. Expand recursive calls.
3. Find cost of each level.
4. Find tree height.
5. Add all level costs.

#### Example

```text
T(n) = 2T(n/2) + n^2
```

Level costs:

```text
Level 0: n^2
Level 1: 2(n/2)^2 = n^2/2
Level 2: 4(n/4)^2 = n^2/4
```

Total:

```text
T(n) = n^2 + n^2/2 + n^2/4 + ...
T(n) = Theta(n^2)
```

#### Exam Answer

Recursion tree method represents recurrence as a tree. Each level cost is calculated and all levels are summed to find the asymptotic bound.

---

### Q5. Explain Heap Sort with algorithm and analysis.

#### Answer

==Heap sort== is a comparison-based sorting algorithm that uses a binary heap. For ascending order, max heap is used.

#### Algorithm

```text
HeapSort(A):
    Build max heap
    for i = n downto 2:
        swap A[1] and A[i]
        reduce heap size
        MaxHeapify(A, 1)
```

#### Complexity

| Case | Complexity |
|---|---|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n log n) |

#### Exam Answer

Heap sort builds a max heap and repeatedly moves the largest element to the end. It is in-place and has guaranteed O(n log n) time complexity.

---

### Q6. Explain Insertion Sort, Selection Sort and Bubble Sort.

#### Answer

#### Insertion Sort

Insertion sort inserts each element into the correct position of the sorted left part.

```text
for i = 1 to n-1:
    key = A[i]
    shift larger elements right
    insert key
```

Worst complexity: `O(n^2)`. Best complexity: `O(n)`.

#### Selection Sort

Selection sort repeatedly selects the minimum element from the unsorted part and places it at the beginning.

Complexity: `O(n^2)` in all cases.

#### Bubble Sort

Bubble sort repeatedly compares adjacent elements and swaps if they are in wrong order.

Worst complexity: `O(n^2)`.

---

## Final 60+ Marks Revision Priority

1. Asymptotic notations
2. Master theorem numericals
3. Recursion tree method
4. Algorithm characteristics
5. Heap sort
6. Insertion/Selection/Bubble sort

## Last-Minute Formula Sheet

| Topic | Must Remember |
|---|---|
| Big-O | Upper bound |
| Omega | Lower bound |
| Theta | Tight bound |
| Master theorem | T(n)=aT(n/b)+f(n) |
| Heap sort | O(n log n) |
| Insertion worst | O(n^2) |
