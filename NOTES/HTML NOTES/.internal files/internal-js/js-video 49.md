# Lexical Scoping & Closures (JavaScript)

> 📺 **Source:** Lexical Scoping and Closure | Chai aur Code

---

# 🎯 Learning Objectives

After completing this topic, you should understand:

- What is **Lexical Scoping**
    
- What is **Closure**
    
- Scope chain
    
- Parent-child scope relationship
    
- Why closures exist
    
- How JavaScript remembers variables after a function finishes
    
- Real-world use of closures
    
- Common interview questions
    

---

# Scope in JavaScript

**Scope** determines **where a variable can be accessed**.

There are mainly three types of scope:

- Global Scope
    
- Function Scope
    
- Block Scope (`let`, `const`)
    

Example

```javascript
let global = "I am Global";

function demo() {
    let local = "I am Local";
}
```

- `global` → accessible everywhere.
    
- `local` → accessible only inside `demo()`.
    

---

# What is Lexical Scoping?

## Definition

**Lexical Scoping** means a function can access variables based on **where it is written (defined) in the source code**, not where it is called.

The inner function automatically has access to the variables of its parent function.

---

# Example

```javascript
function outer() {

    let username = "Hitesh";

    function inner() {
        console.log(username);
    }

    inner();
}

outer();
```

Output

```text
Hitesh
```

Why?

Because `inner()` is written inside `outer()`, so it inherits the parent's scope.

---

# Scope Chain

```text
Global Scope
      │
      ▼
Outer Function
      │
      ▼
Inner Function
```

The inner function searches for variables in this order:

1. Its own scope
    
2. Parent scope
    
3. Global scope
    

This is called the **Scope Chain**.

---

# Rules of Lexical Scoping

## Rule 1: Child Can Access Parent

```javascript
function outer() {

    let username = "Hitesh";

    function inner() {
        console.log(username);
    }

    inner();
}

outer();
```

Output

```text
Hitesh
```

The child function can access variables from its parent.

---

## Rule 2: Parent Cannot Access Child

```javascript
function outer() {

    function inner() {
        let secret = "123";
    }

    console.log(secret);
}

outer();
```

Output

```text
ReferenceError
```

The parent cannot access variables declared inside the child.

---

## Rule 3: Siblings Cannot Access Each Other

```javascript
function outer() {

    function innerOne() {
        let secret = "123";
    }

    function innerTwo() {
        console.log(secret);
    }

}
```

Output

```text
ReferenceError
```

`innerTwo()` cannot access variables declared inside `innerOne()`.

---

# Family Analogy

```text
Grandparent

    │

Parent

    │

Child
```

- ✅ Child can access Parent.
    
- ✅ Child can access Grandparent.
    
- ❌ Parent cannot access Child.
    
- ❌ Siblings cannot access each other.
    

---

# Complete Example

```javascript
function outer() {

    let username = "Hitesh";

    function innerOne() {

        let secret = "my123";

        console.log(username);

    }

    function innerTwo() {

        console.log(username);

        // console.log(secret);

    }

    innerOne();
    innerTwo();

}

outer();
```

Output

```text
Hitesh
Hitesh
```

If we uncomment

```javascript
console.log(secret);
```

Output

```text
ReferenceError
```

---

# What is a Closure?

## Definition

A **Closure** is a function that remembers the variables from its **lexical scope**, even after the outer function has finished executing.

Simply put:

> A closure allows an inner function to "remember" its parent's variables even after the parent function is removed from the call stack.

---

# Basic Example

```javascript
function outer() {

    let username = "Hitesh";

    function inner() {
        console.log(username);
    }

    return inner;

}

const myFunction = outer();

myFunction();
```

Output

```text
Hitesh
```

---

# Why Does This Work?

Normally,

```javascript
outer();
```

finishes execution.

Its local variables should disappear.

So why does `username` still exist?

Because JavaScript creates a **Closure**.

Instead of destroying the required variables, JavaScript keeps them alive as long as the returned function needs them.

---

# Execution Flow

## Step 1

```javascript
const myFunction = outer();
```

Memory

```text
outer()

username = "Hitesh"

↓

return inner
```

---

## Step 2

`outer()` finishes.

Normally memory should be removed.

But JavaScript notices that `inner()` still needs `username`.

So it preserves the lexical environment.

---

## Step 3

```javascript
myFunction();
```

Output

```text
Hitesh
```

Even though `outer()` has already finished.

---

# Closure Diagram

