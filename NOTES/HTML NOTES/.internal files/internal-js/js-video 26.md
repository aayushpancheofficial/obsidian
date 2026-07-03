# 🟨 JavaScript — Control Flow

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=0P_YvC6Gg0c)

#javascript #control-flow #revision

---

### 1️⃣ Control Flow Kya Hai?

Default mein JS code upar se neeche **poora** execute hota hai. Lekin real projects mein **conditions ke basis par** decide karna hota hai ki kaunsa code chalega aur kaunsa nahi.

> [!example] Real Use Case User logged in hai → dashboard dikhao | nahi hai → logout button dikhao

Isi ko **Control Flow / Logic Flow** kehte hain.

---

### 2️⃣ `if` / `else` / `else if`

```javascript
if (condition) {
    // condition TRUE ho toh ye chale
} else {
    // condition FALSE ho toh ye chale
}
```

**Comparison Operators:**

|Operator|Matlab|
|---|---|
|`<`, `>`|Less than, Greater than|
|`<=`, `>=`|Less/Greater than or equal to|
|`==`|Loose equality — sirf **value** check|
|`!=`|Not equal|
|`===`|**Strict equality** — value + **data type** dono check ⭐|

```javascript
if (2 == "2")  { console.log("== Executed") }   // ✅ chala
if (2 === "2") { console.log("=== Executed") }  // ❌ nahi chala — type alag hai

// Output:
// == Executed
// === Failed due to strict type check
```

> [!tip] Interview Tip `==` vs `===` — hamesha `===` use karo. `==` type conversion karta hai, `===` nahi karta.

---

### 3️⃣ Scope Inside `if-else`

`if-else` ke `{}` ek **naya block scope** banate hain:

```javascript
const score = 200;
if (score > 100) {
    let power = "fly";
    console.log(`Power: ${power}`); // ✅ andar chala
}
// console.log(power); // ❌ Error — let block ke bahar nahi jaata
```

> [!warning] `var` mat use karo `var` block scope tod ke bahar aa jaata hai → anti-pattern

---

### 4️⃣ Logical Operators — Multiple Conditions

**`&&` (AND) — Sabhi conditions true honi chahiye:**

```javascript
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy course"); // ✅ Output
}
```

**`||` (OR) — Koi ek bhi true ho toh chalega:**

```javascript
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // ✅ Output — email true tha
}
```

---

### 5️⃣ Switch Case

Ek variable ko bahut saari values se compare karna ho → `switch` zyada clean hota hai.

```javascript
const month = "March";

switch (month) {
    case "Jan": console.log("January"); break;
    case "Feb": console.log("February"); break;
    case "March": console.log("March matched"); break; // ← break zaroori!
    case "April": console.log("April"); break;
    default: console.log("Default case"); break;
}
// Output: March matched
```

> [!danger] `break` bhoolna = Interview Mistake `break` na lagao → JS match ke baad neeche ke **saare cases bhi** run kar deta hai (waterfall effect)

---

### 6️⃣ Truthy & Falsy Values

JS mein kuch values bina compare kiye hi `true` ya `false` maan li jaati hain.

**❌ Falsy Values (ye 8 hi hain — yaad karo):**

`false` | `0` | `-0` | `0n` (BigInt) | `""` (empty string) | `null` | `undefined` | `NaN`

**✅ Truthy Values — Jo surprise karte hain:**

|Value|Truthy kyun?|
|---|---|
|`"0"`|String hai, empty nahi|
|`'false'`|String hai|
|`" "`|Space wali string — empty nahi|
|`[]`|Khali array — truthy!|
|`{}`|Khali object — truthy!|
|`function(){}`|Khali function — truthy!|

**Safe Check — Khali Array aur Object:**

```javascript
// Khali Array check
const userEmail = [];
if (userEmail.length === 0) {
    console.log("Array is empty"); // ✅
}

// Khali Object check
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // ✅
}
```

---

### 7️⃣ Nullish Coalescing Operator `??`

Sirf **`null`** ya **`undefined`** aane par backup value deta hai — baaki sab values ke liye kuch nahi karta.

```javascript
let val1;

val1 = 5 ?? 10;          // 5   (pehli value valid thi)
val1 = null ?? 10;       // 10  (null mila → backup le liya)
val1 = undefined ?? 15;  // 15  (undefined mila → backup)
val1 = null ?? 20 ?? 30; // 20  (pehli valid value milte hi ruk jaata hai)
```

> [!tip] `??` vs `||` fark `||` → koi bhi falsy value par backup deta hai (0, "", false bhi) `??` → sirf `null` aur `undefined` par backup deta hai

---

### 8️⃣ Ternary Operator

`if-else` ka ek-line shorthand:

```
condition ? true statement : false statement
```

```javascript
const iceTeaPrice = 100;
iceTeaPrice <= 80
    ? console.log("Less than 80")
    : console.log("More than 80");
// Output: More than 80
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **`==`** → value only | **`===`** → value + type (hamesha ye use karo)
> - **`&&`** → sabhi true hone chahiye | **`||`** → ek bhi true ho
> - **`switch`** → `break` zaroori, warna waterfall!
> - **Falsy:** `false, 0, "", null, undefined, NaN` (8 values)
> - **Truthy surprise:** `[], {}, "0", " ", 'false'`
> - **`??`** → sirf null/undefined pe fallback | `||` → kisi bhi falsy pe
> - **Ternary:** `condition ? true : false`

---

#### 🔗 Related

- [[JS_Execution_Context_CallStack|Execution Context & Call Stack]]
- [[JS_Scope_Global_Local|Global & Local Scope]]
- [[JS_Objects_Part2|JS Objects Part 2 — hasOwnProperty]]