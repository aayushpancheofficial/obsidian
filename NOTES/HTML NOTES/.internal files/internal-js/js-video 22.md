# 🟨 JavaScript — Nested Scope & Mini Hoisting

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=eWwge2YpHhc)

---

### 1️⃣ Nested Scope — "Ice-Cream Rule" 🍦

Jab ek function ke andar doosra function ya `if-else` block hota hai, toh scope ka ek **hierarchy** banta hai.

> [!tip] Ice-Cream Analogy (Yaad rakhne ka shortcut)
> 
> - **Child → Parent se ice-cream le sakta hai** ✅ (Inner function, outer function ke variables access kar sakta hai)
> - **Parent → Child se ice-cream nahi cheen sakta** ❌ (Outer function, inner block ke variables access nahi kar sakta)
> 
> Yahi concept **Closure** ka aadhar bhi hai.

**Function Example:**

```javascript
function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username); // ✅ child ne parent ka variable liya
    }

    // console.log(website); // ❌ Error — 'website' sirf two() ke andar hai
    two();
}
one();
```

**if-else Example:**

```javascript
if (true) {
    const username = "hitesh";

    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website); // ✅ hitesh youtube
    }

    // console.log(website); // ❌ Error — inner block se bahar nahi jaata
}

// console.log(username); // ❌ Error — block ke bahar leak nahi hoga
```

---

### 2️⃣ Function Declaration vs Function Expression

JS mein function banane ke **2 main tarike:**

**1. Function Declaration** (seedha naam le ke banao):

```javascript
function addOne(num) {
    return num + 1;
}
```

**2. Function Expression** (variable mein store karo):

```javascript
const addTwo = function(num) {
    return num + 2;
};
```

---

### 3️⃣ Mini Hoisting — Dono Ka Behaviour Alag Hai

**Hoisting** = JS, variables aur functions ke declarations ko execution se pehle scope ke **upar le jaata hai.**

Lekin function banane ke tarike ke hisaab se hoisting ka behaviour badal jaata hai:

#### ✅ Case 1 — Function Declaration (Pehle call karo, phir declare — chalega)

```javascript
console.log(addOne(5)); // ✅ Output: 6 — declaration se pehle bhi kaam karta hai

function addOne(num) {
    return num + 1;
}
```

#### ❌ Case 2 — Function Expression (Pehle declare karo, tabhi call karo)

```javascript
console.log(addTwo(5)); // ❌ ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};
```

> [!warning] Kyun? `const` / `let` mein store function **hoist nahi hota** jaise declaration hoti hai. Variable declaration se pehle access karo → `ReferenceError`.

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **Nested Scope:** Child → parent ka variable le sakta hai | Parent → child ka nahi
> - **Ice-Cream Rule** = Closure ka aadhar
> - **Function Declaration** → hoist hota hai → pehle call kar sakte ho ✅
> - **Function Expression** (`const fn = function()`) → hoist nahi hota → pehle declare karo ❌
> - `if-else` / loop ke andar `let`/`const` → bahar leak nahi hote (safe!)

---

