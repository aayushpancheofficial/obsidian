

## title: Async JavaScript Fundamentals tags: [javascript, async, event-loop, chai-aur-code] source: "https://www.youtube.com/watch?v=zgt5oTD3rRc"

# Async JavaScript Fundamentals

> [!info] Source Chai aur #javascript series — Async JS fundamentals video ka detailed notes.

---

### 1️⃣ JS ka Default Behavior

JS interview me sabse pehle yahi puchte hain — JS default me kaise behave karti hai? Do pillars hain:

- **Synchronous** → Code hamesha **line-by-line (top se bottom)** hi execute hota hai. Jab tak pehla statement fully execute nahi hota, control agli line pe nahi jaata.
- **Single-Threaded** → JS ke paas kaam karne ke liye sirf **ek hi main thread** hota hai. Java jaisi languages ki tarah default multi-threading support nahi karti.

> [!tip] Magic Reality Check Single-threaded hone ke bawajood JS kabhi slow feel nahi hoti, kyunki akela JS engine (jaise Google V8) kabhi kaam nahi karta. Woh hamesha ek **Runtime Environment** (browser ya Node.js) ke andar rehke kaam karta hai, aur heavy/complex kaam usko delegate (outsource) kar deta hai.

---

### 2️⃣ Blocking vs Non-Blocking Code

Requirement ke hisaab se hum dono type ka code likhte hain — koi bhi acha ya bura nahi hota, sab **use-case** pe depend karta hai.

|Feature|Blocking Code|Non-Blocking Code|
|---|---|---|
|**Flow**|Main execution flow ko tab tak **rok (block)** deta hai jab tak pichla task complete na ho|Main flow ko kabhi nahi rokta, pichla task background me chalta rehta hai aur agla code turant execute ho jaata hai|
|**I/O Example**|`readFileSync` → jab tak file poori tarah read nahi hoti, neeche ka koi code run nahi hoga|`readFile` (async) → background me file read hoti rahegi, neeche ka code turant run ho jaayega|
|**Use Case**|**Database entry** → agar user ka DB me save hona zaroori hai (jaise registration), to blocking code likhna chahiye taaki response milne ke baad hi "Success" message dikhe|**UI/UX** → agar koi heavy animation ya image load ho rahi hai, to non-blocking code use karte hain taaki user baaki screen use kar sake|

---

### 3️⃣ JS Runtime Architecture ⚙️

Async JS ko samajhne ke liye in **4 bade pillars** ko samajhna zaroori hai:

#### A. JS Engine (Memory Heap & Call Stack)

Yeh main engine hai jahan `Call Stack` me **Global Execution Context** banta hai aur code line-by-line chalta hai.

#### B. Web APIs / Node APIs

JS engine khud se `DOM`, `setTimeout`, `setInterval`, ya `fetch` ko nahi jaanta — ye saari capabilities usko **Browser (Web APIs)** ya **Node.js** deta hai.

Jab engine ko `setTimeout` milta hai:

1. Woh usko turant Web API ke box me transfer kar deta hai
2. Web API usko **register callback** ke under rakh leta hai (jaise 2 sec tak time count karna)

#### C. Task Queue (Callback Queue)

Jaise hi Web API ka time poora hota hai (ya click event fire hoti hai), woh us callback function ko turant **Task Queue** me bhej deta hai.

> Task Queue **FIFO (First In, First Out)** rule pe kaam karta hai.

#### D. Event Loop 👑

Event loop ka ek hi kaam hai — **Call Stack** aur **Task Queue** pe continuously nazar rakhna.

- Jab **Call Stack completely empty** ho jaata hai, tab Event Loop Task Queue se pehla function utha ke Stack me daal deta hai, jahan woh execute hota hai.

#### E. Microtask Queue / Promise Queue (High Priority Queue) 🚀

Modern JS (ES6) me **`fetch()`** ya **`Promises`** ke callbacks ke liye ek special queue banayi gayi hai — **Microtask Queue**.

> [!warning] 🌟 Interview ka Secret Rule Microtask Queue ki priority Task Queue se **kaafi zyada** hoti hai. Event Loop hamesha pehle Microtask Queue ke saare promise callbacks ko Stack me bhejega, uske baad hi normal Task Queue (`setTimeout`) ka number aayega.

---

### 4️⃣ Tricky Interview Question: `setTimeout(..., 0)` 🧠

Agar declaration me time `0 milliseconds` set kar de, to execution order kya hoga?

```javascript
console.log("One");

setTimeout(function() {
    console.log("Two");
}, 0); // 👈 time zero (0) hai

console.log("Three");
```

**Exact Console Output:**

```bash
One
Three
Two
```

#### Output ka Logic (Step-by-Step):

1. Sabse pehle `console.log("One")` direct Call Stack me jaake turant **"One"** print kar deta hai.
2. Uske baad `setTimeout` Call Stack me aata hai. Engine ise turant **Web API** ko soump deta hai. Time `0` hone ki wajah se, Web API ise bina ruke turant **Task Queue** me bhej deta hai.
3. Lekin **rule ke hisaab se, Task Queue se koi bhi function tab tak Stack me nahi ja sakta jab tak main file ka saara code khatam na ho jaaye aur Call Stack empty na ho jaaye.**
4. Isliye, Stack pehle agli line `console.log("Three")` ko chalake **"Three"** print karta hai.
5. Ab jab main file ka kaam khatam ho gaya aur Stack empty ho gaya, tab Event Loop Task Queue se utha ke callback ko Stack me daalta hai, aur finally **"Two"** print hota hai.

---

### 📌 Quick Recap

- JS = **Synchronous + Single-Threaded**, lekin Runtime Environment ke saath milke async lagti hai
- **Blocking** = flow ruk jaata hai | **Non-Blocking** = flow chalta rehta hai
- Architecture: `JS Engine → Web/Node APIs → Task Queue → Event Loop → Microtask Queue`
- **Microtask Queue (Promises/fetch) > Task Queue (setTimeout)** — priority ke hisaab se
- `setTimeout(fn, 0)` bhi turant execute nahi hota — pehle poora synchronous code khatam hota hai

---

> [!question] Next Series ka agla coding video hai **"2 Projects with Async JS"** — uske notes bhi chahiye?