-
## title: Promise in JavaScript tags: [javascript, promise, async-await, fetch, chai-aur-code] source: "http://www.youtube.com/watch?v=NJwRQgsu1Q8"

# Promise in JavaScript

> [!info] Source Chai aur #javascript series — Async programming ki sabse important base: Promises ke notes.

---

### 1️⃣ Promise Kya Hai?

- **Definition:** `Promise` JS me ek special **object** hai jo kisi asynchronous operation ke future me hone wale **eventual completion (success) ya failure** aur uski final value ko darshata hai.
- **History:** ES6 (2015) se pehle JS me promise ka default support nahi tha. Us time developers external libraries jaise **Q** ya **Bluebird** use karke async code handle karte the. Baad me iske importance ko dekhte hue JS me natively include kar liya gaya.

#### 🔹 Promise ki 3 States

1. **Pending:** Starting state, jab operation abhi chal raha hai aur poora nahi hua
2. **Fulfilled:** Operation successfully poora ho chuka hai
3. **Rejected:** Operation kisi error ki wajah se fail ho chuka hai

---

### 2️⃣ Promise ka Creation aur Consumption

Ek promise ek callback function leta hai jiske do parameters hote hain: **`resolve`** aur **`reject`**:

- `resolve` ka direct connection **`.then()`** block se hota hai
- `reject` ka direct connection **`.catch()`** block se hota hai

#### 🛠️ Promise Creation ka Basic Syntax (Tareeka 1)

```javascript
// 1. Promise ka creation (variable me store karke)
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 1 complete');
        resolve(); // 👑 Ati-important: resolve call karna zaroori hai taaki .then() trigger ho
    }, 1000);
});

// 2. Promise ka consumption
promiseOne.then(function() {
    console.log('Promise 1 consumed');
});
```

**💻 Console Output:**

```bash
Async task 1 complete
Promise 1 consumed
```

#### 🛠️ Direct Consumption (Tareeka 2 — bina variable ke)

```javascript
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2 complete');
        resolve();
    }, 1000);
}).then(function() {
    console.log('Async 2 resolved');
});
```

---

### 3️⃣ Resolve ke Through Data Pass Karna

Database ya network se aane wala data (usually object `{}`) hum `resolve()` ke andar argument ki tarah pass karte hain, jo `.then()` ke parameter me milta hai:

```javascript
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // 🛠️ resolve ke andar object data pass kiya
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
});

promiseThree.then(function(user) { // 👈 'user' me woh object mila
    console.log(user);
});
```

**💻 Console Output:**

```json
{ username: 'Chai', email: 'chai@example.com' }
```

---

### 4️⃣ Chaining aur Error Handling (`.then().catch().finally()`) 🔗

Jab promise se milne wale data pe kai baar operation karna ho, to hum **Method Chaining** use karte hain. Pehle `.then()` se jo bhi value `return` hogi, woh exactly uske neeche wale `.then()` ko input ki tarah milegi.

#### ⚠️ Catch aur Finally ka Importance

- **`.catch()`:** Agar operation me koi rejection (error) aata hai, to catch block use gracefully handle karta hai aur app ko crash hone se bachata hai.
- **`.finally()`:** Yeh ek default block hai jo operation ke resolve ya reject dono situations me **hamesha execute hota hai**.

```javascript
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false; // 👈 Agar isse true kar de, to catch block chalega
        if (!error) {
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username; // 👑 Chaining: yeh return value agle .then ko milegi
})
.then((username) => {
    console.log(`Extracted Username: ${username}`);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
});
```

**💻 Console Output (jab error = false ho):**

```bash
{ username: 'hitesh', password: '123' }
Extracted Username: hitesh
The promise is either resolved or rejected
```

---

### 5️⃣ `async...await` se Promise Handling (Modern Syntax) 🚀

JS me promise consume karne ka ek aur modern tareeka hai `async...await`. Yeh code ko synchronous coding jaisa clean dikhata hai.

> [!warning] Important Warning `async...await` directly errors (rejections) ko handle nahi kar sakta. Agar promise reject ho jaata hai, to yeh error throw karta hai. Isliye graceful handling ke liye ise hamesha **`try...catch`** block ke andar likhna zaroori hai.

```javascript
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // 👈 Jaan-boojh kar true kiya taaki rejection check ho
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

// async function declaration
async function consumePromiseFive() {
    try { // 👑 Safety cover: try-catch block
        const response = await promiseFive; // 👈 'await' promise poora hone ka intezaar karta hai
        console.log(response);
    } catch (error) {
        console.log(`Gratefully Handled: ${error}`);
    }
}
consumePromiseFive();
```

**💻 Console Output:**

```bash
Gratefully Handled: ERROR: JS went wrong
```

---

### 6️⃣ `fetch()` ka Real World Example (Modern Network Requests) 🔥

#### Method A: `async...await` ke saath

> [!tip] Hidden Interview Fact String se JSON object me convert karna bhi time leta hai, isliye `response.json()` pe bhi `await` lagana zaroori hai!

```javascript
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // 🌟 response.json() bhi async hai — await zaroori hai
        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers();
```

#### Method B: `.then()` Chaining ke saath (Cleanest Syntax 💎)

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json(); // 👈 JSON conversion return kiya
})
.then((data) => { // 👈 Yahan parse hua actual data mila
    console.log(`User 1 Name via Then: ${data[0].name}`);
})
.catch((error) => console.log(error));
```

#### 💻 Exact Live Network Output

```bash
Leanne Graham
User 1 Name via Then: Leanne Graham
```

---

### 📌 Quick Recap

- Promise ki 3 states: **Pending → Fulfilled / Rejected**
- `resolve` → `.then()` | `reject` → `.catch()`
- `resolve()` me data pass karo, `.then(data => ...)` me receive hoga
- Chaining: ek `.then()` ka `return` agle `.then()` ka input banta hai
- `.finally()` hamesha chalega — resolve ho ya reject
- `async...await` = clean syntax, lekin **hamesha `try...catch`** ke saath use karo
- `fetch()` ke response ko JSON banane ke liye `response.json()` pe bhi `await` lagana padta hai
- `.then()` chaining fetch ke liye sabse clean syntax hai

---

> [!question] Next Series ka agla aur is internal architecture ko samjhane wala final advance network video hai **"Now you know fetch in javascript"** — uske notes bhi chahiye?