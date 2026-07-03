# 🟨 JavaScript — For Loop, Break & Continue

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=Y1cpFsXrEgY)

#javascript #loops #revision

---

### 1️⃣ For Loop — Basics

Jab kisi code block ko **fixed number of times** baar-baar chalana ho → `for` loop.

**Anatomy — 3 parts:**

```javascript
for ( initialization ; condition ; increment ) {
    // code
}
```

|Part|Kya karta hai|Kab chalta hai|
|---|---|---|
|`let i = 0`|Initialization|Sirf **ek baar** — shuru mein|
|`i <= 5`|Condition check|**Har iteration se pehle**|
|`i++`|Increment|**Har iteration ke baad**|

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1  2  3  4  5
```

> [!tip] Scope Safety Loop ke bracket mein `let` se banaya variable (`i`) sirf us loop ke `{}` ke andar hi accessible hai — bahar nahi.

---

### 2️⃣ Nested Loop — Loop Ke Andar Loop

Outer loop ka **1 chakkar** → Inner loop apne **saare chakkar** poore karta hai.

```javascript
for (let i = 1; i <= 2; i++) {
    console.log(`--- Table of: ${i} ---`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
```

```
--- Table of: 1 ---
1 * 1 = 1  ...  1 * 5 = 5
--- Table of: 2 ---
2 * 1 = 2  ...  2 * 5 = 10
```

---

### 3️⃣ Array Par Loop

Array ke elements ek-ek kar access karne ke liye → condition mein `array.length` use karo.

```javascript
const myHeroes = ["Flash", "Batman", "Superman"];

for (let index = 0; index < myHeroes.length; index++) {
    console.log(`Hero at ${index}: ${myHeroes[index]}`);
}
// Output:
// Hero at 0: Flash
// Hero at 1: Batman
// Hero at 2: Superman
```

> [!danger] Common Bug — `<=` mat lagao Array index `0` se shuru hota hai. Agar condition mein `<=` lagaya → loop array ki boundary se **bahar** chala jaayega → last output `undefined` → **bug!**
> 
> ✅ Hamesha `< array.length` use karo

---

### 4️⃣ `break` — Loop Poora Band Kar Do

`break` execute hote hi loop **turant aur poori tarah** khatam ho jaata hai.

```javascript
for (let i = 1; i <= 6; i++) {
    if (i === 4) {
        console.log("Detected 4, breaking...");
        break; // loop yahan ruk gaya
    }
    console.log(`i = ${i}`);
}
console.log("Outside the loop!");
```

```
i = 1
i = 2
i = 3
Detected 4, breaking...
Outside the loop!
```

---

### 5️⃣ `continue` — Sirf Ek Iteration Skip Karo

`continue` aate hi **uss chakkar ka baaki code skip** hota hai — loop band nahi hota, agla chakkar chalta rehta hai.

```javascript
for (let i = 1; i <= 6; i++) {
    if (i === 4) {
        console.log("Detected 4, skipping...");
        continue; // i=4 ke liye neeche ki line skip
    }
    console.log(`i = ${i}`);
}
```

```
i = 1
i = 2
i = 3
Detected 4, skipping...
i = 5
i = 6
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **For Loop:** `for(init ; condition ; increment)` → 3 parts
> - **Initialization** → ek baar | **Condition** → har baar pehle | **Increment** → har baar baad
> - **Nested Loop** → outer ka 1 chakkar = inner ke saare chakkar
> - **Array Loop** → `i < array.length` use karo (`<=` nahi!)
> - **`break`** → loop poori tarah band → bahar nikal jaao
> - **`continue`** → sirf current iteration skip → loop chalta rehta hai

---

#### 🔗 Related

- [[JS_Control_Flow|Control Flow — if/else, switch, truthy/falsy]]
- [[JS_Functions_Objects_Arrays|Functions with Arrays]]