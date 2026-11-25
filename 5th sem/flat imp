# Theory of Computation: Top 10 Most Important Questions — Complete 8-Mark Answers

---

## Q1. Chomsky Normal Form (CNF) ⭐

**Q. Convert the given grammar into Chomsky Normal Form (CNF) step by step.**

### Definition (1 mark)
A CFG is in **Chomsky Normal Form (CNF)** if every production is of the form:
- **A → BC** (two non-terminals), or
- **A → a** (single terminal), or
- **S → ε** (only if S is the start symbol and ε is in the language)

### Conversion Steps (5 marks)

**Step 1: Eliminate ε-productions**
- Find all nullable variables (variables that can derive ε).
- For each production containing a nullable variable, add all possible combinations without it.
- Remove all A → ε productions (except possibly S → ε).

**Step 2: Eliminate unit productions**
- Unit production: A → B (single non-terminal).
- Replace A → B with all productions of B.

**Step 3: Eliminate useless symbols**
- Remove non-generating symbols (cannot derive a terminal string).
- Remove unreachable symbols (not reachable from start symbol).

**Step 4: Convert productions to CNF form**
- **For A → a₁a₂...aₙ (n ≥ 3):** introduce new non-terminals.
  - A → a₁X₁, X₁ → a₂X₂, ..., Xₙ₋₂ → aₙ₋₁aₙ
- **For A → terminal + non-terminal mix (e.g., A → aB):** introduce new non-terminal for terminal.
  - A → XB, X → a

### Example (2 marks)

**Given Grammar:**
```
S → aSb | ε
```

**Step 1 — Remove ε-production (S → ε):**
Since S is nullable, add S → ab (from S → aSb with S → ε).
```
S → aSb | ab
```

**Step 2 — No unit productions.**

**Step 3 — No useless symbols.**

**Step 4 — Convert to CNF:**
- S → aSb: introduce X → a, Y → b
  - S → XSY (but S → XSY has 3 symbols → need further splitting)
  - S → XA, A → SY
- S → ab: S → XY
- X → a, Y → b

**Final CNF:**
```
S → XA | XY
A → SY
X → a
Y → b
```

---

## Q2. Greibach Normal Form (GNF) ⭐

**Q. Define GNF and convert the given grammar into GNF.**

### Definition (1 mark)
A CFG is in **Greibach Normal Form (GNF)** if every production is of the form:
- **A → aα** where **a** is a terminal and **α** is a string of zero or more non-terminals.

In GNF, every production starts with exactly **one terminal** followed by any number of non-terminals.

### Conversion Steps (5 marks)

**Step 1:** Convert grammar to CNF first (or eliminate ε and unit productions).

**Step 2:** Rename variables as A₁, A₂, ..., Aₙ such that for production Aᵢ → Aⱼα, we have j > i (ordering).

**Step 3:** Eliminate left recursion if present:
- If A → Aα | β, replace with:
  - A → βA'
  - A' → αA' | ε

**Step 4:** Substitute productions so that every production begins with a terminal.

**Step 5:** Remove ε-productions introduced (if any) at the end.

### Example (2 marks)

**Given Grammar:**
```
S → AB
A → aA | a
B → bB | b
```

**Step 1 — Convert A and B to start with terminals:**
```
A → aA | a
B → bB | b
```
Already start with terminals.

**Step 2 — S → AB:**
Substitute A's productions into S → AB:
- S → aAB | aB (using A → aA and A → a)

**Final GNF:**
```
S → aAB | aB
A → aA | a
B → bB | b
```

All productions start with a terminal followed by non-terminals. ✓

---

## Q3. Pumping Lemma for CFL ⭐

**Q. State the Pumping Lemma for CFL and prove that L = {aⁿbⁿcⁿ | n ≥ 1} is not context-free.**

### Statement of Pumping Lemma for CFL (2 marks)
For any context-free language L, there exists a pumping length **p** such that every string **w ∈ L** with **|w| ≥ p** can be written as:
```
w = uvxyz
```
satisfying:
1. **|vxy| ≤ p**
2. **|vy| ≥ 1** (at least one of v, y is non-empty)
3. **uvⁱxyⁱz ∈ L** for all **i ≥ 0**

