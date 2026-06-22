# Unit 4 - Backtracking Exam Pack

## Target

Use this unit to score strong marks because the same questions repeat many times. Prepare these five questions first:

1. Backtracking concept and recursive backtracking
2. 8-Queens problem
3. Graph coloring and chromatic number
4. Sum of subsets problem
5. Hamiltonian cycle

## How To Write Any Backtracking Answer

Use this structure in the exam:

1. Definition
2. Basic idea / state space tree
3. Algorithm or pseudocode
4. Example / diagram / dry run
5. Time complexity
6. Application / conclusion

---

# 1. Backtracking

## Definition

Backtracking is an algorithmic technique used to solve problems by building a solution step by step. If a partial solution cannot lead to a valid complete solution, it is abandoned and the algorithm goes back to try another choice.

## Simple Meaning

Backtracking means:

- Choose one option.
- Check whether it is safe or valid.
- If valid, move forward.
- If invalid, undo the choice and try another option.

This undo step is called backtracking.

## Important Terms

| Term | Meaning |
|---|---|
| State space tree | Tree representing all possible choices |
| Promising node | A node that can lead to a solution |
| Non-promising node | A node that cannot lead to a solution |
| Pruning | Removing non-promising branches |
| Recursive backtracking | Backtracking implemented using recursion |

## General Algorithm

```text
Backtrack(solution):
    if solution is complete:
        print solution
        return

    for each possible choice:
        if choice is valid:
            make the choice
            Backtrack(solution)
            undo the choice
```

## Recursive Backtracking

Recursive backtracking uses function calls to explore choices. Each recursive call represents one decision level. When the algorithm reaches a wrong path, it returns to the previous function call and tries another choice.

## Advantages

- Easy to implement using recursion.
- Avoids unnecessary search using pruning.
- Useful for constraint-based problems.
- Can find one or all possible solutions.

## Disadvantages

- May take exponential time.
- Not efficient for very large input without pruning.
- Requires careful validity checking.

## Applications

- 8-Queens problem
- Graph coloring
- Sum of subsets
- Hamiltonian cycle
- Sudoku
- Maze solving

## Exam Answer

Backtracking is a problem-solving technique that constructs solutions step by step. At each step, it checks whether the current partial solution is promising. If it is promising, the algorithm continues. If it is not promising, the algorithm abandons that path and goes back to try another possibility. This process is often implemented using recursion and is called recursive backtracking. Backtracking is useful in problems like 8-Queens, graph coloring, sum of subsets, and Hamiltonian cycle.

---

# 2. 8-Queens Problem

## Problem Statement

Place 8 queens on an 8 x 8 chessboard so that no two queens attack each other.

## Rules

Two queens must not be in:

- Same row
- Same column
- Same diagonal

## Backtracking Idea

Place one queen in each row. For every row, try each column. If placing a queen is safe, move to the next row. If no column is safe, backtrack to the previous row.

## Safe Condition

A queen can be placed at position `(row, col)` if:

- No queen is already in column `col`.
- No queen is on upper-left diagonal.
- No queen is on upper-right diagonal.

## Algorithm

```text
NQueen(row):
    if row == N:
        print board
        return true

    for col = 0 to N-1:
        if isSafe(row, col):
            place queen at board[row][col]
            NQueen(row + 1)
            remove queen from board[row][col]
```

## Example Solution for 4-Queens

One valid 4-queen arrangement:

```text
. Q . .
. . . Q
Q . . .
. . Q .
```

Queen positions: `(1,2), (2,4), (3,1), (4,3)` using 1-based indexing.

## Time Complexity

Worst-case time complexity is approximately `O(N!)`, because one queen is placed in each row and columns reduce as choices are made.

## Exam Answer

The 8-Queens problem is a classic backtracking problem. The aim is to place eight queens on an 8 x 8 chessboard so that no two queens attack each other. The algorithm places queens row by row. Before placing a queen, it checks whether the column and both diagonals are safe. If the position is safe, the queen is placed and the algorithm proceeds to the next row. If no safe position is found, the algorithm backtracks and changes the previous queen position. This continues until all queens are placed safely.

---

# 3. Graph Coloring

## Definition

Graph coloring is the process of assigning colors to vertices of a graph such that no two adjacent vertices have the same color.

## Chromatic Number

The chromatic number of a graph is the minimum number of colors required to color the graph properly.

Symbol: `chi(G)`

## Backtracking Idea

Color vertices one by one. For each vertex, try each color. If the color is safe, assign it and move to the next vertex. If no color is safe, backtrack.

## Safe Condition

A color is safe for a vertex if none of its adjacent vertices has the same color.

## Algorithm

```text
GraphColor(vertex):
    if vertex == number_of_vertices:
        print color solution
        return true

    for color = 1 to m:
        if isSafe(vertex, color):
            assign color to vertex
            GraphColor(vertex + 1)
            remove color from vertex
```

## Example

For a triangle graph with vertices A, B, C:

- A is connected to B and C.
- B is connected to A and C.
- C is connected to A and B.

All three vertices are adjacent to each other, so three colors are needed.

Chromatic number: `chi(G) = 3`

## Time Complexity

For `n` vertices and `m` colors, worst-case time complexity is `O(m^n)`.

## Applications

