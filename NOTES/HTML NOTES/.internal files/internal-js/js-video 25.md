# 🟨 JavaScript — Execution Context & Call Stack

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=ByhtOgF6uYM)

#javascript #execution-context #call-stack #revision

---

### 1️⃣ Execution Context (EC) Kya Hota Hai?

Jab bhi JS engine koi code file milti hai → sabse pehle ek **Execution Context** banta hai.

- JS ek **Single-Threaded** aur **Synchronous** language hai
- Sabse pehle hamesha **Global Execution Context (GEC)** banta hai — code chahe kitna bhi chota ho
- GEC ko JS ke special variable **`this`** ke andar rakha jaata hai

> [!question] Interview Tip
> 
> - **Browser mein** → `this` = `Window` object
> - **Node.js mein** → `this` = `{}` (khali object)

**3 Types of Execution Context:**

|Type|Kab banta hai|
|---|---|
|**Global EC**|Har baar — file shuru hote hi|
|**Function EC**|Jab bhi koi function call hota hai|
|**Eval EC**|`eval()` use hone par (mongoose docs mein dikha)|

---

### 2️⃣ Code Execute Kaise Hota Hai? — 2 Phases

Har execution context 2 phases se guzarta hai:

|Phase 1: Memory Creation|Phase 2: Code Execution|
|---|---|
|"Creation Phase" / "Memory Phase"|Actual logic, processing, value assignment|
|Variables ko **space** milti hai → value = `undefined`|Variables ko **actual value** milti hai (10, 5, etc.)|
|Functions ko **poori definition** milti hai|Function call hone par → naya sandbox (EC) banta hai|

---

### 3️⃣ Step-by-Step Visualization — Code Example

```javascript
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

**🔹 Phase 1 — Memory Creation:**

|Variable|Value|
|---|---|
|`val1`|`undefined`|
|`val2`|`undefined`|
|`addNum`|`function { ...poori definition... }`|
|`result1`|`undefined`|
|`result2`|`undefined`|

**🔹 Phase 2 — Code Execution:**

- `val1` → `10`, `val2` → `5`
- `addNum` definition → kuch nahi hoga (sirf definition thi)
- `result1 = addNum(val1, val2)` → **function call hua → naya sandbox bana**

---

### 4️⃣ Function Ka Naya Sandbox (New Execution Context)

Jab bhi function invoke hota hai → apna **brand new Execution Context** (sandbox) banta hai. Iske andar phir se wahi **2 phases** chalte hain:

**`addNum(val1, val2)` ke andar:**

_Memory Phase:_ `num1` → `undefined` | `num2` → `undefined` | `total` → `undefined`

_Execution Phase:_ `num1` → `10` | `num2` → `5` | `total` → `15` `return total` → value `15` parent (Global EC) ko bhejta hai → `result1 = 15`

> [!danger] Important Rule Function ka kaam khatam hote hi (return ke baad) uska **naya banaya sandbox poori tarah DELETE** ho jaata hai.

- `result2 = addNum(10, 2)` → ye poori process **dobara** chalegi → `result2 = 12`

---

### 5️⃣ Call Stack — Track Kaun Sa Function Chal Raha Hai

Call Stack JS engine ka wo memory structure hai jo track karta hai ki **abhi kaun sa function execute ho raha hai.**

- **LIFO rule** (Last In, First Out) → jo baad mein aaya, woh pehle bahar jaayega
- Stack ke **sabse neeche hamesha GEC** hota hai

**Nested Functions Example:**

```javascript
function one() { console.log("one"); two(); }
function two() { console.log("two"); three(); }
function three() { console.log("three"); }
one();
```

**Call Stack ka live behaviour:**

```
Start:       [ Global ]
one() call:  [ one, Global ]
two() call:  [ two, one, Global ]
three() call:[ three, two, one, Global ]
three() done:[ two, one, Global ]
two() done:  [ one, Global ]
one() done:  [ Global ]
```

**Console Output:**

```
one
two
three
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **Execution Context** = JS code chalane ka container
> - **GEC** hamesha pehle banta hai → `this` mein store hota hai
> - **2 Phases:** Memory (undefined milta hai) → Execution (actual value milti hai)
> - **Function call** = naya sandbox (EC) banta hai, kaam hone ke baad **delete** ho jaata hai
> - **Call Stack** = LIFO structure → track karta hai kaun chal raha hai
> - Stack ke neeche hamesha **Global EC**, upar nayi calls stack hoti jaati hain

---

#### 🔗 Related

- [[JS_IIFE|IIFE]]
- [[JS_Nested_Scope_Hoisting|Nested Scope & Hoisting]]
- [[JS_Scope_Global_Local|Global & Local Scope]]
- [[JS_This_ArrowFunctions|`this` & Arrow Functions]]