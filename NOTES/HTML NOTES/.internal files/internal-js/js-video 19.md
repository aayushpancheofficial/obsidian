# 🟨 JavaScript Functions & Parameters

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=Bn56WahG_t0)

#javascript #functions #revision

---

### 1️⃣ Function Kya Hota Hai?

Function apke likhe hue code (chahe 5 line ho ya 20) ko ek **package** mein band karne ka tarika hai. Us package ko program mein **jitni baar chahiye, wahan use kar sakte ho** — code dobara likhne ki zarurat nahi.

```javascript
// Function Declare karna (Definition)
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
}
```

|Likha kya|Matlab kya|
|---|---|
|`sayMyName`|Sirf **reference** — function wahan hai|
|`sayMyName()`|**Execution** — function chal gaya|

---

### 2️⃣ Parameter vs Argument — Confusion Door Karo

```javascript
function addTwoNumbers(number1, number2) { // ← ye PARAMETER hain
    console.log(number1 + number2);
}

addTwoNumbers(3, 4); // ← ye ARGUMENT hain
```

- **Parameter** → Function **banate waqt** bracket ke andar jo naam likhte ho
- **Argument** → Function **call karte waqt** jo actual value pass karte ho

---

### 3️⃣ `return` vs `console.log()` — Sabse Badi Galti

> [!warning] Beginner Most Common Mistake `console.log()` aur `return` ek jaisa **nahi** hai!

||Kya karta hai|
|---|---|
|`console.log()`|Sirf screen par **print** karta hai, kuch bahar nahi jaata|
|`return`|Value ko function se **bahar bhejta hai**, variable mein store ho sakti hai|

```javascript
function addTwoNumbers(number1, number2) {
    return number1 + number2; // ✅ value bahar aayi
}

const result = addTwoNumbers(3, 5);
console.log(result); // 8
```

> [!danger] Unreachable Code `return` ke **baad** jo bhi code likho — kabhi execute **nahi** hoga

```javascript
function demo() {
    return "done";
    console.log("ye kabhi nahi chalega"); // ❌ dead code
}
```

---

### 4️⃣ Undefined & Default Parameters

#### Jab Argument Pass Na Karo

Agar argument pass nahi kiya → JS automatically us value ko **`undefined`** set karta hai (`null` nahi!).

```javascript
function loginUserMessage(username) {
    if (!username) { // !username matlab username === undefined
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
```

#### Default Parameter — Crash se Bacho

Agar chahte ho ki argument na aaye phir bhi function kaam kare → **default value** do:

```javascript
function loginUserMessage(username = "sam") { // "sam" default hai
    return `${username} just logged in`;
}

loginUserMessage();          // sam just logged in
loginUserMessage("hitesh");  // hitesh just logged in (default override ho gaya)
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **Function** → code ka reusable package
> - **Reference** `sayMyName` vs **Execution** `sayMyName()`
> - **Parameter** → definition mein | **Argument** → call mein
> - **`return`** → value bahar bhejo | **`console.log`** → sirf screen par dikhao
> - **`return` ke baad** → code never runs (Unreachable Code)
> - **Argument missing** → value `undefined` hoti hai, `null` nahi
> - **Default Parameter** → `function fn(x = "default")` → crash nahi hoga

---

