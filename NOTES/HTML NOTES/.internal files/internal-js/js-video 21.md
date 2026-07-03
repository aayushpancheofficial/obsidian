# 🟨 JavaScript — Global & Local Scope

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=cHHU0jXfjKY)

#javascript #scope #revision

---

### 1️⃣ Scope Kya Hota Hai?

**Scope** decide karta hai ki koi variable, function, ya object code ke **kis hisse mein access ho sakta hai** aur kahan nahi.

> [!tip] Pehchaan ka shortcut JS mein `{}` (curly braces) **scope ka boundary** banate hain — jab bhi `{}` aaye function, `if-else`, ya loop ke saath, ek naya scope banta hai.

---

### 2️⃣ Global vs Block (Local) Scope

| Scope                   | Kahan hota hai                         | Access kahan hoga           |
| ----------------------- | -------------------------------------- | --------------------------- |
| **Global Scope**        | `{}` ke **bahar**                      | Poore code mein — andar bhi |
| **Block / Local Scope** | `{}` ke **andar** (if, function, loop) | Sirf us block ke andar tak  |

---

### 3️⃣ `let` / `const` vs `var` — Scope ki Asli Kahani

`var` ki jagah `let` aur `const` laane ki **main wajah** hi scope ki problem thi.

```javascript
let a = 300; // Global scope

if (true) {
    let a = 10;   // Block scope — bahar wale 'a' se alag
    const b = 20; // Block scope
    var c = 30;   // ⚠️ var — block ko tod ke bahar aa jaata hai
}

console.log(a); // 300 ✅ (bahar wala 'a' safe raha)
console.log(b); // ❌ Error: b is not defined
console.log(c); // 30 ✅ (var block se leak ho gaya!)
```

#### `var` Se Kya Problems Aati Hain?

> [!danger] var use mat karo (Modern JS)
> 
> - **Variable leak:** `var` block scope follow nahi karta — andar declare karo, bahar aa jaata hai
> - **Accidental override:** Koi doosra programmer usi naam ka variable andar banaye → global value badal jaayegi
> - **Debugging nightmare:** Bade projects mein `var` ke wajah se strange bugs aate hain jo pakad mein nahi aate

**Modern JS mein `var` poori tarah avoid karo — hamesha `let` ya `const` use karo.**

---

### 4️⃣ Interview Tip — Browser vs Node.js Global Scope

> [!question] Interview mein puch sakte hain **Browser** ka global scope aur **Node.js** ka global scope **alag hote hain.**
> 
> - Browser → `window` object global scope hai
> - Node.js → `global` object global scope hai
> 
> (Iske baare mein detail DOM aur `this` keyword wale video mein aayega)

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **Scope** → variable kahan accessible hai, kahan nahi
> - **`{}` = new scope** — function, if-else, loop sabke saath
> - **Global** → `{}` ke bahar | **Block/Local** → `{}` ke andar
> - **`let` / `const`** → block scope follow karte hain ✅
> - **`var`** → block scope tod ke bahar aa jaata hai ❌ — avoid karo
> - **Browser global ≠ Node.js global**

---

#### 🔗 Related

- [[JS_Functions_Parameters|Functions & Parameters]]
- [[JS_Functions_Objects_Arrays|Functions with Objects & Arrays]]