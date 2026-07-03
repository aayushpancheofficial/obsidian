# JavaScript Arrays Under the Hood (Packed vs Holey Arrays)

> 📺 **Source:** You Don't Know Arrays in JavaScript | PACKED vs HOLEY | JSVU | V8 Debug | Chai aur Code

> ⚠️ **Note:** This topic explains **V8 Engine internals**. It is **not required for everyday JavaScript**, but it helps you write high-performance code and understand how JavaScript engines optimize arrays.

---

# 🎯 Learning Objectives

After completing this topic, you should understand:

- How JavaScript arrays are stored internally
    
- What is **Elements Kind**
    
- Packed vs Holey arrays
    
- SMI, Double, and Elements arrays
    
- Why Holey arrays are slower
    
- The one-way downgrade rule
    
- Performance best practices
    

---

# JavaScript Arrays

At the JavaScript language level, arrays are:

- Dynamic (Resizable)
    
- Zero-indexed
    
- Can store mixed data types
    
- Objects internally
    

Example

```javascript
const arr = [1, 2, 3];

console.log(typeof arr);
```

Output

```text
object
```

---

# Arrays Inside the V8 Engine

Although all arrays look similar in JavaScript, the **V8 engine** stores them differently depending on:

- Element types
    
- Missing indexes
    
- Memory layout
    

This optimization is called **Elements Kind**.

---

# What is Elements Kind?

**Elements Kind** is V8's internal classification system that decides how an array should be stored and optimized.

It depends on:

- Whether elements are continuous
    
- Whether holes exist
    
- What types of values are stored
    

---

# JSVU (JavaScript Engine Version Updater)

**JSVU** is a tool for installing standalone JavaScript engines.

Supported engines:

- V8
    
- SpiderMonkey
    
- JavaScriptCore
    
- Chakra (legacy)
    

It is mainly used for:

- Engine debugging
    
- Testing JavaScript internals
    
- Learning engine optimizations
    

---

# Native Debugging in V8

V8 exposes special native debugging functions.

Example

```javascript
const arr = [1, 2, 3];

%DebugPrint(arr);
```

This prints:

- Memory address
    
- Elements Kind
    
- Hidden class
    
- Internal storage
    
- Object layout
    

> ⚠️ `%DebugPrint()` works only in the **D8 shell** with the `--allow-natives-syntax` flag. It is **not valid** in browsers or regular Node.js programs.

---

# Array Categories

Arrays are divided into two structural categories.

```text
Arrays

│

├── Packed

└── Holey
```

---

# Packed Arrays

A **Packed Array** contains values at **every index**.

Example

```javascript
const arr = [10, 20, 30, 40];
```

Memory

```text
Index

0 → 10

1 → 20

2 → 30

3 → 40
```

Characteristics:

- No missing indexes
    
- Continuous memory
    
- Fast access
    
- Highly optimized
    

---

# Holey Arrays

A **Holey Array** contains one or more missing indexes.

Example

```javascript
const arr = [10, 20, , 40];
```

Memory

```text
0 → 10

1 → 20

2 → Hole

3 → 40
```

Characteristics:

- Missing values
    
- Slower access
    
- Requires additional internal checks
    

---

# Creating Holes

## Example 1

```javascript
const arr = [1, 2, 3];

arr[10] = 11;
```

Memory

```text
0 → 1

1 → 2

2 → 3

3 → Hole

4 → Hole

5 → Hole

6 → Hole

7 → Hole

8 → Hole

9 → Hole

10 → 11
```

The array becomes **Holey**.

---

## Example 2

```javascript
const arr = [1, 2, , 4];
```

Index `2` is a structural hole.

---

# Why Are Holey Arrays Slow?

Suppose

```javascript
const arr = [1, 2, , 4];

console.log(arr[2]);
```

Output

```text
undefined
```

Even though the result is `undefined`, the engine performs several checks before returning it.

---

# Packed Array Lookup

```text
Read Index

↓

Bounds Check

↓

Return Value
```

Only two operations.

Very fast.

---

# Holey Array Lookup

```text
Read Index

↓

Bounds Check

↓

Is element present?

↓

Hole found?

↓

Check Array.prototype

↓

Check Object.prototype

↓

Return undefined
```

More work means lower performance.

---

# Prototype Chain Lookup

When an element is missing, V8 searches:

```text
Array

↓

Array.prototype

↓

Object.prototype
```

This is because JavaScript supports prototype inheritance.

The additional lookup makes Holey arrays slower than Packed arrays.

---

# Element Type Classification

Besides structure, V8 also classifies arrays based on the type of values stored.

There are three major categories.

---

# 1. SMI Elements

**SMI = Small Integer**

Stores only small whole numbers.

Example

```javascript
const arr = [1, 2, 3];
```

Characteristics:

- Fastest representation
    
- Least memory overhead
    
- Best optimization
    

---

# 2. Double Elements

When any floating-point number is added,

```javascript
const arr = [1, 2, 3];

arr.push(4.5);
```

the array becomes **Double Elements**.

Examples:

```javascript
4.5

NaN

Infinity
```

All use the Double representation.

---

# 3. Elements (Generic)

If non-numeric values are added,

```javascript
const arr = [1, "Hello", {}, []];
```

the engine uses the generic **Elements** representation.

Examples:

- Strings
    
- Objects
    
- Arrays
    
- Functions
    
- Mixed data
    

---

# Six Common Elements Kinds

Combining structure and element types results in six common optimization states.

