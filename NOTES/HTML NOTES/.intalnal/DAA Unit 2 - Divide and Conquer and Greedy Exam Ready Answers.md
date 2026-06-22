# DAA Unit 2 - Divide and Conquer and Greedy Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `#### Answer` headings.
- Important lines are highlighted using `==highlight==`.

---

### Q1. Explain Divide and Conquer paradigm / strategy.

#### Answer

==Divide and conquer== is an algorithm design technique in which a problem is divided into smaller subproblems, solved recursively, and combined to get the final answer.

#### Steps

1. Divide the problem.
2. Conquer subproblems.
3. Combine the results.

#### Examples

- Binary search
- Merge sort
- Quick sort
- Matrix multiplication
- Strassen's matrix multiplication

#### Exam Answer

Divide and conquer solves a problem by dividing it into smaller problems of the same type, solving them independently, and combining their solutions.

---

### Q2. Explain Merge Sort with algorithm, trace and complexity.

#### Answer

==Merge sort== is a divide and conquer sorting algorithm. It divides the array into two halves, sorts them recursively, and merges them.

#### Algorithm

```text
MergeSort(A, low, high):
    if low < high:
        mid = (low + high) / 2
        MergeSort(A, low, mid)
        MergeSort(A, mid+1, high)
        Merge(A, low, mid, high)
```

#### Trace Example

```text
1,6,3,2,7,5,8,4
[1,6,3,2] [7,5,8,4]
[1,6] [3,2] [7,5] [8,4]
[1] [6] [3] [2] [7] [5] [8] [4]
[1,6] [2,3] [5,7] [4,8]
[1,2,3,6] [4,5,7,8]
[1,2,3,4,5,6,7,8]
```

#### Complexity

Best, average, worst: `O(n log n)`. Space: `O(n)`.

---

### Q3. Explain Quick Sort with algorithm and complexity.

#### Answer

==Quick sort== selects a pivot and partitions the array so that smaller elements are on left and larger elements are on right.

#### Algorithm

```text
QuickSort(A, low, high):
    if low < high:
        p = Partition(A, low, high)
        QuickSort(A, low, p-1)
        QuickSort(A, p+1, high)
```

#### Complexity

| Case | Complexity |
|---|---|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n^2) |

Worst case occurs when pivot is always smallest or largest.

---

### Q4. Explain Prim's Algorithm for MST.

#### Answer

==Prim's algorithm== is a greedy algorithm used to find Minimum Spanning Tree of a connected weighted graph.

#### Algorithm

```text
Start with any vertex
while all vertices are not included:
    choose minimum edge from visited to unvisited vertex
    add edge to MST
```

#### Exam Table Format

```text
Step | Selected Edge | Weight | Total Cost
```

#### Complexity

Using matrix: `O(V^2)`. Using priority queue: `O(E log V)`.

#### Exam Answer

Prim's algorithm grows MST vertex by vertex by selecting the minimum edge connecting the current tree to a new vertex.

---

### Q5. Explain Kruskal's Algorithm for MST.

#### Answer

==Kruskal's algorithm== finds MST by selecting edges in increasing order of weight without forming a cycle.

#### Algorithm

```text
Sort all edges by weight
for each edge:
    if edge does not form cycle:
        add it to MST
stop when MST has V-1 edges
```

#### Complexity

```text
O(E log E)
```

#### Exam Answer

Kruskal's algorithm builds MST edge by edge. It uses cycle checking, usually with union-find.

---

### Q6. Difference between Kruskal's and Prim's Algorithm.

#### Answer

| Basis | Prim's | Kruskal's |
|---|---|---|
| Starts with | Vertex | Edge |
| Growth | One tree | Forest to tree |
| Selection | Min edge from tree to outside | Min edge among all edges |
| Cycle check | Less explicit | Required |
| Suitable | Dense graph | Sparse graph |

---

### Q7. Fractional Knapsack Problem using Greedy Approach.

#### Answer

==Fractional knapsack== allows taking fractions of items to maximize profit.

#### Strategy

Sort items by profit/weight ratio in descending order.

#### Algorithm

```text
Calculate p/w for each item
Sort by p/w decreasing
Take full item if possible
Otherwise take fraction
```

#### Complexity

```text
O(n log n)
```

#### Exam Answer

Fractional knapsack is optimally solved using greedy method because choosing maximum profit/weight ratio first gives maximum profit.

---

### Q8. Explain Greedy Approach and compare with Divide and Conquer.

#### Answer

==Greedy method== builds solution by choosing the best current option and never reconsidering it.

| Basis | Divide and Conquer | Greedy |
|---|---|---|
| Strategy | Divide into subproblems | Choose local best |
| Recursion | Common | Not necessary |
| Combine | Required | Not required |
| Example | Merge sort | Prim's algorithm |

---

### Q9. Binary Search and Strassen's Matrix Multiplication.

#### Answer

#### Binary Search

Binary search works on sorted arrays and repeatedly halves the search space.

Complexity: `O(log n)`.

#### Strassen's Matrix Multiplication

Strassen's algorithm multiplies matrices using 7 multiplications instead of 8 for 2x2 block multiplication.

Complexity:

```text
O(n^log2 7) â‰ˆ O(n^2.807)
```

---

## Final 60+ Marks Revision Priority

1. Prim's algorithm
2. Kruskal's algorithm
3. Fractional knapsack
4. Divide and conquer
5. Merge sort
6. Quick sort
7. Kruskal vs Prim
8. Binary search
9. Strassen's algorithm
