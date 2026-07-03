# 🟨 JavaScript — IIFE (Immediately Invoked Function Expression)

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=GAIbn16Iytc)

#javascript #iife #functions #revision

---

### 1️⃣ IIFE Kya Hota Hai?

**Full form:** Immediately Invoked Function Expression

**Seedha matlab:** Jo function **bante hi turant execute** ho jaaye.

> [!example] Real Use Case Database connection wali file — jaise hi app server pe start ho, **turant DB connect** ho jaaye → IIFE perfect hai.

---

### 2️⃣ IIFE Use Kyun Karte Hain? — Interview Answer ⭐

> [!question] Interview mein sirf itna mat bolo: _"jo turant run ho use IIFE kehte hain"_ Selection ke liye **asli reason** batao:

> **"Global Scope ke variables/declarations se hone wale pollution (pradushan) rokne ke liye IIFE use karte hain."**

Child scope (function) parent scope (global) se cheezein le sakta hai — isliye global variables kabhi kabhi function ke andar kaam mein baadha daalte hain. IIFE ek **poori tarah alag aur safe scope** bana deta hai.

---

### 3️⃣ IIFE Ka Syntax

```
( Function Definition ) ( Execution Call ) ;
```

```javascript
(function chai() {
    console.log(`DB CONNECTED`);
})();
```

- **Pehla `()`** → Function definition ko wrap karta hai
- **Doosra `()`** → Function ko turant execute karta hai

---

### 4️⃣ Semicolon `;` — Sabse Badi Galti ⚠️

> [!danger] IIFE mein `;` optional nahi — ZAROORI hai!
> 
> - JS engine ko pata nahi chalta ki is function ka context kahan khatam ho
> - Ek file mein **2 ya zyada IIFE** likho aur beech mein `;` na lagao → **Error aayega**
> - Hamesha har IIFE ke end mein `;` lagao

---

### 5️⃣ IIFE Ke 3 Tarike

**Type A — Named IIFE:**

```javascript
(function chai() {
    console.log(`DB CONNECTED ONE`);
})(); // ← ; zaroori
```

**Type B — Arrow Function IIFE (Unnamed):**

```javascript
(() => {
    console.log(`DB CONNECTED TWO`);
})();
```

**Type C — IIFE mein Argument Pass Karna:**

```javascript
((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('Hitesh'); // ← argument execution bracket mein
```

**Output (teeno saath chalao):**

```
DB CONNECTED ONE
DB CONNECTED TWO
DB CONNECTED TO Hitesh
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **IIFE** = function jo define hote hi turant execute ho jaaye
> - **Kyun?** → Global scope pollution rokne ke liye — apna safe scope banata hai
> - **Syntax:** `(function() { })();` — do brackets, pehla define karta hai, doosra execute karta hai
> - **`;` ZAROORI** — especially jab multiple IIFE ek file mein hon
> - **Named / Arrow / With Params** — teeno valid hain
> - **Use case:** DB connection, app startup logic

---