```text
PACKED_SMI_ELEMENTS

↓

PACKED_DOUBLE_ELEMENTS

↓

PACKED_ELEMENTS

↓

HOLEY_SMI_ELEMENTS

↓

HOLEY_DOUBLE_ELEMENTS

↓

HOLEY_ELEMENTS
```

The engine automatically chooses the appropriate representation.

---

# One-Way Downgrade Rule

The V8 engine only **downgrades** optimization.

It never upgrades an array back.

---

## Step 1

```javascript
const arr = [1, 2, 3];
```

Current state

```text
PACKED_SMI_ELEMENTS
```

---

## Step 2

```javascript
arr.push(4.5);
```

Now

```text
PACKED_DOUBLE_ELEMENTS
```

---

## Step 3

```javascript
arr.push("five");
```

Now

```text
PACKED_ELEMENTS
```

---

## Step 4

```javascript
arr.pop();
```

Even after removing the string,

the array **does not return** to `PACKED_SMI_ELEMENTS`.

---

## Step 5

```javascript
arr[10] = 11;
```

Now the array becomes

```text
HOLEY_ELEMENTS
```

This downgrade is permanent for that array.

---

# Performance Comparison

## Packed Array

```javascript
const arr = [1, 2, 3];
```

Advantages

- Continuous storage
    
- Fast lookup
    
- Better CPU cache usage
    
- Highly optimized
    

---

## Holey Array

```javascript
const arr = [1, , 3];
```

Disadvantages

- Missing indexes
    
- Prototype lookups
    
- More internal checks
    
- Reduced optimization
    

---

# Bad Practice

## Creating Empty Arrays with a Fixed Length

```javascript
const arr = new Array(5);
```

Output

```text
[empty × 5]
```

The engine immediately creates a **HOLEY_SMI_ELEMENTS** array.

Later

```javascript
arr[0] = "Hello";
```

The array downgrades further to **HOLEY_ELEMENTS**.

---

# Good Practice

Create an empty array and grow it naturally.

```javascript
const arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
```

This keeps the array in an optimized Packed state for as long as possible.

---

# Prefer Native Array Methods

Use built-in methods whenever possible.

Examples

```javascript
arr.forEach();

arr.map();

arr.filter();

arr.reduce();

arr.find();

arr.some();

arr.every();
```

These methods are heavily optimized by JavaScript engines and handle many internal array representations efficiently.

---

# Best Practices

✅ Prefer Packed arrays.

---

✅ Keep element types consistent when possible.

Better

```javascript
[1, 2, 3]
```

Less optimization-friendly

```javascript
[1, "two", {}]
```

---

✅ Grow arrays using `push()`.

---

✅ Use native array methods.

---

❌ Avoid creating unnecessary holes.

```javascript
arr[100] = 1;
```

---

❌ Avoid `new Array(size)` unless you specifically need a fixed-length array.

---

❌ Avoid mixing unrelated data types in performance-critical code.

---

# Packed vs Holey

|Packed|Holey|
|---|---|
|No missing indexes|Missing indexes present|
|Fast access|Slower access|
|Better optimization|Less optimization|
|Direct memory lookup|Prototype chain checks|

---

# SMI vs Double vs Elements

|Type|Stores|
|---|---|
|**SMI**|Small integers|
|**Double**|Floating-point values (`4.5`, `NaN`, `Infinity`)|
|**Elements**|Strings, objects, arrays, functions, mixed values|

---

# Elements Kind Downgrade

```text
PACKED_SMI_ELEMENTS
        │
        ▼
PACKED_DOUBLE_ELEMENTS
        │
        ▼
PACKED_ELEMENTS
        │
        ▼
HOLEY_SMI_ELEMENTS
        │
        ▼
HOLEY_DOUBLE_ELEMENTS
        │
        ▼
HOLEY_ELEMENTS
```

> ⚠️ Once an array moves downward, it **does not move back up**.

---

# Interview Questions

### What is an Elements Kind?

Elements Kind is V8's internal optimization mechanism that determines how array elements are stored based on their structure and data types.

---

### What is a Packed Array?

A Packed Array has no missing indexes, allowing direct memory access and better performance.

---

### What is a Holey Array?

A Holey Array contains one or more missing indexes (holes), requiring additional checks and reducing performance.

---

### What is SMI?

**SMI (Small Integer)** is V8's optimized representation for arrays containing only small integer values.

---

### Why are Holey Arrays slower?

Because accessing a hole may require checking the array itself and walking the prototype chain before returning the result.

---

### Can an array regain its previous optimization level?

No. V8 generally follows a **one-way downgrade** strategy for Elements Kinds.

---

### Why should we prefer native array methods?

Built-in methods such as `map()`, `filter()`, and `reduce()` are heavily optimized by JavaScript engines and usually perform better than custom implementations.

---

# 📌 Quick Revision

- JavaScript arrays are objects, but V8 stores them using optimized **Elements Kinds**.
    
- Arrays are classified as **Packed** or **Holey**.
    
- Packed arrays are faster because they have no missing indexes.
    
- Holey arrays require extra internal checks and prototype lookups.
    
- V8 commonly uses **SMI**, **Double**, and **Elements** representations based on element types.
    
- Array optimization follows a one-way downgrade path.
    
- Avoid unnecessary holes and prefer growing arrays with `push()`.
    
- Use built-in array methods whenever possible because they are highly optimized.
    
- Understanding these internals helps you write more efficient JavaScript, especially in performance-sensitive applications.