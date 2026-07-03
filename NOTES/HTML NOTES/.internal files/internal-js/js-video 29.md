# 🟨 JavaScript — Higher Order Array Loops

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=M0YImBHQsWU)

#javascript #loops #arrays #revision

---

### 1️⃣ `for...of` — Array/String Iteration

Values seedhi milti hain — koi index, length, ya `i++` ki zarurat nahi.

**Array par:**

```javascript
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num); // 1 2 3 4 5
}
```

**String par:**

```javascript
const greetings = "Hello";
for (const greet of greetings) {
    console.log(`Each char: ${greet}`);
}
// H  e  l  l  o
```

> [!warning] Object par `for...of` mat lagao Plain JS objects `{}` iterable **nahi** hote → `TypeError: myObject is not iterable`

---

### 2️⃣ Map — Special Key-Value Structure

`Map` ek special structure hai jo key-value pairs store karta hai.

> [!tip] Object se 2 fark — Interview Answer
> 
> 1. **Unique keys** — duplicate keys ignore ho jaati hain
> 2. **Insertion order** — jis order mein daala, usi order mein rehta hai

```javascript
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States");
map.set('IN', "India"); // ← duplicate, ignore hoga

// for...of + destructuring se iterate karo
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}
// IN :- India
// USA :- United States
```

---

### 3️⃣ `for...in` — Object Key Iteration

Objects ki **keys** iterate karne ke liye `for...in` use karo.

**Object par:**

```javascript
const myObject = { js: 'javascript', cpp: 'C++', rb: 'ruby' };

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
```

**Array par `for...in` lagao toh — indexes milte hain values nahi:**

```javascript
const programming = ["js", "rb", "py"];
for (const key in programming) {
    console.log(key); // 0  1  2  (values nahi, indexes!)
}
```

---

### 4️⃣ `for...of` vs `for...in` — Quick Comparison

||`for...of`|`for...in`|
|---|---|---|
|**Array**|✅ Values milti hain|⚠️ Indexes milte hain|
|**Object**|❌ Error|✅ Keys milti hain|
|**String**|✅ Characters milte hain|⚠️ Index milta hai|
|**Map**|✅ `[key, value]` pairs|❌ Kaam nahi karta|

---

### 5️⃣ `forEach` — Array Ka King 👑

`forEach` ek **Higher-Order Function** hai jo array ka default method hai. Iske andar ek **callback function** pass karta hai — callback ka naam nahi hota.

**3 tarike se likhte hain:**

```javascript
const coding = ["js", "ruby", "java"];

// Tarika 1: Regular function
coding.forEach(function(item) { console.log(item); });

// Tarika 2: Arrow function (sabse zyada use) — item, index, poora array
coding.forEach((item, index, arr) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
});

// Tarika 3: Bahar se function reference (call nahi karo — sirf naam do)
function printMe(item) { console.log(item); }
coding.forEach(printMe); // ✅ | coding.forEach(printMe()) ❌
```

**Tarika 2 ka output:**

```
Item: js, Index: 0, Array: js,ruby,java
Item: ruby, Index: 1, Array: js,ruby,java
Item: java, Index: 2, Array: js,ruby,java
```

---

### 6️⃣ Practical — Array of Objects (DB-Style Data) 🔥

Real-world mein API se **Array of Objects** aata hai — `forEach` se ek-ek object ka data nikalo:

```javascript
const myCoding = [
    { languageName: "javascript", languageFile: "js" },
    { languageName: "java",       languageFile: "java" },
    { languageName: "python",     languageFile: "py" }
];

myCoding.forEach((item) => {
    console.log(`Language: ${item.languageName} -> Extension: .${item.languageFile}`);
});
// Language: javascript -> Extension: .js
// Language: java -> Extension: .java
// Language: python -> Extension: .py
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **`for...of`** → values seedhi milti hain (array, string, map) | object par error
> - **`for...in`** → object ki keys milti hain | array par indexes milte hain
> - **`Map`** → unique keys + insertion order maintain
> - **`forEach`** → array ka built-in method | callback pass karo | `(item, index, arr)` teen params
> - **Callback reference:** `forEach(fn)` ✅ | `forEach(fn())` ❌
> - **Array of objects** → `forEach` se `item.property` se data nikalo

---

#### 🔗 Related

- [[JS_While_DoWhile|While & Do-While Loop]]
- [[JS_ForLoop_Break_Continue|For Loop, Break & Continue]]
- [[JS_Objects_Part2|JS Objects Part 2 — Object Methods]]