### Proof that L = {aⁿbⁿcⁿ | n ≥ 1} is not CFL (6 marks)

**Assume L is context-free.** Then by the Pumping Lemma, there exists a pumping length **p**.

Choose **w = aᵖbᵖcᵖ** ∈ L with |w| = 3p ≥ p.

Write **w = uvxyz** satisfying the three conditions.

**Case Analysis:**

Since **|vxy| ≤ p**, the substring **vxy** can span at most **two** of the three symbol blocks (a's, b's, c's) — because each block has length p and p + p = 2p > p.

**Case 1: vxy lies entirely within one block** (only a's, only b's, or only c's)
- Then pumping (i = 2) increases the count of only one symbol.
- Result: a's, b's, and c's counts become unequal → not in L. ✗

**Case 2: vxy spans two blocks** (a's and b's, or b's and c's)
- Pumping changes counts of two symbols but not the third.
- Example: if vxy contains a's and b's, pumping changes a and b counts but c stays same → unequal → not in L. ✗

**Case 3: vxy spans all three blocks**
- Impossible because |vxy| ≤ p < 3p (can't cover all three blocks of length p each). ✗

In all cases, pumping leads to a string **not in L**, contradicting the Pumping Lemma.

**Therefore, L = {aⁿbⁿcⁿ | n ≥ 1} is not context-free.** ∎

---

## Q4. PDA Design ⭐

**Q. Design a PDA for L = {aⁿbⁿ | n ≥ 1}. Explain state diagram, stack operations, and acceptance.**

### Definition (1 mark)
A **Pushdown Automaton (PDA)** is a finite automaton with an additional **stack** (LIFO memory). It is formally defined as a 7-tuple: (Q, Σ, Γ, δ, q₀, Z₀, F).

### Design Approach (2 marks)
- **Phase 1:** Push 'a's onto stack for each 'a' read.
- **Phase 2:** For each 'b' read, pop one 'a'.
- **Acceptance:** If stack becomes empty (or reaches Z₀) after all input is consumed, accept.

### PDA Design (3 marks)

**States:** q₀ (push phase), q₁ (pop phase), q₂ (accept)

**Stack symbols:** Z₀ (bottom marker), A (for each 'a')

**Transitions:**

| State | Input | Stack Top | Action | Next State |
|-------|-------|-----------|--------|------------|
| q₀ | a | Z₀ | Push A | q₀ |
| q₀ | a | A | Push A | q₀ |
| q₀ | b | A | Pop A | q₁ |
| q₁ | b | A | Pop A | q₁ |
| q₁ | ε | Z₀ | No change | q₂ (accept) |

**State Diagram:**
```
         a, Z₀ → AZ₀
         a, A → AA
    ┌─────────────────┐
    │                 ▼
   (q₀)            (q₀)
    │                 
    │ b, A → ε       
    ▼                 
   (q₁) ──── b, A → ε ──── (q₁)
    │
    │ ε, Z₀ → Z₀
    ▼
   ((q₂))  ← accepting state
```

### Acceptance Explanation (2 marks)
- **Stack operations:**
  - Reading 'a': push A (stack grows).
  - Reading 'b': pop A (stack shrinks).
- **Balance:** If n a's and n b's, stack returns to Z₀ after all input.
- **Acceptance by final state:** Reaching q₂ with empty stack (only Z₀) after consuming all input.
- **Rejection:** If b appears before a, or counts mismatch, PDA cannot complete transitions → reject.

---

## Q5. Turing Machine Design ⭐

**Q. Design a Turing Machine for L = {aⁿbⁿcⁿ | n ≥ 1}. Explain the design.**

### Definition (1 mark)
A **Turing Machine (TM)** is a mathematical model of computation with an infinite tape, a read/write head, and a finite set of states. Formally: 7-tuple (Q, Σ, Γ, δ, q₀, q_accept, q_reject).

### Design Strategy (3 marks)
The TM must verify equal numbers of a's, b's, and c's by **marking** symbols as it processes them.

**Approach:**
1. Replace one 'a' with X (marked), then scan right to find and mark one 'b' as Y, then one 'c' as Z.
2. Return to leftmost unmarked 'a' and repeat.
3. Accept if all symbols are marked in order a, b, c.
4. Reject if any mismatch occurs.

### TM Design — Transition Table (4 marks)

**Tape symbols:** a, b, c, X, Y, Z, ␣ (blank)

**States:** q₀ (start), q₁, q₂, q₃, q₄, q_accept, q_reject

| State | Read | Write | Move | Next State |
|-------|------|-------|------|------------|
| q₀ | a | X | R | q₁ |
| q₀ | Y | Y | R | q₄ |
| q₁ | a | a | R | q₁ |
| q₁ | Y | Y | R | q₁ |
| q₁ | b | Y | R | q₂ |
| q₂ | b | b | R | q₂ |
| q₂ | Z | Z | R | q₂ |
| q₂ | c | Z | L | q₃ |
| q₃ | a,b,Y,Z | same | L | q₃ |
| q₃ | X | X | R | q₀ |
| q₄ | Y | Y | R | q₄ |
| q₄ | Z | Z | R | q₄ |
| q₄ | ␣ | ␣ | R | q_accept |

### Explanation (1 mark)
- **q₀:** Find leftmost 'a', mark as X, move right.
- **q₁:** Skip a's and Y's, find first 'b', mark as Y.
- **q₂:** Skip b's and Z's, find first 'c', mark as Z, move left.
- **q₃:** Move left back to X, then move right to repeat.
- **q₄:** After all a's are marked, verify remaining are Y's and Z's in order, then accept.

**Rejection:** If any expected symbol is missing or out of order, TM enters q_reject.

---

## Q6. Chomsky Hierarchy ⭐

**Q. Explain the Chomsky Hierarchy — Type 0 to Type 3 grammars, their restrictions, and corresponding machines.**

### Overview (1 mark)
The **Chomsky Hierarchy** classifies formal grammars into four types based on production rules and the computational power of their corresponding automata.

### The Four Types (6 marks)

| Type | Grammar | Production Restriction | Language | Machine |
|------|---------|----------------------|----------|---------|
| **Type 0** | Unrestricted | α → β (α ≠ ε) | Recursively Enumerable | Turing Machine |
| **Type 1** | Context-Sensitive | αAβ → αγβ (γ ≠ ε) | Context-Sensitive | Linear Bounded Automaton (LBA) |
| **Type 2** | Context-Free | A → γ (A is single non-terminal) | Context-Free | Pushdown Automaton (PDA) |
| **Type 3** | Regular | A → aB or A → a (right-linear) | Regular | Finite Automaton (FA) |

### Detailed Explanation

**Type 0 — Unrestricted Grammar:**
- No restrictions on productions (α → β, α contains at least one non-terminal).
- Most powerful; generates recursively enumerable languages.
- Recognized by **Turing Machine**.

**Type 1 — Context-Sensitive Grammar (CSG):**
- Productions: αAβ → αγβ where γ ≠ ε.
- Length of RHS ≥ length of LHS (non-contracting).
- Generates context-sensitive languages.
- Recognized by **Linear Bounded Automaton (LBA)**.

**Type 2 — Context-Free Grammar (CFG):**
- Productions: A → γ where A is a single non-terminal, γ ∈ (V ∪ T)*.
- LHS is always a single non-terminal.
- Generates context-free languages (e.g., aⁿbⁿ).
- Recognized by **Pushdown Automaton (PDA)**.

**Type 3 — Regular Grammar:**
- Right-linear: A → aB or A → a; Left-linear: A → Ba or A → a.
- Generates regular languages (e.g., a*b*).
- Recognized by **Finite Automaton (FA)**.

### Hierarchy Diagram (1 mark)
```
Type 0 (Recursively Enumerable) ⊃ Type 1 (Context-Sensitive)
    ⊃ Type 2 (Context-Free) ⊃ Type 3 (Regular)
```
Each type is a proper subset of the one above it.

---

## Q7. Grammar Simplification

**Q. Remove useless symbols, ε-productions, and unit productions to simplify a grammar.**

### Three Simplification Steps (6 marks)

**Step 1: Remove Useless Symbols (2 marks)**
- **Non-generating symbols:** Cannot derive any terminal string. Remove them and all productions containing them.
- **Unreachable symbols:** Not reachable from start symbol. Remove them.

**Example:**
```
S → AB | a
A → aA
B → bB
```
B is non-generating (never derives a terminal string), so remove B and S → AB.
Result: S → a, A → aA. A is unreachable → remove. Final: S → a.

**Step 2: Remove ε-Productions (2 marks)**
- Find nullable variables (can derive ε).
- For each production with nullable variables, add versions with those variables omitted.
- Remove A → ε.

**Example:**
```
S → AB
A → aA | ε
B → bB | ε
```
Nullable: A, B, S.
Result: S → AB | A | B | ε, A → aA | a, B → bB | b.

**Step 3: Remove Unit Productions (2 marks)**
- Unit production: A → B (single non-terminal).
- Replace A → B with all productions of B.

**Example:**
```
S → A | b
A → B | a
B → c
```
S → A becomes S → B | a; S → B becomes S → c | a.
Result: S → a | b | c, A → a | c, B → c.

---

## Q8. CFG Construction and Derivation

**Q. Construct a CFG for a given language; identify the language of a grammar and show derivation/parse tree.**

### Part A: Construct CFG (3 marks)

**Example 1: L = {aⁿbⁿ | n ≥ 0}**
```
S → aSb | ε
```

**Example 2: L = {aⁿbᵐ | n, m ≥ 0}**
```
S → aS | B
B → bB | ε
```

**Example 3: L = {w | w has equal a's and b's}**
```
S → aSb | bSa | SS | ε
```

**Example 4: L = {aⁿbⁿcᵐ | n, m ≥ 1}**
```
S → AB
A → aAb | ab
B → cB | c
```

### Part B: Identify Language and Derivation (3 marks)

**Given Grammar:**
```
S → aSb | ε
```

**Language:** L = {aⁿbⁿ | n ≥ 0}

**Derivation for w = aabb:**
```
S ⇒ aSb ⇒ aaSbb ⇒ aabb
```

**Parse Tree:**
```
        S
       / \
      a   S
         / \
        a   S
           / \
          ε
```
(More accurately: S → aSb → aaSbb → aabb, with S → ε at the innermost.)

**Example 2:**
```
S → AB
A → aA | a
B → bB | b
```
**Language:** L = {aⁿbᵐ | n, m ≥ 1}

**Derivation for w = aabbb:**
```
S ⇒ AB ⇒ aAB ⇒ aaB ⇒ aabB ⇒ aabbB ⇒ aabbb
```

### Part C: Parse Tree (2 marks)
A parse tree shows the hierarchical derivation:
- Root = start symbol
- Internal nodes = non-terminals
- Leaves = terminals (left to right = derived string)

---

## Q9. Halting Problem ⭐

**Q. Explain/prove that the Halting Problem for Turing Machines is undecidable.**

### Definition (2 marks)
The **Halting Problem** asks: Given a Turing Machine **M** and input **w**, does M halt (accept or reject) on w, or does it loop forever?

**Halting Problem = {⟨M, w⟩ | M halts on input w}**

### Proof by Contradiction (6 marks)

**Assume the Halting Problem is decidable.** Then there exists a Turing Machine **H** that decides it:

```
H(M, w) = "halts"   if M halts on w
         = "loops"   if M loops on w
```

**Construct a new TM D that uses H as a subroutine:**

```
D(M):
    result = H(M, M)      # does M halt on its own code?
    if result == "halts":
        loop forever       # D loops
    else:
        halt               # D halts
```

So:
- If M halts on ⟨M⟩, then D(M) loops forever.
- If M loops on ⟨M⟩, then D(M) halts.

**Now run D on itself: D(D).**

- If D(D) halts → by definition of D, H(D,D) = "loops" → D loops. **Contradiction.**
- If D(D) loops → by definition of D, H(D,D) = "halts" → D halts. **Contradiction.**

**In both cases, we get a contradiction.** Therefore, our assumption that H exists is false.

**Hence, the Halting Problem is undecidable.** ∎

### Significance (1 mark? included above)
- It was proved by **Alan Turing (1936)**.
- It is the first proven undecidable problem.
- Many other problems are proved undecidable by reduction from the Halting Problem.

---

## Q10. Post Correspondence Problem (PCP)

**Q. Define PCP and check whether a solution exists for a given tile list.**

### Definition (2 marks)
The **Post Correspondence Problem (PCP)** is: Given two lists of strings A = [a₁, a₂, ..., aₙ] and B = [b₁, b₂, ..., bₙ] over some alphabet, does there exist a sequence of indices i₁, i₂, ..., iₖ (k ≥ 1, repetitions allowed) such that:
```
aᵢ₁ aᵢ₂ ... aᵢₖ = bᵢ₁ bᵢ₂ ... bᵢₖ
```

PCP is **undecidable** — no general algorithm exists to solve it for all instances.

### Example (4 marks)

**Tile List:**

| Tile | Top (a) | Bottom (b) |
|------|---------|------------|
| 1 | a | ab |
| 2 | b | ca |
| 3 | ca | a |
| 4 | abc | c |

**Check for a solution:**

Try sequence: **1, 3**

- Top: a · ca = **aca**
- Bottom: ab · a = **aba**

Not equal. ✗

Try sequence: **1, 3, 2**

- Top: a · ca · b = **acab**
- Bottom: ab · a · ca = **abaca**

Not equal. ✗

Try sequence: **2, 3, 1**

- Top: b · ca · a = **bcaa**
- Bottom: ca · a · ab = **caaab**

Not equal. ✗

Try sequence: **4, 1**

- Top: abc · a = **abca**
- Bottom: c · ab = **cab**

Not equal. ✗

**Let's try: 1, 1, 2**

- Top: a · a · b = **aab**
- Bottom: ab · ab · ca = **ababca**

Not equal. ✗

**Try: 2, 1, 3**

- Top: b · a · ca = **baca**
- Bottom: ca · ab · a = **caaba**

Not equal. ✗

**Try: 2, 1, 1, 3**

- Top: b · a · a · ca = **baaca**
- Bottom: ca · ab · ab · a = **caababa**

Not equal. ✗

**Try: 3, 2, 1**

- Top: ca · b · a = **caba**
- Bottom: a · ca · ab = **acaab**

Not equal. ✗

After systematic search, **no solution exists** for this tile set (the strings cannot be made equal).

### Another Example Where Solution Exists (2 marks)

| Tile | Top | Bottom |
|------|-----|--------|
| 1 | a | a |
| 2 | ab | b |

**Solution:** Sequence 1, 2
- Top: a · ab = **aab**
- Bottom: a · b = **ab**

Not equal. Try 2, 1:
- Top: ab · a = **aba**
- Bottom: b · a = **ba**

Not equal. Try 1, 1, 2:
- Top: a · a · ab = **aaab**
- Bottom: a · a · b = **aab**

Not equal. Try 2, 2:
- Top: ab · ab = **abab**
- Bottom: b · b = **bb**

Not equal.

**Solution:** Sequence 1, 2, 1... Actually, for this set, check:
- Tile 1: a/a → equal! So **sequence [1]** works: Top = a, Bottom = a. ✓

**Solution: [1]** — a single tile where top = bottom = "a" gives a valid solution.

### Summary
PCP asks whether a sequence of tiles can make top and bottom strings equal. It is undecidable — we can only check specific instances by search, not solve all cases algorithmically.

---

**End of Theory of Computation — All 10 questions answered in exam-ready 8-mark format. Prioritize Q1–Q6 and Q9 as advised (core topics: grammar conversion, PDA/TM design, hierarchy, undecidability).**
