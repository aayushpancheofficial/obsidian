# 🟨 JavaScript — While & Do-While Loop

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=w3Q55-l47P0)

#javascript #loops #revision

---

### 1️⃣ While Loop — Basics

Jab tak condition **True** hai → code block chalta rehta hai.

`for` loop se fark: initialization, condition, aur increment **alag-alag jagah** likhte hain.

```javascript
let index = 0;              // 1. Initialization
while (index <= 10) {       // 2. Condition check (har baar pehle)
    console.log(index);
    index = index + 2;      // 3. Increment (zaruri — warna infinite loop!)
}
// Output: 0  2  4  6  8  10
```

---

### 2️⃣ While Loop — Array Par

```javascript
const myHeroes = ["Flash", "Batman", "Superman"];
let arrIndex = 0;

while (arrIndex < myHeroes.length) {
    console.log(`Hero is: ${myHeroes[arrIndex]}`);
    arrIndex++; // ← bhoolna = infinite loop!
}
// Output:
// Hero is: Flash
// Hero is: Batman
// Hero is: Superman
```

> [!danger] Infinite Loop Trap `arrIndex++` bhool gaye toh condition kabhi false nahi hogi → loop **infinite** ho jaayega → browser/terminal crash

---

### 3️⃣ Do-While Loop — Pehle Karo, Phir Poochho

`do-while` mein **pehle code chalta hai, baad mein condition check hoti hai.**

```javascript
do {
    // code block (pehle run hoga)
} while (condition); // condition baad mein check hogi
```

> [!tip] Sabse Badi Khasiyat — Interview Answer ⭐ **Do-While loop kam se kam ek baar zaroor chalta hai** — chahe condition pehli baar mein hi `false` kyun na ho.

**Case A — Condition True hai:**

```javascript
let score = 1;
do {
    console.log(`Score is: ${score}`);
    score++;
} while (score <= 3);
// Output:
// Score is: 1
// Score is: 2
// Score is: 3
```

**Case B — Condition pehle se hi False (Special Case):**

```javascript
let score = 11;
do {
    console.log(`Special Score is: ${score}`); // ← pehle chala bina check kiye
    score++;
} while (score <= 10); // 11 <= 10 → false → loop ruk gaya
// Output:
// Special Score is: 11
```

**Kyun?** → Block mein `11` print hua pehle. Phir check kiya `11 <= 10` → `false` → loop band.

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet **While vs For:**
> 
> - `for` → init, condition, increment ek jagah
> - `while` → teeno alag-alag likho
> 
> **While:**
> 
> - Condition pehle check → true hai toh andar jaao
> - Array ke saath → `< array.length` use karo
> - Increment bhoolna = **infinite loop** ❌
> 
> **Do-While:**
> 
> - Code **pehle** chalta hai, condition **baad** mein check hoti hai
> - **Minimum ek baar hamesha** chalta hai — chahe condition false ho
> - Real projects mein bahut kam use hota hai (special cases mein)

---

#### 🔗 Related

- [[JS_ForLoop_Break_Continue|For Loop, Break & Continue]]
- [[JS_Control_Flow|Control Flow — if/else, switch]]