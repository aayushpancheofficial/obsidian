# 🟨 JavaScript — `this` Keyword & Arrow Functions

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=9ksqBa8_txM)


---

### 1️⃣ `this` Keyword — Current Context

`this` = **jo abhi ka context hai** (uss scope mein available variables/values).

Object ke andar kisi property ko **usi object ke method mein** access karna ho → `this` use karo.

```javascript
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // this = user object
        console.log(this); // poora user object print hoga
    }
}

user.welcomeMessage(); // hitesh, welcome to website
user.username = "sam"; // context badal diya
user.welcomeMessage(); // sam, welcome to website
```

---

### 2️⃣ Global Context — Browser vs Node.js

> [!question] Interview mein puchha jaata hai Agar `{}` ya object ke **bahar** (global scope mein) `console.log(this)` likho toh kya aayega?

|Environment|`this` ka Value|
|---|---|
|**Node.js**|`{}` (khali object — koi context nahi)|
|**Browser**|`Window` object (browser ka sabse bada global object)|

---

### 3️⃣ Regular Function ke Andar `this`

```javascript
function chai() {
    let username = "hitesh";
    console.log(this.username); // undefined
}
chai();
```

> [!warning] Dhyan rakho Regular function ke andar `this` likho → ek bada global object milta hai, **lekin** `this.variableName` se function ke local variables access **nahi** ho sakte. `this` sirf **objects ke andar** property access ke liye kaam karta hai.

---

### 4️⃣ Arrow Functions (ES6 — 2015)

`function` keyword hatao, `=>` lagao — yehi arrow function hai.

```javascript
// Regular Function Expression
const chai = function () { ... }

// Arrow Function
const chai = () => {
    console.log(this); // Arrow function mein this = {} (khali object)
}
```

> [!tip] Arrow Function mein `this` Arrow function ka **apna `this`** nahi hota — woh enclosing scope ka `this` inherit karta hai.

---

### 5️⃣ Explicit vs Implicit Return

Arrow functions mein return likhne ke **2 tarike:**

#### ✅ Explicit Return — `{}` ke saath `return` zaroori

```javascript
const addTwo = (num1, num2) => {
    return num1 + num2; // return likhna padega
}
```

#### ✅ Implicit Return — `return` ki zarurat nahi

```javascript
// Tarika 1: Seedha ek line
const addTwo = (num1, num2) => num1 + num2;

// Tarika 2: () mein wrap (React mein sabse zyada use hota hai)
const addTwo = (num1, num2) => ( num1 + num2 );
```

> [!tip] Sone ka Rule — Yaad karo ✨
> 
> - **`{}`** (curly braces) aaya → **`return` likhna padega**
> - **`()`** (parentheses) aaya → **`return` nahi likhna**

---

### 6️⃣ Object Implicit Return — Special Case ⚠️

Implicit return mein agar **object** `{}` return karna ho → use `()` mein wrap karo, warna `undefined` milega.

```javascript
// ❌ Galat — undefined dega
const objectReturn = () => { username: "hitesh" };

// ✅ Sahi — object wrap in ()
const objectReturn = () => ({ username: "hitesh" });
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **`this`** = current context (object ke andar uski properties access ke liye)
> - **Global `this`** → Node.js: `{}` | Browser: `Window`
> - **Regular function `this`** → local variables `this.x` se access nahi hote
> - **Arrow function** → `function` keyword ki jagah `=>` | apna `this` nahi hota
> - **Explicit return** → `{}` + `return` keyword zaroori
> - **Implicit return** → `()` mein likho, `return` apne aap
> - **Object return** → `() => ({ key: value })` — `()` mein wrap karna zaroori

---

#### 🔗 Related

- [[JS_Nested_Scope_Hoisting|Nested Scope & Mini Hoisting]]
- [[JS_Scope_Global_Local|Global & Local Scope]]
- [[JS_Objects_Part1|JavaScript Objects Part 1]]