```text
outer()

username = "Hitesh"

        │
        ▼

return inner

        │

Closure

        │

username stays alive

        │

myFunction()

        │

Prints

"Hitesh"
```

---

# What is Stored in a Closure?

A closure stores:

- The function
    
- A reference to its lexical environment (variables it needs)
    

It **does not copy** the variables.

It keeps a **reference** to them.

---

# Real-World Example

Imagine a bank account.

```javascript
function createBankAccount() {

    let balance = 1000;

    return function() {
        balance += 500;
        console.log(balance);
    }

}

const deposit = createBankAccount();

deposit();
deposit();
deposit();
```

Output

```text
1500

2000

2500
```

`balance` stays alive because of the closure.

---

# Closures in Event Handlers

Suppose we want to change the background color when clicking buttons.

---

## Wrong Approach

```javascript
document.getElementById("orange").onclick =
    clickHandler("orange");
```

Why is it wrong?

Because

```javascript
clickHandler("orange")
```

executes **immediately** during page load.

`.onclick` expects a **function reference**, not the result of executing a function.

---

# Correct Approach

```javascript
function clickHandler(color) {

    return function() {

        document.body.style.backgroundColor = color;

    }

}
```

Assign event listeners

```javascript
document.getElementById("orange").onclick =
    clickHandler("orange");

document.getElementById("green").onclick =
    clickHandler("green");
```

---

# How It Works

Step 1

```javascript
clickHandler("orange")
```

returns

```javascript
function() {
    document.body.style.backgroundColor = "orange";
}
```

This returned function forms a **closure** and remembers:

```text
color = "orange"
```

---

When the button is clicked later

JavaScript executes

```javascript
function() {
    document.body.style.backgroundColor = "orange";
}
```

Even though `clickHandler()` finished long ago, it still remembers the value of `color`.

---

# DRY Principle

**DRY = Don't Repeat Yourself**

Instead of writing

```javascript
orange.onclick = ...

green.onclick = ...

blue.onclick = ...

red.onclick = ...
```

We create one reusable function:

```javascript
clickHandler(color)
```

and pass different colors.

This reduces duplicate code and improves maintainability.

---

# Lexical Scope vs Closure

|Lexical Scope|Closure|
|---|---|
|Defines how scope works|Uses lexical scope to preserve variables|
|Based on where functions are written|Created when a function remembers outer variables|
|Exists during execution|Can exist even after the outer function finishes|
|Determines variable access|Preserves variable access over time|

---

# Common Uses of Closures

- Event handlers
    
- Callbacks
    
- Timers (`setTimeout`, `setInterval`)
    
- Data hiding
    
- Function factories
    
- Currying
    
- Memoization
    
- Module pattern
    
- Private variables
    

---

# Advantages of Closures

- Data privacy
    
- Encapsulation
    
- Preserve state
    
- Reusable code
    
- Cleaner architecture
    
- Supports functional programming
    

---

# Disadvantages of Closures

- Extra memory usage
    
- Variables remain in memory longer
    
- Can cause memory leaks if misused
    
- Harder to debug for beginners
    

---

# Interview Questions

### What is Lexical Scoping?

Lexical Scoping means a function can access variables based on where it is defined in the source code.

---

### What is a Closure?

A closure is a function bundled with references to its lexical environment, allowing it to access outer variables even after the outer function has finished executing.

---

### Why are Closures useful?

- Maintain state
    
- Data hiding
    
- Event handling
    
- Callbacks
    
- Function factories
    

---

### Why does the returned function still remember variables?

Because JavaScript preserves the lexical environment and keeps references to the variables needed by the returned function.

---

### Does a Closure copy variables?

No.

A closure stores **references** to variables, not copies.

---

### What is the DRY principle?

**Don't Repeat Yourself** — avoid duplicate code by creating reusable functions.

---

# 📌 Quick Revision

- Scope determines where variables are accessible.
    
- Lexical Scoping depends on where a function is **defined**, not where it is called.
    
- Child functions can access parent variables.
    
- Parent functions cannot access child variables.
    
- Sibling functions cannot access each other's local variables.
    
- A **Closure** is a function that remembers its lexical environment.
    
- Closures allow variables to stay alive even after the outer function has finished.
    
- Closures are widely used in event handlers, callbacks, timers, data privacy, and reusable function factories.
    
- Event listeners require a **function reference**, not an immediately executed function.
    
- Closures help write cleaner, reusable, and maintainable JavaScript code while preserving state.