- Map coloring
- Exam timetable scheduling
- Register allocation in compiler design
- Frequency assignment

## Exam Answer

Graph coloring is the assignment of colors to graph vertices such that no two adjacent vertices have the same color. The minimum number of colors required is called the chromatic number. In backtracking, vertices are colored one by one. For each vertex, all possible colors are tried. A color is assigned only if it does not conflict with adjacent vertices. If no color is possible, the algorithm backtracks and changes previous color assignments.

---

# 4. Sum of Subsets Problem

## Problem Statement

Given a set of positive integers and a target sum, find all subsets whose sum is equal to the target.

## Backtracking Idea

For every element, there are two choices:

- Include the element.
- Exclude the element.

The algorithm continues only if the current sum can still lead to the target sum.

## Example 1

Set: `{5, 10, 12, 13, 15, 18}`

Target: `30`

Possible subsets:

```text
{5, 10, 15} = 30
{5, 12, 13} = 30
{12, 18} = 30
```

## Example 2

Set: `{1, 3, 4, 5}`

Target: `8`

Possible subsets:

```text
{3, 5} = 8
{1, 3, 4} = 8
```

## Algorithm

```text
SumSubset(index, current_sum):
    if current_sum == target:
        print subset
        return

    if index == n or current_sum > target:
        return

    include element[index]
    SumSubset(index + 1, current_sum + element[index])

    exclude element[index]
    SumSubset(index + 1, current_sum)
```

## Bounding / Pruning

A branch can be stopped if:

- Current sum is greater than target.
- Current sum plus remaining elements is less than target.
- No further element can help reach the target.

## Time Complexity

Worst-case time complexity is `O(2^n)` because every element has include/exclude choices.

## Exam Answer

The sum of subsets problem is solved using backtracking by checking all possible subsets of a given set. At each step, an element is either included or excluded. If the current sum becomes equal to the target sum, the subset is printed as a solution. If the current sum exceeds the target or cannot reach the target even after adding remaining elements, the branch is pruned. This reduces unnecessary search.

---

# 5. Hamiltonian Cycle

## Definition

A Hamiltonian cycle is a cycle in a graph that visits every vertex exactly once and returns to the starting vertex.

## Backtracking Idea

Start from one vertex. Add vertices one by one to the path. A vertex can be added only if it is adjacent to the previous vertex and not already included in the path. At the end, the last vertex must be connected to the starting vertex.

## Safe Condition

A vertex `v` can be added if:

- It is adjacent to the last vertex in the path.
- It has not already been visited.

For the final step:

- Last vertex must be adjacent to the first vertex.

## Algorithm

```text
Hamiltonian(position):
    if position == n:
        if path[position-1] is connected to path[0]:
            print path
            return true
        return false

    for each vertex v:
        if isSafe(v, position):
            path[position] = v
            Hamiltonian(position + 1)
            path[position] = empty
```

## Example

If path is:

```text
A -> B -> C -> D -> A
```

and every consecutive pair is connected, then it is a Hamiltonian cycle.

## Time Complexity

Worst-case time complexity is `O(n!)` because all possible vertex arrangements may be checked.

## Exam Answer

A Hamiltonian cycle is a cycle that visits every vertex of a graph exactly once and returns to the starting vertex. Backtracking solves this problem by constructing the path vertex by vertex. A vertex is added only if it is adjacent to the previous vertex and has not already been included. When all vertices are included, the algorithm checks whether the last vertex is connected to the starting vertex. If yes, a Hamiltonian cycle is found; otherwise, the algorithm backtracks.

---

# Most Important For 60+ Marks

## Must Prepare First

1. Backtracking concept and recursive backtracking
2. 8-Queens problem
3. Graph coloring
4. Sum of subsets
5. Hamiltonian cycle

## If 10-Mark Question Comes

Use this answer pattern:

1. Definition
2. State space tree idea
3. Algorithm
4. Example
5. Complexity
6. Applications

## If 5-Mark Question Comes

Write:

1. Definition
2. 3 important points
3. Small example
4. Complexity or use

## One-Day Revision Plan

### Round 1: 90 minutes

Read and understand all five topics.

### Round 2: 90 minutes

Write algorithms for:

- 8-Queens
- Graph Coloring
- Sum of Subsets
- Hamiltonian Cycle

### Round 3: 60 minutes

Practice examples:

- 4-Queens board
- Sum subset `{5,10,12,13,15,18}`, target `30`
- Sum subset `{1,3,4,5}`, target `8`
- One graph coloring example

### Round 4: 45 minutes

Revise only exam answers and complexity.

## Last-Minute Memory Sheet

| Problem | Main Choice | Safe Condition | Complexity |
|---|---|---|---|
| 8-Queens | Place queen column-wise in each row | No same column or diagonal | `O(N!)` |
| Graph Coloring | Assign color to vertex | Adjacent vertex has different color | `O(m^n)` |
| Sum of Subsets | Include/exclude item | Sum does not exceed target | `O(2^n)` |
| Hamiltonian Cycle | Add vertex to path | Adjacent and not visited | `O(n!)` |

## Final Advice

For 60+ marks, do not just read. Write each algorithm once by hand. In the exam, even if the example is different, the method is the same: choose, check safe, recurse, backtrack.
